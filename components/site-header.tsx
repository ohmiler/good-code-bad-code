import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#070b12]/90">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link href="/" className="font-semibold tracking-tight text-zinc-50">
          Good Code Bad Code
        </Link>
        <div className="text-right text-sm text-zinc-400">
          Review patterns by Track
        </div>
      </nav>
    </header>
  );
}
