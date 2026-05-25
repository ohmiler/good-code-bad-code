import { readFile } from "node:fs/promises";
import path from "node:path";
import type { ReviewNotesContent } from "./schema";

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function splitParagraphs(section: string): string[] {
  return section
    .trim()
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}

function readSection(
  markdown: string,
  heading: "What to review" | "Review notes",
  source: string,
): string[] {
  const normalizedMarkdown = markdown.replace(/\r\n/g, "\n");
  const headingPattern = new RegExp(`^## ${escapeRegExp(heading)}\\s*$`, "m");
  const headingMatch = headingPattern.exec(normalizedMarkdown);

  if (!headingMatch) {
    throw new Error(`${source}: missing "${heading}" review section`);
  }

  const sectionStart = headingMatch.index + headingMatch[0].length;
  const remainingMarkdown = normalizedMarkdown.slice(sectionStart);
  const nextHeadingIndex = remainingMarkdown.search(/^##\s+/m);
  const rawSection =
    nextHeadingIndex === -1
      ? remainingMarkdown
      : remainingMarkdown.slice(0, nextHeadingIndex);
  const paragraphs = splitParagraphs(rawSection);

  if (paragraphs.length === 0) {
    throw new Error(`${source}: "${heading}" review section is empty`);
  }

  return paragraphs;
}

export function parseReviewNotesMarkdown(
  markdown: string,
  source = "lesson markdown",
): ReviewNotesContent {
  return {
    whatToReview: readSection(markdown, "What to review", source),
    reviewNotes: readSection(markdown, "Review notes", source),
  };
}

export async function readLessonReviewNotes(
  source: string,
): Promise<ReviewNotesContent> {
  const normalizedSource = source.replaceAll("\\", "/");

  if (
    !normalizedSource.startsWith("content/") ||
    normalizedSource.includes("..")
  ) {
    throw new Error(`${source}: review notes source must live inside content/`);
  }

  const markdown = await readFile(
    path.join(process.cwd(), "content", normalizedSource.slice(8)),
    "utf8",
  );

  return parseReviewNotesMarkdown(markdown, source);
}
