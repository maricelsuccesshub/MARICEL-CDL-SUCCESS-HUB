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

## Member navigation reorganization

- Home: today's lesson, latest private progress, coaching focus, and privacy reminder.
- Training: Lessons, Practice Yard, Backing Guides, and Safety & Resources.
- Trip Tools: Plan My Route, Find Safe Parking (shared member locations), and My Facility Notes (private account storage).
- My Notebook: existing browser-local notes, explicitly labeled as device-only and potentially visible to anyone using that browser. This is not a member community feed.
- My Account: My Progress, My Profile, and About the Hub.

Desktop uses a grouped sidebar and balanced content columns. Phones use an expandable menu that closes on selection and Escape. Active pages are announced with aria-current; form labels are associated with inputs, and optional coordinate fields and sharing forms are collapsible. Practice exercises scroll into view when selected. The placeholder Admin page has no member navigation entry.

Validation: all 11 automated checks pass, including auth, sign-out cleanup, navigation grouping, trainer steering, asset availability, and separate Safe Haven/facility storage. Browser QA opened all 12 member pages on desktop and at a 375px content width without horizontal overflow; the phone menu closed after each selection, and both original truck assets loaded. Browser layout checks used an isolated local fixture with synthetic member data and no Supabase calls; real email delivery and database write flows were not repeated for this presentation change. Fixture files are not committed.

Changes are saved only to development. Production, Supabase configuration and database records are unchanged. No deployment was performed.

## Hosted driver testing preview

- Public test-site URL: https://maricel-driver-test.cezle-photog-5587.chatgpt.site/
- Sites project: appgprj_6ae16c72c8508191bf44f59e6b344eaf. It hosts the reorganized development app with a driver-testing banner and the separate development Supabase project. The main GitHub Pages site and production database are unchanged.
- The development project's Site URL is the hosted origin above. Exact redirect allowlist entries include that origin, its /index.html path, and the existing http://localhost:4173/index.html Mac preview.
- Brevo Free custom SMTP is configured in development Supabase, using smtp-relay.brevo.com:587 and the verified account sender. No SMTP secret is stored in application source or this guide.
- Delivery check: a password-recovery email for the existing verified development member was sent through Supabase; Brevo logged Sent and Delivered on October 27, 2026. No password was changed. Full hosted new-driver signup and verification-link completion still need a tester to complete them with their own inbox.
- The configured key was supplied through chat and should be replaced with a fresh key via direct secure entry, then revoked in Brevo. Never paste SMTP keys into chat, source control, or frontend configuration.
- Visitors use their own test accounts. Profiles, progress, and facility notes remain owner-private under RLS; Safe Haven locations are shared with signed-in members. My Notebook remains browser-local.
- Future development branch changes do not automatically update this hosted Sites snapshot. Publish the updated reviewed source to the existing Sites project when requested.
