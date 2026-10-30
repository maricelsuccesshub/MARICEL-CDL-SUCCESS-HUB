# Practice Yard decision-card fix — version 44

The Think Before You Steer card called showPracticeLesson('brain'), but the
current renderer allowlisted only trailer, straight, straight-left and center.
It returned without displaying content. Pointed the card at the existing center
exercise (Test 3: Straighten and Hold), added aria-controls for practiceContent,
and clarified the card description. A compatibility alias maps older 'brain'
callers to center before validation and navigation persistence.

The existing decision exercise, explanations, retries, Maricel truck/trailer
art and Tests 1–3 remain intact. No new numbered tests, member data, database or
Auth changes. The result scrolls into view and receives focus through the
existing startYardDecision implementation.

Validation: a regression test invoking the visible card's exact onclick handler
failed before the fix (empty content) and passes after it. It verifies the
scenario/choices, focus/scroll, wrong-answer retry, correct-answer completion
and legacy alias reset. All 116 tests pass. Browser checks used the actual
Practice Yard markup and scripts in a temporary fixture: clicking the card
rendered Test 3 with three choices and the branded illustration; wrong and
correct answers showed the expected explanations; restart re-enabled choices.
The fixture was removed before packaging. No real member records were accessed.
