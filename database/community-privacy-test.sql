-- This legacy fixture assumes an otherwise empty Community. For the active beta,
-- use site-audit-privacy-test.sql, which targets only its own synthetic IDs.
-- Disposable synthetic members only. Every row and privilege change rolls back.
begin;
insert into auth.users(id,aud,role,email,email_confirmed_at) values
('10000000-0000-4000-8000-000000000001','authenticated','authenticated','community-a@example.invalid',now()),
('10000000-0000-4000-8000-000000000002','authenticated','authenticated','community-b@example.invalid',now()),
('10000000-0000-4000-8000-000000000003','authenticated','authenticated','community-c@example.invalid',now());
-- This moderator exists only inside this rollback transaction to exercise the moderation branch.
insert into hub_private.moderators(user_id) values('10000000-0000-4000-8000-000000000003');
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
do $$begin
 begin perform 1 from hub_private.members;raise exception 'FAIL direct table access allowed';exception when insufficient_privilege then null;end;
 begin perform public.community_api('moderation');raise exception 'FAIL nonmoderator allowed';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
end$$;
select public.community_api('profile','{"display_name":"Synthetic A","listed":true,"messages_enabled":true,"rules_accepted":true}');
select set_config('test.post',(public.community_api('post','{"category":"Beta Feedback","title":"Synthetic privacy test","body":"Disposable test, rolled back."}')->>'id'),true);
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
select public.community_api('profile','{"display_name":"Synthetic B","listed":true,"messages_enabled":false,"rules_accepted":true}');
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
do $$begin
 begin perform public.community_api('request','{"user_id":"10000000-0000-4000-8000-000000000002"}');raise exception 'FAIL opted-out recipient received request';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
end$$;
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
select public.community_api('profile','{"display_name":"Synthetic B","listed":true,"messages_enabled":true,"rules_accepted":true}');
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
select set_config('test.thread',(public.community_api('request','{"user_id":"10000000-0000-4000-8000-000000000002"}')->>'id'),true);
do $$declare p jsonb:=jsonb_build_object('thread_id',current_setting('test.thread'),'body','Must not send yet');begin
 begin perform public.community_api('send',p);raise exception 'FAIL sent before acceptance';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
 begin perform public.community_api('respond',p||'{"status":"accepted"}');raise exception 'FAIL requester accepted own request';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
end$$;
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
select public.community_api('respond',jsonb_build_object('thread_id',current_setting('test.thread'),'status','accepted'));
select public.community_api('send',jsonb_build_object('thread_id',current_setting('test.thread'),'body','Private synthetic message'));
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
do $$declare msgs jsonb;begin
 msgs:=public.community_api('messages',jsonb_build_object('thread_id',current_setting('test.thread')));
 if jsonb_array_length(msgs)<>1 then raise exception 'FAIL participant cannot read';end if;
 perform public.community_api('report',jsonb_build_object('kind','message','id',msgs->0->>'id','reason','Synthetic report for rollback test'));
end$$;
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000003","role":"authenticated"}',true);
select public.community_api('profile','{"display_name":"Synthetic C","rules_accepted":true}');
do $$declare reports jsonb;begin
 if jsonb_array_length(public.community_api('inbox'))<>0 then raise exception 'FAIL third party sees inbox';end if;
 begin perform public.community_api('messages',jsonb_build_object('thread_id',current_setting('test.thread')));raise exception 'FAIL moderator sees unshared inbox';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
 reports:=public.community_api('moderation');
 if jsonb_array_length(reports)<>1 or reports->0->>'snapshot'<>'Private synthetic message' then raise exception 'FAIL report scope';end if;
 perform public.community_api('moderate',jsonb_build_object('kind','post','id',current_setting('test.post'),'hidden',true));
 if jsonb_array_length(public.community_api('posts'))<>0 then raise exception 'FAIL hidden post visible';end if;
 perform public.community_api('moderate','{"kind":"member","id":"10000000-0000-4000-8000-000000000002","suspended":true}');
end$$;
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
do $$begin
 begin perform public.community_api('state');raise exception 'FAIL suspended member allowed';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
end$$;
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000003","role":"authenticated"}',true);
select public.community_api('moderate','{"kind":"member","id":"10000000-0000-4000-8000-000000000002","suspended":false}');
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
select public.community_api('block','{"user_id":"10000000-0000-4000-8000-000000000001"}');
select set_config('request.jwt.claims','{"sub":"10000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
do $$begin
 begin perform public.community_api('send',jsonb_build_object('thread_id',current_setting('test.thread'),'body','Blocked message'));raise exception 'FAIL send after block';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
 if jsonb_array_length(public.community_api('directory'))<>0 then raise exception 'FAIL blocked member in directory';end if;
 if jsonb_array_length(public.community_api('messages',jsonb_build_object('thread_id',current_setting('test.thread'))))<>1 then raise exception 'FAIL block erased existing history';end if;
end$$;
select set_config('request.jwt.claims','{}',true);
do $$begin
 begin perform public.community_api('state');raise exception 'FAIL missing identity allowed';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
end$$;
reset role;
set local role anon;
do $$begin
 begin perform public.community_api('state');raise exception 'FAIL anon RPC access';exception when insufficient_privilege then null;end;
end$$;
reset role;
rollback;
select 'PASS: direct table denial; moderator role checks; opt-in; pending request restrictions; recipient acceptance; participant privacy; reported-message scope; hiding; suspension; blocking; history retention; missing-identity denial; anonymous denial. All synthetic data rolled back.' as result;
