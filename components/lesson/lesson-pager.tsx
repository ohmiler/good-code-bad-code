import Link from "next/link";
import type {
  LessonNavigation,
  LessonNavigationItem,
} from "@/lib/content/navigation";

type LessonPagerProps = {
  navigation: LessonNavigation;
};

function PagerTarget({
  item,
  label,
}: {
  item: LessonNavigationItem;
  label: "Previous" | "Next";
}) {
  return (
    <Link
      href={`/tracks/${item.track}/${item.slug}`}
      aria-label={`${label} lesson: ${item.title}`}
      className="group min-w-0 rounded-lg border border-white/10 bg-white/[0.03] p-4 transition hover:border-emerald-300/50 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-emerald-300"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 transition group-hover:text-emerald-200">
        {label}
      </span>
      <span className="mt-2 block text-base font-semibold text-zinc-100">
        {item.title}
      </span>
    </Link>
  );
}

function PagerBoundary({ label }: { label: "Previous" | "Next" }) {
  return (
    <div
      aria-disabled="true"
      className="min-w-0 rounded-lg border border-white/10 bg-white/[0.015] p-4 text-zinc-600"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.16em]">
        {label}
      </span>
      <span className="mt-2 block text-base font-semibold">
        {label === "Previous" ? "Start of track" : "End of track"}
      </span>
    </div>
  );
}

export function LessonPager({ navigation }: LessonPagerProps) {
  return (
    <nav
      aria-label="Lesson navigation"
      className="mt-12 border-t border-white/10 pt-8"
    >
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
        Lesson {navigation.currentIndex} of {navigation.total}
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
