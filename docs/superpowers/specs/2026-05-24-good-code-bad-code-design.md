# Good Code Bad Code MVP Design

## Context

Good Code Bad Code is a read-only learning site for developers who want to study code review patterns through side-by-side examples. The product is inspired by the browsing model of roadmap.sh, but the MVP is an Example Library rather than an interactive review exercise.

The first version targets five Tracks: HTML, CSS, JavaScript, TypeScript, and React. React is intentionally modeled as a Track rather than a language so the top-level category can include markup, styling, languages, and frameworks without bending terminology.

## Goals

- Provide a polished static library of Good Code vs Bad Code examples.
- Let readers browse by Track, then scan Review Lessons inside a Track.
- Show the Good Code column on the left and the Bad Code column on the right.
- Use MDX for authoring Review Notes while keeping lesson metadata and code snippets structured.
- Use Shiki for syntax highlighting at server/build time.
- Seed enough content to make navigation, filtering, and the visual system feel real.

## Non-Goals

- No accounts, saved progress, quiz flow, scoring, or AI review in the MVP.
- No CMS or database in the MVP.
- No global search in the MVP.
- No multi-step interactive code review exercise in the MVP.

## Approach

Use a Static MDX Library.

Each Review Lesson lives in `content/<track>/<lesson-slug>.mdx`. The file exports structured values for metadata, code snippets, tags, and takeaways. The MDX body is the Review Notes content. Next.js server code loads the local MDX files, validates the exported shape, builds Track and Lesson indexes, and renders static routes with App Router.

This approach is preferred over a split JSON-plus-MDX model because the authoring experience stays simple: one lesson is one file. It is preferred over a CMS-ready architecture because the MVP needs to prove the content format and reading experience before adding authoring infrastructure.

## Routes

- `/` shows the Track browser.
- `/tracks/[track]` shows a Track page with its Review Lessons and Track-local tag filters.
- `/tracks/[track]/[lesson]` shows one Review Lesson.
- `/tags/[tag]` is intentionally deferred until after the MVP.

Unknown Track or Lesson routes should call `notFound()` and render a restrained 404 page in the same editorial dark style.

## Content Model

A Review Lesson has these required fields:

- `title`: Human-readable lesson title.
- `track`: One of `html`, `css`, `javascript`, `typescript`, or `react`.
- `summary`: One short orientation sentence.
- `goodCode`: The preferred implementation for the lesson.
- `badCode`: The review issue, trade-off, or maintainability problem.
- `tags`: Lightweight labels for filtering and scanning.
- `takeaways`: Short rules or habits the reader should carry forward.
- MDX body: Review Notes explaining why the comparison matters.

Bad Code does not have to be broken code. It can run successfully while still exposing an issue that should be caught in review.

The MVP seed is 15 Review Lessons: three lessons for each of the five initial Tracks.

## UI Design

The visual direction is Editorial dark: calm, serious, code-first, and reference-like. The page should feel related to roadmap.sh through the Track grid concept, but it should not copy the neon roadmap style directly.

The homepage makes `Good Code Bad Code` the loudest brand signal and presents Tracks as the primary entry points. The Track page acts as a compact catalog: Track context, tag filters, and a list of lessons. The Lesson page uses Comparison first layout: title, summary, tags, Good/Bad code comparison, Review Notes, then Takeaways.

On desktop, Good Code appears in the left column and Bad Code appears in the right column. On smaller screens, the columns stack with Good Code first, then Bad Code.

## Components

Expected component boundaries:

- `TrackGrid`: Renders the homepage Track entry points.
- `LessonList`: Renders lessons for a Track and supports Track-local tag filtering.
- `TagFilter`: Handles local filtering state for a Track page.
- `CodeComparison`: Renders Good Code and Bad Code columns using highlighted HTML.
- `ReviewNotes`: Provides consistent MDX typography and spacing.
- `TakeawayList`: Renders short takeaways for a Review Lesson.
- `SiteHeader`: Provides lightweight navigation without overpowering the reading surface.

Cards should be used only where the card is the interaction, such as Track tiles or lesson list items. Routine page sections should use spacing, typography, and dividers rather than nested card treatments.

## Data Flow

The content loader runs server-side. It reads MDX exports, validates required fields, normalizes Track and slug values, and provides:

- all Tracks for the homepage,
- lessons for a given Track page,
- one lesson for a given Lesson page,
- static params for Track and Lesson routes.

Shiki highlighting runs server/build time. The browser receives already-highlighted markup for code snippets, avoiding client-side syntax highlighting work.

## Error Handling

Missing routes use `notFound()`.

Invalid content should fail clearly during development or build. Examples include an unknown Track, missing required field, empty code snippet, or mismatched Track folder and `track` export.

The UI should not silently render incomplete lesson pages.

## Testing And Verification

Required verification for implementation:

- `npm run lint`
- `npm run build`
- Browser check for `/`, `/tracks/react`, and one Review Lesson route.
- Responsive browser check for the lesson comparison layout on mobile width.

If the content loader becomes non-trivial during implementation, add focused validation tests or a content validation script so broken MDX exports fail before UI review.

## Documentation

Domain language lives in `CONTEXT.md`. Implementation details belong in this spec or future implementation plans, not in the glossary.

No ADR is needed yet. The Static MDX Library choice is a real trade-off, but it is not expensive enough to reverse at this stage and should be revisited only if authoring volume or contributor workflow becomes the primary constraint.
