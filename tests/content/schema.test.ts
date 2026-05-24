import assert from "node:assert/strict";
import { test } from "node:test";
import { validateLessonMetadata } from "../../lib/content/schema";

const validMetadata = {
  title: "Semantic document structure",
  track: "html",
  summary: "Use document landmarks to make page structure readable.",
  tags: ["semantics", "accessibility"],
  takeaways: ["Prefer meaningful landmarks over anonymous wrappers."],
  goodCode: {
    language: "html",
    filename: "article.html",
    code: "<main><article><h1>Title</h1></article></main>",
  },
  badCode: {
    language: "html",
    filename: "article.html",
    code: "<div><div><b>Title</b></div></div>",
  },
};

test("validateLessonMetadata accepts a complete lesson", () => {
  assert.deepEqual(
    validateLessonMetadata(
      validMetadata,
      "content/html/semantic-document-structure.mdx",
    ),
    validMetadata,
  );
});

test("validateLessonMetadata rejects unknown tracks", () => {
  assert.throws(
    () =>
      validateLessonMetadata(
        { ...validMetadata, track: "vue" },
        "content/vue/component-state.mdx",
      ),
    /unknown track "vue"/,
  );
});

test("validateLessonMetadata rejects empty code snippets", () => {
  assert.throws(
    () =>
      validateLessonMetadata(
        {
          ...validMetadata,
          goodCode: { ...validMetadata.goodCode, code: "" },
        },
        "content/html/semantic-document-structure.mdx",
      ),
    /goodCode.code must be a non-empty string/,
  );
});

test("validateLessonMetadata rejects empty takeaways", () => {
  assert.throws(
    () =>
      validateLessonMetadata(
        { ...validMetadata, takeaways: [] },
        "content/html/semantic-document-structure.mdx",
      ),
    /takeaways must contain at least one item/,
  );
});
