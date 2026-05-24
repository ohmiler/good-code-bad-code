export const languages = ["en", "th"] as const;

export type Language = (typeof languages)[number];

export function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "th";
}
