# Guide Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a reader-facing `/guide` page that explains how to use Good Code Bad Code, supports English/Thai copy, and is reachable from header navigation.

**Architecture:** Add one static App Router route backed by a small localized client component. Keep reader-facing strings in the existing `uiCopy` system, reuse the current `LanguageProvider`, and extend the shared SEO sitemap helper so `/guide` is included consistently.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Node test runner with `tsx`.

---

## Approved Change After Execution

User feedback removed the footer guide link requirement. The final implementation keeps `/guide` in the header only and asserts the footer does not contain reader navigation.

---

## File Map

- Create `components/guide/guide-content.tsx`: localized guide page UI that reads `uiCopy` through `useLanguage`.
- Create `app/guide/page.tsx`: static route and metadata for `/guide`.
- Create `tests/content/guide-page.test.tsx`: render and metadata tests for the guide page.
- Modify `lib/i18n/translations.ts`: add guide and navigation copy to `uiCopy.en` and `uiCopy.th`.
- Modify `components/language/localized-ui.tsx`: add reusable localized guide link component.
- Modify `components/site-header.tsx`: show guide link in the header.
- Modify `components/site-footer.tsx`: keep the footer focused on the support link without reader navigation.
- Modify `tests/content/i18n.test.ts`: assert guide copy exists for English and Thai.
- Create `tests/content/site-header.test.tsx`: assert header guide link renders in both languages.
- Modify `tests/content/footer.test.ts`: wrap footer in `LanguageProvider` and assert the guide link is absent.
- Modify `lib/seo.ts`: add `/guide` to sitemap entries.
- Modify `tests/content/seo.test.ts`: assert sitemap contains `/guide`.
- Modify `package.json`: include `tests/content/guide-page.test.tsx` and `tests/content/site-header.test.tsx` in `test:content`.

## Preflight

- [ ] **Step 1: Read local project instructions**

Read:

```txt
AGENTS.md
```

Expected: note that this project uses Next.js 16 with breaking changes and local docs must be checked before code changes.

- [ ] **Step 2: Read the relevant Next.js local docs**

Read:

```txt
node_modules/next/dist/docs/01-app/01-getting-started/03-layouts-and-pages.md
node_modules/next/dist/docs/01-app/01-getting-started/04-linking-and-navigating.md
node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md
```

Expected: use App Router `app/guide/page.tsx`, `next/link`, and a static `metadata` export.

## Task 1: Add Localized Guide Copy Contract

**Files:**
- Modify: `tests/content/i18n.test.ts`
- Modify: `lib/i18n/translations.ts`

- [ ] **Step 1: Write the failing i18n copy test**

Add this test near the existing UI/i18n tests in `tests/content/i18n.test.ts`:

```ts
test("guide UI copy covers English and Thai", () => {
  const requiredGuideKeys = [
    "guideNavLabel",
    "guideEyebrow",
    "guideTitle",
    "guideSummary",
    "guideQuickStartTitle",
    "guideStepTrackTitle",
    "guideStepTrackSummary",
    "guideStepCompareTitle",
    "guideStepCompareSummary",
    "guideStepTakeawayTitle",
    "guideStepTakeawaySummary",
    "guideLessonAnatomyTitle",
    "guideGoodCodeSummary",
    "guideBadCodeSummary",
    "guideReviewNotesSummary",
    "guideTakeawaysSummary",
    "guideReadingTipsTitle",
    "guideReadingTipsSummary",
    "guidePrimaryCta",
  ] as const;

  for (const language of ["en", "th"] as const) {
    const copy = uiCopy[language] as Record<string, string>;

    for (const key of requiredGuideKeys) {
      assert.ok(copy[key]?.trim(), `${language}.${key} must be present`);
    }
  }

  assert.match(uiCopy.th.guideTitle, /[\u0e00-\u0e7f]/);
  assert.match(uiCopy.th.guidePrimaryCta, /[\u0e00-\u0e7f]/);
});
```

- [ ] **Step 2: Run the i18n test and verify it fails**

Run:

```bash
node --import tsx --test tests/content/i18n.test.ts
```

Expected: the command fails because `en.guideNavLabel` and the other guide keys are not present.

- [ ] **Step 3: Add guide copy to `uiCopy.en`**

In `lib/i18n/translations.ts`, add these properties inside `uiCopy.en` after `relatedTracksSummary`:

```ts
guideNavLabel: "Guide",
guideEyebrow: "Reader Guide",
guideTitle: "How to use Good Code Bad Code",
guideSummary:
  "Use the Example Library to practice reading code like a reviewer: choose a Track, compare the examples, then keep the Takeaway for your next review.",
guideQuickStartTitle: "Start in three steps",
guideStepTrackTitle: "Pick a Track",
guideStepTrackSummary:
  "Choose the language, framework, runtime, tool, or styling system you want to review.",
guideStepCompareTitle: "Compare the examples",
guideStepCompareSummary:
  "Read Good Code and Bad Code side by side before opening the explanation in your head.",
guideStepTakeawayTitle: "Carry the Takeaway",
guideStepTakeawaySummary:
  "Use the Review Notes and Takeaways as a short checklist for future code reviews.",
guideLessonAnatomyTitle: "What each Review Lesson shows",
guideGoodCodeSummary:
  "The preferred version that makes the review habit visible in code.",
guideBadCodeSummary:
  "A version with a review issue or trade-off that may still run but is harder to maintain.",
guideReviewNotesSummary:
  "A short explanation connecting the code difference to the review signal.",
guideTakeawaysSummary:
  "A compact habit to remember after you leave the lesson.",
guideReadingTipsTitle: "Read like a reviewer",
guideReadingTipsSummary:
  "Pause before reading the notes. Ask what changed, what risk it reduces, and whether the same pattern appears in your own codebase.",
guidePrimaryCta: "Choose a Track",
```

- [ ] **Step 4: Add guide copy to `uiCopy.th`**

In `lib/i18n/translations.ts`, add these properties inside `uiCopy.th` after `relatedTracksSummary`:

```ts
guideNavLabel: "คู่มือ",
guideEyebrow: "คู่มือผู้อ่าน",
guideTitle: "วิธีใช้ Good Code Bad Code",
guideSummary:
  "ใช้ Example Library เพื่อฝึกอ่านโค้ดแบบ reviewer: เลือก Track, เทียบตัวอย่าง, แล้วเก็บ Takeaway ไปใช้ตอนรีวิวครั้งถัดไป.",
guideQuickStartTitle: "เริ่มใช้งานใน 3 ขั้น",
guideStepTrackTitle: "เลือก Track",
guideStepTrackSummary:
  "เลือกภาษา, framework, runtime, tool, หรือ styling system ที่อยากฝึกรีวิว.",
guideStepCompareTitle: "เทียบตัวอย่าง",
guideStepCompareSummary:
  "อ่าน Good Code และ Bad Code เทียบกันก่อน แล้วลองจับสัญญาณรีวิวด้วยตัวเอง.",
guideStepTakeawayTitle: "เก็บ Takeaway",
guideStepTakeawaySummary:
  "ใช้ Review Notes และ Takeaways เป็น checklist สั้นๆ สำหรับรีวิวโค้ดครั้งต่อไป.",
guideLessonAnatomyTitle: "ในแต่ละ Review Lesson มีอะไร",
guideGoodCodeSummary:
  "เวอร์ชันที่แสดงนิสัยการรีวิวที่ควรทำให้เห็นในโค้ดจริง.",
guideBadCodeSummary:
  "เวอร์ชันที่มีประเด็นรีวิวหรือ trade-off ให้สังเกต แม้โค้ดอาจยังรันได้.",
guideReviewNotesSummary:
  "คำอธิบายสั้นๆ ที่เชื่อมความต่างของโค้ดกับสัญญาณที่ควรรีวิว.",
guideTakeawaysSummary:
  "นิสัยหรือหลักจำสั้นๆ ที่ควรพกออกจากบทเรียนนั้น.",
guideReadingTipsTitle: "อ่านแบบ reviewer",
guideReadingTipsSummary:
  "ลองหยุดคิดก่อนอ่าน notes: อะไรเปลี่ยนไป, ลดความเสี่ยงอะไร, และ pattern เดียวกันนี้มีใน codebase ของเราหรือไม่.",
guidePrimaryCta: "เลือก Track",
```

- [ ] **Step 5: Run the i18n test and verify it passes**

Run:

```bash
node --import tsx --test tests/content/i18n.test.ts
```

Expected: all `tests/content/i18n.test.ts` tests pass.

- [ ] **Step 6: Commit Task 1**

```bash
git add tests/content/i18n.test.ts lib/i18n/translations.ts
git commit -m "feat: add guide page localized copy"
```

## Task 2: Add The Guide Page Route And UI

**Files:**
- Create: `tests/content/guide-page.test.tsx`
- Create: `components/guide/guide-content.tsx`
- Create: `app/guide/page.tsx`
- Modify: `package.json`

- [ ] **Step 1: Write the failing guide page test**

Create `tests/content/guide-page.test.tsx`:

```tsx
import assert from "node:assert/strict";
import { test } from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { GuideContent } from "../../components/guide/guide-content";
import { LanguageProvider } from "../../components/language/language-provider";
import { metadata } from "../../app/guide/page";

function renderGuide(language: "en" | "th") {
  return renderToStaticMarkup(
    <LanguageProvider initialLanguage={language}>
      <GuideContent />
    </LanguageProvider>,
  );
}

test("GuideContent renders the English quick start guide", () => {
  const markup = renderGuide("en");

  assert.match(markup, /How to use Good Code Bad Code/);
  assert.match(markup, /Start in three steps/);
  assert.match(markup, /Pick a Track/);
  assert.match(markup, /Good Code/);
  assert.match(markup, /Bad Code/);
  assert.match(markup, /href="\//);
});

test("GuideContent renders Thai reader copy", () => {
  const markup = renderGuide("th");

  assert.match(markup, /วิธีใช้ Good Code Bad Code/);
  assert.match(markup, /เริ่มใช้งานใน 3 ขั้น/);
  assert.match(markup, /เลือก Track/);
  assert.match(markup, /อ่านแบบ reviewer/);
});

test("guide page metadata uses the guide canonical path", () => {
  assert.equal(metadata.title, "How to use Good Code Bad Code");
  assert.equal(
    metadata.alternates?.canonical,
    "https://good-code-bad-code.pages.dev/guide",
  );
  assert.equal(
    metadata.openGraph?.url,
    "https://good-code-bad-code.pages.dev/guide",
  );
});
```

- [ ] **Step 2: Add the new test file to `package.json`**

In `package.json`, append the new guide page test to `scripts.test:content` after `tests/content/footer.test.ts`:

```json
"tests/content/footer.test.ts tests/content/guide-page.test.tsx tests/content/i18n.test.ts"
```

Keep the rest of the existing test list unchanged.

- [ ] **Step 3: Run the guide page test and verify it fails**

Run:

```bash
node --import tsx --test tests/content/guide-page.test.tsx
```

Expected: the command fails because `components/guide/guide-content` and `app/guide/page` do not exist.

- [ ] **Step 4: Create the guide content component**

Create `components/guide/guide-content.tsx`:

```tsx
"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import { uiCopy } from "@/lib/i18n/translations";

const quickStartSteps = [
  ["01", "guideStepTrackTitle", "guideStepTrackSummary"],
  ["02", "guideStepCompareTitle", "guideStepCompareSummary"],
  ["03", "guideStepTakeawayTitle", "guideStepTakeawaySummary"],
] as const;

const lessonParts = [
  ["goodCode", "guideGoodCodeSummary"],
  ["badCode", "guideBadCodeSummary"],
  ["reviewNotes", "guideReviewNotesSummary"],
  ["takeaways", "guideTakeawaysSummary"],
] as const;

export function GuideContent() {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12 sm:py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          {copy.guideEyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
          {copy.guideTitle}
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          {copy.guideSummary}
        </p>
      </section>

      <section className="mt-12" aria-labelledby="guide-quick-start">
        <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-4">
          <h2
            id="guide-quick-start"
            className="text-2xl font-semibold tracking-tight text-zinc-50"
          >
            {copy.guideQuickStartTitle}
          </h2>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {quickStartSteps.map(([number, titleKey, summaryKey]) => (
            <article
              key={number}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
            >
              <p className="font-mono text-xs font-semibold text-emerald-300">
                {number}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-zinc-50">
                {copy[titleKey]}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {copy[summaryKey]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
            {copy.guideLessonAnatomyTitle}
          </h2>
          <p className="mt-4 text-sm leading-6 text-zinc-500">
            {copy.guideReadingTipsSummary}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {lessonParts.map(([labelKey, summaryKey]) => (
            <article
              key={labelKey}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="text-base font-semibold text-zinc-50">
                {copy[labelKey]}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {copy[summaryKey]}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 border-y border-white/10 py-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
          {copy.guideReadingTipsTitle}
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400">
          {copy.guideReadingTipsSummary}
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-md border border-emerald-300/50 bg-emerald-300/10 px-4 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/15 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          {copy.guidePrimaryCta}
        </Link>
      </section>
    </main>
  );
}
```

- [ ] **Step 5: Create the guide route**

Create `app/guide/page.tsx`:

```tsx
import type { Metadata } from "next";
import { GuideContent } from "@/components/guide/guide-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "How to use Good Code Bad Code",
  description:
    "Learn how to browse Tracks, compare Good Code and Bad Code, and use Review Notes and Takeaways.",
  path: "/guide",
});

export default function GuidePage() {
  return <GuideContent />;
}
```

- [ ] **Step 6: Run the guide page test and verify it passes**

Run:

```bash
node --import tsx --test tests/content/guide-page.test.tsx
```

Expected: `tests/content/guide-page.test.tsx` passes.

- [ ] **Step 7: Commit Task 2**

```bash
git add tests/content/guide-page.test.tsx components/guide/guide-content.tsx app/guide/page.tsx package.json
git commit -m "feat: add reader guide page"
```

## Task 3: Add Header Guide Link And Keep Footer Clean

**Files:**
- Create: `tests/content/site-header.test.tsx`
- Modify: `tests/content/footer.test.ts`
- Modify: `components/language/localized-ui.tsx`
- Modify: `components/site-header.tsx`
- Modify: `components/site-footer.tsx`
- Modify: `package.json`

- [ ] **Step 1: Write the failing header navigation test**

Create `tests/content/site-header.test.tsx`:

```tsx
import assert from "node:assert/strict";
import { test } from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { LanguageProvider } from "../../components/language/language-provider";
import { SiteHeader } from "../../components/site-header";

function renderHeader(language: "en" | "th") {
  return renderToStaticMarkup(
    <LanguageProvider initialLanguage={language}>
      <SiteHeader />
    </LanguageProvider>,
  );
}

test("SiteHeader links to the reader guide in English", () => {
  const markup = renderHeader("en");

  assert.match(markup, /href="\/guide"/);
  assert.match(markup, />Guide</);
});

test("SiteHeader links to the reader guide in Thai", () => {
  const markup = renderHeader("th");

  assert.match(markup, /href="\/guide"/);
  assert.match(markup, />คู่มือ</);
});
```

- [ ] **Step 2: Update the footer test to fail if guide links are present**

Replace `tests/content/footer.test.ts` with:

```tsx
import assert from "node:assert/strict";
import { test } from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { LanguageProvider } from "../../components/language/language-provider";
import { SiteFooter } from "../../components/site-footer";

function renderFooter() {
  return renderToStaticMarkup(
    React.createElement(
      LanguageProvider,
      { initialLanguage: "en" },
      React.createElement(SiteFooter),
    ),
  );
}

test("SiteFooter links to the Buy Me a Coffee support page", () => {
  const markup = renderFooter();

  assert.match(markup, /https:\/\/buymeacoffee\.com\/milerdev/);
  assert.match(markup, /\/bmc\.png/);
  assert.match(markup, /Support Miler on Buy Me a Coffee/);
  assert.match(markup, /target="_blank"/);
  assert.match(markup, /rel="noreferrer"/);
});

test("SiteFooter keeps reader navigation out of the footer", () => {
  const markup = renderFooter();

  assert.doesNotMatch(markup, /href="\/guide"/);
  assert.doesNotMatch(markup, />Guide</);
  assert.doesNotMatch(markup, />คู่มือ</);
});
```

- [ ] **Step 3: Add the new header test file to `package.json`**

In `package.json`, append the new header test to `scripts.test:content` after `tests/content/guide-page.test.tsx`:

```json
"tests/content/footer.test.ts tests/content/guide-page.test.tsx tests/content/site-header.test.tsx tests/content/i18n.test.ts"
```

Keep the rest of the existing test list unchanged.

- [ ] **Step 4: Run the navigation tests and verify they fail**

Run:

```bash
node --import tsx --test tests/content/site-header.test.tsx tests/content/footer.test.ts
```

Expected: the command fails because the header does not render a `/guide` link yet.

- [ ] **Step 5: Add the localized guide link component**

Modify `components/language/localized-ui.tsx` to:

```tsx
"use client";

import Link from "next/link";
import { uiCopy } from "@/lib/i18n/translations";
import { useLanguage } from "./language-provider";

export function HeaderTagline() {
  const { language } = useLanguage();

  return <span>{uiCopy[language].headerTagline}</span>;
}

export function GuideNavLink({ className }: { className?: string }) {
  const { language } = useLanguage();

  return (
    <Link href="/guide" className={className}>
      {uiCopy[language].guideNavLabel}
    </Link>
  );
}
```

- [ ] **Step 6: Render the guide link in the header**

Modify `components/site-header.tsx` to:

```tsx
import Link from "next/link";
import { BrandWordmark } from "./brand-wordmark";
import { LanguageToggle } from "./language/language-toggle";
import { GuideNavLink, HeaderTagline } from "./language/localized-ui";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#070b12]/90">
      <nav className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link
          href="/"
          className="brand-link min-w-0 overflow-hidden text-zinc-50"
        >
          <BrandWordmark variant="header" />
        </Link>
        <div className="flex shrink-0 flex-wrap items-center justify-end gap-3">
          <GuideNavLink className="rounded-md px-2 py-1 text-sm font-medium text-zinc-400 transition hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-emerald-300" />
          <div className="hidden text-right text-sm text-zinc-400 sm:block">
            <HeaderTagline />
          </div>
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
```

- [ ] **Step 7: Keep the footer free of reader navigation**

Modify `components/site-footer.tsx` to:

```tsx
import Image from "next/image";
import React from "react";
import { BrandWordmark } from "./brand-wordmark";

const supportUrl = "https://buymeacoffee.com/milerdev";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070b12]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="text-zinc-50">
            <BrandWordmark variant="header" />
          </div>
          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
            Side-by-side code review examples for developers who want sharper
            review instincts.
          </p>
        </div>
        <a
          href={supportUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Support Miler on Buy Me a Coffee"
          className="group inline-flex w-fit items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-emerald-300/50 hover:bg-emerald-300/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          <span className="text-zinc-400 transition group-hover:text-emerald-100">
            Support
          </span>
          <Image
            src="/bmc.png"
            alt="Buy Me a Coffee"
            width={1090}
            height={306}
            unoptimized
            className="h-8 w-auto"
          />
        </a>
      </div>
    </footer>
  );
}
```

- [ ] **Step 8: Run the navigation tests and verify they pass**

Run:

```bash
node --import tsx --test tests/content/site-header.test.tsx tests/content/footer.test.ts
```

Expected: the header guide link tests pass, and the footer test confirms `/guide` is absent.

- [ ] **Step 9: Commit Task 3**

```bash
git add tests/content/site-header.test.tsx tests/content/footer.test.ts components/language/localized-ui.tsx components/site-header.tsx components/site-footer.tsx package.json
git commit -m "feat: link guide from header navigation"
```

## Task 4: Add Guide To Sitemap

**Files:**
- Modify: `tests/content/seo.test.ts`
- Modify: `lib/seo.ts`

- [ ] **Step 1: Update the failing sitemap test**

In `tests/content/seo.test.ts`, replace the sitemap test with:

```ts
test("buildSitemapEntries includes the home page, guide page, tracks, and lessons", () => {
  const entries = buildSitemapEntries({
    siteUrl: "https://goodcodebadcode.dev",
    tracks: [
      { slug: "html" },
      { slug: "css" },
    ],
    lessons: [
      { track: "html", slug: "semantic-document-structure" },
      { track: "css", slug: "box-model-sizing" },
    ],
  });

  assert.deepEqual(
    entries.map((entry) => entry.url),
    [
      "https://goodcodebadcode.dev/",
      "https://goodcodebadcode.dev/guide",
      "https://goodcodebadcode.dev/tracks/html",
      "https://goodcodebadcode.dev/tracks/css",
      "https://goodcodebadcode.dev/tracks/html/semantic-document-structure",
      "https://goodcodebadcode.dev/tracks/css/box-model-sizing",
    ],
  );
  assert.equal(entries[0].priority, 1);
  assert.equal(entries[1].priority, 0.6);
});
```

- [ ] **Step 2: Run the SEO test and verify it fails**

Run:

```bash
node --import tsx --test tests/content/seo.test.ts
```

Expected: the sitemap test fails because `/guide` is absent.

- [ ] **Step 3: Add `/guide` to sitemap entries**

In `lib/seo.ts`, update `buildSitemapEntries` to include this entry immediately after the home page entry:

```ts
{
  url: resolveUrl("/guide", siteUrl),
  changeFrequency: "monthly",
  priority: 0.6,
},
```

The beginning of the returned array should become:

```ts
return [
  {
    url: resolveUrl("/", siteUrl),
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: resolveUrl("/guide", siteUrl),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  ...tracks.map((track) => ({
    url: resolveUrl(`/tracks/${track.slug}`, siteUrl),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  })),
  ...lessons.map((lesson) => ({
    url: resolveUrl(`/tracks/${lesson.track}/${lesson.slug}`, siteUrl),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  })),
];
```

- [ ] **Step 4: Run the SEO test and verify it passes**

Run:

```bash
node --import tsx --test tests/content/seo.test.ts
```

Expected: all SEO tests pass.

- [ ] **Step 5: Commit Task 4**

```bash
git add tests/content/seo.test.ts lib/seo.ts
git commit -m "feat: include guide in sitemap"
```

## Task 5: Full Verification

**Files:**
- Inspect all files changed by Tasks 1-4.

- [ ] **Step 1: Run the full content test suite**

Run:

```bash
npm run test:content
```

Expected: all content tests pass with no unexpected warnings.

- [ ] **Step 2: Run lint**

Run:

```bash
npm run lint
```

Expected: ESLint exits successfully.

- [ ] **Step 3: Run production build**

Run:

```bash
npm run build
```

Expected: Next.js completes the static export and writes output to `out/`.

- [ ] **Step 4: Review the final diff**

Run:

```bash
git status --short
git diff --stat
```

Expected: `git status --short` is clean after the per-task commits. If a build command generated ignored output only, `git status --short` remains clean.

- [ ] **Step 5: Record verification result**

If all commands pass, report:

```txt
Verified: npm run test:content, npm run lint, npm run build
```

If any command fails, stop at the first failure, copy the failing command and error summary, and fix it with a new failing test if the failure reveals a behavior gap.

## Spec Coverage Checklist

- Reader-only guide: Task 2 guide copy and layout.
- English/Thai support: Task 1 copy contract and Task 2 render tests.
- Header guide link and footer absence: Task 3.
- Quick Start Guide structure: Task 2.
- Product vocabulary from `CONTEXT.md`: Task 1 and Task 2 copy.
- Static metadata and canonical `/guide`: Task 2 metadata test.
- Sitemap inclusion: Task 4.
- Static export compatibility: Task 5 build.
