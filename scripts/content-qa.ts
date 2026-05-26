import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import ts from "typescript";
import {
  analyzeContentQualityItem,
  summarizeContentQuality,
  type ContentQualityItem,
  type ContentQualityIssue,
} from "../lib/content/quality-rules";
import { parseReviewNotesMarkdown } from "../lib/content/review-notes";
import { tracks } from "../lib/content/tracks";
import {
  getLessonThaiTranslation,
  trackThaiTranslations,
} from "../lib/i18n/translations";

type CodeSampleInfo = {
  language: string;
  code: string;
};

type LessonInfo = {
  source: string;
  track: string;
  slug: string;
  title: string;
  summary: string;
  takeaways: string[];
  goodCode: CodeSampleInfo;
  badCode: CodeSampleInfo;
  markdown: string;
};

const contentRoot = path.join(process.cwd(), "content");

function toPosixPath(value: string) {
  return value.replaceAll("\\", "/");
}

function extractObjectLiteral(source: string, marker: string): string {
  const markerIndex = source.indexOf(marker);
  if (markerIndex === -1) {
    throw new Error(`${marker} export is missing`);
  }

  const objectStart = source.indexOf("{", markerIndex);
  if (objectStart === -1) {
    throw new Error(`${marker} object literal is missing`);
  }

  let depth = 0;
  let quote: '"' | "'" | "`" | undefined;
  let escaped = false;

  for (let index = objectStart; index < source.length; index += 1) {
    const character = source[index];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (character === "\\") {
        escaped = true;
      } else if (character === quote) {
        quote = undefined;
      }
      continue;
    }

    if (character === '"' || character === "'" || character === "`") {
      quote = character;
      continue;
    }

    if (character === "{") {
      depth += 1;
    } else if (character === "}") {
      depth -= 1;
      if (depth === 0) {
        return source.slice(objectStart, index + 1);
      }
    }
  }

  throw new Error(`${marker} object literal was not closed`);
}

function parseMetadata(contentPath: string, mdxSource: string) {
  const metadataObject = extractObjectLiteral(
    mdxSource,
    "export const metadata",
  );
  const sourceFile = ts.createSourceFile(
    contentPath,
    `const metadata = ${metadataObject};`,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const statement = sourceFile.statements[0];

  if (!statement || !ts.isVariableStatement(statement)) {
    throw new Error(`${contentPath}: metadata must parse as a variable statement`);
  }

  const initializer = statement.declarationList.declarations[0]?.initializer;
  if (!initializer || !ts.isObjectLiteralExpression(initializer)) {
    throw new Error(`${contentPath}: metadata must be an object literal`);
  }

  return initializer;
}

function findProperty(
  objectLiteral: ts.ObjectLiteralExpression,
  propertyName: string,
) {
  return objectLiteral.properties.find(
    (item): item is ts.PropertyAssignment =>
      ts.isPropertyAssignment(item) &&
      ts.isIdentifier(item.name) &&
      item.name.text === propertyName,
  );
}

function readTextProperty(
  objectLiteral: ts.ObjectLiteralExpression,
  propertyName: string,
): string {
  const property = findProperty(objectLiteral, propertyName);
  if (
    !property ||
    (!ts.isStringLiteral(property.initializer) &&
      !ts.isNoSubstitutionTemplateLiteral(property.initializer))
  ) {
    throw new Error(`${propertyName} must be a string literal`);
  }

  return property.initializer.text;
}

function readStringArrayProperty(
  objectLiteral: ts.ObjectLiteralExpression,
  propertyName: string,
): string[] {
  const property = findProperty(objectLiteral, propertyName);
  if (!property || !ts.isArrayLiteralExpression(property.initializer)) {
    throw new Error(`${propertyName} must be an array literal`);
  }

  return property.initializer.elements.map((element) => {
    if (!ts.isStringLiteral(element)) {
      throw new Error(`${propertyName} must contain only string literals`);
    }

    return element.text;
  });
}

function readCodeSample(
  objectLiteral: ts.ObjectLiteralExpression,
  propertyName: "goodCode" | "badCode",
): CodeSampleInfo {
  const property = findProperty(objectLiteral, propertyName);
  if (!property || !ts.isObjectLiteralExpression(property.initializer)) {
    throw new Error(`${propertyName} must be an object literal`);
  }

  return {
    language: readTextProperty(property.initializer, "language"),
    code: readTextProperty(property.initializer, "code"),
  };
}

async function readLessons(): Promise<LessonInfo[]> {
  const lessons: LessonInfo[] = [];

  for (const track of tracks) {
    const trackDir = path.join(contentRoot, track.slug);
    const filenames = (await readdir(trackDir))
      .filter((filename) => filename.endsWith(".mdx"))
      .sort();

    for (const filename of filenames) {
      const absolutePath = path.join(trackDir, filename);
      const markdown = await readFile(absolutePath, "utf8");
      const metadata = parseMetadata(absolutePath, markdown);
      const source = toPosixPath(path.relative(process.cwd(), absolutePath));

      lessons.push({
        source,
        track: track.slug,
        slug: path.basename(filename, ".mdx"),
        title: readTextProperty(metadata, "title"),
        summary: readTextProperty(metadata, "summary"),
        takeaways: readStringArrayProperty(metadata, "takeaways"),
        goodCode: readCodeSample(metadata, "goodCode"),
        badCode: readCodeSample(metadata, "badCode"),
        markdown,
      });
    }
  }

  return lessons;
}

function countCommentLines(sample: CodeSampleInfo, track: string) {
  return sample.code
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => {
      if (!line) return false;

      if (sample.language === "html") return line.startsWith("<!--");
      if (track === "css") {
        return line.startsWith("/*");
      }
      if (sample.language === "sql") {
        return line.startsWith("/*") || line.startsWith("--");
      }
      if (
        sample.language === "python" ||
        sample.language === "bash" ||
        sample.language === "dockerfile" ||
        sample.language === "yaml"
      ) {
        return line.startsWith("#");
      }

      return line.startsWith("//") || line.startsWith("/*");
    }).length;
}

function addItem(
  items: ContentQualityItem[],
  item: Omit<ContentQualityItem, "text"> & { text?: string },
) {
  if (typeof item.text !== "string") return;

  items.push({
    ...item,
    text: item.text,
  });
}

function collectLessonItems(lessons: readonly LessonInfo[]) {
  const items: ContentQualityItem[] = [];

  for (const lesson of lessons) {
    const base = {
      source: lesson.source,
      track: lesson.track,
      lesson: lesson.slug,
      language: "en" as const,
    };

    addItem(items, {
      ...base,
      field: "metadata.title",
      kind: "lesson-copy",
      text: lesson.title,
    });
    addItem(items, {
      ...base,
      field: "metadata.summary",
      kind: "lesson-copy",
      text: lesson.summary,
    });

    lesson.takeaways.forEach((takeaway, index) => {
      addItem(items, {
        ...base,
        field: `metadata.takeaways[${index}]`,
        kind: "lesson-copy",
        text: takeaway,
      });
    });

    const reviewNotes = parseReviewNotesMarkdown(lesson.markdown, lesson.source);
    reviewNotes.whatToReview.forEach((paragraph, index) => {
      addItem(items, {
        ...base,
        field: `whatToReview[${index}]`,
        kind: "review-notes",
        text: paragraph,
      });
    });
    reviewNotes.reviewNotes.forEach((paragraph, index) => {
      addItem(items, {
        ...base,
        field: `reviewNotes[${index}]`,
        kind: "review-notes",
        text: paragraph,
      });
    });
  }

  return items;
}

function collectTranslationItems(lessons: readonly LessonInfo[]) {
  const items: ContentQualityItem[] = [];

  for (const track of tracks) {
    const translation = trackThaiTranslations[track.slug];
    addItem(items, {
      source: "lib/i18n/translations.ts",
      track: track.slug,
      field: `trackThaiTranslations.${track.slug}.description`,
      kind: "localized-copy",
      language: "th",
      text: translation.description,
    });
  }

  for (const lesson of lessons) {
    const key = `${lesson.track}/${lesson.slug}`;
    const translation = getLessonThaiTranslation(lesson.track, lesson.slug);
    if (!translation) continue;

    const base = {
      source: "lib/i18n/translations.ts",
      track: lesson.track,
      lesson: lesson.slug,
      kind: "localized-copy" as const,
      language: "th" as const,
    };

    addItem(items, {
      ...base,
      field: `lessonThaiTranslations.${key}.title`,
      text: translation.title,
    });
    addItem(items, {
      ...base,
      field: `lessonThaiTranslations.${key}.summary`,
      text: translation.summary,
    });

    translation.takeaways.forEach((takeaway, index) => {
      addItem(items, {
        ...base,
        field: `lessonThaiTranslations.${key}.takeaways[${index}]`,
        text: takeaway,
      });
    });
    translation.whatToReview.forEach((paragraph, index) => {
      addItem(items, {
        ...base,
        field: `lessonThaiTranslations.${key}.whatToReview[${index}]`,
        text: paragraph,
      });
    });
    translation.reviewNotes.forEach((paragraph, index) => {
      addItem(items, {
        ...base,
        field: `lessonThaiTranslations.${key}.reviewNotes[${index}]`,
        text: paragraph,
      });
    });
  }

  return items;
}

function countTranslatedCodeCommentLessons(lessons: readonly LessonInfo[]) {
  const counts = new Map<string, { translated: number; total: number }>();

  for (const track of tracks) {
    counts.set(track.slug, { translated: 0, total: 0 });
  }

  for (const lesson of lessons) {
    const row = counts.get(lesson.track);
    if (!row) continue;

    row.total += 1;
    const expectedGood = countCommentLines(lesson.goodCode, lesson.track);
    const expectedBad = countCommentLines(lesson.badCode, lesson.track);
    const translatedGood =
      getLessonThaiTranslation(lesson.track, lesson.slug)?.codeComments
        ?.goodCode?.length ?? 0;
    const translatedBad =
      getLessonThaiTranslation(lesson.track, lesson.slug)?.codeComments?.badCode
        ?.length ?? 0;

    if (
      expectedGood > 0 &&
      expectedBad > 0 &&
      translatedGood === expectedGood &&
      translatedBad === expectedBad
    ) {
      row.translated += 1;
    }
  }

  return counts;
}

function countThaiLessons(lessons: readonly LessonInfo[]) {
  const counts = new Map<string, { translated: number; total: number }>();

  for (const track of tracks) {
    counts.set(track.slug, { translated: 0, total: 0 });
  }

  for (const lesson of lessons) {
    const row = counts.get(lesson.track);
    if (!row) continue;

    row.total += 1;
    if (getLessonThaiTranslation(lesson.track, lesson.slug)) {
      row.translated += 1;
    }
  }

  return counts;
}

function formatCell(value: string, width: number) {
  return value.padEnd(width, " ");
}

function issueCountByTrack(issues: readonly ContentQualityIssue[]) {
  const counts = new Map<string, number>();

  for (const issue of issues) {
    if (!issue.track) continue;
    counts.set(issue.track, (counts.get(issue.track) ?? 0) + 1);
  }

  return counts;
}

function issueCountByCode(issues: readonly ContentQualityIssue[]) {
  const counts = new Map<string, number>();

  for (const issue of issues) {
    counts.set(issue.code, (counts.get(issue.code) ?? 0) + 1);
  }

  return [...counts.entries()].sort(([, leftCount], [, rightCount]) => {
    return rightCount - leftCount;
  });
}

function printDashboard(
  lessons: readonly LessonInfo[],
  issues: readonly ContentQualityIssue[],
) {
  const summary = summarizeContentQuality(issues);
  const thaiCounts = countThaiLessons(lessons);
  const commentCounts = countTranslatedCodeCommentLessons(lessons);
  const flagCounts = issueCountByTrack(issues);

  console.log("Content QA");
  console.log("");
  console.log(
    [
      formatCell("Track", 14),
      formatCell("Lessons", 9),
      formatCell("Thai", 9),
      formatCell("Comments", 10),
      "Flags",
    ].join(""),
  );

  for (const track of tracks) {
    const lessonCount = lessons.filter((lesson) => lesson.track === track.slug)
      .length;
    const thai = thaiCounts.get(track.slug) ?? { translated: 0, total: 0 };
    const comments = commentCounts.get(track.slug) ?? { translated: 0, total: 0 };
    const flags = flagCounts.get(track.slug) ?? 0;

    console.log(
      [
        formatCell(track.slug, 14),
        formatCell(`${lessonCount}/10`, 9),
        formatCell(`${thai.translated}/${thai.total}`, 9),
        formatCell(`${comments.translated}/${comments.total}`, 10),
        String(flags),
      ].join(""),
    );
  }

  console.log("");
  console.log(
    `Hard errors: ${summary.errorCount} | Polish warnings: ${summary.warningCount}`,
  );

  const warningTypes = issueCountByCode(
    issues.filter((issue) => issue.severity === "warning"),
  );
  if (warningTypes.length > 0) {
    console.log("");
    console.log("Warning types");
    for (const [code, count] of warningTypes) {
      console.log(`- ${code}: ${count}`);
    }
  }

  const topIssues = issues.slice(0, 12);
  if (topIssues.length > 0) {
    console.log("");
    console.log("Top polish flags");
    for (const issue of topIssues) {
      console.log(
        `- [${issue.severity}:${issue.code}] ${issue.source} ${issue.field}: ${issue.message}`,
      );
      console.log(`  ${issue.excerpt}`);
      console.log(`  ${issue.suggestion}`);
    }
  }
}

async function main() {
  const lessons = await readLessons();
  const items = [
    ...collectLessonItems(lessons),
    ...collectTranslationItems(lessons),
  ];
  const issues = items.flatMap(analyzeContentQualityItem);
  const summary = summarizeContentQuality(issues);

  printDashboard(lessons, issues);

  if (summary.errorCount > 0) {
    process.exitCode = 1;
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
