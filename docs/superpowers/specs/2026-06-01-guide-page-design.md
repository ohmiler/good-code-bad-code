# Guide Page Design

## Status

Approved for planning.

## Goal

Add a reader-facing guide page for Good Code Bad Code at `/guide`.
The page should help new readers understand how to use the Example Library without turning the product into a course, quiz, challenge, or authoring manual.

## Audience

The guide is for readers of the site, not content maintainers.
It should explain how to browse Tracks, read side-by-side examples, use Review Notes, keep Takeaways, switch language, and continue through lessons.

## Product Language

The page must use the project vocabulary from `CONTEXT.md`:

- Example Library
- Track
- Review Lesson
- Good Code
- Bad Code
- Review Notes
- Takeaway
- Localized Copy

The page must avoid language that frames the site as an exercise platform, quiz, challenge, grader, answer key, or task list.

## User Decisions

- The guide supports the existing English and Thai language toggle.
- The guide targets general readers only.
- The guide is linked from both the header and footer.
- The selected structure is a Quick Start Guide: short, scannable, and focused on first-use orientation.

## Page Structure

The `/guide` page should be static and scannable:

1. Header section
   - English: `How to use Good Code Bad Code`
   - Thai: `วิธีใช้ Good Code Bad Code`
   - A short summary that describes the page as a reader guide for the Example Library.

2. Three-step quick start
   - Pick a Track.
   - Compare the examples.
   - Carry the Takeaway into future reviews.

3. Lesson page orientation
   - Explain what readers will see in a Review Lesson:
     Good Code, Bad Code, Review Notes, and Takeaways.
   - Keep the copy practical and short.

4. Reading tips
   - Encourage readers to read like reviewers.
   - Make clear that Bad Code may still run; its job is to make a review issue visible.

5. Calls to action
   - Link back to the library/home page.
   - Include a clear action to choose a Track.

## Visual Direction

The guide should match the current site:

- Dark background and restrained surfaces.
- Emerald accent for orientation and primary actions.
- Thin white borders, small radius, and dense but readable sections.
- No large marketing hero, floating dashboard, or decorative image.
- Cards may be used for repeated step items because they are the content unit, not page decoration.

The page should feel like part of the existing Example Library, not a new landing page.

## Navigation

Add a guide link to both shared navigation surfaces:

- Header: `Guide` in English and `คู่มือ` in Thai.
- Footer: `Guide` in English and `คู่มือ` in Thai.

The header must remain usable on small screens. If the desktop row becomes tight, the link should use compact text styling and allow the header content to wrap or compress without clipping the brand or language toggle.

## Internationalization

Guide copy should live in the existing `uiCopy` localized UI copy system.

Required languages:

- English
- Thai

Thai copy should be natural for Thai developers and may keep common technical words such as Track, Good Code, Bad Code, Review Notes, and Takeaways when they are clearer than forced translation.

## SEO And Static Export

The guide page should:

- Export static metadata using the shared `createPageMetadata` helper.
- Use a guide-specific title and description.
- Use canonical path `/guide`.
- Be included in the generated sitemap.
- Preserve static export compatibility.

The page does not need dynamic data fetching or request-time cookies.

## Components And Boundaries

Expected implementation units:

- `app/guide/page.tsx` for the route and metadata.
- A small guide page component if needed to keep the route file readable.
- Header/footer updates for the `/guide` link.
- Shared SEO sitemap helper update so `/guide` is included with the home, Track, and Review Lesson URLs.
- Localized copy entries for guide labels and page text.

The guide should avoid introducing new global state or new routing conventions.

## Error Handling

The guide page has no user-submitted input and no remote data dependency.
Main failure modes are missing localized copy, broken links, and sitemap/metadata omissions.
These should be covered by tests rather than runtime error UI.

## Testing Plan

Use TDD during implementation.
Write failing tests before production code for:

- Header includes a localized link to `/guide`.
- Footer includes a localized link to `/guide`.
- Sitemap includes `/guide`.
- Guide UI copy exists for English and Thai.
- Guide page renders the expected main heading or core copy.

After implementation, verify:

- `npm run test:content`
- `npm run lint`
- `npm run build`

## Acceptance Criteria

- `/guide` renders successfully.
- The page supports English and Thai through the existing language toggle.
- Header and footer both link to `/guide`.
- `/guide` has canonical metadata.
- `/guide` appears in the sitemap.
- The page explains the reader workflow without adding author/admin documentation.
- The implementation preserves static export behavior.
