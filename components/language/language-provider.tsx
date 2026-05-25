"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultLanguage,
  isLanguage,
  languageCookieName,
  languageStorageKey,
  type Language,
} from "@/lib/i18n/language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

type LanguageProviderProps = {
  children: ReactNode;
  initialLanguage?: Language;
};

const languageCookieMaxAge = 60 * 60 * 24 * 365;

function getClientLanguagePreference() {
  const bootstrappedLanguage = document.documentElement.dataset.language;
  if (isLanguage(bootstrappedLanguage)) {
    return bootstrappedLanguage;
  }

  const storedLanguage = window.localStorage.getItem(languageStorageKey);
  if (isLanguage(storedLanguage)) {
    return storedLanguage;
  }

  return defaultLanguage;
}

function writeLanguageCookie(language: Language) {
  document.cookie = `${languageCookieName}=${language}; Path=/; Max-Age=${languageCookieMaxAge}; SameSite=Lax`;
}

function syncDocumentLanguage(language: Language) {
  document.documentElement.lang = language;
  document.documentElement.dataset.language = language;
  document.documentElement.dataset.languageReady = "true";
  delete document.documentElement.dataset.languagePending;
}

export function LanguageProvider({
  children,
  initialLanguage = defaultLanguage,
}: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);

  useEffect(() => {
    const preferredLanguage = getClientLanguagePreference();
    if (preferredLanguage !== initialLanguage) {
      const frame = window.requestAnimationFrame(() => {
        setLanguageState(preferredLanguage);
      });

      return () => window.cancelAnimationFrame(frame);
    }
  }, [initialLanguage]);

  useEffect(() => {
    const pendingLanguage = document.documentElement.dataset.language;
    if (
      document.documentElement.dataset.languagePending === "true" &&
      isLanguage(pendingLanguage) &&
      pendingLanguage !== language
    ) {
      return;
    }

    syncDocumentLanguage(language);
    window.localStorage.setItem(languageStorageKey, language);
    writeLanguageCookie(language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: setLanguageState,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const value = useContext(LanguageContext);

  if (!value) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return value;
}
