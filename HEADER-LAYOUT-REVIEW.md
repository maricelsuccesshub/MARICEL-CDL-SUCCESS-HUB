# Shared header layout verification

October 30, 2026. Version 62's public assets remain unchanged by this review.

The expanded introduction previously conflicted with a learning-page stylesheet that changed the shared header into a flex row. The fix removes those component-specific header overrides and uses the common column layout for every page. The stylesheet URL is versioned at v62.

Browser verification used the actual current header markup, all production stylesheets, the lessons-open body class and a visible navigation element in a disposable fixture, without member authentication or data. This reproduces the header state shared by Lessons, New Driver Start Here, CDL Knowledge, Pre-Trip, Air Brakes and In-Cab. Checked normal and lessons-open states, each with navigation visible and hidden: 32 combinations total. At widths 320, 390, 430, 700, 701, 768, 1024 and 1440 CSS pixels: no horizontal overflow; header children stacked in order without overlapping; scope panel fit within the header. Audience cards use one column on phones and two above the 700px breakpoint. These are browser viewport checks, not a physical iPhone/Safari test.

Added a regression guard: learning component stylesheets cannot target the shared header element, and the common header retains its vertical flex layout. This keeps future learning-page styling from reintroducing the known conflict. Run node --test tests/*.test.cjs for the complete suite.

For future introduction/layout edits, repeat browser checks both with and without lessons-open and signed-in navigation, including both sides of the 700px breakpoint. Check the actual learning-page state, not only the signed-out landing page. A passing guard does not promise that unrelated future layout defects are impossible.

Disposable QA fixtures are removed before source synchronization. No database, member profile or deployment setting was changed.
