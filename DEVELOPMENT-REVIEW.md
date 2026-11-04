# Development checkpoint — November 4, 2026

Status: local mock review build. Not a production release and not a request for staging acceptance.

## Production boundary

- Work began from `development` commit `835c4a200c5c992d0fa5ffc5387f42f5915299ac`.
- The observed `main` head remained `3476c52a5d0c0a1011fe8f14e9d603af28d4f56b` during development.
- No production code, hosting, authentication, SMTP, database settings or member records were changed. No production tests or database/member reads were performed in this development phase.
- No Supabase database changes, migrations, real signups or emails were executed, including in development. No hosting resources or deployments were created.
- All browser data is synthetic and held in memory. Existing development member data was not used.

## Implemented and locally tested

| Area | Behavior |
| --- | --- |
| Registration | Dedicated confirmation screen; entered address displayed as text; Inbox/Spam/Junk/Promotions instructions; no delivery guarantee or account-existence disclosure. |
| Resend | In-flight exclusion, a shared 60-second browser cooldown across signup/recovery/resend, session-storage persistence, and longer feedback after server rate-limit errors. Browser cooldown is a usability measure, not server-side abuse protection. |
| Email correction | Restarts signup at the new address with a cleared password. Explicitly does not rename/delete the original unverified account; no admin account changes. |
| Verification | Checks only the current authenticated user and matching verified session. Explains different-browser verification. Invalid/expired/used links provide resend versus password-recovery instructions without echoing provider messages. |
| Curve awareness | Left/right curves; into-curve, flat and adverse cross slope; high/low labels; illustrative low-speed axle paths; lane-position comparisons; pauseable animation; loaded/empty discussion; relative v² demand; four retryable scenarios. No real safe-speed or rollover threshold is calculated. |
| Chain simulator | Two specific Peerless/SCC manual examples, correct/incorrect hook close-ups, orientation gate, five gated installation decisions per model, wheel schematic, model-specific tension/recheck guidance, axle identification and an Oregon placement exercise. |
| State guide | Searchable 50-state directory, claim-specific official links/dates, limited-review filters and explicit unverified fields. See CHAIN-SOURCE-REVIEW.md. Not a complete 50-state legal checklist. |
| Navigation | Three expandable topics inside the existing Training → Safety & Resources page. No additional primary navigation groups. |

## Files

- `index.html`: confirmation UI and auth handling, fail-closed development client initialization, trainer mounts and view-change hook.
- `member-confirmation.js`: email-request/cooldown controller.
- `member-config.js`: explicit local redirect allowlist and connected testing disabled.
- `member-passkeys.js`: no settings fetch without an enabled client; no prompt to visit production for staging passkeys.
- `safety-trainers.js`, `safety-trainers.css`: curve and chain interactions and responsive styles.
- `chain-regulations-data.js`, `chain-regulations.js`: source-reviewed data and searchable directory.
- `tools/mock-auth.js`, `tools/prepare-mock-preview.py`: local synthetic preview, network-blocking policy and responsive iframe fixtures.
- `tests/member-auth.test.cjs`, `tests/member-name.test.cjs`: existing harnesses updated for the new auth module, plus auth behavior tests.
- `tests/member-confirmation.test.cjs`, `tests/development-isolation.test.cjs`, `tests/safety-trainers.test.cjs`, `tests/chain-regulations.test.cjs`: new controller, boundary, training and source-data tests.

## Validation

Baseline: 175 existing Node tests passed before edits.
Current: 202 Node tests pass with `node --test tests/*.test.cjs`.

Coverage includes unverified access denial, exact redirect allowlisting, non-development backend rejection, connected-auth disablement, duplicate requests, expired links, cooldown persistence, blocked storage, resend errors, account-safe email correction, verified-session matching, signout/recovery/profile/navigation regressions, banking combinations, chain gates, manufacturer differences, placement mistakes, all 50 state entries and unverified-source semantics.

Browser functional checks in Chrome using the local mock fixture:

- Signup confirmation, password clearing, status without a session and cooldown UI.
- Left curve, adverse slope and lane-crowding feedback; wrong curve answer blocked progress and retry unlocked it.
- Wrong chain orientation blocked entry; correct orientation opened the steps.
- Unsafe installation answer blocked Next; changing model reset orientation.
- Both CAM and cable sequences completed all five steps with their respective final recheck text.
- Oregon placement rejected an empty selection and accepted the selected four-drive/two-trailer arrangement.
- State-abbreviation filtering returned the selected state.
- Mobile menu worked by keyboard and closed on page selection.
- Responsive iframe checks: curve layout at 390px, chain and confirmation layouts at 360px, with no horizontal document overflow in the checked views. Desktop Chrome was also checked. Iframe widths are not physical-device emulation.
- Basic DOM accessibility audit found no duplicate IDs, unlabeled controls or unnamed SVG diagrams in the new modules. Keyboard activation, status announcements, visible focus styles, non-color-only explanations, animation pause and reduced-motion code paths are provided. This is not a full WCAG audit or screen-reader certification.

## Integration gate — connected tests remain blocked

| Requirement | Assessment | Evidence / next action |
| --- | --- | --- |
| Development project selection | PASS for code guard | Exact development project URL required; any other backend disables the client. |
| Browser redirect selection | PASS for local code | Only explicit localhost/127.0.0.1 URLs in configuration; arbitrary origins rejected. |
| Supabase Auth Site URL and redirect allowlist | UNKNOWN | Read development dashboard settings, including server fallback redirects and email templates; remove production destinations only with development-setting authorization. |
| Recipient containment and SMTP isolation | UNKNOWN | Verify SMTP account scope and enforce a development recipient allowlist or captured mail before any real send. Do not rely on UI cooldown or a naming convention. |
| Existing development record provenance | UNKNOWN / excluded | Treat existing data as potentially real; use only in-memory fixtures now, then a clearly identified synthetic account set after approval. |
| Production credentials in the new preview | PASS | Synthetic placeholder key; no service-role/SMTP credentials; external connections blocked by CSP and mock fetch. |
| Connected testing | BLOCKED | `connectedTestingApproved` remains false. Do not turn it on until the server-side redirect and recipient gates pass. |

A frontend allowlist cannot override a server Site URL fallback, sanitize an email template, or enforce SMTP recipient rules. These unresolved settings are why no connected test is claimed.

## Personal review without affecting members

Use the current-session local preview if it is open. The top banner must say **LOCAL MOCK PREVIEW**.

- Use an `example.test` address and any synthetic password of at least eight characters; no real credential is needed.
- Create an account to inspect confirmation guidance. Use **Open synthetic confirmation link** to simulate verification.
- Use **Enter as Synthetic Driver**, then **Training → Safety & Resources** to inspect the trainers.
- **Reset synthetic preview** discards local test state. Reloading also discards the in-memory account.
- External tools such as route geocoding are deliberately blocked in this fixture. No emails are sent.

To reproduce on a Mac with Python 3 from a checkout of the reviewed `development` branch:

```sh
python3 tools/prepare-mock-preview.py
python3 -m http.server 4173 --bind 127.0.0.1 --directory ../cdl-mock-preview/dist
```

Open `http://localhost:4173/index.html`. `layout-360.html`, `layout-390.html` and `layout-768.html` provide responsive iframe checks. No hosted URL or new service is required.

## Remaining work before acceptance

- Finish claim-by-claim commercial carry, installation, season and configuration verification for all states. Limited statutory permission excerpts do not complete this requirement.
- Resolve the identified source conflicts; obtain instructor review of the educational diagrams and actual equipment applicability.
- Complete the Auth/SMTP gate, then approved synthetic connected registration, email delivery, resend, correction, expiry, login/logout and security tests.
- Test actual iPhone/Safari, Android/Chrome and MacBook/Safari; complete screen-reader/accessibility and broader end-to-end checks. These platforms are not available in the current browser environment.
- Verify a future staging deployment configuration before any hosted publication. This checkpoint is intentionally local.

## Future production plan — proposal only

No production release is ready or authorized. Before requesting the two separate approvals:

1. Complete the remaining validation and present the isolated staging/local-review build for explicit acceptance.
2. Prepare an exact reviewed diff. The development-only client guard and config must be replaced through an explicitly reviewed environment-specific release configuration; do not copy this branch wholesale into production.
3. Recheck production compatibility, authentication redirect handling, server rate limits, database RLS and existing features using an approved plan. No database migration is presently required by these frontend changes.
4. Propose an owner-controlled production backup/restore procedure and record the last known-good code deployment. No member export or backup was executed here.
5. Obtain separate explicit production authorization before changing `main`, hosting, Auth, SMTP or database configuration.
6. If an approved release fails, restore the recorded last known-good website version and separately restore any specifically approved configuration changes. Since no database migration is proposed, no database rollback is currently anticipated.

Neither successful local tests nor this checkpoint grants staging acceptance or production approval.

## Follow-up review — November 4

Starting checkpoint: 0cf2c6073ee5f4e2339e68f01636ea9880c0ca68. Follow-up supersedes the earlier counts in this document: **211 automated tests passed, zero failures**. Coverage adds per-model orientation, two seven-hook cable tensioners, bare-wheel preparation, side-drape semantics, complete 50-state review dispositions, prevention of false full-review promotion, worksheet structure, stable axle-button focus and stable curve live-region updates.

Manufacturer corrections and exact source crosswalk: CHAIN-MANUAL-REVIEW.md. The five decisions are explicitly grouped learning topics, not the manufacturers' numbered procedure. Curve live text now changes only when its content changes; axle selection retains its button node and keyboard focus.

Instructor guide: instructor-review.html, linked within existing Driver Safety content. It contains six independent banking expectations, model illustrations, source links, inspection prompts and 12 labelled review decisions with notes. No network, Auth or persisted member data. Browser visual check: worksheet readable, no desktop horizontal overflow, no duplicate IDs, 12 selects and notes labelled, four named diagram images. This is a basic accessibility check, not WCAG certification or screen-reader validation. Actual device/Safari, physical chain fit and instructor acceptance remain outstanding.

Regulatory status is now **0 fully reviewed, 37 limited, 13 unresolved**. The directory exposes field-level limitations, specific holds and non-authoritative research leads. CHAIN-SOURCE-REVIEW.md lists every state's remaining work. Complete 50-state regulatory verification is still a blocking requirement.

Connected email tests were not run. AUTH-SMTP-ISOLATION-CHECKLIST.md records code evidence versus unknown backend settings and recipient containment. DEVELOPMENT-DIVERGENCE.md records the 85-ahead/2-behind starting snapshot and selective future release proposal. No merge, deployment, production approval request or production/member access occurred.
