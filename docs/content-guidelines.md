# Content Guidelines

Use this when adding or reviewing lessons, translations, and code comments for Good Code Bad Code.

## Lesson Shape

- Each Review Lesson should teach one specific review habit.
- Good Code and Bad Code should use the same scenario so readers can compare them directly.
- Bad Code can still run; it exists to make a review issue visible, not to be obviously broken.
- Keep examples short enough to scan, but complete enough that the review issue feels real.
- Prefer one track at a time when doing large copy or comment sweeps so review, testing, and commits stay understandable.

## Code Comments

- Add Code Comments only where they help the reader notice the review signal.
- Aim for one to three comments per sample when a track is being brought up to comment coverage.
- Comments should explain intent, boundary, risk, or review smell; avoid syntax trivia.
- The good sample can explain the intended guardrail. The bad sample can point out the hidden risk without sounding like a joke.
- Do not use comments to rescue unclear examples. The code should still make sense without them.
- Keep comment syntax unchanged when translating comments. Only the comment text should change.

## Thai Copy

- Write Thai for developers learning code review, not literal Thai copied from the English sentence structure.
- Keep common technical terms when they are clearer, such as component, props, route, cache, request, response, type, and hook.
- Add Thai context around technical terms so the idea is still easy to understand.
- Prefer concrete sentences that answer: what should reviewers notice, why does it matter, and what habit should they keep.
- Avoid stiff phrases that sound translated, especially when a shorter Thai explanation is clearer.
- Titles can mix Thai and technical terms when that reads naturally.
- Summaries should be plain and direct before going deeper in Review Notes.
- Code Comment translations must match the English comment count and order for `goodCode` and `badCode`.

## Real-work language

- Say what reviewers should notice in the code, not just that the code is "clear", "better", or "appropriate".
- Avoid floating adjectives that do not name the object, risk, or habit. Replace them with concrete phrasing such as "the route validates request input before calling the service" or "the component keeps derived state out of local state".
- Prefer workplace review language: name the boundary, dependency, data shape, state, query, request, response, or resource that is being reviewed.
- Explain why the issue matters in production terms: debugging cost, hidden coupling, unsafe input, duplicated ownership, slow queries, leaked resources, or hard-to-test behavior.
- A strong paragraph usually answers three questions: what reviewers should notice, why it matters, and what habit they should carry into the next review.

## Track Sweep Workflow

- Update the MDX lesson examples and English comments first.
- Add or polish Localized Copy for Thai in the lesson registry.
- Add Thai Code Comment translations for both Good Code and Bad Code.
- Run the content tests after each track sweep.
- Commit completed tracks separately so future changes are easy to inspect.
