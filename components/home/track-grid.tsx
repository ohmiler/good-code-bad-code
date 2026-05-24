import Link from "next/link";
import type { getAllTracks } from "@/lib/content/lessons";

type TrackCard = ReturnType<typeof getAllTracks>[number];

export function TrackGrid({ tracks }: { tracks: TrackCard[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {tracks.map((track) => (
        <Link
          key={track.slug}
          href={`/tracks/${track.slug}`}
          className="group rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-400/50 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          <div className="flex items-start justify-between gap-4">
            <h2 className="min-w-0 text-xl font-semibold text-zinc-50">
              {track.title}
            </h2>
            <span className="shrink-0 text-sm text-zinc-500">
              {track.lessonCount}
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            {track.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
