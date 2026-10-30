-- Apply only to beta gndommbrsfvejocipukj. No member rows are updated or deleted.
begin;
do $guard$ begin
if pg_get_functiondef('hub_private.avatar_access(text,text)'::regprocedure) <> $prior$CREATE OR REPLACE FUNCTION hub_private.avatar_access(object_name text, operation text)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
end $function$
$prior$ then raise exception 'Concurrent function change: avatar_access; review before applying';end if;
if pg_get_functiondef('hub_private.avatar_api(text,jsonb)'::regprocedure) <> $prior$CREATE OR REPLACE FUNCTION hub_private.avatar_api(action text, payload jsonb DEFAULT '{}'::jsonb)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
end $function$
$prior$ then raise exception 'Concurrent function change: avatar_api; review before applying';end if;
if pg_get_functiondef('hub_private.community_api(text,jsonb)'::regprocedure) <> $prior$CREATE OR REPLACE FUNCTION hub_private.community_api(action text, payload jsonb DEFAULT '{}'::jsonb)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare
 me uuid := auth.uid(); is_mod boolean; mine hub_private.members%rowtype;
 target uuid; other_id uuid; item uuid; th hub_private.threads%rowtype;
 txt text; title_text text; kind text; snapshot_text text; res jsonb;
begin
 if me is null or not exists(select 1 from auth.users u where u.id=me and u.email_confirmed_at is not null and not coalesce(u.is_anonymous,false)) then raise exception 'Sign in with a verified email to use Community.'; end if;
 select exists(select 1 from hub_private.moderators m where m.user_id=me) into is_mod;
 select * into mine from hub_private.members m where m.user_id=me;
 if coalesce(mine.suspended,false) and not is_mod then raise exception 'Community access is suspended. Contact the Hub owner.'; end if;
 if action='state' then
 return jsonb_build_object('profile',(select to_jsonb(m)-'suspended' from hub_private.members m where m.user_id=me),'moderator',is_mod,'moderation_ready',exists(select 1 from hub_private.moderators),'blocks',coalesce((select jsonb_agg(jsonb_build_object('id',b.blocked,'name',coalesce(m.display_name,'Member'))) from hub_private.blocks b left join hub_private.members m on m.user_id=b.blocked where b.blocker=me),'[]'::jsonb));
 elsif action='profile' then
 if coalesce((payload->>'rules_accepted')::boolean,false) is not true then raise exception 'Accept the community rules first.'; end if;
 txt:=btrim(payload->>'display_name');
 if txt is null or char_length(txt) not between 2 and 50 then raise exception 'Choose a display name of 2–50 characters.'; end if;
 insert into hub_private.members(user_id,display_name,bio,listed,messages_enabled) values(me,txt,btrim(coalesce(payload->>'bio','')),coalesce((payload->>'listed')::boolean,false),coalesce((payload->>'messages_enabled')::boolean,false)) on conflict(user_id) do update set display_name=excluded.display_name,bio=excluded.bio,listed=excluded.listed,messages_enabled=excluded.messages_enabled;
 return jsonb_build_object('ok',true);
 end if;
 -- Reading discussions is allowed before creating a separate community profile.
 if action='posts' then
 select coalesce(jsonb_agg(z order by z.created_at desc),'[]'::jsonb) into res from (select p.id,p.author_id,m.display_name,p.category,p.title,p.body,p.created_at,(p.author_id=me) as own from hub_private.posts p join hub_private.members m on m.user_id=p.author_id where not p.hidden and not m.suspended and (coalesce(payload->>'category','')='' or p.category=payload->>'category') and not exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=p.author_id) or (b.blocker=p.author_id and b.blocked=me)) order by p.created_at desc limit 100) z;
 return res;
 elsif action='replies' then
 target:=(payload->>'post_id')::uuid;
 if not exists(select 1 from hub_private.posts p join hub_private.members m on m.user_id=p.author_id where p.id=target and not p.hidden and not m.suspended and not exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=p.author_id) or (b.blocker=p.author_id and b.blocked=me))) then raise exception 'This discussion is unavailable.'; end if;
 select coalesce(jsonb_agg(z order by z.created_at),'[]'::jsonb) into res from (select r.id,r.author_id,m.display_name,r.body,r.created_at,(r.author_id=me) as own from hub_private.replies r join hub_private.members m on m.user_id=r.author_id where r.post_id=target and not r.hidden and not m.suspended and not exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=r.author_id) or (b.blocker=r.author_id and b.blocked=me)) order by r.created_at limit 100) z;
 return res;
 elsif action='directory' then
 select coalesce(jsonb_agg(z order by z.display_name),'[]'::jsonb) into res from (select m.user_id,m.display_name,m.bio,m.messages_enabled from hub_private.members m where m.listed and not m.suspended and m.user_id<>me and (coalesce(payload->>'search','')='' or m.display_name ilike '%' || left(payload->>'search',50) || '%') and not exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=m.user_id) or (b.blocker=m.user_id and b.blocked=me)) order by m.display_name limit 100) z;
 return res;
 end if;
 if action in ('moderation','moderate') then
 if not is_mod then raise exception 'Moderator access required.'; end if;
 if action='moderation' then
 select coalesce(jsonb_agg(z order by z.created_at desc),'[]'::jsonb) into res from (select r.*,m.display_name as target_name from hub_private.reports r left join hub_private.members m on m.user_id=r.target_user where r.status='open' order by r.created_at desc limit 100) z;return res;
 end if;
 target:=(payload->>'id')::uuid;kind:=payload->>'kind';
 if kind='post' then update hub_private.posts set hidden=coalesce((payload->>'hidden')::boolean,true) where id=target;
 elsif kind='reply' then update hub_private.replies set hidden=coalesce((payload->>'hidden')::boolean,true) where id=target;
 elsif kind='member' then
 if exists(select 1 from hub_private.moderators where user_id=target) then raise exception 'Moderator accounts cannot be suspended here.'; end if;
 update hub_private.members set suspended=coalesce((payload->>'suspended')::boolean,true) where user_id=target;
 elsif kind='report' then update hub_private.reports set status='resolved' where id=target;
 else raise exception 'Unknown moderation action.';end if;
 insert into hub_private.moderation_log(moderator,action,target_id) values(me,kind||':'||payload::text,target);return jsonb_build_object('ok',true);
 end if;
 if mine.user_id is null then raise exception 'Create your Community profile and accept the rules first.'; end if;
 if action in ('post','reply','request','send') and not exists(select 1 from hub_private.moderators) then raise exception 'Community opens after moderator setup is complete. Please check back soon.';end if;
 if action not in ('state','posts','replies','directory','inbox','messages','moderation') then perform 1 from hub_private.members where user_id=me for update;end if;
 if action='post' then
 if (select count(*) from hub_private.posts where author_id=me and created_at>now()-interval '1 minute')>=3 then raise exception 'Please wait a minute before posting again.'; end if;
 insert into hub_private.posts(author_id,category,title,body) values(me,payload->>'category',btrim(payload->>'title'),btrim(payload->>'body')) returning id into item;return jsonb_build_object('id',item);
 elsif action='reply' then
 target:=(payload->>'post_id')::uuid;
 if not exists(select 1 from hub_private.posts p join hub_private.members m on m.user_id=p.author_id where p.id=target and not p.hidden and not m.suspended and not exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=p.author_id) or (b.blocker=p.author_id and b.blocked=me))) then raise exception 'This discussion is unavailable.'; end if;
 if (select count(*) from hub_private.replies where author_id=me and created_at>now()-interval '1 minute')>=6 then raise exception 'Please wait a minute before replying again.'; end if;
 insert into hub_private.replies(post_id,author_id,body) values(target,me,btrim(payload->>'body'));return jsonb_build_object('ok',true);
 elsif action='withdraw' then
 target:=(payload->>'id')::uuid;
 if payload->>'kind'='post' then update hub_private.posts set hidden=true where id=target and author_id=me;elsif payload->>'kind'='reply' then update hub_private.replies set hidden=true where id=target and author_id=me;else raise exception 'Invalid content type.';end if;return jsonb_build_object('ok',true);
 elsif action='block' then
 target:=(payload->>'user_id')::uuid;
 if target=me then raise exception 'You cannot block yourself.';end if;
 insert into hub_private.blocks(blocker,blocked) values(me,target) on conflict do nothing;return jsonb_build_object('ok',true);
 elsif action='unblock' then
 delete from hub_private.blocks where blocker=me and blocked=(payload->>'user_id')::uuid;return jsonb_build_object('ok',true);
 elsif action='request' then
 other_id:=(payload->>'user_id')::uuid;
 if other_id=me or not mine.messages_enabled or not exists(select 1 from hub_private.members where user_id=other_id and listed and messages_enabled and not suspended) or exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=other_id) or (b.blocker=other_id and b.blocked=me)) then raise exception 'Message requests are unavailable. Both members must enable messaging.';end if;
 select id into item from hub_private.threads where least(requester,recipient)=least(me,other_id) and greatest(requester,recipient)=greatest(me,other_id);
 if item is not null then return jsonb_build_object('id',item,'existing',true);end if;
 if (select count(*) from hub_private.threads where requester=me and created_at>now()-interval '1 day')>=5 then raise exception 'Daily message-request limit reached. Please try tomorrow.';end if;
 insert into hub_private.threads(requester,recipient) values(me,other_id) returning id into item;return jsonb_build_object('id',item);
 elsif action='inbox' then
 select coalesce(jsonb_agg(z order by z.created_at desc),'[]'::jsonb) into res from (select t.id,t.requester,t.recipient,t.status,t.created_at,m.display_name as other_name,m.user_id as other_id,exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=m.user_id) or (b.blocker=m.user_id and b.blocked=me)) as blocked from hub_private.threads t join hub_private.members m on m.user_id=case when t.requester=me then t.recipient else t.requester end where me in(t.requester,t.recipient) order by t.created_at desc limit 100) z;return res;
 elsif action in ('respond','messages','send') then
 target:=(payload->>'thread_id')::uuid;
 select * into th from hub_private.threads t where t.id=target and me in(t.requester,t.recipient);
 if th.id is null then raise exception 'Conversation unavailable.';end if;
 other_id:=case when th.requester=me then th.recipient else th.requester end;
 if action='messages' then
 if th.status<>'accepted' then return '[]'::jsonb;end if;
 select coalesce(jsonb_agg(z order by z.created_at),'[]'::jsonb) into res from (select m.id,m.sender,m.body,m.created_at,(m.sender=me) as own from hub_private.messages m where m.thread_id=target order by m.created_at desc limit 100) z;return res;
 end if;
 if not mine.messages_enabled or not exists(select 1 from hub_private.members where user_id=other_id and messages_enabled and not suspended) or exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=other_id) or (b.blocker=other_id and b.blocked=me)) then raise exception 'Messaging unavailable. Check your settings or block list.';end if;
 if action='respond' then
 if th.recipient<>me or th.status<>'pending' or payload->>'status' not in ('accepted','declined') then raise exception 'Only the recipient can respond to a pending request.';end if;
 update hub_private.threads set status=payload->>'status' where id=target;return jsonb_build_object('ok',true);
 end if;
 if th.status<>'accepted' then raise exception 'Wait for the recipient to accept your request.';end if;
 if (select count(*) from hub_private.messages where sender=me and created_at>now()-interval '1 minute')>=20 then raise exception 'Please pause before sending more messages.';end if;
 insert into hub_private.messages(thread_id,sender,body) values(target,me,btrim(payload->>'body'));return jsonb_build_object('ok',true);
 elsif action='report' then
 target:=(payload->>'id')::uuid;kind:=payload->>'kind';
 if (select count(*) from hub_private.reports where reporter=me and created_at>now()-interval '1 day')>=10 then raise exception 'Daily report limit reached.';end if;
 if kind='post' then select p.author_id,p.title||E'\n'||p.body into other_id,snapshot_text from hub_private.posts p where p.id=target and not p.hidden;
 elsif kind='reply' then select r.author_id,r.body into other_id,snapshot_text from hub_private.replies r where r.id=target and not r.hidden;
 elsif kind='message' then select m.sender,m.body into other_id,snapshot_text from hub_private.messages m join hub_private.threads t on t.id=m.thread_id where m.id=target and me in(t.requester,t.recipient);
 elsif kind='member' then select m.user_id,m.display_name||E'\n'||m.bio into other_id,snapshot_text from hub_private.members m where m.user_id=target and (m.listed or exists(select 1 from hub_private.threads t where me in(t.requester,t.recipient) and m.user_id in(t.requester,t.recipient)));
 else raise exception 'Invalid report type.';end if;
 if other_id is null then raise exception 'Content unavailable for reporting.';end if;
 insert into hub_private.reports(reporter,target_kind,target_id,target_user,reason,snapshot) values(me,kind,target,other_id,btrim(payload->>'reason'),snapshot_text);return jsonb_build_object('ok',true);
 end if;
 raise exception 'Unknown Community action.';
end $function$
$prior$ then raise exception 'Concurrent function change: community_api; review before applying';end if;
end $guard$;

create function hub_private.community_author_visible(who uuid) returns boolean
language sql stable security definer set search_path='' as $visible$
 select auth.uid() is not null
 and exists(select 1 from auth.users u where u.id=auth.uid() and u.email_confirmed_at is not null and not coalesce(u.is_anonymous,false))
 and not exists(select 1 from hub_private.members m where m.user_id=auth.uid() and m.suspended)
 and exists(select 1 from hub_private.members m where m.user_id=who and not m.suspended)
 and not exists(select 1 from hub_private.blocks b where (b.blocker=auth.uid() and b.blocked=who) or (b.blocker=who and b.blocked=auth.uid()))
 and (
 exists(select 1 from hub_private.posts p where p.author_id=who and not p.hidden)
 or exists(select 1 from hub_private.replies r join hub_private.posts p on p.id=r.post_id join hub_private.members pm on pm.user_id=p.author_id
 where r.author_id=who and not r.hidden and not p.hidden and not pm.suspended
 and not exists(select 1 from hub_private.blocks b where (b.blocker=auth.uid() and b.blocked=p.author_id) or (b.blocker=p.author_id and b.blocked=auth.uid())))
 );
$visible$;
revoke all on function hub_private.community_author_visible(uuid) from public,anon,authenticated;

create function hub_private.community_identity_visible(who uuid) returns boolean
language sql stable security definer set search_path='' as $visible$
 select auth.uid() is not null
 and exists(select 1 from auth.users u where u.id=auth.uid() and u.email_confirmed_at is not null and not coalesce(u.is_anonymous,false))
 and not exists(select 1 from hub_private.members m where m.user_id=auth.uid() and m.suspended)
 and (
 who=auth.uid()
 or (
 exists(select 1 from hub_private.members m where m.user_id=who and not m.suspended)
 and not exists(select 1 from hub_private.blocks b where (b.blocker=auth.uid() and b.blocked=who) or (b.blocker=who and b.blocked=auth.uid()))
 and (
 hub_private.community_author_visible(who)
 or exists(select 1 from hub_private.threads t where (t.requester=auth.uid() and t.recipient=who) or (t.recipient=auth.uid() and t.requester=who))
 or (exists(select 1 from hub_private.moderators m where m.user_id=auth.uid())
 and exists(select 1 from hub_private.reports r where r.target_user=who and r.status='open'))
 )))
$visible$;
revoke all on function hub_private.community_identity_visible(uuid) from public,anon,authenticated;;
CREATE OR REPLACE FUNCTION hub_private.community_api(action text, payload jsonb DEFAULT '{}'::jsonb)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare
 me uuid := auth.uid(); is_mod boolean; mine hub_private.members%rowtype;
 target uuid; other_id uuid; item uuid; th hub_private.threads%rowtype;
 txt text; title_text text; kind text; snapshot_text text; res jsonb;
begin
 if me is null or not exists(select 1 from auth.users u where u.id=me and u.email_confirmed_at is not null and not coalesce(u.is_anonymous,false)) then raise exception 'Sign in with a verified email to use Community.'; end if;
 select exists(select 1 from hub_private.moderators m where m.user_id=me) into is_mod;
 select * into mine from hub_private.members m where m.user_id=me;
 if coalesce(mine.suspended,false) and not is_mod then raise exception 'Community access is suspended. Contact the Hub owner.'; end if;
 if action='state' then
 return jsonb_build_object('profile',(select to_jsonb(m)-'suspended' from hub_private.members m where m.user_id=me),'moderator',is_mod,'moderation_ready',exists(select 1 from hub_private.moderators),'blocks',coalesce((select jsonb_agg(jsonb_build_object('id',b.blocked,'name',coalesce(m.display_name,'Member'))) from hub_private.blocks b left join hub_private.members m on m.user_id=b.blocked where b.blocker=me),'[]'::jsonb));
 elsif action='profile' then
 if coalesce((payload->>'rules_accepted')::boolean,false) is not true then raise exception 'Accept the community rules first.'; end if;
 txt:=btrim(payload->>'display_name');
 if txt is null or char_length(txt) not between 2 and 50 then raise exception 'Choose a display name of 2–50 characters.'; end if;
 insert into hub_private.members(user_id,display_name,bio,listed,messages_enabled) values(me,txt,btrim(coalesce(payload->>'bio','')),coalesce((payload->>'listed')::boolean,false),coalesce((payload->>'messages_enabled')::boolean,false)) on conflict(user_id) do update set display_name=excluded.display_name,bio=excluded.bio,listed=excluded.listed,messages_enabled=excluded.messages_enabled;
 return jsonb_build_object('ok',true);
 end if;
 -- Reading discussions is allowed before creating a separate community profile.
 if action='posts' then
 select coalesce(jsonb_agg(z order by z.created_at desc),'[]'::jsonb) into res from (select p.id,p.author_id,m.display_name,(m.listed and m.messages_enabled) as accepts_requests,p.category,p.title,p.body,p.created_at,(p.author_id=me) as own from hub_private.posts p join hub_private.members m on m.user_id=p.author_id where not p.hidden and not m.suspended and (coalesce(payload->>'category','')='' or p.category=payload->>'category') and not exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=p.author_id) or (b.blocker=p.author_id and b.blocked=me)) order by p.created_at desc limit 100) z;
 return res;
 elsif action='replies' then
 target:=(payload->>'post_id')::uuid;
 if not exists(select 1 from hub_private.posts p join hub_private.members m on m.user_id=p.author_id where p.id=target and not p.hidden and not m.suspended and not exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=p.author_id) or (b.blocker=p.author_id and b.blocked=me))) then raise exception 'This discussion is unavailable.'; end if;
 select coalesce(jsonb_agg(z order by z.created_at),'[]'::jsonb) into res from (select r.id,r.author_id,m.display_name,(m.listed and m.messages_enabled) as accepts_requests,r.body,r.created_at,(r.author_id=me) as own from hub_private.replies r join hub_private.members m on m.user_id=r.author_id where r.post_id=target and not r.hidden and not m.suspended and not exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=r.author_id) or (b.blocker=r.author_id and b.blocked=me)) order by r.created_at limit 100) z;
 return res;
 elsif action='directory' then
 return '[]'::jsonb; -- No member roster or name search, including legacy clients.
 end if;
 if action in ('moderation','moderate') then
 if not is_mod then raise exception 'Moderator access required.'; end if;
 if action='moderation' then
 select coalesce(jsonb_agg(z order by z.created_at desc),'[]'::jsonb) into res from (select r.*,m.display_name as target_name from hub_private.reports r left join hub_private.members m on m.user_id=r.target_user where r.status='open' order by r.created_at desc limit 100) z;return res;
 end if;
 target:=(payload->>'id')::uuid;kind:=payload->>'kind';
 if kind='post' then update hub_private.posts set hidden=coalesce((payload->>'hidden')::boolean,true) where id=target;
 elsif kind='reply' then update hub_private.replies set hidden=coalesce((payload->>'hidden')::boolean,true) where id=target;
 elsif kind='member' then
 if exists(select 1 from hub_private.moderators where user_id=target) then raise exception 'Moderator accounts cannot be suspended here.'; end if;
 update hub_private.members set suspended=coalesce((payload->>'suspended')::boolean,true) where user_id=target;
 elsif kind='report' then update hub_private.reports set status='resolved' where id=target;
 else raise exception 'Unknown moderation action.';end if;
 insert into hub_private.moderation_log(moderator,action,target_id) values(me,kind||':'||payload::text,target);return jsonb_build_object('ok',true);
 end if;
 if mine.user_id is null then raise exception 'Create your Community profile and accept the rules first.'; end if;
 if action in ('post','reply','request','send') and not exists(select 1 from hub_private.moderators) then raise exception 'Community opens after moderator setup is complete. Please check back soon.';end if;
 if action not in ('state','posts','replies','directory','inbox','messages','moderation') then perform 1 from hub_private.members where user_id=me for update;end if;
 if action='post' then
 if (select count(*) from hub_private.posts where author_id=me and created_at>now()-interval '1 minute')>=3 then raise exception 'Please wait a minute before posting again.'; end if;
 insert into hub_private.posts(author_id,category,title,body) values(me,payload->>'category',btrim(payload->>'title'),btrim(payload->>'body')) returning id into item;return jsonb_build_object('id',item);
 elsif action='reply' then
 target:=(payload->>'post_id')::uuid;
 if not exists(select 1 from hub_private.posts p join hub_private.members m on m.user_id=p.author_id where p.id=target and not p.hidden and not m.suspended and not exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=p.author_id) or (b.blocker=p.author_id and b.blocked=me))) then raise exception 'This discussion is unavailable.'; end if;
 if (select count(*) from hub_private.replies where author_id=me and created_at>now()-interval '1 minute')>=6 then raise exception 'Please wait a minute before replying again.'; end if;
 insert into hub_private.replies(post_id,author_id,body) values(target,me,btrim(payload->>'body'));return jsonb_build_object('ok',true);
 elsif action='withdraw' then
 target:=(payload->>'id')::uuid;
 if payload->>'kind'='post' then update hub_private.posts set hidden=true where id=target and author_id=me;elsif payload->>'kind'='reply' then update hub_private.replies set hidden=true where id=target and author_id=me;else raise exception 'Invalid content type.';end if;return jsonb_build_object('ok',true);
 elsif action='block' then
 target:=(payload->>'user_id')::uuid;
 if target=me then raise exception 'You cannot block yourself.';end if;
 insert into hub_private.blocks(blocker,blocked) values(me,target) on conflict do nothing;return jsonb_build_object('ok',true);
 elsif action='unblock' then
 delete from hub_private.blocks where blocker=me and blocked=(payload->>'user_id')::uuid;return jsonb_build_object('ok',true);
 elsif action='request' then
 other_id:=(payload->>'user_id')::uuid;
 if not hub_private.community_author_visible(other_id) or other_id=me or not mine.messages_enabled or not exists(select 1 from hub_private.members where user_id=other_id and listed and messages_enabled and not suspended) or exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=other_id) or (b.blocker=other_id and b.blocked=me)) then raise exception 'Message requests are unavailable. Both members must enable messaging.';end if;
 select id into item from hub_private.threads where least(requester,recipient)=least(me,other_id) and greatest(requester,recipient)=greatest(me,other_id);
 if item is not null then return jsonb_build_object('id',item,'existing',true);end if;
 if (select count(*) from hub_private.threads where requester=me and created_at>now()-interval '1 day')>=5 then raise exception 'Daily message-request limit reached. Please try tomorrow.';end if;
 insert into hub_private.threads(requester,recipient) values(me,other_id) returning id into item;return jsonb_build_object('id',item);
 elsif action='inbox' then
 select coalesce(jsonb_agg(z order by z.created_at desc),'[]'::jsonb) into res from (select t.id,t.requester,t.recipient,t.status,t.created_at,m.display_name as other_name,m.user_id as other_id,exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=m.user_id) or (b.blocker=m.user_id and b.blocked=me)) as blocked from hub_private.threads t join hub_private.members m on m.user_id=case when t.requester=me then t.recipient else t.requester end where me in(t.requester,t.recipient) order by t.created_at desc limit 100) z;return res;
 elsif action in ('respond','messages','send') then
 target:=(payload->>'thread_id')::uuid;
 select * into th from hub_private.threads t where t.id=target and me in(t.requester,t.recipient);
 if th.id is null then raise exception 'Conversation unavailable.';end if;
 other_id:=case when th.requester=me then th.recipient else th.requester end;
 if action='messages' then
 if th.status<>'accepted' then return '[]'::jsonb;end if;
 select coalesce(jsonb_agg(z order by z.created_at),'[]'::jsonb) into res from (select m.id,m.sender,m.body,m.created_at,(m.sender=me) as own from hub_private.messages m where m.thread_id=target order by m.created_at desc limit 100) z;return res;
 end if;
 if not mine.messages_enabled or not exists(select 1 from hub_private.members where user_id=other_id and messages_enabled and not suspended) or exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=other_id) or (b.blocker=other_id and b.blocked=me)) then raise exception 'Messaging unavailable. Check your settings or block list.';end if;
 if action='respond' then
 if th.recipient<>me or th.status<>'pending' or payload->>'status' not in ('accepted','declined') then raise exception 'Only the recipient can respond to a pending request.';end if;
 update hub_private.threads set status=payload->>'status' where id=target;return jsonb_build_object('ok',true);
 end if;
 if th.status<>'accepted' then raise exception 'Wait for the recipient to accept your request.';end if;
 if (select count(*) from hub_private.messages where sender=me and created_at>now()-interval '1 minute')>=20 then raise exception 'Please pause before sending more messages.';end if;
 insert into hub_private.messages(thread_id,sender,body) values(target,me,btrim(payload->>'body'));return jsonb_build_object('ok',true);
 elsif action='report' then
 target:=(payload->>'id')::uuid;kind:=payload->>'kind';
 if (select count(*) from hub_private.reports where reporter=me and created_at>now()-interval '1 day')>=10 then raise exception 'Daily report limit reached.';end if;
 if kind='post' then select p.author_id,p.title||E'\n'||p.body into other_id,snapshot_text from hub_private.posts p where p.id=target and not p.hidden;
 elsif kind='reply' then select r.author_id,r.body into other_id,snapshot_text from hub_private.replies r where r.id=target and not r.hidden;
 elsif kind='message' then select m.sender,m.body into other_id,snapshot_text from hub_private.messages m join hub_private.threads t on t.id=m.thread_id where m.id=target and me in(t.requester,t.recipient);
 elsif kind='member' then select m.user_id,m.display_name||E'\n'||m.bio into other_id,snapshot_text from hub_private.members m where m.user_id=target and (hub_private.community_author_visible(m.user_id) or exists(select 1 from hub_private.threads t where me in(t.requester,t.recipient) and m.user_id in(t.requester,t.recipient)));
 else raise exception 'Invalid report type.';end if;
 if other_id is null then raise exception 'Content unavailable for reporting.';end if;
 insert into hub_private.reports(reporter,target_kind,target_id,target_user,reason,snapshot) values(me,kind,target,other_id,btrim(payload->>'reason'),snapshot_text);return jsonb_build_object('ok',true);
 end if;
 raise exception 'Unknown Community action.';
end $function$
;
CREATE OR REPLACE FUNCTION hub_private.avatar_access(object_name text, operation text)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
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
 and hub_private.community_identity_visible(who)
 and not exists(select 1 from hub_private.blocks where (blocker=me and blocked=who) or (blocker=who and blocked=me));
end $function$
;
CREATE OR REPLACE FUNCTION hub_private.avatar_api(action text, payload jsonb DEFAULT '{}'::jsonb)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
declare me uuid:=auth.uid(); is_mod boolean; target uuid; txt text;
begin
 if me is null or not exists(select 1 from auth.users where id=me and email_confirmed_at is not null and not coalesce(is_anonymous,false)) then raise exception 'Verified sign-in required.';end if;
 if exists(select 1 from hub_private.members where user_id=me and suspended) then raise exception 'Community access suspended.';end if;
 select exists(select 1 from hub_private.moderators where user_id=me) into is_mod;
 if action='avatars' then
 if payload->'ids' is null or jsonb_typeof(payload->'ids')<>'array' then raise exception 'Supply member IDs.';end if;
 if jsonb_array_length(payload->'ids')>100 then raise exception 'Too many IDs.';end if;
 return coalesce((select jsonb_object_agg(a.user_id::text,a.path) from hub_private.member_avatars a join hub_private.members m on m.user_id=a.user_id where a.user_id::text in(select jsonb_array_elements_text(payload->'ids')) and hub_private.community_identity_visible(a.user_id) and (a.user_id=me or (not m.suspended and not exists(select 1 from hub_private.blocks b where (b.blocker=me and b.blocked=a.user_id) or (b.blocker=a.user_id and b.blocked=me))))),'{}'::jsonb);
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
end $function$

;
commit;
