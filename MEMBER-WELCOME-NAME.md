# Preferred-name welcome and optional Community setup

October30,2026 (Pacific), version59.

After an existing verified member's private profile loads successfully, if its display_name is blank the Hub asks “What should we call you?” First name or nickname; no legal name requirement. Existing named profiles skip the prompt. A read error does not clear a draft or prompt the member to replace a potentially existing name. Not now dismisses for the current page visit; the next visit can ask again if no name was saved.

Save my name writes only the signed-in owner's existing member_profiles row and updates the greeting with textContent. Save & set up Community first saves the private greeting, then opens My Community Profile. It does not copy the private name to Community, create a Community profile, accept rules, upload a photo, opt into requests or enable messages. The member completes that separate form. A Home shortcut also opens Community settings for existing members. Duplicate preferred names do not merge accounts; stable account IDs remain the owner keys. No uniqueness or public-directory behavior added.

Async guards: generation+owner checks on reads/writes, profile revision invalidates late reads after save starts, pending controls disabled, errors retain name entry and allow retry; sign-out/account change clears the dialog, input, statuses and busy state. Stale operations cannot update the next account.

174 automated tests passed, including owner-only writes, existing/missing/error cases, literal text rendering, retry, delayed load/save races, identity changes, recovery suppression, optional Community navigation and no implicit Community mutation. Phone-width dialog/save/Community settings checked through synthetic adapter using production auth/navigation/Community code; not a real signed-in member write or device test. Removed synthetic fixtures before publication.

Beta gndommbrsfvejocipukj metadata only: member_profiles RLS enabled and three owner SELECT/INSERT/UPDATE policies verified. No member rows read/written, schema/policies/auth/paid plans changed, and separate production project not accessed. Security advisor returned only the pre-existing leaked-password-protection-disabled warning. It remains a separate follow-up (https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection).
