"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./language/language-provider";

const labels = {
  en: "Back to top",
  th: "กลับขึ้นด้านบน",
} as const;

const visibleAfterPixels = 360;

export function BackToTopButton() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const label = labels[language];

  useEffect(() => {
    let frameId: number | null = null;

    const updateVisibility = () => {
      frameId = null;
      setIsVisible(window.scrollY > visibleAfterPixels);
    };

    const requestVisibilityUpdate = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", requestVisibilityUpdate, {
      passive: true,
    });
    window.addEventListener("resize", requestVisibilityUpdate);

    return () => {
      window.removeEventListener("scroll", requestVisibilityUpdate);
      window.removeEventListener("resize", requestVisibilityUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-hidden={!isVisible}
      aria-label={label}
      title={label}
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-[#0d1420]/90 text-zinc-200 shadow-lg shadow-black/30 backdrop-blur transition duration-200 hover:border-emerald-300/50 hover:bg-emerald-300/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300 motion-reduce:transform-none motion-reduce:transition-none sm:bottom-6 sm:right-6 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <span className="sr-only">{label}</span>
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="M6 15l6-6 6 6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}
