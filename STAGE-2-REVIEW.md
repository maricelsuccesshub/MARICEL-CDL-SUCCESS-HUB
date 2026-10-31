# Stage 2 review — pathways, decisions and mobile usability

Prepared October 31, 2026. Not published. Live baseline: Version 63, Sites source `58d15c99599e4112d983fbaf6fb67ef531ef4915`.

## Where to find the changes

- Home → **Choose your route through the Hub**: beginner and experienced-driver entry points.
- **New Driver Start Here**: six-step beginner study sequence connecting existing material: CDL fundamentals → vehicle inspections → air brake knowledge → backing maneuvers → road awareness and hazards → practice and readiness questions.
- **Experienced Driver Path** in Trip Tools: route, weather, cameras, clearance resources, parking and facility notes, plus focused inspection/backing/safety refreshers.
- **Safety Decision Practice** in Training: closed-exit, full-parking and unfamiliar-warning exercises. Each has three choices, choice-specific explanations, retries, review recommendations and official source links.
- Mobile menu: always-accessible **Learning path** and **Trip tools** shortcuts. For signed-in members the long introductory and feedback/limitations panels initially collapse into expandable disclosures; the brand stays visible. Public visitors still see the full introduction.

## Changes and limits

Existing lessons, diagrams and tools are linked rather than duplicated. The selected beginner step has an explanatory context panel and a next-step link. Moving between steps does not mark a lesson complete. Existing weather and uncertain-clearance scenarios have more explicit reasoning without changing their answer keys.

New scenario answers and the visit's correct count remain in memory, reset on refresh/sign-out, and are not evidence of practical competence. Only navigation positions are retained in the existing owner-scoped tab navigation storage. No new persistent progress, database schema, member-data writes or Supabase configuration changes are included. Existing private notes and progress functionality are preserved.

The new CSS follows the existing navy/gold design, stacks cards on phones, provides readable lesson widths and touch targets, and adds no replacement artwork. Community, authentication/passkeys, member privacy, donation destinations, hosting configuration and existing safety disclaimers are retained.

## Accuracy checks

Original scenario wording was checked against these public references on October 31, 2026:

- FMCSA unfamiliar roadway: https://www.fmcsa.dot.gov/safety/driver-safety/cmv-driving-tips-unfamiliar-roadway
- FMCSA truck navigation: https://www.fmcsa.dot.gov/faq/what-tips-fmcsa-providing-safe-use-gps-navigation-systems
- FHWA truck parking: https://ops.fhwa.dot.gov/freight/infrastructure/truck_parking/
- FMCSA fatigue: https://www.fmcsa.dot.gov/safety/driver-safety/cmv-driving-tips-driver-fatigue
- California DMV truck-driving guidance: https://www.dmv.ca.gov/portal/driver-education-and-safety/special-interest-driver-guides/truck-drivers/
- Western Star engine protection (equipment-specific example): https://www.dtnatechlit.com/portal-public/0000123800-4900-6900-drivers-manual/0000123800.xml/%24/0000122240

The content does not prescribe a universal warning-light response, shutdown delay, detour, legal stopping location or additional driving authorization. It distinguishes study choices from actual vehicle/carrier procedures and current restrictions. Sources are also linked in each exercise and Disclaimer & Source Credits. No proprietary school curriculum was used.

## Validation

`node --test tests/*.test.cjs`: **188 passed, 0 failed**.

Coverage includes pathway destination validation, context/next-step behavior, all scenario answer branches and retries, invalid inputs, navigation restoration, identity-reset handling, compact member disclosures and existing regression tests. Browser QA used actual page markup/styles/modules with a synthetic signed-in navigation adapter and no database access. It checked beginner → inspection → air-brake navigation, experienced-driver tools, scenario feedback/retries, question-position restoration with answers reset after refresh, and widths 320/390/768/1440 with no horizontal overflow in the checked new screens. Temporary browser fixtures were removed before the final suite and are excluded from the publication package.

This does not claim a new real-account end-to-end test or a physical iPhone test. No real member data was read or changed. Publication and a live member smoke test remain separate next steps after Coach Maricel approves publication.

## Stage 3 boundary

Stage 3 is planned in `STAGE-3-PROGRESS-PLAN.md` only. No new persistent results, completion records, migrations or policies are implemented in Stage 2. Development/main branches are not merged. Review this incremental package before authorizing publication or Stage 3 implementation.
