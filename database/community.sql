-- Community beta: private, non-Data-API tables, no direct member table access.
-- A narrow authenticated RPC performs explicit ownership/participant checks.
create schema if not exists hub_private;
revoke all on schema hub_private from public, anon, authenticated;
grant usage on schema hub_private to authenticated;
create table hub_private.members (
 user_id uuid primary key references auth.users(id) on delete cascade,
 display_name text not null check(char_length(btrim(display_name)) between 2 and 50),
 bio text not null default '' check(char_length(bio)<=240), listed boolean not null default false,
 messages_enabled boolean not null default false, suspended boolean not null default false,
 rules_version integer not null default 1, created_at timestamptz not null default now()
);
create table hub_private.moderators(user_id uuid primary key references auth.users(id) on delete cascade);
create table hub_private.posts(id uuid primary key default gen_random_uuid(), author_id uuid not null references hub_private.members(user_id), category text not null check(category in ('General Help','Backing Help','Trip Preparation','Success Stories','Beta Feedback')), title text not null check(char_length(btrim(title)) between 3 and 120), body text not null check(char_length(btrim(body)) between 3 and 3000), hidden boolean not null default false, created_at timestamptz not null default now());
create table hub_private.replies(id uuid primary key default gen_random_uuid(),post_id uuid not null references hub_private.posts(id),author_id uuid not null references hub_private.members(user_id),body text not null check(char_length(btrim(body)) between 1 and 2000),hidden boolean not null default false,created_at timestamptz not null default now());
create table hub_private.blocks(blocker uuid not null references auth.users(id) on delete cascade,blocked uuid not null references auth.users(id) on delete cascade,created_at timestamptz not null default now(),primary key(blocker,blocked),check(blocker<>blocked));
create table hub_private.threads(id uuid primary key default gen_random_uuid(),requester uuid not null references hub_private.members(user_id),recipient uuid not null references hub_private.members(user_id),status text not null default 'pending' check(status in ('pending','accepted','declined')),created_at timestamptz not null default now(),check(requester<>recipient));
create unique index hub_thread_pair on hub_private.threads(least(requester,recipient),greatest(requester,recipient));
create table hub_private.messages(id uuid primary key default gen_random_uuid(),thread_id uuid not null references hub_private.threads(id),sender uuid not null references hub_private.members(user_id),body text not null check(char_length(btrim(body)) between 1 and 2000),created_at timestamptz not null default now());
create table hub_private.reports(id uuid primary key default gen_random_uuid(),reporter uuid not null references auth.users(id),target_kind text not null check(target_kind in ('post','reply','message','member')),target_id uuid not null,target_user uuid not null references auth.users(id),reason text not null check(char_length(btrim(reason)) between 3 and 1000),snapshot text not null,status text not null default 'open' check(status in ('open','resolved')),created_at timestamptz not null default now());
create table hub_private.moderation_log(id uuid primary key default gen_random_uuid(),moderator uuid not null references auth.users(id),action text not null,target_id uuid not null,created_at timestamptz not null default now());
create index hub_posts_recent on hub_private.posts(created_at desc);
create index hub_replies_post on hub_private.replies(post_id,created_at);
create index hub_messages_thread on hub_private.messages(thread_id,created_at);
create index hub_messages_sender on hub_private.messages(sender,created_at);
create index hub_threads_recipient on hub_private.threads(recipient,created_at);
create index hub_reports_reporter on hub_private.reports(reporter,created_at);
create index hub_posts_author on hub_private.posts(author_id,created_at);
create index hub_replies_author on hub_private.replies(author_id,created_at);
alter table hub_private.members enable row level security;
alter table hub_private.moderators enable row level security;
alter table hub_private.posts enable row level security;
alter table hub_private.replies enable row level security;
alter table hub_private.blocks enable row level security;
alter table hub_private.threads enable row level security;
alter table hub_private.messages enable row level security;
alter table hub_private.reports enable row level security;
alter table hub_private.moderation_log enable row level security;
revoke all on all tables in schema hub_private from public,anon,authenticated;
create function hub_private.community_api(action text,payload jsonb default '{}'::jsonb) returns jsonb
language plpgsql security definer set search_path='' as $$
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
end $$;
revoke all on function hub_private.community_api(text,jsonb) from public,anon;
grant execute on function hub_private.community_api(text,jsonb) to authenticated;
create function public.community_api(action text,payload jsonb default '{}'::jsonb) returns jsonb language sql security invoker set search_path='' as $$ select hub_private.community_api(action,payload); $$;
revoke all on function public.community_api(text,jsonb) from public,anon;
grant execute on function public.community_api(text,jsonb) to authenticated;

create policy hub_no_direct_access on hub_private.members for all to anon, authenticated using(false) with check(false);
create policy hub_no_direct_access on hub_private.moderators for all to anon, authenticated using(false) with check(false);
create policy hub_no_direct_access on hub_private.posts for all to anon, authenticated using(false) with check(false);
create policy hub_no_direct_access on hub_private.replies for all to anon, authenticated using(false) with check(false);
create policy hub_no_direct_access on hub_private.blocks for all to anon, authenticated using(false) with check(false);
create policy hub_no_direct_access on hub_private.threads for all to anon, authenticated using(false) with check(false);
create policy hub_no_direct_access on hub_private.messages for all to anon, authenticated using(false) with check(false);
create policy hub_no_direct_access on hub_private.reports for all to anon, authenticated using(false) with check(false);
create policy hub_no_direct_access on hub_private.moderation_log for all to anon, authenticated using(false) with check(false);
