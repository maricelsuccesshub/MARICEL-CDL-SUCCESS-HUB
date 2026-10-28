# Member development status

Only the development Git branch is changed. Production database and main are unchanged.

## Preview

The development branch deliberately has empty credentials in member-config.js. There is no production fallback, including the Safe Haven endpoint. Configure ONLY a separate development Supabase project URL and publishable key. Never put a secret/service-role key here. Static training source is public; the UI gate does not make training assets confidential. Member data requires database RLS.

Run `python3 -m http.server 4173 --bind 127.0.0.1` from this directory, then open http://localhost:4173/index.html. This is a local preview, not public hosting. Do not change production GitHub Pages to serve development.

## Blocker

The connected Supabase project has no branches. Branch creation returned: "Branching is supported only on the Pro plan or above". No plan changes or database writes were made. Provide a separate development project (a free project if account quota permits), or choose a paid branch after reviewing its cost. The connector currently provides no Auth configuration update operation; configure the development project's Auth settings in its dashboard.

## Development Auth configuration

Enable email/password signup and Confirm email. Set Site URL to http://localhost:4173/index.html and add precisely that URL to the redirect allowlist. Leave production settings unchanged. Use default ConfirmationURL email links. Configure development email delivery with an authorized test inbox or SMTP sender; hosted default email restrictions may require SMTP. Keep password minimum at least 8 characters and enable available abuse protection.

Reproduce the existing member_profiles and member_progress schema with RLS before connecting the preview. Owner SELECT and INSERT must compare auth.uid() to user_id; UPDATE needs both USING and WITH CHECK ownership clauses. Grant only required table/sequence privileges, with no anonymous member access. Review the actual policies after setup. Do not copy production user data.

## Validation completed

`node --test tests/member-auth.test.cjs`: seven isolated tests pass for verification gating, signup redirect, recovery mode and update, generic reset response, signout cleanup, owner profile payload, preserved training sections and JavaScript syntax. These use simulated Auth responses, not live email delivery or database RLS enforcement.

Production read-only review: member_profiles and member_progress have RLS with owner policies; security advisor returned no findings. Legacy progress still allows public INSERT, and safe_havens allows anonymous SELECT/INSERT. These were not changed. Plan to close legacy anonymous progress writes before a later production release.

## Required live acceptance tests (pending)

Use two authorized development inboxes. Register A; verify no dashboard before email confirmation; follow the email and sign in. Save/reload profile and progress. Sign out and sign in as B; confirm A's data is absent. With B's token, attempt to read and update A's rows and insert a row owned by A; all must be denied or return no rows. Test signed-out member API requests too.

Request recovery for A, follow its email, set a new password, verify old password fails and new password succeeds. Test expired links, resend, reload, offline errors, and signout/relogin on shared devices. Inspect desktop and mobile screens. Smoke-test CDL Practice Yard, Backing Trainer, Route Planner, and lessons. No Training Academy section exists under that name in the reviewed development tree; locate its source before claiming it was tested.

Do not claim complete end-to-end testing until those steps pass. Do not merge or deploy to production without approval. No subscriptions are implemented.
