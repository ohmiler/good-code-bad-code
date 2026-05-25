import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { test } from "node:test";
import ts from "typescript";
import {
  lessonThaiTranslations,
  trackThaiTranslations,
} from "../../lib/i18n/translations";
import { tracks } from "../../lib/content/tracks";

const registryPath = path.join(process.cwd(), "content", "lesson-registry.ts");
const layoutPath = path.join(process.cwd(), "app", "layout.tsx");
const languageProviderPath = path.join(
  process.cwd(),
  "components",
  "language",
  "language-provider.tsx",
);
const languageModulePath = path.join(process.cwd(), "lib", "i18n", "language.ts");
const globalsCssPath = path.join(process.cwd(), "app", "globals.css");

type RegisteredLesson = {
  slug: string;
  track: string;
};

function assertReadableThai(value: string, label: string) {
  assert.match(value, /[\u0e00-\u0e7f]/, `${label} must contain Thai text`);
  assert.ok(value.trim().length >= 8, `${label} must be readable text`);
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

  return property.initializer.text;
}

async function readRegisteredLessons(): Promise<RegisteredLesson[]> {
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

    const source = readStringProperty(element, "source").replaceAll("\\", "/");

    return {
      slug: readStringProperty(element, "slug"),
      track: source.split("/")[1] ?? "",
    };
  });
}

test("Thai track translations cover every track", () => {
  assert.deepEqual(
    Object.keys(trackThaiTranslations).sort(),
    tracks.map((track) => track.slug).sort(),
  );

  for (const track of tracks) {
    const translation = trackThaiTranslations[track.slug];

    assert.ok(translation.title.trim().length > 0, `${track.slug}.title`);
    assertReadableThai(translation.description, `${track.slug}.description`);
  }
});

test("Thai lesson translations cover every lesson", async () => {
  const registeredLessons = await readRegisteredLessons();

  assert.deepEqual(
    Object.keys(lessonThaiTranslations).sort(),
    registeredLessons.map((lesson) => `${lesson.track}/${lesson.slug}`).sort(),
  );

  for (const lesson of registeredLessons) {
    const translation =
      lessonThaiTranslations[`${lesson.track}/${lesson.slug}`];

    assertReadableThai(translation.title, `${lesson.slug}.title`);
    assertReadableThai(translation.summary, `${lesson.slug}.summary`);
    assert.ok(translation.takeaways.length > 0, `${lesson.slug}.takeaways`);
    for (const [index, takeaway] of translation.takeaways.entries()) {
      assertReadableThai(takeaway, `${lesson.slug}.takeaways[${index}]`);
    }
    for (const [index, paragraph] of translation.whatToReview.entries()) {
      assertReadableThai(paragraph, `${lesson.slug}.whatToReview[${index}]`);
    }
    for (const [index, paragraph] of translation.reviewNotes.entries()) {
      assertReadableThai(paragraph, `${lesson.slug}.reviewNotes[${index}]`);
    }
  }
});

test("language preference bootstraps without breaking static export", async () => {
  const [layoutSource, providerSource, languageSource, globalsCssSource] =
    await Promise.all([
      readFile(layoutPath, "utf8"),
      readFile(languageProviderPath, "utf8"),
      readFile(languageModulePath, "utf8"),
      readFile(globalsCssPath, "utf8"),
    ]);

  assert.match(
    languageSource,
    /languageCookieName/,
    "language cookie name must be shared by the server layout and client provider",
  );
  assert.doesNotMatch(
    layoutSource,
    /next\/headers|cookies\(/,
    "static export must not use request-time cookies in the app layout",
  );
  assert.match(
    layoutSource,
    /LanguageBootstrapScript/,
    "app layout must run the language bootstrap script before hydration",
  );
  assert.match(
    layoutSource,
    /<html\s+lang="en"/,
    "static HTML must keep a deterministic default language",
  );
  assert.match(
    providerSource,
    /document\.cookie/,
    "language provider must persist language changes to a cookie",
  );
  assert.match(
    globalsCssSource,
    /data-language-pending/,
    "global styles must prevent a visible wrong-language flash while language hydrates",
  );
});
