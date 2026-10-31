# Stage 3 implementation review — not published

Prepared October 31, 2026. Approved proposal: GitHub commit `a7b60b2830fc67ec787edb545489788e8d384e93`. Live website remains **Version 64**. This client implementation is on a separate review branch; no Sites version was saved or deployed.

## Database result

Only Supabase project `gndommbrsfvejocipukj` was accessed. Read-only conflict checks found none of the six proposed schema/table/function names in use. The three approved local files (proposal, combined SQL and privacy tests) matched the GitHub approval blobs before execution.

Applied migration **`20261031174709_stage3_private_learning_progress`** successfully. The exact combined SQL SHA-256 is `c1b4447e8f63c3f158d57c86a0ddf206a4e4ca50c9caadee1efb39d5e564ff00`. No schema, retention or access-rule changes were made beyond that reviewed SQL. No existing table, Auth setting, Storage setting, Community RPC, billing plan or donation destination was changed.

The approved `privacy-test.sql` executed successfully and rolled back. Its synthetic tests covered owner reads/inserts, foreign result denial, forged owners/grades/timestamps, invalid activity/version/question/answer bounds, catalog-write denial, ownership reassignment/deletion denial, anonymous access denial, no Community moderator exception, first/latest history, review gating and duplicate-attempt idempotency.

Post-test verification: **52 catalog activities, 145 questions, zero attempt rows, zero review rows, zero synthetic Auth users remaining**. All four new tables have RLS enabled and forced; the snapshot function is SECURITY INVOKER. No privileges were expanded to make tests pass. No real member's result, private note or Community contribution was read or modified during these tests.

## Client review build

- Adds generated `learning-catalog.js`, owner-scoped `learning-progress-core.js`, existing-screen bindings in `learning-progress.js`, and a small matching stylesheet.
- Adds **Private Learning Progress** above the existing private notes in **My Progress**. Existing note form/history and dashboard note summary remain intact.
- Adds private save-status panels, explicit review buttons and reviewed counts to the six-step pathway. Existing diagrams, lessons, answer options and explanations are retained.
- Captures results across the nine approved study areas, including directional backing variants and the Practice Yard's separate initial-drift/aligned cases.
- Shows first/latest answers and missed-attempt counts. Latest incorrect answers recommend practice; previously missed but now correct questions offer later review. Topic/question links reopen the existing lesson.
- Existing CDL/Road UI gates still require the scenario as well as both knowledge checks. This preserves the existing lesson behavior and is stricter than the approved database catalog's required-question subset; the catalog and database policy were not changed.
- Correct retries never replace first attempts. Repeated network submissions reuse an attempt UUID and verify an existing row before confirming a duplicate. Saves to different questions can proceed without overwriting each other's summaries.
- Failed saves and failed review marks show retryable status; no review mark is displayed as saved before server acknowledgement. A received answer with a failed summary refresh is identified separately.
- Sign-out/account switching synchronously removes progress panels, summaries and stored guide/exercise feedback. Late requests are checked against captured owner and generation; pending data is not replayed under another account. The captured owner ID is sent with every INSERT so RLS rejects a changed-session mismatch.
- No result or pending queue is placed in browser storage or URLs. No privileged client key, new Supabase client or continuous polling is introduced. Existing private notes are never written by the adapter.
- Retention is unchanged from the approved proposal: append-only attempts remain while the account exists; no automatic individual-attempt deletion is implemented. The existing training, ELDT, licensing, parked-use and competence limitations remain.

## Verification

**200 automated tests passed, 0 failed**, including the existing regression suite, approved catalog/proposal checks and nine new persistence tests. New tests cover first/latest retention across a fresh store, explicit review, failed saves/retries, lost-acknowledgement deduplication, late reads/writes after account changes, sign-out cache reset, concurrent answers, unknown content/invalid inputs, same-owner token refresh, unexpected identity mismatch, failed review marks and existing CDL gating.

Browser QA used the actual unpublished markup, modules and artwork with a clearly labeled synthetic member adapter. It did not connect to Supabase or create real learning records. Checks exercised real controls across Backing Fundamentals, Road Readiness, CDL knowledge, Pre-Trip, Air Brakes, In-Cab, Backing Guides, Safety Decision Practice and Practice Yard. Failed-save feedback and retry, wrong→correct history, explicit review, empty second-account results, cleared guide feedback and sign-out cleanup were verified. The phone-width frame measured **375px of content inside a 390px outer frame**, with no horizontal overflow on the checked navigation/progress panel. Temporary test pages were removed before the final regression run.

Limits: this is not a physical iPhone/Safari test or a real-account browser-to-Supabase end-to-end test of the new client. The actual database was tested with rollback-only SQL-role fixtures; client behavior was tested with controlled adapters. A separately authorized member/QA account smoke test remains appropriate before or immediately after approved publication. Do not claim that test is already complete. Prior visit-only quiz answers are not backfilled.

## Review and rollback

The live website and Sites publication source remain the accepted Version 64 build. GitHub main/development are not merged or updated. Only the review branch contains the new client work.

The approved data-preserving rollback script remains `database/proposals/stage-3/rollback-disable.sql`; it was not executed because privacy tests passed. It revokes access to new objects without deleting their records. If later publication is rolled back, restore the exact Version 64 website first, then use the approved containment script as appropriate. Never drop tables or restore the whole database to undo this additive feature.

**Separate publication approval is still required.**
