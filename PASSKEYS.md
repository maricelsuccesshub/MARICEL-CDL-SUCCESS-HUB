# Optional website passkeys — prepared for version 30

Scope: the existing website only. Native iOS/Android development is deferred.
Existing member IDs, passwords, RLS, profiles, progress and Community roles are preserved.
No schema, SMTP, paid-plan or production-project changes were made.

## Current activation status

**Activated by Coach Maricel and independently verified:** the beta Auth settings
endpoint reports `passkeys_enabled: true`. An anonymous authentication-options
request succeeds and returns RP ID `maricelcdlsuccesshub.com`. No credential was
created and no real account was changed in that check. The generated challenge
was not used, logged or persisted. Real-device enrollment and verification are
still pending. No Supabase dashboard sign-in is needed here.

## Dashboard configuration for the existing beta project

Project: `gndommbrsfvejocipukj` only. Do not change `fmyaxdzonqrgsyzizixe`.
In Authentication → Passkeys (if grouped under configuration, locate Passkeys):

- Enable Passkey authentication: on.
- Relying Party Display Name: `Maricel CDL Success Hub`.
- Relying Party ID: `maricelcdlsuccesshub.com`.
- Relying Party Origins: `https://maricelcdlsuccesshub.com`.

Inspect any existing configuration before changing it; do not overwrite a
nonempty RP ID if members already have credentials. The original chatgpt.site
host is a different domain; password login stays available there, and passkey
controls direct members to the custom domain. Do not change the RP ID after
enrollment because that invalidates existing passkeys.

After saving, refresh the website. The client fetches public Auth settings on
startup and on My Profile → Security → Refresh my passkeys. Actions become
available only when the backend reports enabled and the browser supports WebAuthn
on the exact configured custom domain. A settings/network failure disables only
passkey actions, not email/password login. If the panel is unavailable on the
current project/version, stop and report that provider limitation; do not buy an
upgrade or invent a database-side workaround.

## Implementation

- `dist/vendor/supabase-2.105.0.js`: pinned, locally hosted official UMD build
  downloaded from jsDelivr's exact npm version. SHA-256:
  `24e8c00dc25da420ee741068b60bcdb5f62cb3598d8834058acf37ec6ee1a724`.
  Official upstream MIT license accompanies it. Existing version was 2.57.4;
  current Supabase docs require at least 2.105.0 for this experimental API.
- Client explicitly opts into `auth.experimental.passkey`.
- Login: optional Sign in with a passkey, separate from password/signup/recovery.
- My Profile → Security: add, refresh list, rename, remove with confirmation.
- Server-verified owner checked before management; no admin passkey API or
  secret key. The SDK handles the WebAuthn challenge and server verification.
- Recovery mode hides passkey sign-in. Account resets clear credential names,
  abort pending ceremonies and ignore late results. Concurrent credential
  actions are blocked; password form submission is blocked while a passkey
  action is underway. Password fallback remains available afterwards.
- UI uses text nodes for server-provided passkey names; no credential IDs or
  challenges are written to localStorage or logs by this module.
- Removal revokes registration with the Hub, not the password manager entry.

## Verification

84 automated tests pass, including nine passkey-specific tests and password
clearing after account entry. These cover disabled/unsupported/wrong-domain
clients, owner mismatch, optional enrollment, cancellation, verified session
entry, abort/late-result isolation, text-safe rendering, rename/removal and
cancelled removal. Existing 74 tests continue to pass.

Synthetic browser adapter verified My Profile controls, add/list/rename/remove
feedback and 375px iframe layout (360px content/scroll width; no overflow).
The adapter never used a real account, Auth configuration or device credential.
The pinned SDK was loaded and its register/sign-in/list methods verified present.
The real public settings request confirmed disabled initially, then confirmed enabled after the owner activated it. A challenge-options request confirmed the correct RP ID.

Still required after backend activation: a real member on their own device must
add a passkey, sign out, sign in with it, rename/remove it, and confirm password
and recovery access still work. Also test cancellation, refresh and unsupported
browsers on actual iPhone/Android devices. Never create a personal passkey on an
agent-controlled device or claim synthetic tests establish real-device success.

## Rollback

Version 29 remains the pre-passkey website checkpoint, with a verified backup.
If rolling back the website, review newer changes first. Do not delete existing
passkeys or change RP ID as a rollback shortcut. Website rollback and disabling
backend passkeys are separate operations. Password login remains the fallback.

## Primary references checked October 28, 2026

- https://supabase.com/changelog.md — passkey beta announcement and relevant changelog review.
- https://supabase.com/docs/guides/auth/passkeys — configuration, SDK minimum, enrollment/sign-in/management, experimental status.
- https://supabase.com/docs/reference/javascript/auth-passkey — Auth passkey API.
