# Stage 1 — launch cleanup and targeted accuracy checks

Prepared October 31, 2026 for Coach Maricel. NOT PUBLISHED. Live version remains 62.

## Source reconciliation

Production version 62 comes from Sites commit 21c4007643521e6bf1705e2e1e15b0dbd2b23117. The subsequent Sites commit 6eb67fe41c83cfd878fafc5075c2768ea74d1797 contains only header regression checks/documentation; public assets match version 62.

GitHub development was inspected at 835c4a200c5c992d0fa5ffc5387f42f5915299ac. Its two newer launch-wording commits, 184f887d394f8c8d8660a11eef6a00fa0f77bf7b and 835c4a200c5c992d0fa5ffc5387f42f5915299ac, affect index.html only. Their reviewed hunks were applied to the current Sites source, then completed below. No branch merge was used. Other GitHub-only files, configuration and assets are retained in the review branch; they are not copied over production configuration.

GitHub review branch: review/stage-1-launch-cleanup, based on the inspected development head. Development and main are not modified. The staged Sites source/package is not an approval to deploy or a new live version.

## Changes

- Homepage/browser title, welcome notices, registration, Community headings/rules, support card/bar and footer use welcoming Hub language instead of Beta.
- Standalone support, disclaimer and poster-page footer/metadata are cleaned up. Stripe/Venmo URLs and existing page links are unchanged. Original poster PNG/SVG artwork was inspected and contains no Beta wording; artwork is unchanged.
- Clearance empty-state and unverified-state messages now say Hub, retaining incomplete-coverage and independent-verification limits.
- Community displays Feedback in its tab, heading, topic/category options and existing post badges. Option values and all RPC filter/submission values remain Beta Feedback. No posts are renamed, moved or deleted. User-authored discussion text is not rewritten.
- Internal CSS/DOM identifiers, navigation allowlists and database category names are retained. No SQL/schema migration or database/API write was performed.
- Updated community.js and clearance-checks.js cache URLs use v63 so approved publication will request the changed modules. This asset label is not a deployed version number.
- Disclaimer contains a narrowly scoped October 31 review note. Existing equipment/state limitations, parked-use wording and not-a-school/no-licensing/no-ELDT-credit statements remain.

## Targeted safety review

No confirmed instructional inaccuracy was found in the checked topics. Lesson procedures, pressure limits, answer keys, artwork and exercises were not rewritten.

- Air brakes: compared the four-part stationary example with California modernized supplement §11M.1.2 and Washington supplemental guidance. Cut-out is equipment-dependent; applied loss is timed after stabilization; the example combination uses its labeled limit; warning/automatic response criteria remain explicitly tied to the source/test and manufacturer. Engine-off secured depletion remains distinct from responding to a warning while driving.
- State distinction: New York §5 retains a separately labeled warning reference; it is not replaced with another state's test criterion.
- Pre-trip/in-cab: checked representative pressure/temperature gauge, mirror/light, tire-inflation, all-axle coverage and coupling-verification concepts against New York §11 and manufacturer guidance. Actual inspection access/procedures and full equipment coverage remain required. A tug or sound alone is not treated as coupling verification.
- Backing/poster: California DMV distinguishes initial trailer turns from correcting straight-back drift. Existing Hub distinctions, wheel-center/alignment limitations and conditional spotter wording are retained.
- Clearance: Caltrans lists state-route clearances at or below 14 feet with measurement-position/local-road limitations. The Hub retains its selected-state coverage and does not claim a nationwide inventory or guaranteed safe route. Other states' numerical bridge inventories were not re-audited.
- Licensing: FMCSA licensing steps support the distinction between study, required training, state testing and state issuance. No online result is treated as eligibility or proficiency.

### References consulted

- California modernized supplement: https://www.dmv.ca.gov/portal/file/commercial-driver-license-manual-modernization-supplement-pdf/
- Washington supplement: https://dol.wa.gov/driver-licenses-and-permits/commercial-driver-licenses-cdl/cdl-training-and-testing/commercial-driver-guides/supplemental-cdl-guide-text-only
- Washington official supplemental PDF: https://dol.wa.gov/sites/default/files/2023-08/cdl-guide-supplement.pdf
- New York air-brake chapter: https://dmv.ny.gov/brochure/cdl10sec05.pdf
- New York inspection/test chapters: https://dmv.ny.gov/brochure/cdl10sec11-13.pdf
- California backing principles: https://www.dmv.ca.gov/portal/driver-education-and-safety/special-interest-driver-guides/truck-drivers/
- Fontaine coupling limitation: https://www.fifthwheel.com/module_03_07.html
- Caltrans: https://dot.ca.gov/programs/traffic-operations/legal-truck-access/height
- FMCSA licensing steps: https://www.fmcsa.dot.gov/registration/commercial-drivers-license/how-do-i-get-commercial-drivers-license

Access limits: Washington text was checked through the official source's indexed content because direct retrieval returned 403. The full California general-handbook PDF exceeded the retrieval size limit; its modernized supplement, official web guidance and New York inspection material were accessible. eCFR direct access was blocked; unchanged emergency-equipment legal details were not claimed as freshly revalidated in this pass. This is not a full 51-jurisdiction review, curriculum accreditation, legal opinion or physical vehicle assessment.

## Verification

180 automated tests pass. Added coverage for site-authored visible/metadata wording, retained clearance limits, internal category compatibility, existing feedback rendering/filtering and unchanged new-post API payloads. Existing auth/privacy, navigation, messaging, lesson, air-brake, inspection and header regressions remain passing.

Browser QA: actual unpublished homepage/title/footer and a 390px phone-width preview (no visible Beta text or horizontal overflow). A disposable synthetic Community adapter used the production module to verify Feedback tab, existing-category badge, category labels and retained option value. No real signed-in member records, messages or posts were created or changed. Temporary adapters were removed. No claim of physical iPhone/Safari or real-account testing.

No paid services, authentication settings, deployment/access settings, donation destinations, new learning modules, new pathways or persistent learning-result storage were introduced. Stages 2 and 3 are not started.

## Approval needed

Review Stage 1 before publication. After approval: refresh branch/source status, confirm only these staged changes, publish the exact reviewed package, and verify the custom domain. The current live site continues to show the previous wording until then.
