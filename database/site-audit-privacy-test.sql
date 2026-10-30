-- Synthetic fixtures only; never select, moderate or modify real member records.
begin;
insert into auth.users(id,aud,role,email,email_confirmed_at) values
('29000000-0000-4000-8000-000000000001','authenticated','authenticated','audit-a@example.invalid',now()),
('29000000-0000-4000-8000-000000000002','authenticated','authenticated','audit-b@example.invalid',now()),
('29000000-0000-4000-8000-000000000003','authenticated','authenticated','audit-c@example.invalid',now());
insert into hub_private.moderators(user_id) values('29000000-0000-4000-8000-000000000003');
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"29000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
insert into public.member_profiles(user_id,display_name) values('29000000-0000-4000-8000-000000000001','Audit A');
do $$begin
 perform public.community_api('profile','{"display_name":"Audit A","listed":true,"messages_enabled":true,"rules_accepted":true}');
 begin perform public.community_api('moderation');raise exception 'FAIL nonmoderator access';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
end$$;
select set_config('test.post',(public.community_api('post','{"category":"Beta Feedback","title":"Synthetic audit only","body":"Rollback fixture."}')->>'id'),true);
select set_config('request.jwt.claims','{"sub":"29000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
do $$begin
 if exists(select 1 from public.member_profiles where user_id='29000000-0000-4000-8000-000000000001') then raise exception 'FAIL foreign profile read';end if;
 begin insert into public.member_profiles(user_id,display_name) values('29000000-0000-4000-8000-000000000001','Foreign');raise exception 'FAIL foreign profile write';exception when insufficient_privilege then null;end;
 perform public.community_api('profile','{"display_name":"Audit B","listed":true,"messages_enabled":false,"rules_accepted":true}');
end$$;
select set_config('request.jwt.claims','{"sub":"29000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
do $$begin
 begin perform public.community_api('request','{"user_id":"29000000-0000-4000-8000-000000000002"}');raise exception 'FAIL recipient opted out';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
end$$;
select set_config('request.jwt.claims','{"sub":"29000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
do $$begin perform public.community_api('profile','{"display_name":"Audit B","listed":true,"messages_enabled":true,"rules_accepted":true}');end$$;
select public.community_api('post','{"category":"Beta Feedback","title":"Synthetic request visibility","body":"Rollback-only public contribution."}');
select set_config('request.jwt.claims','{"sub":"29000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
select set_config('test.thread',(public.community_api('request','{"user_id":"29000000-0000-4000-8000-000000000002"}')->>'id'),true);
do $$begin
 begin perform public.community_api('send',jsonb_build_object('thread_id',current_setting('test.thread'),'body','Pending'));raise exception 'FAIL pending send';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
end$$;
select set_config('request.jwt.claims','{"sub":"29000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
do $$begin
 perform public.community_api('respond',jsonb_build_object('thread_id',current_setting('test.thread'),'status','accepted'));
 perform public.community_api('send',jsonb_build_object('thread_id',current_setting('test.thread'),'body','Synthetic only'));
end$$;
select set_config('request.jwt.claims','{"sub":"29000000-0000-4000-8000-000000000003","role":"authenticated"}',true);
do $$begin
 perform public.community_api('profile','{"display_name":"Audit C","rules_accepted":true}');
 begin perform public.community_api('messages',jsonb_build_object('thread_id',current_setting('test.thread')));raise exception 'FAIL moderator arbitrary inbox';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
end$$;
select set_config('request.jwt.claims','{"sub":"29000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
do $$begin perform public.community_api('block','{"user_id":"29000000-0000-4000-8000-000000000001"}');end$$;
select set_config('request.jwt.claims','{"sub":"29000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
do $$begin
 begin perform public.community_api('send',jsonb_build_object('thread_id',current_setting('test.thread'),'body','Blocked'));raise exception 'FAIL blocked send';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
 if jsonb_array_length(public.community_api('messages',jsonb_build_object('thread_id',current_setting('test.thread'))))<>1 then raise exception 'FAIL participant history';end if;
end$$;
select set_config('request.jwt.claims','{"sub":"29000000-0000-4000-8000-000000000003","role":"authenticated"}',true);
do $$begin
 perform public.community_api('moderate',jsonb_build_object('kind','post','id',current_setting('test.post'),'hidden',true));
 perform public.community_api('moderate','{"kind":"member","id":"29000000-0000-4000-8000-000000000002","suspended":true}');
end$$;
reset role;
do $$begin
 if not exists(select 1 from hub_private.posts where id=current_setting('test.post')::uuid and hidden) then raise exception 'FAIL hide';end if;
end$$;
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"29000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
do $$begin
 begin perform public.community_api('state');raise exception 'FAIL suspended access';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
end$$;
select set_config('request.jwt.claims','{"sub":"29000000-0000-4000-8000-000000000003","role":"authenticated"}',true);
do $$begin
 perform public.community_api('moderate',jsonb_build_object('kind','post','id',current_setting('test.post'),'hidden',false));
 perform public.community_api('moderate','{"kind":"member","id":"29000000-0000-4000-8000-000000000002","suspended":false}');
end$$;
reset role;
do $$begin
 if not exists(select 1 from hub_private.posts where id=current_setting('test.post')::uuid and not hidden) then raise exception 'FAIL restore post';end if;
 if not exists(select 1 from hub_private.members where user_id='29000000-0000-4000-8000-000000000002' and not suspended) then raise exception 'FAIL restore member';end if;
end$$;
rollback;
select 'PASS: owner isolation, opt-in, accepted messaging, moderator inbox boundary, block enforcement, history, hiding/restoring and suspension/restoration; all synthetic fixtures rolled back.' as result;
