export const languages = ["en", "th"] as const;

export type Language = (typeof languages)[number];

export const defaultLanguage: Language = "en";
export const languageCookieName = "good-code-bad-code-language";
export const languageStorageKey = "good-code-bad-code-language";

export function isLanguage(value: string | null | undefined): value is Language {
  return value === "en" || value === "th";
}
