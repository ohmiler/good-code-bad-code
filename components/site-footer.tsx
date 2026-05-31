import Image from "next/image";
import React from "react";
import { BrandWordmark } from "./brand-wordmark";

const supportUrl = "https://buymeacoffee.com/milerdev";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070b12]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <div className="text-zinc-50">
            <BrandWordmark variant="header" />
          </div>
          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
            Side-by-side code review examples for developers who want sharper
            review instincts.
          </p>
        </div>
        <a
          href={supportUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Support Miler on Buy Me a Coffee"
          className="group inline-flex w-fit items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-emerald-300/50 hover:bg-emerald-300/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          <span className="text-zinc-400 transition group-hover:text-emerald-100">
            Support
          </span>
          <Image
            src="/bmc.png"
            alt="Buy Me a Coffee"
            width={1090}
            height={306}
            unoptimized
            className="h-8 w-auto"
          />
        </a>
      </div>
    </footer>
  );
}
