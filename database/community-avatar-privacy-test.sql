-- Synthetic metadata only; the transaction rolls back. No emails, images or real member changes.
begin;
insert into auth.users(id,aud,role,email,email_confirmed_at) values
('21000000-0000-4000-8000-000000000001','authenticated','authenticated','photo-a@example.invalid',now()),
('21000000-0000-4000-8000-000000000002','authenticated','authenticated','photo-b@example.invalid',now()),
('21000000-0000-4000-8000-000000000003','authenticated','authenticated','photo-m@example.invalid',now());
insert into hub_private.members(user_id,display_name) values('21000000-0000-4000-8000-000000000001','Photo A'),('21000000-0000-4000-8000-000000000002','Photo B');
insert into hub_private.moderators(user_id) values('21000000-0000-4000-8000-000000000003');
insert into storage.objects(bucket_id,name,metadata) values('community-avatars','21000000-0000-4000-8000-000000000001/21000000-0000-4000-8000-000000000011.jpg','{"mimetype":"image/jpeg","size":1024}');
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"21000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
select public.community_avatar_api('avatar_set','{"path":"21000000-0000-4000-8000-000000000001/21000000-0000-4000-8000-000000000011.jpg"}');
do $$begin
 if not hub_private.avatar_access('21000000-0000-4000-8000-000000000001/21000000-0000-4000-8000-000000000011.jpg','read') then raise exception 'FAIL owner read';end if;
 if hub_private.avatar_access('21000000-0000-4000-8000-000000000002/21000000-0000-4000-8000-000000000011.jpg','insert') then raise exception 'FAIL foreign upload';end if;
 begin perform 1 from hub_private.member_avatars;raise exception 'FAIL direct table read';exception when insufficient_privilege then null;end;
end$$;
select set_config('request.jwt.claims','{"sub":"21000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
do $$begin
 if not exists(select 1 from storage.objects where bucket_id='community-avatars' and name='21000000-0000-4000-8000-000000000001/21000000-0000-4000-8000-000000000011.jpg') then raise exception 'FAIL private member read';end if;
 begin perform public.community_avatar_api('avatar_set','{"path":"21000000-0000-4000-8000-000000000001/21000000-0000-4000-8000-000000000011.jpg"}');raise exception 'FAIL foreign set';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
 begin perform public.community_avatar_api('avatar_remove','{"user_id":"21000000-0000-4000-8000-000000000001"}');raise exception 'FAIL foreign removal';exception when raise_exception then if SQLERRM like 'FAIL%' then raise;end if;end;
 perform public.community_api('block','{"user_id":"21000000-0000-4000-8000-000000000001"}');
 if exists(select 1 from storage.objects where bucket_id='community-avatars' and name='21000000-0000-4000-8000-000000000001/21000000-0000-4000-8000-000000000011.jpg') then raise exception 'FAIL blocked photo read';end if;
end$$;
select set_config('request.jwt.claims','{"sub":"21000000-0000-4000-8000-000000000003","role":"authenticated"}',true);
select public.community_avatar_api('avatar_remove','{"user_id":"21000000-0000-4000-8000-000000000001"}');
reset role;
do $$begin
 if exists(select 1 from hub_private.member_avatars where user_id='21000000-0000-4000-8000-000000000001') then raise exception 'FAIL moderator removal';end if;
 if not exists(select 1 from hub_private.moderation_log where target_id='21000000-0000-4000-8000-000000000001' and action='avatar:removed') then raise exception 'FAIL photo audit';end if;
 if has_function_privilege('anon','public.community_avatar_api(text,jsonb)','execute') then raise exception 'FAIL anon API access';end if;
 if (select public from storage.buckets where id='community-avatars') then raise exception 'FAIL public bucket';end if;
end$$;
rollback;
select 'PASS owner/member visibility, foreign upload/set/remove denial, block privacy, moderator removal/audit, anonymous denial and private bucket. All fixtures rolled back.' as result;
