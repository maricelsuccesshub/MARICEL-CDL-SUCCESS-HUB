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

## Nested page restoration — version 35

Refresh also restores the selected lesson topic and Learn/Explore/Check tab,
the selected backing guide with Quick/Teach mode, learning stage and side/drift
example, the selected Practice Yard test (from its beginning), and the Community
tab, category and discussion/conversation reference. Only allowlisted selectors
and UUID references are stored in account-scoped sessionStorage; extra fields
are discarded. No message text, names, answers, scores, reviewed marks, drafts,
profile form values, route inputs or credentials are stored by navigation.
Sign-out/account-change clears all nested route entries too.

Community reload fetches state, inbox/discussion lists and content again through
the existing authenticated RPC. Missing/unaccepted conversations return to the
inbox, missing posts to the forum, and removed moderator access to the forum.
A saved reference grants no access. Browser tests use synthetic accounts/data,
not another member's inbox. Nested selection restoration does not preserve the
page scroll offset. Lesson review marks and answers still reset as disclosed.

113 tests pass, including nested state validation/content stripping, account
isolation/clearing, all eight guides' mode/stage restoration with answers reset,
lesson topic/tab restoration, Community conversation authorization reload and
unavailable conversation/moderator fallback. Browser reload checks confirmed
Alley Dock → Teach me → stage 4; Lessons → Correct, observe, ease → Explore;
Practice Yard → Test 2; and Community → a synthetic conversation.
