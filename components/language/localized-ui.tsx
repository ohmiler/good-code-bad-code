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
