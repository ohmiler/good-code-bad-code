import type { TrackSlug } from "./tracks";

export const trackIconKeys = {
  html: "code-2",
  css: "palette",
  javascript: "braces",
  typescript: "brackets",
  react: "atom",
  nextjs: "route",
  nodejs: "server",
  express: "network",
  sql: "database",
  python: "terminal",
  php: "file-code",
  fastapi: "zap",
  django: "layers",
  go: "gauge",
  docker: "box",
  tailwindcss: "wind",
} as const satisfies Record<TrackSlug, string>;

export type TrackIconKey = (typeof trackIconKeys)[TrackSlug];
