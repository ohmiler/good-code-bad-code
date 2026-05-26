import type { ComponentType } from "react";
import { isTrackSlug, type TrackSlug } from "./tracks";

export type CodeLanguage =
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "tsx"
  | "vue"
  | "sql"
  | "python"
  | "php"
  | "java"
  | "c"
  | "cpp"
  | "csharp"
  | "rust"
  | "bash"
  | "go"
  | "dockerfile"
  | "yaml";

export type CodeSample = {
  language: CodeLanguage;
  filename: string;
  code: string;
};

export type LessonMetadata = {
  title: string;
  track: TrackSlug;
  order: number;
  summary: string;
  tags: string[];
  takeaways: string[];
  goodCode: CodeSample;
  badCode: CodeSample;
};

export type LessonRecord = LessonMetadata & {
  slug: string;
  source: string;
  Component: ComponentType;
};

export type ReviewNotesContent = {
  whatToReview: string[];
  reviewNotes: string[];
};

const codeLanguages = new Set<CodeLanguage>([
  "html",
  "css",
  "javascript",
  "typescript",
  "tsx",
  "vue",
  "sql",
  "python",
  "php",
  "java",
  "c",
  "cpp",
  "csharp",
  "rust",
  "bash",
  "go",
  "dockerfile",
  "yaml",
]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readString(
  record: Record<string, unknown>,
  key: string,
  source: string,
  label = key,
): string {
  const value = record[key];
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`${source}: ${label} must be a non-empty string`);
  }
  return value;
}

function readStringArray(
  record: Record<string, unknown>,
  key: string,
  source: string,
): string[] {
  const value = record[key];
  if (
    !Array.isArray(value) ||
    value.length === 0 ||
    value.some((item) => typeof item !== "string" || item.trim().length === 0)
  ) {
    throw new Error(`${source}: ${key} must contain at least one item`);
  }
  return value;
}

function readPositiveInteger(
  record: Record<string, unknown>,
  key: string,
  source: string,
): number {
  const value = record[key];
  if (typeof value !== "number" || !Number.isInteger(value) || value < 1) {
    throw new Error(`${source}: ${key} must be a positive integer`);
  }
  return value;
}

function readCodeSample(
  record: Record<string, unknown>,
  key: "goodCode" | "badCode",
  source: string,
): CodeSample {
  const value = record[key];
  if (!isRecord(value)) {
    throw new Error(`${source}: ${key} must be an object`);
  }

  const language = readString(value, "language", source);
  if (!codeLanguages.has(language as CodeLanguage)) {
    throw new Error(`${source}: ${key}.language "${language}" is not supported`);
  }

  return {
    language: language as CodeLanguage,
    filename: readString(value, "filename", source, `${key}.filename`),
    code: readString(value, "code", source, `${key}.code`),
  };
}

export function validateLessonMetadata(
  metadata: unknown,
  source: string,
): LessonMetadata {
  if (!isRecord(metadata)) {
    throw new Error(`${source}: metadata must be an object`);
  }

  const track = readString(metadata, "track", source);
  if (!isTrackSlug(track)) {
    throw new Error(`${source}: unknown track "${track}"`);
  }

  return {
    title: readString(metadata, "title", source),
    track,
    order: readPositiveInteger(metadata, "order", source),
    summary: readString(metadata, "summary", source),
    tags: readStringArray(metadata, "tags", source),
    takeaways: readStringArray(metadata, "takeaways", source),
    goodCode: readCodeSample(metadata, "goodCode", source),
    badCode: readCodeSample(metadata, "badCode", source),
  };
}
