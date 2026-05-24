import Link from "next/link";
import { LanguageToggle } from "./language/language-toggle";
import { HeaderTagline } from "./language/localized-ui";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#070b12]/90">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link
          href="/"
          className="min-w-0 truncate font-semibold tracking-tight text-zinc-50"
        >
          Good Code Bad Code
        </Link>
        <div className="flex shrink-0 items-center gap-3">
          <div className="hidden text-right text-sm text-zinc-400 sm:block">
            <HeaderTagline />
          </div>
          <LanguageToggle />
        </div>
      </nav>
    </header>
  );
}
