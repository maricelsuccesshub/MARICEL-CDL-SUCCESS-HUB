# Community visibility without a roster

October 29, 2026 (Pacific). Requested by Coach Maricel: no browsable website membership list; members choose to appear through Community contributions. Applies to beta database gndommbrsfvejocipukj only. Production fmyaxdzonqrgsyzizixe was not accessed or modified.

## Behavior

Removed Members tab, member-name search, directory renderer and client directory calls. Legacy directory RPC returns an empty array, including search payloads. Old saved directory views return to the forum. Reading and studying do not add a person to a visible roster. Existing membership/auth records, private learning profiles, progress, messages and photos were not deleted or edited.

Display names and optional photos accompany visible posts/replies. Photos can also be accessed by existing request/conversation participants, or authorized moderators reviewing an open report. Blocks and suspension restrictions remain. Hidden replies/posts and replies inside a hidden, suspended-author or blocked-author parent discussion do not establish contributor visibility. Photos already viewed or saved cannot be recalled; these controls do not promise anonymity or prevention of all harassment.

New conversation requests moved beside consenting contributors. They require visible contribution, sender messaging enabled, and both existing recipient consent flags. The legacy listed boolean is retained for compatibility but now labels permission for new requests from contributions; it no longer enables directory listing. No existing member consent flag was changed and no new consent was automatically enabled. Existing threads keep their participant/acceptance/send restrictions. Moderation never grants general inbox access.

Removed the public-introduction field from settings; any previous text is retained in the owner's state and preserved on profile saves, without a public directory. Members are encouraged to choose a display name rather than a legal name. Privacy/photo disclosures updated.

## Database/source deployment

community-visibility.sql contains guarded replacements of the inspected live RPC/Storage helper definitions plus private visibility predicates. Guard aborts on a concurrent source change. Public wrappers and table privileges are unchanged. Helpers are not executable directly by anon/authenticated. No user-row UPDATE/DELETE is performed by the deployment. Apply after community.sql and community-avatars.sql; this one-time guarded patch must not be blindly rerun. Future source deployment must not restore the old roster behavior. Rolling back the website must not roll back these privacy protections.

## Validation

142 automated tests pass. Rollback-only SQL covers empty directory/search, quiet photo/RPC/storage-path denial, visible contributor photos, hidden parents, request consent and acceptance, participant-only history, blocks, owner isolation, moderator access/removal boundaries, anonymous denial and the private bucket. Existing photo and broader site privacy rollback fixtures also pass, adjusted to give synthetic request recipients explicit contributions. All test records are disposable and rolled back; no real-member inbox or private profile was read.

Phone-width browser fixture used production Community markup/scripts and a synthetic adapter, verifying absent Members/search UI, contribution request controls and private settings. This does not claim a real signed-in account test or physical-device test. Security advisory comparison found no new advisories; the previously known leaked-password-protection advisory remains unchanged. No paid plans/settings changed.
