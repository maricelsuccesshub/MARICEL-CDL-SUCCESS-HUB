
create table hub_private.member_avatars(user_id uuid primary key references hub_private.members(user_id) on delete cascade,path text not null unique check(path ~ '^[0-9a-f-]{36}/[0-9a-f-]{36}[.]jpg$'),updated_at timestamptz not null default now());
alter table hub_private.member_avatars enable row level security;
revoke all on hub_private.member_avatars from public,anon,authenticated;
create policy avatar_no_direct_access on hub_private.member_avatars for all to anon,authenticated using(false) with check(false);
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values('community-avatars','community-avatars',false,524288,array['image/jpeg']);
create function hub_private.avatar_access(object_name text, operation text) returns boolean language plpgsql security definer set search_path='' as $$
declare me uuid:=auth.uid(); who uuid;
begin
 if me is null or not exists(select 1 from auth.users where id=me and email_confirmed_at is not null and not coalesce(is_anonymous,false)) then return false;end if;
 if object_name !~ '^[0-9a-f-]{36}/[0-9a-f-]{36}[.]jpg$' then return false;end if;
 who:=split_part(object_name,'/',1)::uuid;
 if operation='delete' then return me=who;end if;
 if exists(select 1 from hub_private.members where user_id=me and suspended) then return false;end if;
 if operation='insert' then
 if who<>me or not exists(select 1 from hub_private.members where user_id=me and not suspended) then return false;end if;
 perform 1 from hub_private.members where user_id=me for update;
 return (select count(*) from storage.objects where bucket_id='community-avatars' and split_part(name,'/',1)=me::text)<5;
 end if;
 if operation<>'read' then return false;end if;
 if me=who then return true;end if;
 return exists(select 1 from hub_private.member_avatars a join hub_private.members m on m.user_id=a.user_id where a.path=object_name and not m.suspended)
 and not exists(select 1 from hub_private.blocks where (blocker=me and blocked=who) or (blocker=who and blocked=me));
end $$;
revoke all on function hub_private.avatar_access(text,text) from public,anon;
grant execute on function hub_private.avatar_access(text,text) to authenticated;
create policy avatar_member_read on storage.objects for select to authenticated using(bucket_id='community-avatars' and hub_private.avatar_access(name,'read'));
create policy avatar_owner_insert on storage.objects for insert to authenticated with check(bucket_id='community-avatars' and hub_private.avatar_access(name,'insert'));
create policy avatar_owner_delete on storage.objects for delete to authenticated using(bucket_id='community-avatars' and hub_private.avatar_access(name,'delete'));


create function hub_private.avatar_api(action text,payload jsonb default '{}'::jsonb) returns jsonb language plpgsql security definer set search_path='' as $photo$
declare me uuid:=auth.uid(); is_mod boolean; target uuid; txt text;
begin
 if me is null or not exists(select 1 from auth.users where id=me and email_confirmed_at is not null and not coalesce(is_anonymous,false)) then raise exception 'Verified sign-in required.';end if;
 if exists(select 1 from hub_private.members where user_id=me and suspended) then raise exception 'Community access suspended.';end if;
 select exists(select 1 from hub_private.moderators where user_id=me) into is_mod;
 if action='avatars' then
 if payload->'ids' is null or jsonb_typeof(payload->'ids')<>'array' then raise exception 'Supply member IDs.';end if;
 if jsonb_array_length(payload->'ids')>100 then raise exception 'Too many IDs.';end if;
 return coalesce((select jsonb_object_agg(a.user_id::text,a.path) from hub_private.member_avatars a join hub_private.members m on m.user_id=a.user_id where a.user_id::text in(select jsonb_array_elements_text(payload->'ids')) and (a.user_id=me or (not m.suspended and not exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=a.user_id) or (b.blocker=a.user_id and b.blocked=me))))),'{}'::jsonb);
 elsif action='avatar_set' then
 if not exists(select 1 from hub_private.members where user_id=me and not suspended) then raise exception 'Save your Community profile first.';end if;
 txt:=payload->>'path';
 if txt is null or txt !~ '^[0-9a-f-]{36}/[0-9a-f-]{36}[.]jpg$' or split_part(txt,'/',1)<>me::text then raise exception 'Invalid photo path.';end if;
 if not exists(select 1 from storage.objects where bucket_id='community-avatars' and name=txt and metadata->>'mimetype'='image/jpeg' and (metadata->>'size')::bigint<=524288) then raise exception 'Upload your own JPEG first.';end if;
 perform 1 from hub_private.members where user_id=me for update;
 insert into hub_private.member_avatars(user_id,path) values(me,txt) on conflict(user_id) do update set path=excluded.path,updated_at=now();
 return jsonb_build_object('ok',true);
 elsif action='avatar_remove' then
 target:=coalesce((payload->>'user_id')::uuid,me);
 if target<>me and not is_mod then raise exception 'Moderator access required.';end if;
 delete from hub_private.member_avatars where user_id=target;
 if target<>me then insert into hub_private.moderation_log(moderator,action,target_id) values(me,'avatar:removed',target);end if;
 return jsonb_build_object('ok',true);
 end if;
 raise exception 'Unknown photo action.';
end $photo$;
revoke all on function hub_private.avatar_api(text,jsonb) from public,anon;
grant execute on function hub_private.avatar_api(text,jsonb) to authenticated;
create function public.community_avatar_api(action text,payload jsonb default '{}'::jsonb) returns jsonb language sql security invoker set search_path='' as $wrapper$ select hub_private.avatar_api(action,payload); $wrapper$;
revoke all on function public.community_avatar_api(text,jsonb) from public,anon;
grant execute on function public.community_avatar_api(text,jsonb) to authenticated;

