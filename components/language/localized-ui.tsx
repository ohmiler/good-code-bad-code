"use client";

import { uiCopy } from "@/lib/i18n/translations";
import { useLanguage } from "./language-provider";

export function HeaderTagline() {
  const { language } = useLanguage();

  return <span>{uiCopy[language].headerTagline}</span>;
}
