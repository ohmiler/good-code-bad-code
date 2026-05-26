import { trackThaiTranslations } from "@/lib/i18n/translations";
import type { Language } from "@/lib/i18n/language";
import type { TrackSlug } from "./tracks";

export type FilterableTrack = {
  slug: TrackSlug;
  title: string;
  description: string;
};

export type TrackFilterGroupId =
  | "all"
  | "foundations"
  | "frontend"
  | "backend"
  | "data-ops";

export type TrackFilterGroup = {
  id: TrackFilterGroupId;
  label: Record<Language, string>;
  tracks: readonly TrackSlug[];
};

const foundations = ["html", "css", "javascript", "typescript", "git"] as const;
const frontend = ["react", "vue", "nextjs", "tailwindcss"] as const;
const backend = [
  "nodejs",
  "express",
  "nestjs",
  "python",
  "php",
  "laravel",
  "java",
  "c",
  "fastapi",
  "django",
  "go",
] as const;
const dataOps = ["sql", "docker"] as const;

export const trackFilterGroups = [
  {
    id: "all",
    label: { en: "All", th: "ทั้งหมด" },
    tracks: [...foundations, ...frontend, ...backend, ...dataOps],
  },
  {
    id: "foundations",
    label: { en: "Foundations", th: "พื้นฐาน" },
    tracks: foundations,
  },
  {
    id: "frontend",
    label: { en: "Frontend", th: "Frontend" },
    tracks: frontend,
  },
  {
    id: "backend",
    label: { en: "Backend", th: "Backend" },
    tracks: backend,
  },
  {
    id: "data-ops",
    label: { en: "Data + Ops", th: "Data + Ops" },
    tracks: dataOps,
  },
] as const satisfies readonly TrackFilterGroup[];

function normalizeSearchText(value: string) {
  return value.trim().toLocaleLowerCase();
}

function getSearchFields(track: FilterableTrack, language: Language) {
  const thaiText = trackThaiTranslations[track.slug];
  const localizedText =
    language === "th"
      ? [thaiText.title, thaiText.description]
      : [track.title, track.description];

  return [
    track.slug,
    track.title,
    track.description,
    thaiText.title,
    thaiText.description,
    ...localizedText,
  ];
}

export function filterTracks<TTrack extends FilterableTrack>(
  tracks: readonly TTrack[],
  {
    groupId,
    language,
    query,
  }: {
    groupId: TrackFilterGroupId;
    language: Language;
    query: string;
  },
) {
  const normalizedQuery = normalizeSearchText(query);
  const group =
    trackFilterGroups.find((candidate) => candidate.id === groupId) ??
    trackFilterGroups[0];
  const allowedTracks = new Set<TrackSlug>(group.tracks);

  return tracks.filter((track) => {
    if (!allowedTracks.has(track.slug)) {
      return false;
    }

    if (!normalizedQuery) {
      return true;
    }

    return getSearchFields(track, language).some((field) =>
      normalizeSearchText(field).includes(normalizedQuery),
    );
  });
}
