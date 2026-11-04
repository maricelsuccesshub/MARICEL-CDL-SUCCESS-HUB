# Development / production divergence — read-only snapshot

November 4, 2026, before this review commit:

- development: 0cf2c6073ee5f4e2339e68f01636ea9880c0ca68
- main: 3476c52a5d0c0a1011fe8f14e9d603af28d4f56b
- merge base: 5aa974650a42df6d8362323a401f605e407ad941
- development contains 85 commits absent from main; main contains 2 absent from development.
- Net tree comparison: 121 changed files, 10,461 insertions and 558 deletions. This review adds another development checkpoint; recalculate counts for any future release.
- Main-only commits include merge PR #1 and fd9e76b5fb8e0007a2a8479f53ff7fc18b526c31, “Add left-drift Test2 to straight back trainer.” The latter changes index.html (54 insertions, 85 deletions). Preserve and regression-test that live behavior.

Development also diverges in authentication configuration, locally pinned Supabase client, training/community features and SQL files. A wholesale merge would carry unrelated changes and risk overwriting main-only behavior. The development-only connection guard must not replace the working production environment configuration.

## Proposed future release strategy — not executed

1. Finish regulatory, instructor, isolation, connected synthetic and device/accessibility validation. Obtain explicit staging acceptance after personal student/instructor review.
2. With an approved release scope, prepare an isolated candidate based on the then-current main. Manually port only reviewed frontend changes; do not blindly cherry-pick the whole index.html diff. Preserve main-only training and current member compatibility.
3. Inventory each shipped file, configuration dependency and intended behavior. Keep mock tools/fixtures and development-only backend config out of the production payload. Existing SQL files are not approved migrations. These diagram/guide/report changes require no database migration.
4. Validate the exact candidate in an approved isolated environment, including legacy straight-back behavior, registration, access, navigation, mobile layout and rollback rehearsal. No production tests are authorized now.
5. Propose owner-controlled code/configuration backup, last known-good deployment identifier, release sequence, health checks and restoration instructions. No member export or backup was performed here.
6. Obtain separate explicit production authorization before any merge, deployment, configuration or migration. If approved later, use a narrowly scoped reviewed change, deployment restriction to the intended branch, protected main and human production approval. These safeguards are recommendations only; no settings were applied.
7. Roll back the exact website version and any separately approved configuration changes if release checks fail. No database rollback is anticipated without an independently approved migration.

No release branch, merge, production deployment, hosting/configuration change or production database access was performed.
