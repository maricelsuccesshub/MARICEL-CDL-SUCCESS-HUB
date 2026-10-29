# Member Community beta

Community is separate from the device-local My Notebook and private member_profiles/member_progress. Forum and directory are visible only to verified, non-anonymous signed-in members. Posting requires a separately chosen Community display name and rules acceptance. No account email is returned by the Community API. Directory listing and message requests default off.

## Access design

Nine tables in non-exposed `hub_private` have RLS enabled and no grants to anon/authenticated. Members cannot query them directly. `public.community_api(text,jsonb)` is a SECURITY INVOKER wrapper around the narrowly scoped `hub_private.community_api`, a SECURITY DEFINER function with an empty search path and fully qualified names. That function is intentionally privileged to check protected auth verification, moderator membership, participants and reports without exposing auth.users or the moderator table. Each call requires a confirmed, non-anonymous auth.uid(); all mutation author/sender/reporter IDs come from auth.uid(), never client payload. Moderator status comes from a protected table, not user_metadata.

The API enforces ownership, both-party message opt-in, recipient-only pending-request response, accepted-thread messaging, symmetric blocking and suspension. Only participants can read a thread. Moderators receive reported content snapshots, not arbitrary inbox access. Bounded reads (100), field limits and per-user write throttles support this beta. Mutations lock the acting member row to serialize its rate checks. This is not a complete anti-abuse system.

## Moderation activation

`hub_private.moderators` is empty. Automatic approval review rejected assigning a specific real member persistent moderator privileges without explicit recipient/scope approval. Do not retry that grant until the owner approves the exact account. Do not use user_metadata or a client-side bypass. `state.moderation_ready` controls an opening-soon notice; the server rejects new posts, replies, message requests and message sends until a moderator exists. Read-only use and Community profile preparation still work.

After explicit approval, the designated verified account may review report snapshots, hide/restore posts/replies, suspend/restore non-moderator community accounts, and resolve reports. It cannot read arbitrary inboxes through the moderation API. Moderation actions append an audit row. Forum withdrawals hide content instead of deleting it. Suspension affects Community only. Existing private progress/profile/facility RLS is untouched.

## Messaging and privacy

Text only; no attachments, notifications, read receipts, presence, delivery promises or end-to-end encryption. Refresh manually. Messages are stored on the server and accessible to the operator through privileged database administration. Reporting copies only the reported message to the moderation queue. Blocking prevents new messages and mutually hides forum content/directory entries, but retains conversation history. Turning messaging off stops new requests/sends without erasing history. Directory opt-out does not remove names from existing posts. Declined requests cannot be re-requested in this beta. There is no self-service account/content export or permanent deletion UI yet; do not claim otherwise.

## Validation

`database/community.sql` is the reproducible schema/function definition, already applied only to `gndommbrsfvejocipukj` (beta). `database/community-privacy-test.sql` creates three disposable verified users inside a transaction and rolls all users/data/temporary moderator membership back. It checks direct table denial, non-moderator denial, opt-out rejection, no sending before acceptance, recipient-only acceptance, participant reads, third-party/moderator inbox denial, reported snapshot visibility, post hiding, suspension, blocking, retained history, missing identity and anonymous RPC denial. No real accounts or messages are used in those tests. No notification is sent.

Security advisor: no new Community warnings remain. The pre-existing `auth_leaked_password_protection` warning remains; see https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection . No paid upgrade was made. Browser checks used synthetic local data; real two-member end-to-end testing is still needed after moderator activation. The 38 automated site tests and rollback database privacy test pass.


## Optional profile photos

`database/community-avatars.sql` adds a separate photo-only API. It does not replace the existing Community RPC. The `community-avatars` bucket is private, JPEG-only, with a 512 KiB stored-object limit. Browser controls accept JPG/PNG/WebP up to 5 MB / 20 megapixels, crop locally, and re-encode to 256px JPEG. No photos are copied into the public site repository.

Avatar metadata is in RLS-protected non-exposed hub_private.member_avatars. Verified members with accepted Community profiles can upload only within their own UUID folder. Storage INSERT/SELECT/DELETE policies enforce ownership and member visibility; there is no UPDATE/upsert policy. There is a five-object per-owner upload guard. Blocks and suspension prevent other-member reads; owners can clean up their old uploads. The owner can set/remove only their own photo. Existing protected moderators can remove another profile's photo; the operation is audited. Moderator removal disconnects metadata so member read access stops, but leaves the file for owner cleanup. Replacement/removal attempts Storage API cleanup of owned files; a failed cleanup may leave an inaccessible object.

Photos are fetched through authenticated download, displayed with blob URLs, and cleared on session reset. No public or signed photo URL is generated. Displaying an avatar is not identity verification and members can save images they have viewed. Photos appear on posts/replies/messages even when directory listing is off; this is disclosed before upload. Existing loaded copies update on refresh. Initials remain on private-photo load failure.

Validation: all 49 existing tests passed; rollback-only synthetic SQL test `database/community-avatar-privacy-test.sql` verified foreign upload/set/removal denial, member/owner access, blocked-member denial, moderator removal/audit, anonymous API denial and private bucket settings. Browser crop/save UI was tested with a local synthetic adapter, not a real member account. Real-member first upload remains to be confirmed after publication. No test emails were sent or real profile photos changed. The existing leaked-password-protection advisory remains unchanged: https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection .
