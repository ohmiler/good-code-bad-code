import type { Language } from "@/lib/i18n/language";
import { tracks, type TrackSlug } from "./tracks";

export type TrackFamilyId =
  | "core-web"
  | "javascript-ecosystem"
  | "python-ecosystem"
  | "php-ecosystem"
  | "c-family"
  | "embedded-scripting"
  | "backend-languages"
  | "data-ops";

export type TrackFamily = {
  id: TrackFamilyId;
  label: Record<Language, string>;
  searchTerms: readonly string[];
  tracks: readonly TrackSlug[];
};

export const trackFamilies = [
  {
    id: "core-web",
    label: { en: "Core web", th: "เว็บพื้นฐาน" },
    searchTerms: ["html css tailwind", "markup styling ui"],
    tracks: ["html", "css", "tailwindcss"],
  },
  {
    id: "javascript-ecosystem",
    label: { en: "JavaScript ecosystem", th: "ระบบนิเวศ JavaScript" },
    searchTerms: ["js typescript frontend backend runtime framework"],
    tracks: [
      "javascript",
      "typescript",
      "react",
      "vue",
      "nextjs",
      "nodejs",
      "express",
      "nestjs",
    ],
  },
  {
    id: "python-ecosystem",
    label: { en: "Python ecosystem", th: "ระบบนิเวศ Python" },
    searchTerms: ["python api django fastapi"],
    tracks: ["python", "fastapi", "django"],
  },
  {
    id: "php-ecosystem",
    label: { en: "PHP ecosystem", th: "ระบบนิเวศ PHP" },
    searchTerms: ["php ecosystem web backend"],
    tracks: ["php", "laravel"],
  },
  {
    id: "c-family",
    label: { en: "C family", th: "ตระกูล C" },
    searchTerms: ["c family systems native memory"],
    tracks: ["c", "cpp", "csharp", "rust"],
  },
  {
    id: "embedded-scripting",
    label: { en: "Embedded scripting", th: "สคริปต์ฝังในระบบ" },
    searchTerms: ["embedded scripting lua tables metatable coroutine sandbox config"],
    tracks: ["lua"],
  },
  {
    id: "backend-languages",
    label: { en: "Backend languages", th: "ภาษา Backend" },
    searchTerms: ["backend service api concurrency"],
    tracks: ["java", "go"],
  },
  {
    id: "data-ops",
    label: { en: "Data + Ops", th: "Data + Ops" },
    searchTerms: ["database container workflow release"],
    tracks: ["sql", "docker", "git"],
  },
] as const satisfies readonly TrackFamily[];

export const trackSearchAliases: Partial<Record<TrackSlug, readonly string[]>> = {
  javascript: ["js", "ecmascript"],
  typescript: ["ts"],
  nextjs: ["next", "next.js"],
  nodejs: ["node", "node.js"],
  tailwindcss: ["tailwind"],
  c: ["systems", "native", "memory"],
  cpp: ["c++", "systems", "native", "memory"],
  csharp: ["c#", ".net", "dotnet", "asp.net", "microsoft"],
  rust: ["borrow checker", "borrowing", "ownership", "cargo", "memory safety"],
  lua: ["tables", "metatable", "coroutine", "embedded scripting", "sandbox", "config"],
  sql: ["database", "query"],
  docker: ["container", "containers"],
} as const satisfies Partial<Record<TrackSlug, readonly string[]>>;

export function getTrackFamily(slug: TrackSlug): TrackFamily | undefined {
  return trackFamilies.find((family) =>
    family.tracks.some((trackSlug) => trackSlug === slug),
  );
}

export function getTrackFamilyLabel(slug: TrackSlug, language: Language) {
  return getTrackFamily(slug)?.label[language] ?? "";
}

export function getRelatedTrackSlugs(slug: TrackSlug): TrackSlug[] {
  const family = getTrackFamily(slug);

  if (!family) {
    return [];
  }

  return family.tracks.filter((trackSlug) => trackSlug !== slug);
}

export function getRelatedTrackCards(slug: TrackSlug, lessonCount: number) {
  const relatedSlugs = new Set(getRelatedTrackSlugs(slug));

  return tracks
    .filter((track) => relatedSlugs.has(track.slug))
    .map((track) => ({
      ...track,
      lessonCount,
    }));
}
