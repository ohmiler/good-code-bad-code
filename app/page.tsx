import { TrackGrid } from "@/components/home/track-grid";
import { getAllTracks } from "@/lib/content/lessons";

export default function Home() {
  const tracks = getAllTracks();

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-16 sm:py-24">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
          Example Library
        </p>
        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-zinc-50 sm:text-7xl">
          Good Code Bad Code
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Study code review patterns through curated side-by-side examples.
        </p>
      </section>
      <section className="mt-14">
        <TrackGrid tracks={tracks} />
      </section>
    </main>
  );
}
