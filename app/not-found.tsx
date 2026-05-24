import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-6xl items-center px-5 py-16">
      <section className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-50 sm:text-6xl">
          Page not found
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-400">
          This review example is not in the library.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-md border border-emerald-300/40 px-4 py-3 text-sm font-semibold text-emerald-200 transition hover:border-emerald-200 hover:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          Back to library
        </Link>
      </section>
    </main>
  );
}
