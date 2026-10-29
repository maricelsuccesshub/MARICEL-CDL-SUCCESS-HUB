# Remember the member page on refresh — version 34

The previous auth restoration always called showScreen('home'). Verified session
restoration now reads an allowlisted page identifier scoped to the signed-in
member and current browser tab's sessionStorage, and opens that page instead.

Navigation remembers only the page ID (for example lesson, backing or planner).
It does not persist profile values, progress drafts, conversation IDs, messages,
lesson answers, selected guide stages, scroll offsets or credentials. All 16
member pages use the existing screenGroups allowlist. Unknown/inherited values
fall back to Home. Storage restrictions fail gracefully to the original Home
behavior. Sign-out and account changes clear the departing member's saved page.
A token refresh for the same member does not navigate away from their current view.

Restoration waits until DOMContentLoaded when needed so bottom-of-page modules
have loaded before opening Lessons, Community or passkey management. Generation,
member ID and navigation-revision guards prevent stale restoration after account
changes, recovery/sign-out or a newer page choice. Member content remains gated
by the existing verified-session check. No URL/hash changes interfere with email
verification or password recovery links. No database/Auth configuration changed.

107 automated tests pass: all 100 existing tests plus every-page persistence,
account isolation/clearing, invalid/inherited page rejection, blocked storage,
verified session restoration/token refresh, module-ready timing/user-choice guard
and unverified/sign-out protection.

Synthetic-session browser checks used the full auth display and navigation source:
Lessons, Backing Guides and Plan My Route each remained selected after browser
reload. Lessons rendered its actual content after restoration. After signing out,
a fresh synthetic session started at Home. No real member records were read or
changed. The temporary browser fixture was excluded before packaging.

Files: dist/member-navigation.js, dist/index.html,
tests/member-navigation.test.cjs, tests/member-auth.test.cjs.
