-- Synthetic metadata only. Never reads real messages/profiles. Every fixture rolls back.
begin;
insert into auth.users(id,aud,role,email,email_confirmed_at)
select ('22000000-0000-4000-8000-'||lpad(i::text,12,'0'))::uuid,'authenticated','authenticated','visibility-'||i||'@example.invalid',now() from generate_series(1,7) i;
insert into hub_private.members(user_id,display_name,listed,messages_enabled)
select ('22000000-0000-4000-8000-'||lpad(i::text,12,'0'))::uuid,'Visibility fixture '||i,true,true from generate_series(1,7) i;
insert into hub_private.moderators(user_id) values('22000000-0000-4000-8000-000000000007');
insert into storage.objects(bucket_id,name,metadata)
select 'community-avatars',('22000000-0000-4000-8000-'||lpad(i::text,12,'0'))||'/22000000-0000-4000-8000-000000000099.jpg','{"mimetype":"image/jpeg","size":1024}'::jsonb from generate_series(1,6) i;
insert into hub_private.member_avatars(user_id,path)
select ('22000000-0000-4000-8000-'||lpad(i::text,12,'0'))::uuid,('22000000-0000-4000-8000-'||lpad(i::text,12,'0'))||'/22000000-0000-4000-8000-000000000099.jpg' from generate_series(1,6) i;
insert into hub_private.posts(id,author_id,category,title,body) values
('22000000-0000-4000-8000-000000000101','22000000-0000-4000-8000-000000000003','Beta Feedback','Visibility fixture post','Synthetic rollback-only content.'),
('22000000-0000-4000-8000-000000000102','22000000-0000-4000-8000-000000000005','Beta Feedback','Visibility fixture parent','Synthetic rollback-only content.');
insert into hub_private.replies(id,post_id,author_id,body) values('22000000-0000-4000-8000-000000000103','22000000-0000-4000-8000-000000000102','22000000-0000-4000-8000-000000000004','Synthetic rollback-only reply.');
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"22000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
do $$ declare result jsonb; begin
 if public.community_api('directory')<>'[]'::jsonb or public.community_api('directory','{"search":"Visibility"}')<>'[]'::jsonb then raise exception 'FAIL roster still exposed';end if;
 result:=public.community_avatar_api('avatars','{"ids":["22000000-0000-4000-8000-000000000002","22000000-0000-4000-8000-000000000003","22000000-0000-4000-8000-000000000004"]}');
 if result ? '22000000-0000-4000-8000-000000000002' then raise exception 'FAIL quiet member photo exposed';end if;
 if not(result ? '22000000-0000-4000-8000-000000000003') or not(result ? '22000000-0000-4000-8000-000000000004') then raise exception 'FAIL contributor photos unavailable';end if;
 if exists(select 1 from storage.objects where bucket_id='community-avatars' and name='22000000-0000-4000-8000-000000000002/22000000-0000-4000-8000-000000000099.jpg') then raise exception 'FAIL known private photo path readable';end if;
 if not exists(select 1 from storage.objects where bucket_id='community-avatars' and name='22000000-0000-4000-8000-000000000003/22000000-0000-4000-8000-000000000099.jpg') then raise exception 'FAIL contributor storage read';end if;
 begin perform public.community_api('request','{"user_id":"22000000-0000-4000-8000-000000000002"}');raise exception 'FAIL quiet member request allowed';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
 perform set_config('test.visibility.thread',public.community_api('request','{"user_id":"22000000-0000-4000-8000-000000000003"}')->>'id',true);
 begin perform public.community_api('send',jsonb_build_object('thread_id',current_setting('test.visibility.thread'),'body','Not accepted'));raise exception 'FAIL send before acceptance';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
 begin perform 1 from hub_private.members;raise exception 'FAIL direct profile read';exception when insufficient_privilege then null;end;
end$$;
-- Participant can see requester identity/photo; a different member cannot read the conversation.
select set_config('request.jwt.claims','{"sub":"22000000-0000-4000-8000-000000000003","role":"authenticated"}',true);
do $$begin
 if not(public.community_avatar_api('avatars','{"ids":["22000000-0000-4000-8000-000000000001"]}') ? '22000000-0000-4000-8000-000000000001') then raise exception 'FAIL request participant photo';end if;
 perform public.community_api('respond',jsonb_build_object('thread_id',current_setting('test.visibility.thread'),'status','accepted'));
end$$;
select set_config('request.jwt.claims','{"sub":"22000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
select public.community_api('send',jsonb_build_object('thread_id',current_setting('test.visibility.thread'),'body','Synthetic accepted-conversation message.'));
select set_config('request.jwt.claims','{"sub":"22000000-0000-4000-8000-000000000006","role":"authenticated"}',true);
do $$begin
 begin perform public.community_api('messages',jsonb_build_object('thread_id',current_setting('test.visibility.thread')));raise exception 'FAIL outsider messages';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
end$$;
-- Remove public contribution: existing participants retain identity; unrelated readers do not.
reset role;
update hub_private.posts set hidden=true where id='22000000-0000-4000-8000-000000000101';
update hub_private.posts set hidden=true where id='22000000-0000-4000-8000-000000000102';
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"22000000-0000-4000-8000-000000000006","role":"authenticated"}',true);
do $$begin
 if public.community_avatar_api('avatars','{"ids":["22000000-0000-4000-8000-000000000003","22000000-0000-4000-8000-000000000004"]}')<>'{}'::jsonb then raise exception 'FAIL hidden parent/post photo exposed';end if;
end$$;
select set_config('request.jwt.claims','{"sub":"22000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
do $$begin
 if not(public.community_avatar_api('avatars','{"ids":["22000000-0000-4000-8000-000000000003"]}') ? '22000000-0000-4000-8000-000000000003') then raise exception 'FAIL existing participant photo';end if;
 if jsonb_array_length(public.community_api('messages',jsonb_build_object('thread_id',current_setting('test.visibility.thread'))))<>1 then raise exception 'FAIL preserved conversation';end if;
 perform public.community_api('block','{"user_id":"22000000-0000-4000-8000-000000000003"}');
 if public.community_avatar_api('avatars','{"ids":["22000000-0000-4000-8000-000000000003"]}')<>'{}'::jsonb then raise exception 'FAIL blocked photo';end if;
end$$;
-- New requests still require both pre-existing consent flags.
reset role;
update hub_private.posts set hidden=false where id='22000000-0000-4000-8000-000000000101';
update hub_private.members set listed=false where user_id='22000000-0000-4000-8000-000000000003';
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"22000000-0000-4000-8000-000000000006","role":"authenticated"}',true);
do $$begin
 begin perform public.community_api('request','{"user_id":"22000000-0000-4000-8000-000000000003"}');raise exception 'FAIL request consent bypass';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
end$$;
-- A report grants the designated moderator review context, not a general photo roster.
reset role;
insert into hub_private.reports(reporter,target_kind,target_id,target_user,reason,snapshot)
values('22000000-0000-4000-8000-000000000001','member','22000000-0000-4000-8000-000000000005','22000000-0000-4000-8000-000000000005','Synthetic report','Synthetic snapshot');
set local role authenticated;
-- Moderator access is not a roster or universal photo lookup; removal remains authorized.
select set_config('request.jwt.claims','{"sub":"22000000-0000-4000-8000-000000000007","role":"authenticated"}',true);
do $$begin
 if public.community_avatar_api('avatars','{"ids":["22000000-0000-4000-8000-000000000002"]}')<>'{}'::jsonb then raise exception 'FAIL moderator quiet photo lookup';end if;
 if not(public.community_avatar_api('avatars','{"ids":["22000000-0000-4000-8000-000000000005"]}') ? '22000000-0000-4000-8000-000000000005') then raise exception 'FAIL moderator reported-photo access';end if;
 perform public.community_avatar_api('avatar_remove','{"user_id":"22000000-0000-4000-8000-000000000002"}');
end$$;
reset role;
do $$begin
 if has_function_privilege('anon','public.community_api(text,jsonb)','execute') or has_function_privilege('anon','public.community_avatar_api(text,jsonb)','execute') then raise exception 'FAIL anonymous RPC access';end if;
 if has_function_privilege('authenticated','hub_private.community_identity_visible(uuid)','execute') then raise exception 'FAIL helper exposed';end if;
 if (select public from storage.buckets where id='community-avatars') then raise exception 'FAIL public avatar bucket';end if;
end$$;
rollback;
select 'PASS: no roster/search; quiet photo/path denial; visible contributors; hidden-parent protection; request consent/acceptance; participant-only history; blocks; moderator limits; anonymous denial. All fixtures rolled back.' as result;
