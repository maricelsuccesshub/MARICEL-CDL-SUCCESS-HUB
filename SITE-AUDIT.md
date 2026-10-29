# Whole-site review — October 28, 2026

Reviewed the existing version 28; fixes prepared for version 29. This is a bounded engineering and teaching-content review, not a guarantee of flawless operation, professional driving competence, legal compliance or a penetration-test certification.

## Fixes

- My Notebook used the browser's `window.postMessage` function instead of its note textarea. The body could be missing from saved records. All Notebook element references are now explicit. Opening Notebook now renders stored notes, including after refresh. Unreadable/blocked storage reports an error, preserves the draft and does not overwrite stored notes. Previously missing bodies cannot be reconstructed.
- Account changes/sign-out now clear unsaved facility, progress, route, shared-location and Notebook drafts, plus displayed destination results. In-flight forecast and member-save completions cannot repopulate a different account's UI. Saved records are preserved.
- Plan My Route requests Unix timestamps and explicitly formats sunrise, sunset and its two-hour parking buffer in the returned destination timezone, including daylight-saving transitions. Missing weather is shown as unavailable rather than converted from null into a plausible number. Without a selected date, the provider's destination-local first forecast day is used.
- Partial, nonnumeric and out-of-range coordinate pairs are rejected in the planner and private Facility Notes. Route parking shortcuts clear a stale state selection when the destination state is unknown.
- The parking target is explicitly a suggested buffer, not a legal deadline, operating cutoff or parking reservation. The matched destination and external lookup data flow are disclosed. Appointment time is labeled as a reference field; it is not used in a travel-time/arrival calculation.
- The legacy empty-community rollback test no longer chooses an arbitrary first post for moderation. A separate active-beta audit fixture only mutates its own synthetic IDs inside rollback transactions.

## Evidence

- 74 Node tests pass, covering navigation structure, auth/session resets, teaching stages and retries, direction mirroring, six beginner lesson topics, all eight Backing Guides, three Practice Yard exercises, source selection, escaping, planner timestamps/coordinates/races and Notebook storage failures/body persistence.
- All 16 main member page destinations opened in the isolated desktop preview. At a 375px iframe width (360px content area), all 16 opened through the phone menu with document scroll width equal to client width. This is browser layout testing, not a physical iPhone/Android certification. No broken visible images were observed on the desktop page sweep. Local HTML asset/link targets exist.
- Browser-confirmed Notebook title and body survive refresh. Browser-confirmed live Open-Meteo response for public Los Angeles coordinates renders destination timezone, sunrise/sunset, parking target, units and daily forecast. No personal address or member record was used.
- Live public /disclaimer and /backing-poster routes render, including download/print controls and the turn-initiation versus drift-correction clarification. Printing/downloading on physical phones remains outside this check.
- Beta Supabase catalog: all 14 application tables have RLS enabled. Public profiles/progress/facility notes use owner policies; Safe Haven reads are intentionally member-shared. Community data remains behind its controlled RPCs. Avatar bucket is private and permits JPEGs only with a 512KB storage limit; upload UI accepts larger originals before resizing.
- Rollback-only active-beta database tests passed owner isolation, message opt-in, request acceptance, participant history, blocking, moderator inbox boundary, hiding/restoring and suspending/restoring synthetic members. Photo tests passed foreign-upload/set/removal denial, authenticated visibility, blocking, anonymous denial and moderator removal/audit. No permanent synthetic users or content remain.
- Refreshed primary-source checks: Oregon CDL Manual sections 6.1.7 and 12, OSHA backing-safety guidance, Open-Meteo timestamp/timezone documentation and NWS local-search entry. Existing source coverage tests retain all 50 states + DC for traffic/weather access, and only nine states with dedicated clearance resources/advisories. Not every external URL was interactively verified; Pilot and an OSHA retrieval returned 403 in the research service. Such a retrieval limit is not evidence that a source is broken for members. Camera/map layers, availability and linked agency content remain outside Hub control.
- Branding, original truck artwork, member records and the separate production Supabase project were preserved. No schema, paid-plan or security-policy changes were made.

## Remaining release checks

1. Real-account sign-up verification, sign-in, recovery email, sign-out and account switching on physical iOS and Android devices. Automated tests and database fixtures do not establish email delivery or every OS browser behavior.
2. Owner confirmed her first photo upload works. Real-account replacement/removal, a two-member messaging flow and a moderator report-review flow still need end-to-end confirmation. No personal photo/profile was changed during this audit.
3. Existing leaked-password protection remains disabled. Security advisor remediation: https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection . No paid upgrade was made. Previously discussed SMTP credential rotation remains separate; no old secret was retrieved.
4. Performance advisor lists four foreign keys without covering indexes and three unused-index notices. These are informational, not evidence of a current user-visible failure. No speculative production-database tuning was performed.
5. Before an app-store release, choose the app format/platforms and resolve app-specific privacy/account lifecycle, permissions, authentication redirects and real-device release requirements. The current service worker has no offline caching implementation; the Hub must not be presented as a fully offline app.

The site is suitable to continue into app planning with these explicit checks carried forward. It has not received an unconditional app-store release approval.
