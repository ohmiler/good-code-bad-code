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
    slug: "vue",
    title: "Vue",
    description:
      "Review single-file components, props, emits, reactivity, composables, stores, and slots.",
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
    slug: "nestjs",
    title: "NestJS",
    description:
      "Review modules, controllers, providers, validation pipes, guards, filters, interceptors, config, and tests.",
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
    slug: "php",
    title: "PHP",
    description:
      "Review strict types, request validation, output escaping, PDO queries, passwords, sessions, configuration, and template boundaries.",
  },
  {
    slug: "laravel",
    title: "Laravel",
    description:
      "Review routes, controllers, Form Requests, middleware, container bindings, Eloquent, migrations, resources, policies, queues, and feature tests.",
  },
  {
    slug: "java",
    title: "Java",
    description:
      "Review null boundaries, immutability, value objects, exceptions, resources, generics, streams, concurrency, records, and service boundaries.",
  },
  {
    slug: "c",
    title: "C",
    description:
      "Review pointers, buffer bounds, allocation ownership, const contracts, structs, error codes, file cleanup, integer limits, compiler flags, and tests.",
  },
  {
    slug: "cpp",
    title: "C++",
    description:
      "Review RAII, smart pointers, move semantics, const references, rule of zero, exception boundaries, templates, algorithms, locks, and tests.",
  },
  {
    slug: "csharp",
    title: "C#",
    description:
      "Review nullable references, records, async cancellation, dependency injection, disposal, exceptions, LINQ, pattern matching, options, and tests.",
  },
  {
    slug: "git",
    title: "Git",
    description:
      "Review status checks, staging, commits, branches, sync workflows, diffs, conflicts, history safety, ignores, and release tags.",
  },
  {
    slug: "fastapi",
    title: "FastAPI",
    description:
      "Review routes, Pydantic models, dependencies, auth, async handlers, database sessions, and API tests.",
  },
  {
    slug: "django",
    title: "Django",
    description:
      "Review URL patterns, models, QuerySets, forms, views, CSRF, settings, transactions, and tests.",
  },
  {
    slug: "go",
    title: "Go",
    description:
      "Review packages, exported APIs, errors, context, interfaces, goroutines, cleanup, tests, and HTTP handlers.",
  },
  {
    slug: "docker",
    title: "Docker",
    description:
      "Review build contexts, base images, cache layers, multi-stage builds, secrets, users, healthchecks, and Compose files.",
  },
  {
    slug: "tailwindcss",
    title: "Tailwind CSS",
    description:
      "Review utility composition, responsive variants, states, theme tokens, dark mode, reuse boundaries, accessibility, and class conflicts.",
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
