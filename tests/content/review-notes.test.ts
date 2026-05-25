import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { parseReviewNotesMarkdown } from "../../lib/content/review-notes";

test("parseReviewNotesMarkdown extracts review notes from lesson MDX", async () => {
  const source = "content/html/accessible-form-labels.mdx";
  const markdown = await readFile(source, "utf8");
  const reviewNotes = parseReviewNotesMarkdown(markdown, source);

  assert.equal(reviewNotes.whatToReview.length, 2);
  assert.equal(reviewNotes.reviewNotes.length, 1);
  assert.match(reviewNotes.whatToReview[0] ?? "", /persistent accessible name/);
  assert.match(reviewNotes.reviewNotes[0] ?? "", /Placeholder-only fields/);
});
