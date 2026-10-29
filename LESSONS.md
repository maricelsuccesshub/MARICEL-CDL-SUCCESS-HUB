# Beginner Lessons — October 28, 2026

The Lessons page now provides six original topics for someone with no trucking experience. Each topic has Learn it, Explore it and Check understanding, plain-language word help, an instructor question and matching guide/exercise links. Existing Maricel tractor/trailer assets are used throughout; no school materials, footage or third-party diagrams are imported.

## Teaching sequence and content checks

| Topic | Beginner objective | Checks and limits |
| --- | --- | --- |
| Meet your truck | Identify tractor, trailer, coupling, rear corners, rear wheel group and seated-driver directions | Tractor versus trailer explained first; fifth wheel and kingpin defined in plain language; two-axle group/tandems qualified; top view is not a mirror; no inspection/coupling procedure claimed. |
| Learn where to look | Build a known straight view, compare changing references, recognize unseen areas | Both mirrors, tractor-front clearance, changing gaps and outside inspection; unequal mirror images do not prove drift; no exact blind-zone shape or mirror optics are drawn. |
| Turn or drift? | Distinguish initiating a trailer turn from correcting unwanted straight-back drift | Initial right trailer turn from aligned uses left top-of-wheel input; unwanted straight-back right drift uses right initial input; following is separate; already-angled rigs require assessment. Both rules checked against Oregon CDL §6.1.7. |
| Correct, observe, ease | Observe actual response and both vehicle alignments | No fixed delay, wheel-turn count or automatic large opposite input. Centered wheel does not prove tractor/trailer/lane alignment or lane-center position. |
| Know when to stop | Recognize lost contact, people, uncertain path and inspected pull-up decisions | Stop immediately on lost spotter contact; secure before leaving cab; inspect proposed reset path; possible-contact incidents are not treated as another correction. |
| Choose one practice focus | Connect a concept to a guide, screen exercise and qualified instruction | No mastery, certification, practical completion or universal test finish is awarded. State/equipment/site instructions remain necessary. |

Primary sources reviewed October 28, 2026:

- Oregon CDL manual §2.2.4: https://www.oregon.gov/odot/DMV/Pages/Online_CDL_Manual_2/Section_2.aspx
- Oregon CDL manual §6.1.7 and coupling terminology: https://www.oregon.gov/odot/DMV/Pages/Online_CDL_Manual_2/Section_6.aspx
- OSHA Backing Safety Solutions: https://www.osha.gov/preventing-backovers/solutions
- California DMV commercial backing/test resources: https://www.dmv.ca.gov/portal/driver-education-and-safety/special-interest-driver-guides/truck-drivers/

These sources support general principles; the original teaching sequence and drawings have not received agency approval or physical vehicle-path validation. Diagrams are independent stationary relationships, not movement simulations, measured setups, steering amounts or clearance calculations.

## Interaction and privacy

- Six topics, 12 retryable questions and interactive part/reference/situation selectors.
- Topics can be freely read or revisited. A review mark requires both correct screen answers and an explicit Mark reviewed action; it is not a driving assessment.
- Answers, selected topic and review marks exist only in memory for the current visit. Refresh, sign-out or account changes reset them. The UI discloses this; it does not claim cross-device course tracking.
- An optional reflection action prepares an existing My Progress draft. Nonempty topic/win/improvement fields are preserved; no database save occurs until the member explicitly uses the existing Save Progress control.
- The existing identity-change display callback calls the optional lesson reset hook. Supabase authentication/authorization logic, API calls, project settings, database schema and policies are unchanged. No query or migration is required for this display-only reset.
- No new backend, analytics, storage provider, localStorage/sessionStorage persistence or member-data request is added.

## Layout and source

`dist/lessons.js` owns the original content, state and renderer; `dist/lessons.css` owns the layout. Root-level equivalents are synchronized to GitHub development. The previous seven-click lesson code and unsupported absolute statements are removed. Lessons show a compact branded header and collapsed, expandable beta notice; other screens retain the existing header layout. Normal page navigation preserves the current lesson visit; leaving the Lessons screen removes its layout class. Sign-out restores the expanded beta notice. The phone Start action scrolls the current lesson beneath the sticky menu.

## Validation

66 automated tests pass, including the prior training/auth/privacy/navigation regressions and new tests for six topics, every interaction, 12 question/retry/review rules, invalid inputs, matching guide/exercise destinations, draft preservation and identity-change reset. These tests validate software behavior and editorial contracts, not real driving skill.

Browser QA used a temporary local fixture with the production page/styles and lesson/backing scripts, synthetic display state and no Supabase client or network data requests. Desktop and a 375px frame were checked: compact first screen, interactive truck-part highlighting, turn/drift references, wrong/correct feedback, review count, phone Start positioning below the menu, matching Alley Dock link, phone menu round trip preserving the current topic and an unsaved My Progress reflection draft. The phone document had no horizontal overflow. A real member account was not used for this QA. Fixture files are removed before packaging.
