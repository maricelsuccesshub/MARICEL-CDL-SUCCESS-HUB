# Compact member conversations — version 31

Community → Messages → Open conversation now uses rounded, iPhone-style chat
bubbles in Hub colors: outgoing navy/right, incoming light/left. Existing private
avatar markup remains alongside each message, with initials as fallback. No Apple
assets, SMS transport, new notification service or realtime subscription was added.

The history pane scrolls independently in a bounded 260–520px region using a
responsive viewport height. The composer is outside the pane immediately below
it, so message history no longer increases the whole conversation's page height.
The native device keyboard has not been tested on a physical iPhone/Android.

Small timestamps and day separators replace large message cards. Incoming
messages retain Report message under an accessible three-dot details control.
Opening that control scrolls its action into the history viewport if necessary.
The Back to inbox, Refresh and Block member actions remain available. Privacy
explanation is in an expandable section; a short sensitive-data reminder remains
visible below the composer. Latest-100-message and manual-refresh behavior stays
explicit; this does not add unlimited history or automatic live updates.

## Behavior and data protection

- Opens a conversation at the newest message; successful sends go to the bottom.
- Refresh preserves the draft and, when reading older messages, its scroll offset.
  The latest-100 window can change as new messages arrive; this is not pagination.
- Failed refresh leaves the existing conversation and draft displayed. Failed send
  retains the draft and does not claim delivery. Confirmed sends clear only text
  matching the submitted draft, preserving any newer typing.
- Account resets still clear Community and private avatar state. Drafts are not
  persisted across sign-out or account changes.
- The same community_api RPC actions/payloads, accepted-request restrictions,
  blocking, reporting and moderator boundaries are used. No database, RLS, Auth,
  stored-message, avatar-file or paid-plan changes were made. No real inbox was
  opened or member message sent for testing.

## Verification

91 automated tests passed: existing 84 plus 7 conversation tests for escaped
bubble rendering, avatar/report markup, draft/scroll preservation, successful
send payload/composer behavior, blocked/messaging-off history, account reset,
failed refresh and failed send.

Synthetic full-site browser adapter used 24 messages and tested desktop and a
375px iframe (360px content width). No horizontal overflow was observed, including
long message text. Desktop history: 447px height versus 2062px scrolling content;
phone history: 430px versus 2924px content. Refresh retained a draft, successful
synthetic send cleared it and showed the newest message. The expanded report
control was checked inside the pane and has a 44px action height. Actual member
photos were not downloaded or changed; the existing avatar helper and selectors
were preserved. Temporary fixtures are removed before packaging.

Files: dist/community.js, dist/community-chat.css, dist/index.html,
tests/community-chat.test.cjs. The CSS is scoped to .community-conversation and
does not restyle forum posts, directory entries or other pages.


## Version 32 — automatic reply checks

Open, visible conversations now check the existing participant-scoped RPCs about
every 3 seconds after each completed check. This is short polling, not a WebSocket
subscription or push delivery. No database/publication/RLS grants changed. Inbox
requests and unopened conversations still use Refresh inbox.

Automatic checks read state, inbox membership and messages through community_api.
Only the message list changes when new content is returned; the composer DOM node,
keyboard focus, caret and draft remain intact. Unchanged content is not redrawn.
Readers at the bottom see the newest reply. Readers higher in history retain a
visible-message anchor where it still exists within the latest-100 window, and
get a Jump to newest button. A changed block/messaging-access state updates the
controls; a conversation no longer available through the inbox stops checking.

Manual actions cancel background requests. Checks pause on sign-out, account
change, leaving the conversation/Community, hidden tabs and offline events. The
visibility/online events resume checks. Requests have a 15-second abort deadline;
failures preserve history/drafts, show connection feedback and retry with backoff
up to 30 seconds. No delivery/read receipts, typing indicators or notifications
were added. The server continues to authorize every read and send.

97 automated tests pass. Added coverage verifies automatic arrival without
replacing the composer, unchanged-message behavior, older reading position and
jump action, visibility/navigation pause/resume, failure/backoff and stale responses
after sign-out. Synthetic browser test: a queued incoming reply appeared without
Refresh while the draft, focus on communityMessage and caret position 38 stayed
unchanged; the history stayed at its newest message. Existing phone layout checks
from version 31 remain applicable; no layout structure was replaced. No real
member messages were read or sent during QA. Physical two-device testing remains
a member acceptance check. Temporary fixtures are excluded from publication.

## Version 33 — recoverable update scheduling

A member reported that version 32 still required refresh between independent
clients. Server metadata showed successful RPC responses, but that alone did not
prove a reliable continuing client loop. The exact device-specific cause has not
been established from the user's browser.

Reproduced failure conditions in the previous scheduler: if a visibility change
was missed, a hidden-state check could end the loop without another timer; an
inaccurate navigator.onLine=false could disable otherwise reachable requests.
The revised scheduler keeps a lightweight heartbeat while a conversation exists,
issues no checks while hidden/busy, and restarts on visibility, window focus,
page-show and connection events. It no longer treats the browser's online flag as
a reliable test of backend reachability. Leaving the conversation or sign-out
still stops the loop. Normal background-tab timer throttling remains browser
controlled; a foreground/focus event triggers an immediate catch-up check.

A real 15-second Promise deadline now bounds a hung check even when a request
cannot be aborted promptly. Timed-out work is marked finished and cannot apply
late data; retry backoff remains 6/12/24/30 seconds. The initial label says
Connecting until a complete authorized check succeeds. Only then does it show
Last checked with local time including seconds. That timestamp makes stalled
checks visible instead of relying on a static automatic-updates claim. The
frequently changing health line has aria-live off to avoid repeated screen-reader
announcements. No private message text or tokens are logged.

100 tests pass. Three new regressions cover missed visibility events, inaccurate
offline flags and a hung request's deadline/late-result rejection. A paired browser
fixture used two independent instances of the actual pinned Supabase SDK with a
shared synthetic service. A sent message appeared automatically in the other
client while its draft remained intact; completed-check timestamps advanced.
The fixture is synthetic and does not establish a real two-member production
session or physical Safari behavior. No real accounts, inboxes or messages were
accessed or changed. All temporary fixture files are excluded from deployment.
