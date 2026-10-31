-- PROPOSAL ONLY. Requires Coach Maricel's separate database approval.
-- Target: gndommbrsfvejocipukj only. No existing tables/settings are altered.
begin;
create schema hub_learning_internal;
revoke all on schema hub_learning_internal from public, anon, authenticated;

create table public.learning_activities (
 activity_id text not null check (length(activity_id) between 3 and 100),
 content_version integer not null check (content_version > 0),
 module_key text not null,
 title text not null,
 content_hash text not null check (content_hash ~ '^[0-9a-f]{64}$'),
 primary key (activity_id, content_version)
);
create table public.learning_questions (
 activity_id text not null,
 content_version integer not null,
 question_id text not null,
 prompt text not null,
 options text[] not null check (cardinality(options) between 2 and 8),
 correct_option smallint not null check (correct_option >= 0 and correct_option < cardinality(options)),
 review_explanation text not null,
 required_for_review boolean not null,
 primary key (activity_id, content_version, question_id),
 foreign key (activity_id, content_version) references public.learning_activities
);
create table public.learning_attempts (
 user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
 attempt_id uuid not null,
 activity_id text not null,
 content_version integer not null,
 question_id text not null,
 selected_option smallint not null,
 correct boolean not null default false,
 received_at timestamptz not null default clock_timestamp(),
 primary key (user_id, attempt_id),
 foreign key (activity_id, content_version, question_id) references public.learning_questions
);
create index learning_attempts_owner_question on public.learning_attempts
 (user_id, activity_id, content_version, question_id, received_at desc, attempt_id desc);
create table public.learning_reviews (
 user_id uuid not null default auth.uid() references auth.users(id) on delete cascade,
 activity_id text not null,
 content_version integer not null,
 reviewed_at timestamptz not null default clock_timestamp(),
 primary key (user_id, activity_id, content_version),
 foreign key (activity_id, content_version) references public.learning_activities
);

alter table public.learning_activities enable row level security;
alter table public.learning_questions enable row level security;
alter table public.learning_attempts enable row level security;
alter table public.learning_reviews enable row level security;
alter table public.learning_activities force row level security;
alter table public.learning_questions force row level security;
alter table public.learning_attempts force row level security;
alter table public.learning_reviews force row level security;
revoke all on public.learning_activities, public.learning_questions,
 public.learning_attempts, public.learning_reviews from public, anon, authenticated;
grant select on public.learning_activities, public.learning_questions,
 public.learning_attempts, public.learning_reviews to authenticated;
grant insert (user_id,attempt_id,activity_id,content_version,question_id,selected_option)
 on public.learning_attempts to authenticated;
grant insert (user_id,activity_id,content_version) on public.learning_reviews to authenticated;

-- Catalog contains only the Hub's study content, never member records.
create policy learning_catalog_read on public.learning_activities for select
 to authenticated using ((select auth.uid()) is not null);
create policy learning_questions_read on public.learning_questions for select
 to authenticated using ((select auth.uid()) is not null);
create policy learning_attempts_read_own on public.learning_attempts for select
 to authenticated using ((select auth.uid()) = user_id);
create policy learning_attempts_insert_own on public.learning_attempts for insert
 to authenticated with check ((select auth.uid()) = user_id);
create policy learning_reviews_read_own on public.learning_reviews for select
 to authenticated using ((select auth.uid()) = user_id);
create policy learning_reviews_insert_own on public.learning_reviews for insert
 to authenticated with check ((select auth.uid()) = user_id);
-- Append-only: no member UPDATE/DELETE grants or policies, including moderators.

create function hub_learning_internal.grade_attempt() returns trigger
 language plpgsql security invoker set search_path = '' as $$
declare q public.learning_questions%rowtype;
begin
 if auth.uid() is null or new.user_id <> auth.uid() then
  raise exception 'Owner mismatch' using errcode='42501';
 end if;
 select * into q from public.learning_questions
 where activity_id=new.activity_id and content_version=new.content_version
 and question_id=new.question_id;
 if not found or new.selected_option < 0 or new.selected_option >= cardinality(q.options) then
  raise exception 'Unknown activity, version, question or answer' using errcode='23514';
 end if;
 new.correct := new.selected_option = q.correct_option;
 new.received_at := clock_timestamp();
 return new;
end $$;
revoke all on function hub_learning_internal.grade_attempt() from public, anon, authenticated;
create trigger learning_grade_attempt before insert on public.learning_attempts
 for each row execute function hub_learning_internal.grade_attempt();

create function hub_learning_internal.validate_review() returns trigger
 language plpgsql security invoker set search_path = '' as $$
begin
 if auth.uid() is null or new.user_id <> auth.uid() then
  raise exception 'Owner mismatch' using errcode='42501';
 end if;
 if not exists(select 1 from public.learning_activities
  where activity_id=new.activity_id and content_version=new.content_version)
 or not exists(select 1 from public.learning_questions
  where activity_id=new.activity_id and content_version=new.content_version and required_for_review)
 or exists (
  select 1 from public.learning_questions q
  where q.activity_id=new.activity_id and q.content_version=new.content_version and q.required_for_review
  and not coalesce((select a.correct from public.learning_attempts a
   where a.user_id=new.user_id and a.activity_id=q.activity_id
   and a.content_version=q.content_version and a.question_id=q.question_id
   order by a.received_at desc,a.attempt_id desc limit 1),false)
 ) then
  raise exception 'Review the required study questions first' using errcode='23514';
 end if;
 new.reviewed_at := clock_timestamp();
 return new;
end $$;
revoke all on function hub_learning_internal.validate_review() from public, anon, authenticated;
create trigger learning_validate_review before insert on public.learning_reviews
 for each row execute function hub_learning_internal.validate_review();

-- One compact owner-only snapshot; raw attempts are not downloaded in bulk.
create function public.learning_snapshot() returns jsonb
 language sql stable security invoker set search_path = '' as $$
 with own as (
  select * from public.learning_attempts where user_id=(select auth.uid())
 ), grouped as (
  select activity_id,content_version,question_id,count(*) as attempt_count,
   count(*) filter (where not correct) as missed_count,
   min(received_at) as first_received_at,max(received_at) as latest_received_at
  from own group by activity_id,content_version,question_id
 ), firsts as (
  select distinct on (activity_id,content_version,question_id)
   activity_id,content_version,question_id,selected_option as first_choice,correct as first_correct
  from own order by activity_id,content_version,question_id,received_at,attempt_id
 ), latest as (
  select distinct on (activity_id,content_version,question_id)
   activity_id,content_version,question_id,selected_option as latest_choice,correct as latest_correct
  from own order by activity_id,content_version,question_id,received_at desc,attempt_id desc
 ), summaries as (
  select g.*,f.first_choice,f.first_correct,l.latest_choice,l.latest_correct
  from grouped g join firsts f using(activity_id,content_version,question_id)
  join latest l using(activity_id,content_version,question_id)
 )
 select jsonb_build_object(
  'questions',coalesce((select jsonb_agg(to_jsonb(s) order by activity_id,content_version,question_id) from summaries s),'[]'::jsonb),
  'reviews',coalesce((select jsonb_agg(jsonb_build_object('activity_id',r.activity_id,
   'content_version',r.content_version,'reviewed_at',r.reviewed_at) order by r.activity_id,r.content_version)
   from public.learning_reviews r where user_id=(select auth.uid())),'[]'::jsonb)
 )
$$;
revoke all on function public.learning_snapshot() from public, anon, authenticated;
grant execute on function public.learning_snapshot() to authenticated;

-- Apply the matching catalog-seed.sql in the SAME approved migration transaction.
-- This draft intentionally leaves COMMIT to the combined generated proposal.
