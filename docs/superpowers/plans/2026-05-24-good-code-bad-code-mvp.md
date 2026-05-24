# Good Code Bad Code MVP Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved read-only Good Code Bad Code MVP with Track browsing, Track-local tag filtering, MDX-authored Review Lessons, server/build-time Shiki highlighting, and 15 seeded lessons.

**Architecture:** Use Next.js App Router with local MDX content imported through an explicit lesson registry. The registry keeps Next's bundler deterministic while the server-side content loader validates lesson metadata, builds Track/Lesson indexes, and prepares highlighted code for pages.

**Tech Stack:** Next.js 16.2.6, React 19.2.4, TypeScript, Tailwind CSS 4, `@next/mdx`, MDX named exports, Shiki, Node test runner with `tsx`.

---

## File Structure

- Modify `package.json`: add MDX, Shiki, and content test dependencies/scripts.
- Modify `next.config.ts`: enable MDX page extensions through `@next/mdx`.
- Create `mdx-components.tsx`: required by `@next/mdx` App Router and used for global MDX typography.
- Create `types/mdx.d.ts`: type MDX default exports and the `metadata` named export.
- Create `lib/content/tracks.ts`: canonical Track definitions and Track helpers.
- Create `lib/content/schema.ts`: content types and metadata validation.
- Create `tests/content/schema.test.ts`: Node tests for content validation.
- Create `content/<track>/<lesson>.mdx`: 15 seeded Review Lessons.
- Create `content/lesson-registry.ts`: explicit MDX registry that imports every lesson and validates metadata.
- Create `lib/content/lessons.ts`: server-only content query and highlighting functions.
- Create `components/site-header.tsx`: lightweight global navigation.
- Create `components/home/track-grid.tsx`: homepage Track entry points.
- Create `components/track/tag-filter.tsx`: client-side Track-local tag controls.
- Create `components/track/lesson-list.tsx`: client-side filtered lesson list.
- Create `components/track/lesson-browser.tsx`: client wrapper joining tag filter and lesson list.
- Create `components/lesson/code-comparison.tsx`: Good Code and Bad Code comparison surface.
- Create `components/lesson/review-notes.tsx`: MDX notes wrapper.
- Create `components/lesson/takeaway-list.tsx`: lesson takeaways.
- Modify `app/layout.tsx`: update metadata, page shell, and font/body styling.
- Modify `app/globals.css`: editorial dark theme, Shiki code styles, and responsive base rules.
- Replace `app/page.tsx`: Track browser homepage.
- Create `app/tracks/[track]/page.tsx`: Track catalog route.
- Create `app/tracks/[track]/[lesson]/page.tsx`: Review Lesson route.
- Create `app/not-found.tsx`: restrained not-found page.

---

### Task 1: Configure MDX, Shiki, And Test Runner

**Files:**
- Modify: `package.json`
- Modify: `next.config.ts`
- Create: `mdx-components.tsx`
- Create: `types/mdx.d.ts`

- [ ] **Step 1: Install dependencies**

Run:

```bash
cmd.exe /c npm.cmd install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx shiki
cmd.exe /c npm.cmd install -D tsx
```

Expected: `package.json` and `package-lock.json` include the new packages.

- [ ] **Step 2: Add the content test script**

Modify `package.json` scripts to:

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint",
  "test:content": "node --import tsx --test tests/content/schema.test.ts"
}
```

- [ ] **Step 3: Enable MDX in Next config**

Replace `next.config.ts` with:

```ts
import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
```

- [ ] **Step 4: Add required MDX components file**

Create `mdx-components.tsx`:

```tsx
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h2: ({ children }) => (
    <h2 className="mt-10 text-2xl font-semibold text-zinc-50">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 text-xl font-semibold text-zinc-100">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mt-4 leading-7 text-zinc-300">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-300">{children}</ul>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-zinc-100">{children}</strong>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
```

- [ ] **Step 5: Type MDX lesson modules**

Create `types/mdx.d.ts`:

```ts
declare module "*.mdx" {
  import type { ComponentType } from "react";
  import type { LessonMetadata } from "@/lib/content/schema";

  export const metadata: LessonMetadata;

  const MDXComponent: ComponentType;
  export default MDXComponent;
}
```

- [ ] **Step 6: Commit configuration**

Run:

```bash
git add package.json package-lock.json next.config.ts mdx-components.tsx types/mdx.d.ts
git commit -m "chore: configure mdx content tooling"
```

Expected: commit succeeds.

---

### Task 2: Add Track And Lesson Content Contracts

**Files:**
- Create: `lib/content/tracks.ts`
- Create: `lib/content/schema.ts`
- Create: `tests/content/schema.test.ts`

- [ ] **Step 1: Write failing schema tests**

Create `tests/content/schema.test.ts`:

```ts
import assert from "node:assert/strict";
import { test } from "node:test";
import { validateLessonMetadata } from "../../lib/content/schema";

const validMetadata = {
  title: "Semantic document structure",
  track: "html",
  summary: "Use document landmarks to make page structure readable.",
  tags: ["semantics", "accessibility"],
  takeaways: ["Prefer meaningful landmarks over anonymous wrappers."],
  goodCode: {
    language: "html",
    filename: "article.html",
    code: "<main><article><h1>Title</h1></article></main>",
  },
  badCode: {
    language: "html",
    filename: "article.html",
    code: "<div><div><b>Title</b></div></div>",
  },
};

test("validateLessonMetadata accepts a complete lesson", () => {
  assert.deepEqual(
    validateLessonMetadata(validMetadata, "content/html/semantic-document-structure.mdx"),
    validMetadata,
  );
});

test("validateLessonMetadata rejects unknown tracks", () => {
  assert.throws(
    () =>
      validateLessonMetadata(
        { ...validMetadata, track: "vue" },
        "content/vue/component-state.mdx",
      ),
    /unknown track "vue"/,
  );
});

test("validateLessonMetadata rejects empty code snippets", () => {
  assert.throws(
    () =>
      validateLessonMetadata(
        {
          ...validMetadata,
          goodCode: { ...validMetadata.goodCode, code: "" },
        },
        "content/html/semantic-document-structure.mdx",
      ),
    /goodCode.code must be a non-empty string/,
  );
});

test("validateLessonMetadata rejects empty takeaways", () => {
  assert.throws(
    () =>
      validateLessonMetadata(
        { ...validMetadata, takeaways: [] },
        "content/html/semantic-document-structure.mdx",
      ),
    /takeaways must contain at least one item/,
  );
});
```

- [ ] **Step 2: Run the tests and verify they fail**

Run:

```bash
cmd.exe /c npm.cmd run test:content
```

Expected: FAIL because `lib/content/schema` does not exist.

- [ ] **Step 3: Add canonical Track definitions**

Create `lib/content/tracks.ts`:

```ts
export const tracks = [
  {
    slug: "html",
    title: "HTML",
    description: "Review structure, semantics, forms, and accessible document foundations.",
  },
  {
    slug: "css",
    title: "CSS",
    description: "Review layout, responsive styling, contrast, and maintainable selectors.",
  },
  {
    slug: "javascript",
    title: "JavaScript",
    description: "Review control flow, async behavior, naming, and side effects.",
  },
  {
    slug: "typescript",
    title: "TypeScript",
    description: "Review type narrowing, API boundaries, unions, and safer function shapes.",
  },
  {
    slug: "react",
    title: "React",
    description: "Review component boundaries, state, effects, and rendering decisions.",
  },
] as const;

export type Track = (typeof tracks)[number];
export type TrackSlug = Track["slug"];

const trackSlugs = new Set<string>(tracks.map((track) => track.slug));

export function isTrackSlug(value: string): value is TrackSlug {
  return trackSlugs.has(value);
}

export function getTrack(slug: string): Track | undefined {
  return tracks.find((track) => track.slug === slug);
}
```

- [ ] **Step 4: Add metadata validation**

Create `lib/content/schema.ts`:

```ts
import type { ComponentType } from "react";
import { isTrackSlug, type TrackSlug } from "./tracks";

export type CodeLanguage = "html" | "css" | "javascript" | "typescript" | "tsx";

export type CodeSample = {
  language: CodeLanguage;
  filename: string;
  code: string;
};

export type LessonMetadata = {
  title: string;
  track: TrackSlug;
  summary: string;
  tags: string[];
  takeaways: string[];
  goodCode: CodeSample;
  badCode: CodeSample;
};

export type LessonRecord = LessonMetadata & {
  slug: string;
  Component: ComponentType;
};

const codeLanguages = new Set<CodeLanguage>([
  "html",
  "css",
  "javascript",
  "typescript",
  "tsx",
]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readString(
  record: Record<string, unknown>,
  key: string,
  source: string,
): string {
  const value = record[key];
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${source}: ${key} must be a non-empty string`);
  }
  return value;
}

function readStringArray(
  record: Record<string, unknown>,
  key: string,
  source: string,
): string[] {
  const value = record[key];
  if (
    !Array.isArray(value) ||
    value.length === 0 ||
    value.some((item) => typeof item !== "string" || item.trim().length === 0)
  ) {
    throw new Error(`${source}: ${key} must contain at least one item`);
  }
  return value;
}

function readCodeSample(
  record: Record<string, unknown>,
  key: "goodCode" | "badCode",
  source: string,
): CodeSample {
  const value = record[key];
  if (!isRecord(value)) {
    throw new Error(`${source}: ${key} must be an object`);
  }

  const language = readString(value, "language", source);
  if (!codeLanguages.has(language as CodeLanguage)) {
    throw new Error(`${source}: ${key}.language "${language}" is not supported`);
  }

  return {
    language: language as CodeLanguage,
    filename: readString(value, "filename", source),
    code: readString(value, "code", source),
  };
}

export function validateLessonMetadata(
  metadata: unknown,
  source: string,
): LessonMetadata {
  if (!isRecord(metadata)) {
    throw new Error(`${source}: metadata must be an object`);
  }

  const track = readString(metadata, "track", source);
  if (!isTrackSlug(track)) {
    throw new Error(`${source}: unknown track "${track}"`);
  }

  return {
    title: readString(metadata, "title", source),
    track,
    summary: readString(metadata, "summary", source),
    tags: readStringArray(metadata, "tags", source),
    takeaways: readStringArray(metadata, "takeaways", source),
    goodCode: readCodeSample(metadata, "goodCode", source),
    badCode: readCodeSample(metadata, "badCode", source),
  };
}
```

- [ ] **Step 5: Run schema tests and verify they pass**

Run:

```bash
cmd.exe /c npm.cmd run test:content
```

Expected: PASS with four passing tests.

- [ ] **Step 6: Commit content contracts**

Run:

```bash
git add lib/content/tracks.ts lib/content/schema.ts tests/content/schema.test.ts package.json package-lock.json
git commit -m "test: add lesson metadata validation"
```

Expected: commit succeeds.

---

### Task 3: Seed MDX Lessons And Registry

**Files:**
- Create: `content/html/semantic-document-structure.mdx`
- Create: `content/html/accessible-form-labels.mdx`
- Create: `content/html/interactive-elements.mdx`
- Create: `content/css/flex-layout-boundaries.mdx`
- Create: `content/css/color-contrast-states.mdx`
- Create: `content/css/responsive-units.mdx`
- Create: `content/javascript/guard-clauses.mdx`
- Create: `content/javascript/async-error-handling.mdx`
- Create: `content/javascript/naming-side-effects.mdx`
- Create: `content/typescript/discriminated-unions.mdx`
- Create: `content/typescript/narrowing-unknown.mdx`
- Create: `content/typescript/precise-function-types.mdx`
- Create: `content/react/props-component-boundaries.mdx`
- Create: `content/react/derived-state.mdx`
- Create: `content/react/effect-dependencies.mdx`
- Create: `content/lesson-registry.ts`

- [ ] **Step 1: Create the HTML lesson files**

Use this exact shape for each MDX file: `export const metadata = { ... };` followed by `## What to review`, two short paragraphs, and `## Review notes`.

Create `content/html/semantic-document-structure.mdx` with:

```mdx
export const metadata = {
  title: "Semantic document structure",
  track: "html",
  summary: "Use landmarks and headings to make the page structure understandable.",
  tags: ["semantics", "accessibility", "structure"],
  takeaways: ["Prefer meaningful landmarks over anonymous wrappers."],
  goodCode: {
    language: "html",
    filename: "article.html",
    code: `<main>
  <article aria-labelledby="article-title">
    <h1 id="article-title">Reviewing pull requests</h1>
    <p>Small reviews are easier to reason about.</p>
  </article>
</main>`,
  },
  badCode: {
    language: "html",
    filename: "article.html",
    code: `<div>
  <div>
    <b>Reviewing pull requests</b>
    <div>Small reviews are easier to reason about.</div>
  </div>
</div>`,
  },
};

## What to review

The good version exposes the page structure through native landmarks and a real heading.

The bad version may look acceptable, but it hides meaning behind generic containers.

## Review notes

In review, ask whether another developer or assistive technology can understand the page outline without reading CSS. Semantic HTML is not decoration; it is part of the interface contract.
```

Create `content/html/accessible-form-labels.mdx` with a labeled email input as Good Code and an input that relies only on hint text as Bad Code.

Create `content/html/interactive-elements.mdx` with a native `<button type="button">` as Good Code and a clickable `<div>` as Bad Code.

- [ ] **Step 2: Create the CSS lesson files**

Create `content/css/flex-layout-boundaries.mdx` for a focused flex container with `gap` and local alignment as Good Code, and global child margin selectors as Bad Code.

Create `content/css/color-contrast-states.mdx` for explicit hover/focus states with sufficient contrast as Good Code, and color-only low-contrast state changes as Bad Code.

Create `content/css/responsive-units.mdx` for `clamp()` and container-friendly spacing as Good Code, and viewport-scaled body text as Bad Code.

Each CSS lesson must use `language: "css"`, a meaningful `filename`, at least two tags, one takeaway, and a Review Notes body explaining why the bad version is review-worthy even when it renders.

- [ ] **Step 3: Create the JavaScript lesson files**

Create `content/javascript/guard-clauses.mdx` for early returns that reduce nesting as Good Code and deeply nested branching as Bad Code.

Create `content/javascript/async-error-handling.mdx` for an `async` function that handles fetch failures and response status as Good Code, and a function that assumes every response is JSON as Bad Code.

Create `content/javascript/naming-side-effects.mdx` for a function name that reveals mutation as Good Code and a harmless-sounding function that mutates input as Bad Code.

Each JavaScript lesson must use `language: "javascript"` for code snippets and include tags that support Track-local filtering.

- [ ] **Step 4: Create the TypeScript lesson files**

Create `content/typescript/discriminated-unions.mdx` for a discriminated union result type as Good Code and optional fields that must be guessed together as Bad Code.

Create `content/typescript/narrowing-unknown.mdx` for narrowing `unknown` before use as Good Code and `as any` casting as Bad Code.

Create `content/typescript/precise-function-types.mdx` for a narrow callback signature as Good Code and a broad `Function` type as Bad Code.

Each TypeScript lesson must use `language: "typescript"` and include a takeaway about making invalid states or calls harder to express.

- [ ] **Step 5: Create the React lesson files**

Create `content/react/props-component-boundaries.mdx` with a presentational component receiving explicit props as Good Code and a component reaching into unrelated app state as Bad Code.

Create `content/react/derived-state.mdx` with derived values computed during render as Good Code and duplicated `useState` plus syncing effect as Bad Code.

Create `content/react/effect-dependencies.mdx` with a complete dependency array and abortable fetch as Good Code and a missing dependency effect as Bad Code.

Each React lesson must use `language: "tsx"` and include tags such as `components`, `state`, or `effects`.

- [ ] **Step 6: Create the explicit lesson registry**

Create `content/lesson-registry.ts`:

```ts
import type { ComponentType } from "react";
import { validateLessonMetadata, type LessonMetadata } from "@/lib/content/schema";

import HtmlSemanticStructure, {
  metadata as htmlSemanticStructureMetadata,
} from "./html/semantic-document-structure.mdx";
import HtmlAccessibleFormLabels, {
  metadata as htmlAccessibleFormLabelsMetadata,
} from "./html/accessible-form-labels.mdx";
import HtmlInteractiveElements, {
  metadata as htmlInteractiveElementsMetadata,
} from "./html/interactive-elements.mdx";
import CssFlexLayoutBoundaries, {
  metadata as cssFlexLayoutBoundariesMetadata,
} from "./css/flex-layout-boundaries.mdx";
import CssColorContrastStates, {
  metadata as cssColorContrastStatesMetadata,
} from "./css/color-contrast-states.mdx";
import CssResponsiveUnits, {
  metadata as cssResponsiveUnitsMetadata,
} from "./css/responsive-units.mdx";
import JsGuardClauses, {
  metadata as jsGuardClausesMetadata,
} from "./javascript/guard-clauses.mdx";
import JsAsyncErrorHandling, {
  metadata as jsAsyncErrorHandlingMetadata,
} from "./javascript/async-error-handling.mdx";
import JsNamingSideEffects, {
  metadata as jsNamingSideEffectsMetadata,
} from "./javascript/naming-side-effects.mdx";
import TsDiscriminatedUnions, {
  metadata as tsDiscriminatedUnionsMetadata,
} from "./typescript/discriminated-unions.mdx";
import TsNarrowingUnknown, {
  metadata as tsNarrowingUnknownMetadata,
} from "./typescript/narrowing-unknown.mdx";
import TsPreciseFunctionTypes, {
  metadata as tsPreciseFunctionTypesMetadata,
} from "./typescript/precise-function-types.mdx";
import ReactPropsComponentBoundaries, {
  metadata as reactPropsComponentBoundariesMetadata,
} from "./react/props-component-boundaries.mdx";
import ReactDerivedState, {
  metadata as reactDerivedStateMetadata,
} from "./react/derived-state.mdx";
import ReactEffectDependencies, {
  metadata as reactEffectDependenciesMetadata,
} from "./react/effect-dependencies.mdx";

type RawLesson = {
  slug: string;
  source: string;
  metadata: LessonMetadata;
  Component: ComponentType;
};

const rawLessons: RawLesson[] = [
  {
    slug: "semantic-document-structure",
    source: "content/html/semantic-document-structure.mdx",
    metadata: htmlSemanticStructureMetadata,
    Component: HtmlSemanticStructure,
  },
  {
    slug: "accessible-form-labels",
    source: "content/html/accessible-form-labels.mdx",
    metadata: htmlAccessibleFormLabelsMetadata,
    Component: HtmlAccessibleFormLabels,
  },
  {
    slug: "interactive-elements",
    source: "content/html/interactive-elements.mdx",
    metadata: htmlInteractiveElementsMetadata,
    Component: HtmlInteractiveElements,
  },
  {
    slug: "flex-layout-boundaries",
    source: "content/css/flex-layout-boundaries.mdx",
    metadata: cssFlexLayoutBoundariesMetadata,
    Component: CssFlexLayoutBoundaries,
  },
  {
    slug: "color-contrast-states",
    source: "content/css/color-contrast-states.mdx",
    metadata: cssColorContrastStatesMetadata,
    Component: CssColorContrastStates,
  },
  {
    slug: "responsive-units",
    source: "content/css/responsive-units.mdx",
    metadata: cssResponsiveUnitsMetadata,
    Component: CssResponsiveUnits,
  },
  {
    slug: "guard-clauses",
    source: "content/javascript/guard-clauses.mdx",
    metadata: jsGuardClausesMetadata,
    Component: JsGuardClauses,
  },
  {
    slug: "async-error-handling",
    source: "content/javascript/async-error-handling.mdx",
    metadata: jsAsyncErrorHandlingMetadata,
    Component: JsAsyncErrorHandling,
  },
  {
    slug: "naming-side-effects",
    source: "content/javascript/naming-side-effects.mdx",
    metadata: jsNamingSideEffectsMetadata,
    Component: JsNamingSideEffects,
  },
  {
    slug: "discriminated-unions",
    source: "content/typescript/discriminated-unions.mdx",
    metadata: tsDiscriminatedUnionsMetadata,
    Component: TsDiscriminatedUnions,
  },
  {
    slug: "narrowing-unknown",
    source: "content/typescript/narrowing-unknown.mdx",
    metadata: tsNarrowingUnknownMetadata,
    Component: TsNarrowingUnknown,
  },
  {
    slug: "precise-function-types",
    source: "content/typescript/precise-function-types.mdx",
    metadata: tsPreciseFunctionTypesMetadata,
    Component: TsPreciseFunctionTypes,
  },
  {
    slug: "props-component-boundaries",
    source: "content/react/props-component-boundaries.mdx",
    metadata: reactPropsComponentBoundariesMetadata,
    Component: ReactPropsComponentBoundaries,
  },
  {
    slug: "derived-state",
    source: "content/react/derived-state.mdx",
    metadata: reactDerivedStateMetadata,
    Component: ReactDerivedState,
  },
  {
    slug: "effect-dependencies",
    source: "content/react/effect-dependencies.mdx",
    metadata: reactEffectDependenciesMetadata,
    Component: ReactEffectDependencies,
  },
];

export const lessonSources = rawLessons.map((lesson) => ({
  ...validateLessonMetadata(lesson.metadata, lesson.source),
  slug: lesson.slug,
  Component: lesson.Component,
}));
```

- [ ] **Step 7: Run lint and build to catch MDX syntax errors**

Run:

```bash
cmd.exe /c npm.cmd run lint
cmd.exe /c npm.cmd run build
```

Expected: both commands pass. If build fails on a specific MDX file, fix the named export object or escape code string characters in that file.

- [ ] **Step 8: Commit seeded content**

Run:

```bash
git add content package.json package-lock.json
git commit -m "content: seed review lessons"
```

Expected: commit succeeds.

---

### Task 4: Build Server Content Loader And Shiki Highlighting

**Files:**
- Create: `lib/content/lessons.ts`

- [ ] **Step 1: Create content query and highlighting functions**

Create `lib/content/lessons.ts`:

```ts
import "server-only";

import { codeToHtml } from "shiki";
import { lessonSources } from "@/content/lesson-registry";
import { getTrack, tracks, type TrackSlug } from "./tracks";
import type { CodeSample, LessonRecord } from "./schema";

export type LessonPreview = Pick<
  LessonRecord,
  "slug" | "title" | "track" | "summary" | "tags"
>;

export type HighlightedCodeSample = CodeSample & {
  html: string;
};

export type HighlightedLesson = LessonRecord & {
  goodCode: HighlightedCodeSample;
  badCode: HighlightedCodeSample;
};

const sortedLessons = [...lessonSources].sort((a, b) =>
  a.title.localeCompare(b.title),
);

export function getAllTracks() {
  return tracks.map((track) => ({
    ...track,
    lessonCount: sortedLessons.filter((lesson) => lesson.track === track.slug).length,
  }));
}

export function getLessonsByTrack(track: TrackSlug): LessonPreview[] {
  return sortedLessons
    .filter((lesson) => lesson.track === track)
    .map(({ slug, title, track, summary, tags }) => ({
      slug,
      title,
      track,
      summary,
      tags,
    }));
}

export function getLesson(track: string, slug: string): LessonRecord | undefined {
  if (!getTrack(track)) {
    return undefined;
  }

  return sortedLessons.find(
    (lesson) => lesson.track === track && lesson.slug === slug,
  );
}

export function getTrackStaticParams() {
  return tracks.map((track) => ({ track: track.slug }));
}

export function getLessonStaticParams() {
  return sortedLessons.map((lesson) => ({
    track: lesson.track,
    lesson: lesson.slug,
  }));
}

async function highlightCode(sample: CodeSample): Promise<HighlightedCodeSample> {
  const html = await codeToHtml(sample.code, {
    lang: sample.language,
    theme: "github-dark",
  });

  return {
    ...sample,
    html,
  };
}

export async function highlightLesson(
  lesson: LessonRecord,
): Promise<HighlightedLesson> {
  const [goodCode, badCode] = await Promise.all([
    highlightCode(lesson.goodCode),
    highlightCode(lesson.badCode),
  ]);

  return {
    ...lesson,
    goodCode,
    badCode,
  };
}
```

- [ ] **Step 2: Run lint and content tests**

Run:

```bash
cmd.exe /c npm.cmd run test:content
cmd.exe /c npm.cmd run lint
```

Expected: both commands pass.

- [ ] **Step 3: Commit content loader**

Run:

```bash
git add lib/content/lessons.ts
git commit -m "feat: add lesson content loader"
```

Expected: commit succeeds.

---

### Task 5: Build Reusable UI Components

**Files:**
- Create: `components/site-header.tsx`
- Create: `components/home/track-grid.tsx`
- Create: `components/track/tag-filter.tsx`
- Create: `components/track/lesson-list.tsx`
- Create: `components/track/lesson-browser.tsx`
- Create: `components/lesson/code-comparison.tsx`
- Create: `components/lesson/review-notes.tsx`
- Create: `components/lesson/takeaway-list.tsx`

- [ ] **Step 1: Add global site header**

Create `components/site-header.tsx`:

```tsx
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#070b12]/90">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="font-semibold tracking-tight text-zinc-50">
          Good Code Bad Code
        </Link>
        <div className="text-sm text-zinc-400">Review patterns by Track</div>
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Add Track grid**

Create `components/home/track-grid.tsx`:

```tsx
import Link from "next/link";
import type { getAllTracks } from "@/lib/content/lessons";

type TrackCard = ReturnType<typeof getAllTracks>[number];

export function TrackGrid({ tracks }: { tracks: TrackCard[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {tracks.map((track) => (
        <Link
          key={track.slug}
          href={`/tracks/${track.slug}`}
          className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-400/50 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          <div className="flex items-start justify-between gap-4">
            <h2 className="text-xl font-semibold text-zinc-50">{track.title}</h2>
            <span className="text-sm text-zinc-500">{track.lessonCount}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-400">{track.description}</p>
        </Link>
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Add Track-local tag filter**

Create `components/track/tag-filter.tsx`:

```tsx
"use client";

type TagFilterProps = {
  tags: string[];
  activeTag: string | null;
  onChange: (tag: string | null) => void;
};

export function TagFilter({ tags, activeTag, onChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        aria-pressed={activeTag === null}
        onClick={() => onChange(null)}
        className="rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-300 transition hover:border-emerald-300/50 aria-pressed:border-emerald-300 aria-pressed:text-emerald-200"
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          type="button"
          aria-pressed={activeTag === tag}
          onClick={() => onChange(tag)}
          className="rounded-md border border-white/10 px-3 py-2 text-sm text-zinc-300 transition hover:border-emerald-300/50 aria-pressed:border-emerald-300 aria-pressed:text-emerald-200"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Add filtered lesson list**

Create `components/track/lesson-list.tsx`:

```tsx
"use client";

import Link from "next/link";
import type { LessonPreview } from "@/lib/content/lessons";

type LessonListProps = {
  lessons: LessonPreview[];
};

export function LessonList({ lessons }: LessonListProps) {
  return (
    <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
      {lessons.map((lesson) => (
        <Link
          key={lesson.slug}
          href={`/tracks/${lesson.track}/${lesson.slug}`}
          className="block py-5 transition hover:bg-white/[0.03] focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-zinc-50">{lesson.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                {lesson.summary}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 sm:justify-end">
              {lesson.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/[0.04] px-2 py-1 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
```

- [ ] **Step 5: Add lesson browser client wrapper**

Create `components/track/lesson-browser.tsx`:

```tsx
"use client";

import { useMemo, useState } from "react";
import type { LessonPreview } from "@/lib/content/lessons";
import { LessonList } from "./lesson-list";
import { TagFilter } from "./tag-filter";

export function LessonBrowser({ lessons }: { lessons: LessonPreview[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(
    () => Array.from(new Set(lessons.flatMap((lesson) => lesson.tags))).sort(),
    [lessons],
  );

  const visibleLessons = activeTag
    ? lessons.filter((lesson) => lesson.tags.includes(activeTag))
    : lessons;

  return (
    <section className="mt-10">
      <TagFilter tags={tags} activeTag={activeTag} onChange={setActiveTag} />
      <LessonList lessons={visibleLessons} />
    </section>
  );
}
```

- [ ] **Step 6: Add code comparison**

Create `components/lesson/code-comparison.tsx`:

```tsx
import type { HighlightedCodeSample } from "@/lib/content/lessons";

type CodeComparisonProps = {
  goodCode: HighlightedCodeSample;
  badCode: HighlightedCodeSample;
};

function CodePanel({
  label,
  tone,
  sample,
}: {
  label: string;
  tone: "good" | "bad";
  sample: HighlightedCodeSample;
}) {
  const toneClass =
    tone === "good"
      ? "border-emerald-400/30 bg-emerald-400/[0.03] text-emerald-200"
      : "border-rose-400/30 bg-rose-400/[0.03] text-rose-200";

  return (
    <section className={`rounded-lg border ${toneClass}`}>
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <h2 className="text-sm font-semibold">{label}</h2>
        <span className="font-mono text-xs text-zinc-500">{sample.filename}</span>
      </div>
      <div
        className="code-surface overflow-x-auto p-4 text-sm"
        dangerouslySetInnerHTML={{ __html: sample.html }}
      />
    </section>
  );
}

export function CodeComparison({ goodCode, badCode }: CodeComparisonProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <CodePanel label="Good Code" tone="good" sample={goodCode} />
      <CodePanel label="Bad Code" tone="bad" sample={badCode} />
    </div>
  );
}
```

- [ ] **Step 7: Add Review Notes and takeaways**

Create `components/lesson/review-notes.tsx`:

```tsx
import type { ReactNode } from "react";

export function ReviewNotes({ children }: { children: ReactNode }) {
  return (
    <section className="mt-12 max-w-3xl">
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
        Review Notes
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
```

Create `components/lesson/takeaway-list.tsx`:

```tsx
export function TakeawayList({ takeaways }: { takeaways: string[] }) {
  return (
    <section className="mt-12 border-t border-white/10 pt-8">
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
        Takeaways
      </h2>
      <ul className="mt-4 grid gap-3">
        {takeaways.map((takeaway) => (
          <li
            key={takeaway}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-zinc-200"
          >
            {takeaway}
          </li>
        ))}
      </ul>
    </section>
  );
}
```

- [ ] **Step 8: Run lint**

Run:

```bash
cmd.exe /c npm.cmd run lint
```

Expected: PASS.

- [ ] **Step 9: Commit UI components**

Run:

```bash
git add components
git commit -m "feat: add review library components"
```

Expected: commit succeeds.

---

### Task 6: Build Routes And Editorial Dark Styling

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Replace: `app/page.tsx`
- Create: `app/tracks/[track]/page.tsx`
- Create: `app/tracks/[track]/[lesson]/page.tsx`
- Create: `app/not-found.tsx`

- [ ] **Step 1: Update root layout**

Replace `app/layout.tsx` with:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Good Code Bad Code",
  description: "Study code review patterns through side-by-side examples.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#070b12] text-zinc-100">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Update global CSS**

Replace `app/globals.css` with:

```css
@import "tailwindcss";

:root {
  --background: #070b12;
  --foreground: #f4f7fb;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

* {
  box-sizing: border-box;
}

html {
  background: var(--background);
}

body {
  background: radial-gradient(circle at top, #111827 0, #070b12 34rem);
  color: var(--foreground);
  font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
}

a {
  text-decoration: none;
}

.code-surface pre {
  margin: 0;
  background: transparent !important;
  font-family: var(--font-geist-mono), Consolas, monospace;
  line-height: 1.7;
}

.code-surface code {
  font-family: inherit;
}
```

- [ ] **Step 3: Build the homepage**

Replace `app/page.tsx` with:

```tsx
import { TrackGrid } from "@/components/home/track-grid";
import { getAllTracks } from "@/lib/content/lessons";

export default function Home() {
  const tracks = getAllTracks();

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-24">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Example Library
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-zinc-50 sm:text-7xl">
          Good Code Bad Code
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Study code review patterns through curated side-by-side examples.
        </p>
      </section>
      <section className="mt-14">
        <TrackGrid tracks={tracks} />
      </section>
    </main>
  );
}
```

- [ ] **Step 4: Build the Track route**

Create `app/tracks/[track]/page.tsx`:

```tsx
import { notFound } from "next/navigation";
import { LessonBrowser } from "@/components/track/lesson-browser";
import {
  getLessonsByTrack,
  getTrackStaticParams,
} from "@/lib/content/lessons";
import { getTrack, isTrackSlug } from "@/lib/content/tracks";

export const dynamicParams = false;

export function generateStaticParams() {
  return getTrackStaticParams();
}

export default async function TrackPage({
  params,
}: PageProps<"/tracks/[track]">) {
  const { track: trackSlug } = await params;

  if (!isTrackSlug(trackSlug)) {
    notFound();
  }

  const track = getTrack(trackSlug);
  if (!track) {
    notFound();
  }

  const lessons = getLessonsByTrack(trackSlug);

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
        Track
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
        {track.title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
        {track.description}
      </p>
      <LessonBrowser lessons={lessons} />
    </main>
  );
}
```

- [ ] **Step 5: Build the Review Lesson route**

Create `app/tracks/[track]/[lesson]/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeComparison } from "@/components/lesson/code-comparison";
import { ReviewNotes } from "@/components/lesson/review-notes";
import { TakeawayList } from "@/components/lesson/takeaway-list";
import {
  getLesson,
  getLessonStaticParams,
  highlightLesson,
} from "@/lib/content/lessons";
import { getTrack } from "@/lib/content/tracks";

export const dynamicParams = false;

export function generateStaticParams() {
  return getLessonStaticParams();
}

export async function generateMetadata({
  params,
}: PageProps<"/tracks/[track]/[lesson]">): Promise<Metadata> {
  const { track, lesson: lessonSlug } = await params;
  const lesson = getLesson(track, lessonSlug);

  if (!lesson) {
    return {
      title: "Lesson not found | Good Code Bad Code",
    };
  }

  return {
    title: `${lesson.title} | Good Code Bad Code`,
    description: lesson.summary,
  };
}

export default async function LessonPage({
  params,
}: PageProps<"/tracks/[track]/[lesson]">) {
  const { track: trackSlug, lesson: lessonSlug } = await params;
  const lesson = getLesson(trackSlug, lessonSlug);

  if (!lesson) {
    notFound();
  }

  const track = getTrack(lesson.track);
  if (!track) {
    notFound();
  }

  const highlightedLesson = await highlightLesson(lesson);
  const Notes = highlightedLesson.Component;

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 sm:py-14">
      <Link
        href={`/tracks/${track.slug}`}
        className="text-sm text-zinc-400 transition hover:text-emerald-200"
      >
        {track.title} Track
      </Link>

      <header className="mt-8 max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
          {highlightedLesson.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          {highlightedLesson.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {highlightedLesson.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-white/[0.04] px-2 py-1 text-xs text-zinc-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <section className="mt-10">
        <CodeComparison
          goodCode={highlightedLesson.goodCode}
          badCode={highlightedLesson.badCode}
        />
      </section>

      <ReviewNotes>
        <Notes />
      </ReviewNotes>

      <TakeawayList takeaways={highlightedLesson.takeaways} />
    </main>
  );
}
```

- [ ] **Step 6: Add not-found page**

Create `app/not-found.tsx`:

```tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-3xl flex-col justify-center px-5 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
        Not Found
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50">
        This review lesson is not in the library.
      </h1>
      <p className="mt-5 text-lg leading-8 text-zinc-400">
        The Track or lesson slug does not match a published example.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit rounded-md border border-white/10 px-4 py-3 text-sm font-medium text-zinc-100 transition hover:border-emerald-300/50"
      >
        Back to Tracks
      </Link>
    </main>
  );
}
```

- [ ] **Step 7: Run verification**

Run:

```bash
cmd.exe /c npm.cmd run test:content
cmd.exe /c npm.cmd run lint
cmd.exe /c npm.cmd run build
```

Expected: all commands pass.

- [ ] **Step 8: Commit routes and styling**

Run:

```bash
git add app components lib content mdx-components.tsx types package.json package-lock.json next.config.ts
git commit -m "feat: build static review library"
```

Expected: commit succeeds.

---

### Task 7: Browser Verification And Final Polish

**Files:**
- Modify only files needed to fix issues found during browser verification.

- [ ] **Step 1: Start the dev server**

Run:

```bash
Start-Process -WindowStyle Hidden -FilePath cmd.exe -ArgumentList '/c','npm.cmd run dev'
```

Expected: Next dev server starts on `http://localhost:3000`, or another open port if 3000 is occupied.

- [ ] **Step 2: Verify homepage**

Open `http://localhost:3000`.

Expected:
- Brand text `Good Code Bad Code` is the first-viewport signal.
- Track grid shows HTML, CSS, JavaScript, TypeScript, and React.
- Each Track tile shows the expected lesson count of `3`.
- No text overlaps at desktop width.

- [ ] **Step 3: Verify Track page and tag filtering**

Open `http://localhost:3000/tracks/react`.

Expected:
- React Track page shows three lessons.
- Tag buttons include `All` and React lesson tags.
- Clicking a tag filters the lesson list without navigating.
- Clicking `All` restores all three lessons.

- [ ] **Step 4: Verify Review Lesson page**

Open `http://localhost:3000/tracks/react/effect-dependencies`.

Expected:
- Title, summary, tags, Good Code, Bad Code, Review Notes, and Takeaways are visible.
- Good Code appears to the left of Bad Code at desktop width.
- Code blocks are syntax-highlighted by Shiki and scroll horizontally instead of overflowing.

- [ ] **Step 5: Verify mobile lesson layout**

Resize browser to a mobile width around `390px`.

Expected:
- Good Code stacks above Bad Code.
- Header and code filenames do not overflow their panels.
- Review Notes and Takeaways remain readable.

- [ ] **Step 6: Verify not-found behavior**

Open `http://localhost:3000/tracks/react/not-a-real-lesson`.

Expected: restrained not-found page appears with a link back to `/`.

- [ ] **Step 7: Run final verification**

Run:

```bash
cmd.exe /c npm.cmd run test:content
cmd.exe /c npm.cmd run lint
cmd.exe /c npm.cmd run build
```

Expected: all commands pass.

- [ ] **Step 8: Commit polish fixes**

If browser verification required changes, run:

```bash
git add app components content lib
git commit -m "fix: polish review library experience"
```

Expected: commit succeeds when there are changes. If there are no changes, skip this commit.

---

## Self-Review Checklist

- Spec coverage: Tracks, routes, content model, MDX named exports, Shiki highlighting, Editorial dark UI, Track-local filtering, not-found behavior, and verification are covered.
- Unspecified-step scan: The plan contains no unfilled markers and no vague implementation steps.
- Type consistency: `TrackSlug`, `LessonMetadata`, `LessonRecord`, `LessonPreview`, and `HighlightedLesson` flow from schema to loader to UI routes.
- Next.js 16 note: Route pages use `params` as a Promise through `PageProps<...>`, matching the local Next docs.
