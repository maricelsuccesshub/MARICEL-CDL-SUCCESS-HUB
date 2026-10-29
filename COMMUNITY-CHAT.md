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
