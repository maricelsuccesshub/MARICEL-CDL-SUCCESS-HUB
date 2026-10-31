-- NOT RUN. After database approval, run only on gndommbrsfvejocipukj.
-- Synthetic users and learning records only; every fixture rolls back.
begin;
insert into auth.users(id,aud,role,email,email_confirmed_at) values
('33000000-0000-4000-8000-000000000001','authenticated','authenticated','learning-a@example.invalid',now()),
('33000000-0000-4000-8000-000000000002','authenticated','authenticated','learning-b@example.invalid',now()),
('33000000-0000-4000-8000-000000000003','authenticated','authenticated','learning-m@example.invalid',now());
insert into hub_private.moderators(user_id) values('33000000-0000-4000-8000-000000000003');
set local role authenticated;
select set_config('request.jwt.claims','{"sub":"33000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
insert into public.learning_attempts(user_id,attempt_id,activity_id,content_version,question_id,selected_option)
values('33000000-0000-4000-8000-000000000001','33000000-0000-4000-8000-000000000011','decisions.closed-exit',1,'scenario',0);
do $$begin
 if not exists(select 1 from public.learning_attempts where not correct) then raise exception 'FAIL owner read/grade';end if;
 begin
  insert into public.learning_reviews(activity_id,content_version) values('decisions.closed-exit',1);
  raise exception 'FAIL review accepted after wrong answer';
 exception when check_violation then null;end;
 begin
  insert into public.learning_attempts(attempt_id,activity_id,content_version,question_id,selected_option)
  values(gen_random_uuid(),'unknown.topic',1,'scenario',1);
  raise exception 'FAIL invalid activity';
 exception when check_violation then null;end;
 begin
  insert into public.learning_attempts(attempt_id,activity_id,content_version,question_id,selected_option)
  values(gen_random_uuid(),'decisions.closed-exit',1,'unknown',1);
  raise exception 'FAIL invalid question';
 exception when check_violation then null;end;
 begin
  insert into public.learning_attempts(attempt_id,activity_id,content_version,question_id,selected_option,received_at)
  values(gen_random_uuid(),'decisions.closed-exit',1,'scenario',1,'2000-01-01');
  raise exception 'FAIL client timestamp permitted';
 exception when insufficient_privilege then null;end;
 begin
  update public.learning_questions set correct_option=0;
  raise exception 'FAIL catalog write permitted';
 exception when insufficient_privilege then null;end;
 begin
  insert into public.learning_attempts(user_id,attempt_id,activity_id,content_version,question_id,selected_option)
  values('33000000-0000-4000-8000-000000000002',gen_random_uuid(),'decisions.closed-exit',1,'scenario',1);
  raise exception 'FAIL forged owner';
 exception when insufficient_privilege then null;end;
 begin
  insert into public.learning_attempts(attempt_id,activity_id,content_version,question_id,selected_option)
  values(gen_random_uuid(),'decisions.closed-exit',999,'scenario',1);
  raise exception 'FAIL invalid version';
 exception when check_violation then null;end;
 begin
  insert into public.learning_attempts(attempt_id,activity_id,content_version,question_id,selected_option)
  values(gen_random_uuid(),'decisions.closed-exit',1,'scenario',99);
  raise exception 'FAIL invalid answer';
 exception when check_violation then null;end;
 begin
  insert into public.learning_attempts(attempt_id,activity_id,content_version,question_id,selected_option,correct)
  values(gen_random_uuid(),'decisions.closed-exit',1,'scenario',0,true);
  raise exception 'FAIL client grade permitted';
 exception when insufficient_privilege then null;end;
 begin
  update public.learning_attempts set user_id='33000000-0000-4000-8000-000000000002';
  raise exception 'FAIL owner reassignment permitted';
 exception when insufficient_privilege then null;end;
 begin delete from public.learning_attempts;raise exception 'FAIL delete permitted';
 exception when insufficient_privilege then null;end;
end $$;
insert into public.learning_attempts(attempt_id,activity_id,content_version,question_id,selected_option)
values('33000000-0000-4000-8000-000000000012','decisions.closed-exit',1,'scenario',1);
-- Same event retried: no second result and no inflated attempt count.
insert into public.learning_attempts(attempt_id,activity_id,content_version,question_id,selected_option)
values('33000000-0000-4000-8000-000000000012','decisions.closed-exit',1,'scenario',1)
on conflict(user_id,attempt_id) do nothing;
insert into public.learning_reviews(activity_id,content_version) values('decisions.closed-exit',1);
do $$declare s jsonb;begin
 s:=public.learning_snapshot();
 if (s->'questions'->0->>'attempt_count')::integer<>2
 or (s->'questions'->0->>'first_correct')::boolean
 or not (s->'questions'->0->>'latest_correct')::boolean
 or jsonb_array_length(s->'reviews')<>1 then raise exception 'FAIL first/latest/review summary';end if;
end $$;
select set_config('request.jwt.claims','{"sub":"33000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
do $$begin
 if exists(select 1 from public.learning_attempts) or exists(select 1 from public.learning_reviews)
 or public.learning_snapshot()<>'{"questions":[],"reviews":[]}'::jsonb then raise exception 'FAIL foreign results visible';end if;
end $$;
insert into public.learning_attempts(attempt_id,activity_id,content_version,question_id,selected_option)
values('33000000-0000-4000-8000-000000000012','decisions.closed-exit',1,'scenario',1);
select set_config('request.jwt.claims','{"sub":"33000000-0000-4000-8000-000000000003","role":"authenticated"}',true);
do $$begin
 if exists(select 1 from public.learning_attempts) or exists(select 1 from public.learning_reviews)
 then raise exception 'FAIL moderator exception';end if;
end $$;
reset role;
set local role anon;
select set_config('request.jwt.claims','{}',true);
do $$begin
 begin perform public.learning_snapshot();raise exception 'FAIL anonymous RPC';exception when insufficient_privilege then null;end;
 begin perform 1 from public.learning_attempts;raise exception 'FAIL anonymous read';exception when insufficient_privilege then null;end;
 begin insert into public.learning_reviews(activity_id,content_version) values('decisions.closed-exit',1);raise exception 'FAIL anonymous write';exception when insufficient_privilege then null;end;
end $$;
reset role;
rollback;
select 'PASS only if all assertions executed successfully; synthetic fixtures rolled back.' as result;
