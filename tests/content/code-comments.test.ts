import assert from "node:assert/strict";
import { test } from "node:test";
import { replaceCodeCommentLines } from "../../lib/content/code-comments";

test("replaceCodeCommentLines translates only comment text", () => {
  assert.equal(
    replaceCodeCommentLines(
      "# Review staged work.\ngit diff --staged\n  # Keep indentation.\ngit push",
      ["รีวิวส่วนที่ stage แล้ว", "รักษา indentation เดิม"],
    ),
    "# รีวิวส่วนที่ stage แล้ว\ngit diff --staged\n  # รักษา indentation เดิม\ngit push",
  );
});

test("replaceCodeCommentLines leaves extra or missing translations safe", () => {
  assert.equal(
    replaceCodeCommentLines("# Review staged work.\ngit diff --staged", []),
    "# Review staged work.\ngit diff --staged",
  );

  assert.equal(
    replaceCodeCommentLines(
      "# Review staged work.\ngit diff --staged",
      ["รีวิวส่วนที่ stage แล้ว", "ไม่ได้ใช้"],
    ),
    "# รีวิวส่วนที่ stage แล้ว\ngit diff --staged",
  );
});
