# Maricel CDL Success Hub Visual Mastery

Published resource: `/backing-poster`, reached from Safety & Resources and the Practice Yard study-material shortcut.

Original Coach Maricel Hub explanations, custom code-native diagrams, and unchanged existing Maricel tractor/trailer PNG artwork. No school materials or government illustrations are reproduced. The supplied earlier poster remains in the project source archive. The public visual title and branding are Maricel CDL Success Hub Visual Mastery, with no Mentorship label or revision announcement.

## Teaching decisions and evidence

- Two intentional-turn panels begin from aligned tractor/trailer poses. Desired trailer-rear LEFT uses initial top-of-wheel RIGHT; desired rear RIGHT uses initial LEFT. Green arrows show intended rear directions, not computed paths. Oregon CDL Manual §6.1.7 supports initiation and changing steering to follow.
- Two distinct straight-back drift panels show confirmed unwanted LEFT/RIGHT drift. Initial SMALL top-of-wheel input is toward that drift. Both examples explicitly require observing and easing as alignment returns; they are not fixed steering movements or time steps. Oregon §6.1.7 supports this distinction.
- Every diagram uses the same top view, tractor front down, with driver-right on screen-left and driver-left on screen-right. Rear-corner dots and a separate rear-wheel outline identify different references. Numerical angles, clearance promises, engineered trajectories and universal fixed wheel-turn counts are absent.
- Wheel center is distinguished from tractor/trailer alignment and trailer/lane alignment. Side-by-side independent poses do not imply measured physical response.
- GOAL starts with stop/secure, not an automatic forward move. Path, sides, overhead, people, ground and stopping area are included. Oregon §2.2.4 supports preparation and observation. Vehicle-facing exit and three points of contact are sourced separately to Oregon §12; local test layouts and scoring are not treated as nationwide rules.
- Lost spotter visibility means immediate stopping. OSHA Preventing Backovers spotter guidance supports that reminder and agreed signals; the resource does not label this informational guidance a universal statutory requirement.
- A pull-up requires checking the forward path and planning. A fixed number of repetitions is not proof of readiness. The resource is educational support for supervised, equipment-specific learning and is not agency-endorsed or a guarantee of performance.

Official sources are linked by teaching point beneath the poster. The PNG and self-contained SVG carry source names and the companion page URL. Source-check date is October 29, 2026, Pacific time.

## Files / reproduction

- `dist/assets/maricel-visual-mastery.svg`: precise native poster layout, with embedded existing truck artwork, accessible title/description and scenario labels.
- `dist/assets/maricel-visual-mastery.png`: 1800 × 2700 PNG exported from that SVG, for full-size viewing and downloads on phones.
- `tools/build-visual-mastery.py`: source layout generator; requires Pillow font measurement and DejaVu Sans fonts. Run from any working directory; it resolves the project from its own location.
- Re-render the PNG with an SVG-capable renderer such as Sharp: `node -e "require('sharp')('dist/assets/maricel-visual-mastery.svg').png().toFile('dist/assets/maricel-visual-mastery.png')"`.
- `dist/backing-poster.html`: visual resource, PNG/SVG downloads, print stylesheet, accessible text notes and evidence mapping. The text-focused study sheet remains an optional companion.

## Validation

121 automated tests passed, including all prior checks and visual-resource checks for the four direction scenarios, consistent original truck assets, self-contained SVG context, PNG dimensions, source links and member-facing wording. SVG XML and local asset links were validated. The rendered PNG was inspected for layout and arrow directions; browser QA confirmed the resource page, accessible notes, download links, full-size image load and 1800 × 2700 dimensions. Print layout is provided; no physical paper print was tested. No member data, authentication or database configuration changed.
