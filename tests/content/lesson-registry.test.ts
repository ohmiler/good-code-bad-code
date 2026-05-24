import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { test } from "node:test";
import ts from "typescript";
import { tracks } from "../../lib/content/tracks";

const contentRoot = path.join(process.cwd(), "content");
const registryPath = path.join(contentRoot, "lesson-registry.ts");
const trackSlugs = new Set<string>(tracks.map((track) => track.slug));
const expectedLessonCounts = {
  html: 10,
  css: 10,
  javascript: 10,
  typescript: 3,
  react: 3,
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

test("test:content runs the registry content coverage test", async () => {
  const packageJson = JSON.parse(await readFile("package.json", "utf8")) as {
    scripts?: Record<string, string>;
  };

  const testContentScript = packageJson.scripts?.["test:content"] ?? "";

  assert.match(testContentScript, /schema\.test\.ts/);
  assert.match(testContentScript, /lesson-registry\.test\.ts/);
});

test("seeded lessons match expected track counts", async () => {
  const lessonsByTrack = await getTrackLessonFiles();
  const allLessonFiles = [...lessonsByTrack.values()].flat();

  assert.equal(allLessonFiles.length, 36);
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
