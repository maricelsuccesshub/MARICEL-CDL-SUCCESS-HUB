# Development environment

The development branch uses the separate Free-plan Supabase project maricel-cdl-success-hub-dev (gndommbrsfvejocipukj). Production project and main are unchanged. member-config.js contains only its publishable key; no production fallback exists.

## Completed
- Created member_profiles and member_progress with owner-only RLS and minimal grants.
- Created safe_havens with signed-in member read/insert access, submitter ownership checks, and no anonymous access.
- Ran database tests for owner read/write, cross-user read/update denial, forged owner/submitter rejection, shared member Safe Haven reads, and anonymous denial. Temporary security-test fixtures were rolled back.
- Supabase performance advisor: no actionable findings; the new Safe Haven submitter index is reported as unused because the table has no live rows yet.
- Seven simulated authentication tests pass: node --test tests/member-auth.test.cjs.
- Live Mac preview passed registration, required email verification, login, private profile save/reload, private progress save/reload, sign-out/relogin persistence, recovery email, password update, old-password rejection, and new-password login.
- Recovery mode now hides unrelated sign-in, forgot-password, resend, and email controls.
- Auth logs confirm successful verification, recovery, password update, logout, and subsequent password login.
- Auth settings confirm email signup enabled and automatic email confirmation disabled.

## Preview
For a Mac checkout, run python3 -m http.server 4173 --bind 127.0.0.1 and open http://localhost:4173/index.html. The Supabase development project's Site URL and exact redirect allowlist entry are configured for http://localhost:4173/index.html. This is a local preview, not a hosted production deployment or public link.

## Remaining pre-production checks
The database RLS test used two simulated authenticated members and confirmed cross-user isolation. A second real inbox test remains useful before production, along with expired-link, resend, offline, mobile-layout, and shared-device checks. Practice Yard, Backing Trainer, Route Planner, and lesson code remain present. No section named Training Academy exists in the reviewed development tree; identify its intended source before claiming that exact section was tested.

Supabase reports one security advisory: leaked-password screening is disabled. Supabase documents this feature as Pro-only. The Free-plan app enforces an eight-character browser minimum and advises members not to reuse passwords; review upgrading or stronger server-side password settings before public launch.

Static source/training assets are public; the interface gate is not content confidentiality. Private member data is enforced by database RLS. No production release or paid subscriptions are authorized.
