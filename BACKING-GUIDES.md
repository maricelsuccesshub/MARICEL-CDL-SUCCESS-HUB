# Coach Maricel backing guides

Eight original editorial guides and eight original SVG space diagrams were written for Maricel CDL Success Hub. The feature uses `backing-guides.js`; the existing interactive trainer and member-data paths are preserved.

Each guide has a five-point Quick refresher and an expanded Teach me view: preparation, visual observations, a conceptual diagram, an explanation of the decision, an approach checklist, mistakes / alternatives, and a stop point. I Lost My Setup always opens in quick mode. Concepts are educational and equipment-dependent, not precise steering, distance, timing, testing or certification instructions. Drawings are original schematic space illustrations, not trajectory simulations or measured blind-zone / clearance calculations.

The straight guide links to the existing simplified steering-response exercise. Other guides link to the existing trailer-movement explanation and explicitly state that a full maneuver simulator is not provided. Truck Stop Parking additionally links to the official parking finder.

The review-note action prepares `Guide review: [topic]` in an empty progress topic field. It does not overwrite an existing topic, win or improvement draft, save a database record, award completion or imply a real driving exercise was performed. The member edits and saves using the existing private progress workflow.

## Original content and external references

No manual paragraphs, diagrams, screenshots, videos, logos or branding were imported into this feature. Common safety principles were checked against primary resources; the wording, organization, coaching examples and diagrams are newly authored for the site. External sources are linked and clearly separate from the site's own explanations; no government endorsement, approved curriculum, accreditation or guaranteed outcome is claimed.

- Oregon DMV Commercial Driver Manual, section 2.2.4, basic backing safety: https://www.oregon.gov/odot/DMV/Pages/Online_CDL_Manual_2/Section_2.aspx
- California DMV Truck Drivers / commercial handbook resources, corroborating inspection, pull-ups and basic-control context: https://www.dmv.ca.gov/portal/driver-education-and-safety/special-interest-driver-guides/truck-drivers/
- OSHA Backing Safety Solutions, spotter positioning, communication and stopping for loss of visual contact: https://www.osha.gov/preventing-backovers/solutions
- Copyright Office factual / expressive distinction, considered for the original-authoring approach, not as a legal clearance: https://www.copyright.gov/help/faq/faq-protect.html

References checked October 27, 2026. This work is not a legal review or a professional behind-the-wheel curriculum approval. Before expanding to regulated training or certification, obtain the relevant professional review for the service being offered.

## Validation

Regression tests cover every guide in both modes, accessible diagrams, unknown input handling, real available practice destinations, preservation of progress drafts, no implicit database writes, stop conditions and educational scope. Existing authentication, privacy, trainer and parking-map checks are also run. Desktop and phone browser QA use a temporary synthetic member with no Supabase calls; all fixtures are removed before packaging.

## Offset beginner walkthrough — October 28, 2026

Teach me now opens an original five-stage offset walkthrough with driver-side/passenger-side destination choices, a reference glossary, existing Maricel tractor/trailer artwork, highlighted rear corners and wheel group, illustrative mirror references, and untimed observation questions with explanations and retries. The prior expanded overview remains under More offset backing reminders. No school content is used. The frames illustrate stationary concepts, not a simulated path, measured setup, steering timing or exact mirror geometry. No member data is read or written by this lesson.

Steering phases are distinguished using Oregon CDL manual §6.1.7: https://www.oregon.gov/odot/DMV/Pages/Online_CDL_Manual_2/Section_6.aspx . Safety references also include §2.2.4 and OSHA spotter guidance above, reviewed October 28, 2026. Equipment-specific references must be taught by the qualified instructor.

Validation: 51 automated site checks passed, including both offset directions, five stages, retries, invalid inputs, question reset and isolation from other guides. Browser QA uses a temporary standalone local guide fixture with no authentication or database calls; fixture pages are removed before packaging.

## Accuracy review and correction — October 28, 2026

The initial five-stage offset was incomplete as a beginner maneuver explanation: it omitted an explicit diagonal approach and return trailer-turn phase, and the stationary graphics translated sideways at a fixed fore/aft coordinate with an unchanged tractor heading. The final illustration left the tractor outside the entrance. These illustrations were not a validated trajectory and automated UI checks did not establish maneuver correctness.

Revised to seven learning phases: setup, initial trailer turn, follow into diagonal alignment, diagonal approach, return trailer turn, follow/align tractor, and straight-back finish. Tractor/trailer headings are separate, poses include rearward progress, the final whole vehicle lies within the generic lane, and opposite-side directions are explicitly mirrored. Each pose remains an independent, conceptual illustration; no physical path or clearance validation is claimed.

Primary checks: Oregon CDL §6.1.7 and California DMV Truck Drivers agree on initial trailer-turn direction, following and drift correction. Oregon current §12 describes modernized reverse-offset parking and finish requirements: https://www.oregon.gov/odot/dmv/pages/online_cdl_manual_2/section_12.aspx . The app now distinguishes a generic adjacent-lane offset from a complete modernized/state test exercise and does not prescribe scoring limits, stop-box dimensions or equipment-specific triggers. Diagonal/return-turn teaching structure is an editorial explanation, not agency approval of these drawings or a hands-on instructor assessment.

Validation: 52 automated checks cover interactions, both directional examples, seven-phase navigation and exercise-scope wording. Browser visual QA uses local fixtures without member data or Supabase calls. No database, auth, member profile or production-project changes.
