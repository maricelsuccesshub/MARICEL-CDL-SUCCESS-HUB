# Development environment

The development branch uses the separate Free-plan Supabase project maricel-cdl-success-hub-dev (gndommbrsfvejocipukj). Production project and main are unchanged. member-config.js contains only its publishable key; no production fallback exists.

## Completed
- Created member_profiles and member_progress with owner-only RLS and minimal grants.
- Ran database tests for owner read/write, cross-user read/update denial, forged owner insert rejection, and anonymous denial. Temporary fixtures were rolled back; both tables remain empty.
- Supabase security advisor: no findings.
- Seven simulated authentication tests pass: node --test tests/member-auth.test.cjs.
- Browser preview renders the signed-out gate and signup controls.
- Auth settings endpoint confirms email signup enabled and automatic email confirmation disabled.

## Preview and remaining setup
The managed internal preview is http://terminal.local:4173/ while its preview process is running. It is a temporary development preview, not a hosted production deployment or a public link. For a Mac checkout, run python3 -m http.server 4173 --bind 127.0.0.1 and open http://localhost:4173/index.html.

The Supabase connector cannot update Auth URL configuration. The dashboard browser requires user sign-in. Configure the exact URL used for testing as Site URL and redirect allowlist entry in the DEVELOPMENT project only. Use http://terminal.local:4173/ for the current managed preview, or http://localhost:4173/index.html for a local checkout. Do not add broad wildcard redirects or change production settings.

An authorized inbox and successful email delivery are still needed to test signup, confirmation, login, password recovery, and login with the changed password end to end. Hosted default email delivery may require an authorized sender/inbox or custom SMTP. Never disable confirmation to bypass that test.

## Pending acceptance tests
Register two test members using authorized inboxes. Confirm no access before verification. Follow confirmation email, sign in, save and reload profile and progress, and verify member B cannot see member A's entries through the actual Data API. Request recovery, follow email, change password, and test old/new credentials. Check expired links, resend, offline errors, mobile layout, and shared-device sign-out.

Only the member schema has been provisioned in the new database. Safe Haven's separate feature table is not yet provisioned here. No production data was copied. Practice Yard, Backing Trainer, Route Planner, and lesson code remain present; their authenticated browser smoke tests are pending. No Training Academy section exists under that name in the reviewed development branch.

Static source/training assets are public; the interface gate is not content confidentiality. Private member data is enforced by database RLS. No production release or paid subscriptions are authorized.
