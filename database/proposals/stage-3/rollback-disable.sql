-- PROPOSAL ONLY; separate explicit approval required before execution.
-- Data-preserving rollback after restoring the exact Version 64 website package.
begin;
revoke all on public.learning_attempts,public.learning_reviews,
 public.learning_activities,public.learning_questions from public,anon,authenticated;
revoke all on function public.learning_snapshot() from public,anon,authenticated;
commit;
-- Keep RLS enabled and retain all new records. Do not DROP/TRUNCATE tables.
-- No existing account, private-note, Community or donation object is changed.
