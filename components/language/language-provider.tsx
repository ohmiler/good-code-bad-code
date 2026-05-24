"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { isLanguage, type Language } from "@/lib/i18n/language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const storageKey = "good-code-bad-code-language";
const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(storageKey);
    if (isLanguage(storedLanguage)) {
      const frame = window.requestAnimationFrame(() => {
        setLanguageState(storedLanguage);
      });

      return () => window.cancelAnimationFrame(frame);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(storageKey, language);
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
