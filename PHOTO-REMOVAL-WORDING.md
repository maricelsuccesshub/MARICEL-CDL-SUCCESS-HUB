# Profile-photo removal clarification — version 42

The old disclaimer said removal “revokes member access” and that files remain
“temporarily.” These were ambiguous: only access to the photo is affected,
not account/membership access, and the source does not guarantee a cleanup time.

Checked the beta project gndommbrsfvejocipukj read-only function/policy metadata
and the current avatar UI source. avatar_remove deletes the member_avatars
reference; it does not suspend a member or delete an Auth account. Other-member
Storage reads require the current reference. Owners retain their owner-level
Storage access. The client attempts deletion for the owner's own photo; a
moderator removes the reference without deleting another owner's Storage file.
Previously loaded blob URLs and saved copies cannot be recalled.

Clarified the public wording to describe these limits without promising automatic
or timed cleanup. Only disclaimer text changed; no member records, photos, Auth
configuration, Storage policies, RPC behavior or production project were changed.
