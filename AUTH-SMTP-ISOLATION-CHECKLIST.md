# Development Auth / SMTP isolation gate — November 4, 2026

Connected tests remain disabled. This is a preparation checklist, not evidence that dashboard settings passed. No Supabase records, authentication settings, templates or SMTP credentials were read or changed during this checkpoint. Never paste secrets or recipient lists into reports.

| Gate | Current evidence / status | Read-only proof needed before connected tests |
| --- | --- | --- |
| Local mock boundary | PASS: generated mock replaces external client; CSP connect-src none; synthetic in-memory fixtures | Rebuild and retain mock guards for local QA |
| Client backend | PASS for code: exact development project guard; connectedTestingApproved false | Verify selected project identity is maricel-cdl-success-hub-dev and URL matches development config; no production fallback, bundled environment override or service key |
| Site URL | UNKNOWN | Redacted development Auth URL settings showing an approved isolated origin; fallback must not be production |
| Redirect allowlist | UNKNOWN | Exact approved local/staging verification, recovery, email-change and OAuth callback destinations; no production URL or broad wildcard that can match it |
| Email templates | UNKNOWN | Review confirmation, recovery, invitation, magic-link and email-change templates: generated confirmation URL/redirect handling; no hardcoded production links or tracking redirects |
| SMTP sender and credentials | UNKNOWN | Account owner verifies separate scope/sender and provider routing, without displaying/copying password, API key or service-role key |
| Recipient containment | UNKNOWN / critical | Existing provider must demonstrably capture mail or enforce a backend recipient allowlist of owner-controlled synthetic mailboxes across every outbound channel. Frontend checks alone do not pass |
| Alternate outbound paths | UNKNOWN | Review send-email hooks, Edge Functions, app mail APIs, security notifications, queues and scheduled jobs for separate development destinations and recipient controls |
| Existing development data | UNKNOWN; unused | Do not assume synthetic based on names. Use new explicitly synthetic fixtures only; no queries of member rows or member lists required |
| Server abuse controls | UNKNOWN | Read-only settings for rate limits, resend protection and abuse controls; client cooldown is not security enforcement |
| Auth / access policies | UNKNOWN | Confirm development-only auth issuer/storage and policies; no production database connections or admin operations |

## Test order after all critical gates pass

Record redacted settings evidence and approved synthetic mailbox identifiers privately; do not create a service or change settings under this checklist. If safe recipient containment cannot be established using existing services, stop and present the specific needed configuration for approval. Do not send a trial message to an unapproved/real address to test containment.

Only then enable a separately reviewed development test configuration and run one synthetic flow at a time: signup, link destination, verification, resend/cooldown/server throttling, email correction, expired/used links, login/logout and access denial. Observe captured messages and approved mailbox delivery; do not claim Spam placement or inbox deliverability from mock behavior. Disable connected testing again after review. No bulk signups, invites or real-member testing.

References: [Supabase SMTP](https://supabase.com/docs/guides/auth/auth-smtp), [redirect URLs](https://supabase.com/docs/guides/auth/redirect-urls). Default SMTP restrictions are not proof of a complete sandbox. Custom SMTP does not by itself contain recipients. Site URL fallback and template links must both be checked.
