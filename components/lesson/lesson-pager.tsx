"use client";

import Link from "next/link";
import { useLanguage } from "@/components/language/language-provider";
import type {
  LessonNavigation,
  LessonNavigationItem,
} from "@/lib/content/navigation";
import { getLessonText, uiCopy } from "@/lib/i18n/translations";

type LessonPagerProps = {
  navigation: LessonNavigation;
};

function PagerIcon({
  label,
  disabled = false,
}: {
  label: "Previous" | "Next";
  disabled?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition ${
        disabled
          ? "border-white/10 bg-white/[0.02] text-zinc-600"
          : "border-emerald-300/20 bg-emerald-300/[0.08] text-emerald-200 group-hover:border-emerald-300/50 group-hover:bg-emerald-300/[0.14]"
      }`}
    >
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        {label === "Previous" ? (
          <>
            <path d="M19 12H5" />
            <path d="m12 19-7-7 7-7" />
          </>
        ) : (
          <>
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </>
        )}
      </svg>
    </span>
  );
}

function PagerTarget({
  item,
  label,
}: {
  item: LessonNavigationItem;
  label: "Previous" | "Next";
}) {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const text = getLessonText(
    { ...item, summary: "" },
    language,
  );
  const labelText = label === "Previous" ? copy.previous : copy.next;
  const lessonNumber = item.order.toString().padStart(2, "0");
  const isNext = label === "Next";
  const labelBlock = (
    <span className="min-w-0">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 transition group-hover:text-emerald-200">
        {labelText} - {copy.lessonProgress} {lessonNumber}
      </span>
      <span className="mt-2 block text-base font-semibold text-zinc-100">
        {text.title}
      </span>
    </span>
  );

  return (
    <Link
      href={`/tracks/${item.track}/${item.slug}`}
      aria-label={`${labelText}: ${text.title}`}
      className={`group flex min-w-0 items-start gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-emerald-300/50 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-emerald-300 ${
        isNext ? "justify-end text-right" : ""
      }`}
    >
      {isNext ? labelBlock : <PagerIcon label={label} />}
      {isNext ? <PagerIcon label={label} /> : labelBlock}
    </Link>
  );
}

function PagerBoundary({ label }: { label: "Previous" | "Next" }) {
  const { language } = useLanguage();
  const copy = uiCopy[language];
  const labelText = label === "Previous" ? copy.previous : copy.next;
  const isNext = label === "Next";
  const labelBlock = (
    <span className="min-w-0">
      <span className="text-xs font-semibold uppercase tracking-[0.16em]">
        {labelText}
      </span>
      <span className="mt-2 block text-base font-semibold">
        {label === "Previous" ? copy.startOfTrack : copy.endOfTrack}
      </span>
    </span>
  );

  return (
    <div
      aria-disabled="true"
      className={`flex min-w-0 items-start gap-3 rounded-lg border border-white/10 bg-white/[0.015] p-4 text-zinc-600 ${
        isNext ? "justify-end text-right" : ""
      }`}
    >
      {isNext ? labelBlock : <PagerIcon disabled label={label} />}
      {isNext ? <PagerIcon disabled label={label} /> : labelBlock}
    </div>
  );
}

export function LessonPager({ navigation }: LessonPagerProps) {
  const { language } = useLanguage();
  const copy = uiCopy[language];

  return (
    <nav
      aria-label="Lesson navigation"
      className="mt-12 border-t border-white/10 pt-8"
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
        {copy.lessonProgress} {navigation.currentIndex} {copy.of}{" "}
        {navigation.total}
      </p>
      <div className="mt-4 grid min-w-0 gap-3 sm:grid-cols-2">
        {navigation.previous ? (
          <PagerTarget item={navigation.previous} label="Previous" />
        ) : (
          <PagerBoundary label="Previous" />
        )}
        {navigation.next ? (
          <PagerTarget item={navigation.next} label="Next" />
        ) : (
          <PagerBoundary label="Next" />
        )}
      </div>
    </nav>
  );
}
