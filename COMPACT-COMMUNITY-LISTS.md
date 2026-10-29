# Compact Community inbox and directory — version 43

Community → Messages now uses compact contact rows with avatar, display name,
request/connection status and an Open action. Block/Unblock and Report live in
an accessible native details menu labelled for that member. Incoming pending
requests retain explicit Accept/Decline actions; outgoing requests have no
acceptance controls. Accepted blocked conversations can still open retained
history, as before. No message is sent by opening a conversation.

The inbox includes a local name filter for the conversations already returned
by the existing RPC, with an empty-match state. Privacy/help text is collapsed
under a labelled disclosure. Settings and Refresh use compact toolbar buttons.
The list is keyboard focusable and bounded to a scrollable panel.

Community → Members uses the same compact layout. Connect submits the existing
message request action to the same recipient ID. Messaging-off members have no
Connect action. Full introductions and the moderator photo-removal action are
available in the per-member options menu, along with Block and Report. Existing
server-side display-name search remains available, and only opted-in members
appear. The up-to-100 result/conversation limits are disclosed and unchanged;
this is not a new server pagination implementation or an increase in capacity.

All displayed member text remains escaped. All access, acceptance, moderation,
blocking and reporting decisions continue through the existing authenticated
RPC. No database/schema, RLS, member data, photo storage or Auth changes. The
conversation bubble layout and automatic reply checks are preserved.

Validation: 115 tests pass, including pending-vs-accepted actions, escaping,
messaging-off directory entries and exact request/respond recipient payloads.
Browser QA used 35 synthetic entries with the real community.js and CSS. At a
375px phone frame accepted rows measured about 79px, the panel scrolled, long
names stayed bounded, search/no-match behavior worked, a selected conversation
opened, directory search returned a matching member, and options exposed bio,
moderator photo removal, Block and Report without horizontal overflow. Option
buttons retained 44px minimum height. Desktop accepted rows measured 69px and
the list stayed bounded. No real member was messaged, blocked or reported.
Temporary synthetic fixtures were removed before packaging.
