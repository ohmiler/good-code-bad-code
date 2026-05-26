import type { TrackSlug } from "./tracks";

export const trackIconKeys = {
  html: "code-2",
  css: "palette",
  javascript: "braces",
  typescript: "brackets",
  react: "atom",
  vue: "component",
  nextjs: "route",
  nodejs: "server",
  express: "network",
  nestjs: "hexagon",
  sql: "database",
  python: "terminal",
  php: "file-code",
  laravel: "leaf",
  java: "coffee",
  kotlin: "diamond",
  c: "chip",
  cpp: "plus-plus",
  csharp: "hash",
  rust: "shield",
  lua: "moon",
  git: "git-branch",
  fastapi: "zap",
  django: "layers",
  go: "gauge",
  docker: "box",
  tailwindcss: "wind",
} as const satisfies Record<TrackSlug, string>;

export type TrackIconKey = (typeof trackIconKeys)[TrackSlug];
