# Stage 3 preparation — private persistent study progress

Prepared after Stage 2 passed 188 regression tests on October 31, 2026. **Design only; not implemented or deployed.**

## Purpose and records

Add owner-private study history without replacing existing private notes or rewriting Community data. Use separate progress and attempt records with stable activity IDs and content versions. Track the latest reviewed lesson state, initial/latest quiz attempts, attempt times and topic-level review recommendations. Distinguish self-reported lesson review from knowledge-check results. Retrying a question must not inflate a claim of mastery. Do not label results as certification, ELDT credit, test eligibility or proof of real-world driving competence.

Keep recommendations understandable: link missed concepts back to the existing lesson, explain why the answer matters, and allow another attempt. Show saved status only after a successful server response; handle failures visibly without discarding the member's current work.

## Privacy and integrity design

- Use only the existing live project `gndommbrsfvejocipukj`. Leave `fmyaxdzonqrgsyzizixe` untouched.
- Enable row-level security on every new result/progress table, with minimal explicit grants and authenticated owner predicates using `(select auth.uid()) = user_id`.
- SELECT/INSERT/UPDATE must be restricted to the owner; UPDATE requires both USING and WITH CHECK and an appropriate SELECT policy. If deletion is offered, restrict it to the same owner. No anonymous access, Community listing or moderator read entitlement.
- Validate known activity IDs, content versions, answer bounds and result shape server-side. Do not trust client-submitted ownership or totals. Do not authorize from editable user metadata or use a privileged client key.
- Read and write through the authenticated member session. Clear displayed state on sign-out/account changes and discard late asynchronous responses from an old identity. Do not store answer history in navigation storage.
- Preserve existing member accounts, private notes, discussions and donation settings. Do not change paid plans.

## Implementation sequence after separate approval

1. Inspect the current progress schema and required app calls narrowly, without repeating a full security audit. Refresh Supabase documentation/changelog before implementation.
2. Prepare an additive migration, least-privilege grants and owner policies, plus a rollback plan. Keep existing notes intact.
3. Add a small progress adapter with account-generation guards, idempotent lesson updates and bounded attempt records.
4. Connect explicit lesson-review actions and scenario submissions; add a private progress view with saved results, completion indicators and recommended reviews.
5. Test before publication, with rollback-only database checks where possible. Document any real-account test still needed.

## Required acceptance tests

- Owner A can read/write only A's records; Owner B can read/write only B's; anonymous access fails.
- Forged owner IDs, owner reassignment, invalid activity IDs/versions and out-of-bounds answers are rejected.
- Moderation status does not grant result access. Existing Community privacy remains intact.
- Refresh restores the correct owner's saved progress; sign-out and account switching clear stale state; delayed prior-owner responses cannot populate the new owner's screen.
- Retries preserve meaningful first/latest history without inflating completion or competence claims. Failed saves do not show as saved.
- Existing lessons, authentication, private notes, Community, donations and trip navigation pass regression tests.

Reference: Supabase RLS documentation reviewed for this design: https://supabase.com/docs/guides/database/postgres/row-level-security . No database policy has been applied or tested by this planning document; owner-only persistence must be demonstrated during Stage 3 implementation.
