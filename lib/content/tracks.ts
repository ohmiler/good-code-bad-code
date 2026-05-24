export const tracks = [
  {
    slug: "html",
    title: "HTML",
    description:
      "Review structure, semantics, forms, and accessible document foundations.",
  },
  {
    slug: "css",
    title: "CSS",
    description:
      "Review layout, responsive styling, contrast, and maintainable selectors.",
  },
  {
    slug: "javascript",
    title: "JavaScript",
    description:
      "Review control flow, async behavior, naming, and side effects.",
  },
  {
    slug: "typescript",
    title: "TypeScript",
    description:
      "Review type narrowing, API boundaries, unions, and safer function shapes.",
  },
  {
    slug: "react",
    title: "React",
    description:
      "Review component boundaries, state, effects, and rendering decisions.",
  },
  {
    slug: "nextjs",
    title: "Next.js",
    description:
      "Review App Router structure, server boundaries, data fetching, and route APIs.",
  },
  {
    slug: "nodejs",
    title: "Node.js",
    description:
      "Review runtime boundaries, async I/O, HTTP lifecycle, logging, and process safety.",
  },
  {
    slug: "express",
    title: "Express",
    description:
      "Review app factories, routers, middleware order, validation, auth, and error handling.",
  },
  {
    slug: "sql",
    title: "SQL",
    description:
      "Review schemas, queries, joins, indexes, transactions, migrations, and data safety.",
  },
  {
    slug: "python",
    title: "Python",
    description:
      "Review readable functions, data shapes, exceptions, typing, testability, and async boundaries.",
  },
  {
    slug: "fastapi",
    title: "FastAPI",
    description:
      "Review routes, Pydantic models, dependencies, auth, async handlers, database sessions, and API tests.",
  },
] as const;

export type Track = (typeof tracks)[number];
export type TrackSlug = Track["slug"];

const trackSlugs = new Set<string>(tracks.map((track) => track.slug));

export function isTrackSlug(value: string): value is TrackSlug {
  return trackSlugs.has(value);
}

export function getTrack(slug: string): Track | undefined {
  return tracks.find((track) => track.slug === slug);
}
