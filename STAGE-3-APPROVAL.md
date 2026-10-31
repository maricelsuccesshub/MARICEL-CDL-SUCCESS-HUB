# Stage 3 — exact proposal for approval

Prepared October 31, 2026 for Coach Maricel. **Not applied, not deployed.**

The accepted website baseline is Version 64 / Sites commit `b758ca3d2a55c7aa0e1813116ef59ffd538a5b92`; the matching GitHub Stage 2 review commit is `1501cbc0395bfd8a0feb7a2e0a32d62e58e5ce75`. This package adds internal proposal files only. No file in `dist/` is changed.

## Member experience to implement after approval

- Keep the existing **My Progress** page and private practice-note form/history. Add **Private Learning Progress** above the existing notes, with reviewed topics, first/latest knowledge-check results and links to recommended reviews.
- Keep existing lessons, illustrations, answer choices and explanations. Add saved-status indicators and reviewed badges to the current lesson cards; no redesign or replacement course.
- Continue the existing explicit **Mark this topic reviewed** actions. Add equivalent explicit review actions to guides that currently lack one, enabled after their required study questions. Merely opening a page, clicking Next or answering one question does not complete a whole topic.
- Save each submitted study answer with its activity/question/version and server-received time. Keep first and latest results separate; preserve missed-question history across retries. A correct retry must not rewrite the first attempt.
- Show **Practice recommended** for a latest incorrect answer. Show **Not yet attempted** for missing checks. Previously missed but now correct questions remain available under **Revisit later**. Link each recommendation to its original topic, explanation and question. A historic Reviewed mark can coexist with a later recommendation to practise again.
- Count one reviewed topic per content version; do not count retries as extra completed lessons. Show historic results separately when a question's meaning or answer changes, rather than silently carrying forward a review mark to new content.
- Use **Saving…**, **Saved privately**, and **Not saved — retry** status messages. Immediate study feedback remains available if a save fails, but it must not claim the result was stored.
- Replace the tracked modules' “reset on refresh” wording with: **“Your signed-in study answers and review marks are saved privately to your account. They record screen study only, not inspection findings or driving competence. You can retry; first and latest results are shown separately.”** Retain all existing training, state/equipment, parked-use, ELDT and licensing limits.

## Exact coverage

The generated `database/proposals/stage-3/catalog.json` inventories **52 activities and 145 question cases** from the accepted source. It includes 6 Backing Fundamentals topics, 6 Road Readiness topics, 7 CDL knowledge topics, 10 pre-trip zones, 1 air-brake guide with 5 checks, 6 in-cab sections, 3 safety decisions, 10 backing-guide variants and 3 Practice Yard tests. Straight/offset directional variants are separate catalog entries; existing diagrams and question content remain unchanged. Practice Yard initial drift and aligned-state choices are tracked separately, not treated as driving measurements.

Scenario questions in CDL/Road Readiness are saved but supplemental; their existing knowledge checks remain the review gate. Other activities use their own required questions. Questions get stable IDs and content version 1 in this first release. Question order/meaning changes require an explicit version update. No past visit-only answers are invented or backfilled. Existing private notes are not converted into scores.

## Database objects proposed

Only project **`gndommbrsfvejocipukj`** is in scope. **`fmyaxdzonqrgsyzizixe` must not be accessed or changed.**

| New object | Stored information | Member access |
| --- | --- | --- |
| `public.learning_activities` | Stable topic ID/version, module, title, content hash | Authenticated read-only; catalog has no member data |
| `public.learning_questions` | Original prompt/options, answer key, explanation, review requirement | Authenticated read-only; no member data |
| `public.learning_attempts` | Owner UUID, unique attempt UUID, topic/version/question, selected option, server-computed correctness/time | Owner SELECT and INSERT only |
| `public.learning_reviews` | Owner UUID, topic/version, first reviewed timestamp | Owner SELECT and INSERT only |
| `public.learning_snapshot()` | Compact first/latest attempt summaries, counts and review marks | Authenticated SECURITY INVOKER; owner RLS still applies |
| `hub_learning_internal.grade_attempt()` | INSERT trigger validates question/choice, computes correctness and server timestamp | Private trigger function, SECURITY INVOKER |
| `hub_learning_internal.validate_review()` | INSERT trigger requires latest answers to all required questions to be correct | Private trigger function, SECURITY INVOKER |

The complete transaction is **`database/proposals/stage-3/proposed-change.sql`**, generated from `schema.sql` and the original catalog by the supplied local build scripts. It creates the new objects, enables/forces RLS, explicitly restricts grants, seeds the catalog, and commits. These are approval drafts, not files in an auto-applied migration folder. The Supabase CLI is not installed here; the approved deployment will use the migration tool with an explicit descriptive migration name after a fresh conflict check. Do not execute `schema.sql` by itself; the combined proposal is the approval unit.

No existing table, existing policy, Community RPC, Auth configuration, Storage bucket, Realtime publication, billing plan or donation setting is changed. Read-only metadata inspection confirmed `member_progress` already has RLS enabled and authenticated owner-only SELECT/INSERT policies; that table remains unchanged.

## Exact privacy rules

For both member-result tables:

```sql
-- SELECT policy, TO authenticated:
USING ((SELECT auth.uid()) = user_id)
-- INSERT policy, TO authenticated:
WITH CHECK ((SELECT auth.uid()) = user_id)
```

There are **no member UPDATE or DELETE grants/policies**. Attempts are append-only; the topic/version review primary key makes a repeated review idempotent. Therefore a member cannot reassign an owner, rewrite grades/timestamps or erase another member's history. INSERT column grants exclude correctness and timestamps. Trigger validation derives them from the catalog. Invalid activity/version/question/answer combinations are rejected. Unique attempt IDs are scoped to the owner and reused only when retrying the same failed network submission; a retry cannot count twice.

Anonymous requests have no table or snapshot-function privileges. Other members and Community moderators receive no special result access. Display names, emails, private note text, locations and Community content are not copied into these tables. This is server-stored account data, not end-to-end encryption: authorized backend administrators can still access stored records. No public leaderboard, directory, analytics export or third-party learning service is added.

Proposed retention: retain study history while the account exists; deletion of the Auth account cascades only its new learning rows. Rollback does not purge history. Any separate bulk deletion or change to retention requires explicit approval. The first release does not add an end-user history-deletion button. No automatic paid upgrade is authorized.

## Client integration contract

After database approval, add `dist/learning-progress.js` and a small matching stylesheet, plus a generated client catalog manifest. Integrate narrowly into `index.html`, `lessons.js`, `road-readiness.js`, `cdl-knowledge.js`, `pretrip.js`, `air-brakes.js`, `incab.js`, `learning-paths.js`, `backing-guides.js`, `remaining-backing.js` and `yard-decisions.js`. Update only changed asset cache URLs. Extend the six-step pathway with saved review counts without changing its navigation. Add the exact saved-data disclosure above to Disclaimer & Source Credits.

1. Use the existing member client and verified member identity. No new client, privileged key, Auth setting or paid dependency.
2. Capture owner ID and session-generation token before every read/write. Send that captured owner ID with INSERT so an account change cannot attribute an old pending answer to a new owner. Recheck identity before sending and after every asynchronous response.
3. On identity change/sign-out: synchronously clear the new cache, banners, recommendations and module hydration; increment its generation; cancel/discard pending work. Reuse the existing reset hooks. Re-render from the new owner's results only after its request is acknowledged.
4. Never put results/answer queues in URL parameters, shared browser storage or the navigation/session-storage record. Pending queues live in memory, belong to one owner/generation and never replay after a new account signs in.
5. Serialize saves per question. A network retry reuses the same attempt UUID and verifies the existing payload matches before treating a duplicate as saved. Never update an existing attempt. Wait for answer acknowledgements before submitting a review mark.
6. Read one compact snapshot per owner/sign-in, then refresh after acknowledged saves; no continuous polling. Use stable topic/question IDs, not a currently selected UI index, in callbacks. Ignore late hydration when the member has already changed that question during loading.
7. Scope history/recommendations to the displayed content version. Keep first/latest status and review marks distinct. Do not let first-pass results change after a retry.
8. Preserve existing private-note drafts, form submission, history and dashboard note summary. The new adapter never writes `member_progress`.

## Validation gates

Prepared now: **191 automated tests pass** (188 existing regressions plus 3 static proposal/catalog/rollback checks). Catalog generation validates all answer indices, required question sets and stable unique keys. These checks **do not prove RLS runtime behavior or SQL execution**. No new SQL has been executed.

After explicit database approval, run `privacy-test.sql` in a rollback-only transaction with synthetic users A, B and a synthetic moderator; never change real member records. Check owner reads/inserts, foreign owner denial, unknown activity/version/question IDs and bounds, forged grades/timestamps, catalog-write and reassignment/deletion denial, anonymous denial, no moderator exception, first/latest retention, duplicate-attempt idempotency and review gating. Exercise concurrent-request behavior during adapter integration before declaring the tests complete. Inspect only the new objects' RLS/grants/functions afterward; no repeat full security audit.

Before publishing client integration: test delayed reads/writes after sign-out and A→B switches, token refresh for the same owner, save failures, retries/double clicks, unknown versions, empty/new accounts, refresh/cross-visit persistence and untouched private notes. Re-run existing regression tests, then a non-destructive signed-in website check. Publication remains separately approved.

## Rollback and release sequence

1. Keep the exact Version 64 deployment/source available. Before applying the approved migration, recheck the live source and new-object name conflicts. Stop if either changed unexpectedly.
2. Apply the single additive transaction only after approval. A transaction error rolls back the new objects and catalog together; do not retry with RLS disabled or broader grants.
3. Run the rollback-only privacy tests before releasing UI. On a failed test, stop release and use the separately approved containment script `rollback-disable.sql` to revoke new table/function access. Preserve all rows; report the failure.
4. Prepare/test the website integration for a separate publication approval. Do not publish on database approval alone.
5. If a later published Stage 3 needs rollback, restore the exact Version 64 website package first. Then, if approved, run `rollback-disable.sql`; it revokes new member access and retains all new study data. Existing accounts, private notes, discussions and donations remain untouched.
6. Do not DROP/TRUNCATE tables or restore the entire database. Resuming Stage 3 requires a reviewed grant-restoration step and retests, not blindly rerunning CREATE statements.

## References and checks

Supabase's current RLS documentation was consulted through its documentation search tool on October 31, 2026: https://supabase.com/docs/guides/database/postgres/row-level-security . Its guidance supports owner predicates, explicit table grants and invoker functions. The Markdown changelog endpoint could not be retrieved by the web tool; the official HTML changelog was reviewed instead: https://supabase.com/changelog . The TLS cipher retirement notice for November 10 was checked; this proposal changes no TLS setting or SDK and adds no old client requirement. UTC timestamps are stored, without the affected named-zone SQL conversions. This is not a database-upgrade or general security-audit proposal.

## Approval requested

Approve this exact additive schema/catalog, owner-only policies, proposed data retention, and rollback-only synthetic database test scope before database execution. Also approve the described client integration work; retain a separate approval gate for publication. If the tested implementation needs a different privacy rule, schema or data migration, bring that difference back for review before applying it.
