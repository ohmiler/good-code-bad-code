import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { test } from "node:test";
import ts from "typescript";
import { tracks } from "../../lib/content/tracks";
import { lessonThaiTranslations } from "../../lib/i18n/translations";

const contentRoot = path.join(process.cwd(), "content");
const registryPath = path.join(contentRoot, "lesson-registry.ts");
const trackSlugs = new Set<string>(tracks.map((track) => track.slug));
const expectedLessonCounts = {
  html: 10,
  css: 10,
  javascript: 10,
  typescript: 10,
  react: 10,
  vue: 10,
  nextjs: 10,
  nodejs: 10,
  express: 10,
  nestjs: 10,
  laravel: 10,
  sql: 10,
  python: 10,
  fastapi: 10,
  django: 10,
  go: 10,
  docker: 10,
  tailwindcss: 10,
  php: 10,
  java: 10,
  c: 10,
  cpp: 10,
  csharp: 10,
  rust: 10,
  git: 10,
} as const;

type RawLessonEntry = {
  slug: string;
  source: string;
};

async function getTrackLessonFiles() {
  const lessonsByTrack = new Map<string, string[]>();

  for (const track of tracks) {
    const trackDir = path.join(contentRoot, track.slug);
    const files = (await readdir(trackDir))
      .filter((file) => file.endsWith(".mdx"))
      .sort();

    lessonsByTrack.set(
      track.slug,
      files.map((file) => path.posix.join("content", track.slug, file)),
    );
  }

  return lessonsByTrack;
}

function slugFromContentPath(contentPath: string): string {
  return path.posix.basename(contentPath, ".mdx");
}

function trackFromContentPath(contentPath: string): string {
  return contentPath.split("/")[1] ?? "";
}

function readStringProperty(
  objectLiteral: ts.ObjectLiteralExpression,
  propertyName: string,
): string {
  const property = objectLiteral.properties.find(
    (item): item is ts.PropertyAssignment =>
      ts.isPropertyAssignment(item) &&
      ts.isIdentifier(item.name) &&
      item.name.text === propertyName,
  );

  assert.ok(property, `rawLessons entry is missing ${propertyName}`);
  assert.ok(
    ts.isStringLiteral(property.initializer),
    `rawLessons ${propertyName} must be a string literal`,
  );

  return property.initializer.text.replaceAll("\\", "/");
}

function readTextLiteralProperty(
  objectLiteral: ts.ObjectLiteralExpression,
  propertyName: string,
): string {
  const property = objectLiteral.properties.find(
    (item): item is ts.PropertyAssignment =>
      ts.isPropertyAssignment(item) &&
      ts.isIdentifier(item.name) &&
      item.name.text === propertyName,
  );

  assert.ok(property, `object literal is missing ${propertyName}`);
  assert.ok(
    ts.isStringLiteral(property.initializer) ||
      ts.isNoSubstitutionTemplateLiteral(property.initializer),
    `${propertyName} must be a string or template literal`,
  );

  return property.initializer.text;
}

async function readRegisteredLessons(): Promise<RawLessonEntry[]> {
  const sourceText = await readFile(registryPath, "utf8");
  const sourceFile = ts.createSourceFile(
    registryPath,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  let rawLessons: ts.ArrayLiteralExpression | undefined;

  function visit(node: ts.Node) {
    if (
      ts.isVariableDeclaration(node) &&
      ts.isIdentifier(node.name) &&
      node.name.text === "rawLessons" &&
      node.initializer &&
      ts.isArrayLiteralExpression(node.initializer)
    ) {
      rawLessons = node.initializer;
      return;
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  assert.ok(rawLessons, "content/lesson-registry.ts must declare rawLessons");

  return rawLessons.elements.map((element) => {
    assert.ok(
      ts.isObjectLiteralExpression(element),
      "rawLessons entries must be object literals",
    );

    return {
      slug: readStringProperty(element, "slug"),
      source: readStringProperty(element, "source"),
    };
  });
}

function extractObjectLiteral(source: string, marker: string): string {
  const markerIndex = source.indexOf(marker);
  assert.notEqual(markerIndex, -1, `${marker} export is missing`);

  const objectStart = source.indexOf("{", markerIndex);
  assert.notEqual(objectStart, -1, `${marker} object literal is missing`);

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

  assert.fail(`${marker} object literal was not closed`);
}

async function readMdxMetadataTrack(contentPath: string): Promise<string> {
  const mdxSource = await readFile(contentPath, "utf8");
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

  assert.ok(
    ts.isVariableStatement(statement),
    `${contentPath} metadata must parse as a variable statement`,
  );

  const initializer = statement.declarationList.declarations[0]?.initializer;
  assert.ok(
    initializer && ts.isObjectLiteralExpression(initializer),
    `${contentPath} metadata must be an object literal`,
  );

  return readStringProperty(initializer, "track");
}

async function readMdxMetadataOrder(contentPath: string): Promise<number> {
  const mdxSource = await readFile(contentPath, "utf8");
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

  assert.ok(
    ts.isVariableStatement(statement),
    `${contentPath} metadata must parse as a variable statement`,
  );

  const initializer = statement.declarationList.declarations[0]?.initializer;
  assert.ok(
    initializer && ts.isObjectLiteralExpression(initializer),
    `${contentPath} metadata must be an object literal`,
  );

  const property = initializer.properties.find(
    (item): item is ts.PropertyAssignment =>
      ts.isPropertyAssignment(item) &&
      ts.isIdentifier(item.name) &&
      item.name.text === "order",
  );

  assert.ok(property, `${contentPath} metadata is missing order`);
  assert.ok(
    ts.isNumericLiteral(property.initializer),
    `${contentPath} order must be a number literal`,
  );

  return Number(property.initializer.text);
}

async function readMdxMetadataCodeSample(
  contentPath: string,
  sampleName: "goodCode" | "badCode",
): Promise<string> {
  const mdxSource = await readFile(contentPath, "utf8");
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

  assert.ok(
    ts.isVariableStatement(statement),
    `${contentPath} metadata must parse as a variable statement`,
  );

  const initializer = statement.declarationList.declarations[0]?.initializer;
  assert.ok(
    initializer && ts.isObjectLiteralExpression(initializer),
    `${contentPath} metadata must be an object literal`,
  );

  const sampleProperty = initializer.properties.find(
    (item): item is ts.PropertyAssignment =>
      ts.isPropertyAssignment(item) &&
      ts.isIdentifier(item.name) &&
      item.name.text === sampleName,
  );

  assert.ok(sampleProperty, `${contentPath} metadata is missing ${sampleName}`);
  assert.ok(
    ts.isObjectLiteralExpression(sampleProperty.initializer),
    `${contentPath} ${sampleName} must be an object literal`,
  );

  return readTextLiteralProperty(sampleProperty.initializer, "code");
}

function countReviewCommentLines(code: string, track: string): number {
  return code.split("\n").filter((line) => {
    const trimmedLine = line.trim();

    if (track === "git" || track === "python") {
      return trimmedLine.startsWith("# ");
    }

    if (track === "html") {
      return trimmedLine.startsWith("<!-- ") && trimmedLine.endsWith(" -->");
    }

    if (track === "css") {
      return trimmedLine.startsWith("/* ") && trimmedLine.endsWith(" */");
    }

    if (
      track === "javascript" ||
      track === "typescript" ||
      track === "react" ||
      track === "vue" ||
      track === "nextjs" ||
      track === "nodejs" ||
      track === "express" ||
      track === "nestjs" ||
      track === "laravel" ||
      track === "php" ||
      track === "java" ||
      track === "c" ||
      track === "cpp" ||
      track === "csharp" ||
      track === "rust"
    ) {
      return trimmedLine.startsWith("// ");
    }

    return false;
  }).length;
}

test("test:content runs the registry content coverage test", async () => {
  const packageJson = JSON.parse(await readFile("package.json", "utf8")) as {
    scripts?: Record<string, string>;
  };

  const testContentScript = packageJson.scripts?.["test:content"] ?? "";

  assert.match(testContentScript, /schema\.test\.ts/);
  assert.match(testContentScript, /lesson-registry\.test\.ts/);
  assert.match(testContentScript, /code-comments\.test\.ts/);
  assert.match(testContentScript, /brand-wordmark\.test\.ts/);
  assert.match(testContentScript, /track-icons\.test\.ts/);
});

test("seeded lessons match expected track counts", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const allLessonFiles = [...lessonsByTrack.values()].flat();

  assert.equal(allLessonFiles.length, 250);
  for (const track of tracks) {
    assert.equal(
      lessonsByTrack.get(track.slug)?.length,
      expectedLessonCounts[track.slug],
      track.slug,
    );
  }
});

test("lesson metadata order is contiguous per track", async () => {
  const lessonsByTrack = await getTrackLessonFiles();

  for (const track of tracks) {
    const orders = await Promise.all(
      (lessonsByTrack.get(track.slug) ?? []).map((contentPath) =>
        readMdxMetadataOrder(contentPath),
      ),
    );

    assert.deepEqual(
      orders.sort((a, b) => a - b),
      Array.from(
        { length: expectedLessonCounts[track.slug] },
        (_item, index) => index + 1,
      ),
      track.slug,
    );
  }
});

test("every seeded MDX lesson compiles", async () => {
  const { compile } = await import("@mdx-js/mdx");
  const lessonsByTrack = await getTrackLessonFiles();

  for (const contentPath of [...lessonsByTrack.values()].flat()) {
    const source = await readFile(contentPath, "utf8");
    await compile(source, { jsx: true });
  }
});

test("Git command samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const gitLessons = lessonsByTrack.get("git") ?? [];

  assert.equal(gitLessons.length, expectedLessonCounts.git);

  for (const contentPath of gitLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "git");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("Git command comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const gitLessons = lessonsByTrack.get("git") ?? [];

  assert.equal(gitLessons.length, expectedLessonCounts.git);

  for (const contentPath of gitLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`git/${slug}`];

    assert.ok(translation.codeComments, `git/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "git");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `git/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `git/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `git/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("HTML samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const htmlLessons = lessonsByTrack.get("html") ?? [];

  assert.equal(htmlLessons.length, expectedLessonCounts.html);

  for (const contentPath of htmlLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "html");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("HTML comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const htmlLessons = lessonsByTrack.get("html") ?? [];

  assert.equal(htmlLessons.length, expectedLessonCounts.html);

  for (const contentPath of htmlLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`html/${slug}`];

    assert.ok(translation.codeComments, `html/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "html");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `html/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `html/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `html/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("CSS samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const cssLessons = lessonsByTrack.get("css") ?? [];

  assert.equal(cssLessons.length, expectedLessonCounts.css);

  for (const contentPath of cssLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "css");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("CSS comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const cssLessons = lessonsByTrack.get("css") ?? [];

  assert.equal(cssLessons.length, expectedLessonCounts.css);

  for (const contentPath of cssLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`css/${slug}`];

    assert.ok(translation.codeComments, `css/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "css");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `css/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `css/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `css/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("JavaScript samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const javascriptLessons = lessonsByTrack.get("javascript") ?? [];

  assert.equal(javascriptLessons.length, expectedLessonCounts.javascript);

  for (const contentPath of javascriptLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "javascript");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("JavaScript comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const javascriptLessons = lessonsByTrack.get("javascript") ?? [];

  assert.equal(javascriptLessons.length, expectedLessonCounts.javascript);

  for (const contentPath of javascriptLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`javascript/${slug}`];

    assert.ok(
      translation.codeComments,
      `javascript/${slug} missing codeComments`,
    );

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "javascript");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `javascript/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `javascript/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `javascript/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("TypeScript samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const typescriptLessons = lessonsByTrack.get("typescript") ?? [];

  assert.equal(typescriptLessons.length, expectedLessonCounts.typescript);

  for (const contentPath of typescriptLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "typescript");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("TypeScript comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const typescriptLessons = lessonsByTrack.get("typescript") ?? [];

  assert.equal(typescriptLessons.length, expectedLessonCounts.typescript);

  for (const contentPath of typescriptLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`typescript/${slug}`];

    assert.ok(
      translation.codeComments,
      `typescript/${slug} missing codeComments`,
    );

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "typescript");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `typescript/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `typescript/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `typescript/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("React samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const reactLessons = lessonsByTrack.get("react") ?? [];

  assert.equal(reactLessons.length, expectedLessonCounts.react);

  for (const contentPath of reactLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "react");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("React comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const reactLessons = lessonsByTrack.get("react") ?? [];

  assert.equal(reactLessons.length, expectedLessonCounts.react);

  for (const contentPath of reactLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`react/${slug}`];

    assert.ok(translation.codeComments, `react/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "react");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `react/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `react/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `react/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("Vue samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const vueLessons = lessonsByTrack.get("vue") ?? [];

  assert.equal(vueLessons.length, expectedLessonCounts.vue);

  for (const contentPath of vueLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "vue");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("Vue comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const vueLessons = lessonsByTrack.get("vue") ?? [];

  assert.equal(vueLessons.length, expectedLessonCounts.vue);

  for (const contentPath of vueLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`vue/${slug}`];

    assert.ok(translation.codeComments, `vue/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "vue");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `vue/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `vue/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `vue/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("Next.js samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const nextjsLessons = lessonsByTrack.get("nextjs") ?? [];

  assert.equal(nextjsLessons.length, expectedLessonCounts.nextjs);

  for (const contentPath of nextjsLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "nextjs");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("Next.js comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const nextjsLessons = lessonsByTrack.get("nextjs") ?? [];

  assert.equal(nextjsLessons.length, expectedLessonCounts.nextjs);

  for (const contentPath of nextjsLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`nextjs/${slug}`];

    assert.ok(translation.codeComments, `nextjs/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "nextjs");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `nextjs/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `nextjs/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `nextjs/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("Node.js samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const nodejsLessons = lessonsByTrack.get("nodejs") ?? [];

  assert.equal(nodejsLessons.length, expectedLessonCounts.nodejs);

  for (const contentPath of nodejsLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "nodejs");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("Node.js comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const nodejsLessons = lessonsByTrack.get("nodejs") ?? [];

  assert.equal(nodejsLessons.length, expectedLessonCounts.nodejs);

  for (const contentPath of nodejsLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`nodejs/${slug}`];

    assert.ok(translation.codeComments, `nodejs/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "nodejs");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `nodejs/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `nodejs/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `nodejs/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("Express samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const expressLessons = lessonsByTrack.get("express") ?? [];

  assert.equal(expressLessons.length, expectedLessonCounts.express);

  for (const contentPath of expressLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "express");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("Express comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const expressLessons = lessonsByTrack.get("express") ?? [];

  assert.equal(expressLessons.length, expectedLessonCounts.express);

  for (const contentPath of expressLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`express/${slug}`];

    assert.ok(translation.codeComments, `express/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "express");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `express/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `express/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `express/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("NestJS samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const nestjsLessons = lessonsByTrack.get("nestjs") ?? [];

  assert.equal(nestjsLessons.length, expectedLessonCounts.nestjs);

  for (const contentPath of nestjsLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "nestjs");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("NestJS comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const nestjsLessons = lessonsByTrack.get("nestjs") ?? [];

  assert.equal(nestjsLessons.length, expectedLessonCounts.nestjs);

  for (const contentPath of nestjsLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`nestjs/${slug}`];

    assert.ok(translation.codeComments, `nestjs/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "nestjs");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `nestjs/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `nestjs/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `nestjs/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("Laravel samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const laravelLessons = lessonsByTrack.get("laravel") ?? [];

  assert.equal(laravelLessons.length, expectedLessonCounts.laravel);

  for (const contentPath of laravelLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "laravel");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("Laravel comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const laravelLessons = lessonsByTrack.get("laravel") ?? [];

  assert.equal(laravelLessons.length, expectedLessonCounts.laravel);

  for (const contentPath of laravelLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`laravel/${slug}`];

    assert.ok(translation.codeComments, `laravel/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "laravel");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `laravel/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `laravel/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `laravel/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("Python samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const pythonLessons = lessonsByTrack.get("python") ?? [];

  assert.equal(pythonLessons.length, expectedLessonCounts.python);

  for (const contentPath of pythonLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "python");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("Python comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const pythonLessons = lessonsByTrack.get("python") ?? [];

  assert.equal(pythonLessons.length, expectedLessonCounts.python);

  for (const contentPath of pythonLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`python/${slug}`];

    assert.ok(translation.codeComments, `python/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "python");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `python/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `python/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `python/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("PHP samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const phpLessons = lessonsByTrack.get("php") ?? [];

  assert.equal(phpLessons.length, expectedLessonCounts.php);

  for (const contentPath of phpLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "php");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("PHP comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const phpLessons = lessonsByTrack.get("php") ?? [];

  assert.equal(phpLessons.length, expectedLessonCounts.php);

  for (const contentPath of phpLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`php/${slug}`];

    assert.ok(translation.codeComments, `php/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "php");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `php/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `php/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `php/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("Java samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const javaLessons = lessonsByTrack.get("java") ?? [];

  assert.equal(javaLessons.length, expectedLessonCounts.java);

  for (const contentPath of javaLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "java");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("Java comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const javaLessons = lessonsByTrack.get("java") ?? [];

  assert.equal(javaLessons.length, expectedLessonCounts.java);

  for (const contentPath of javaLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`java/${slug}`];

    assert.ok(translation.codeComments, `java/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "java");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `java/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `java/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `java/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("C samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const cLessons = lessonsByTrack.get("c") ?? [];

  assert.equal(cLessons.length, expectedLessonCounts.c);

  for (const contentPath of cLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "c");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("C comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const cLessons = lessonsByTrack.get("c") ?? [];

  assert.equal(cLessons.length, expectedLessonCounts.c);

  for (const contentPath of cLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`c/${slug}`];

    assert.ok(translation.codeComments, `c/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "c");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `c/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `c/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `c/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("C++ samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const cppLessons = lessonsByTrack.get("cpp") ?? [];

  assert.equal(cppLessons.length, expectedLessonCounts.cpp);

  for (const contentPath of cppLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "cpp");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("C++ comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const cppLessons = lessonsByTrack.get("cpp") ?? [];

  assert.equal(cppLessons.length, expectedLessonCounts.cpp);

  for (const contentPath of cppLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`cpp/${slug}`];

    assert.ok(translation.codeComments, `cpp/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "cpp");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `cpp/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `cpp/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `cpp/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("C# samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const csharpLessons = lessonsByTrack.get("csharp") ?? [];

  assert.equal(csharpLessons.length, expectedLessonCounts.csharp);

  for (const contentPath of csharpLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "csharp");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("C# comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const csharpLessons = lessonsByTrack.get("csharp") ?? [];

  assert.equal(csharpLessons.length, expectedLessonCounts.csharp);

  for (const contentPath of csharpLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`csharp/${slug}`];

    assert.ok(translation.codeComments, `csharp/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "csharp");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `csharp/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `csharp/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `csharp/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("Rust samples include concise review comments", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const rustLessons = lessonsByTrack.get("rust") ?? [];

  assert.equal(rustLessons.length, expectedLessonCounts.rust);

  for (const contentPath of rustLessons) {
    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "rust");

      assert.ok(commentCount >= 1, `${contentPath} ${sampleName}`);
      assert.ok(commentCount <= 3, `${contentPath} ${sampleName}`);
    }
  }
});

test("Rust comments have matching Thai translations", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const rustLessons = lessonsByTrack.get("rust") ?? [];

  assert.equal(rustLessons.length, expectedLessonCounts.rust);

  for (const contentPath of rustLessons) {
    const slug = slugFromContentPath(contentPath);
    const translation = lessonThaiTranslations[`rust/${slug}`];

    assert.ok(translation.codeComments, `rust/${slug} missing codeComments`);

    for (const sampleName of ["goodCode", "badCode"] as const) {
      const code = await readMdxMetadataCodeSample(contentPath, sampleName);
      const commentCount = countReviewCommentLines(code, "rust");
      const translatedComments = translation.codeComments[sampleName] ?? [];

      assert.equal(translatedComments.length, commentCount, `rust/${slug}`);
      for (const [index, comment] of translatedComments.entries()) {
        assert.match(comment, /[\u0e00-\u0e7f]/, `rust/${slug}.${sampleName}[${index}]`);
        assert.ok(comment.trim().length >= 8, `rust/${slug}.${sampleName}[${index}]`);
      }
    }
  }
});

test("rawLessons exactly matches seeded lessons with aligned slugs and tracks", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const discoveredSources = [...lessonsByTrack.values()].flat().sort();
  const registeredLessons = await readRegisteredLessons();
  const registeredSources = registeredLessons
    .map((lesson) => lesson.source)
    .sort();
  const registeredSlugs = registeredLessons.map((lesson) => lesson.slug);

  assert.deepEqual(registeredSources, discoveredSources);
  assert.equal(new Set(registeredSlugs).size, registeredSlugs.length);

  for (const lesson of registeredLessons) {
    const expectedSlug = slugFromContentPath(lesson.source);
    const trackFolder = trackFromContentPath(lesson.source);
    const mdxTrack = await readMdxMetadataTrack(lesson.source);

    assert.equal(lesson.slug, expectedSlug, lesson.source);
    assert.ok(
      trackSlugs.has(trackFolder),
      `${lesson.source} has unknown track folder`,
    );
    assert.ok(
      lesson.source.startsWith(`content/${trackFolder}/`),
      `${lesson.source} must start with its track folder`,
    );
    assert.equal(mdxTrack, trackFolder, lesson.source);
  }
});
