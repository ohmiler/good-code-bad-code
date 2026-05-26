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

test("replaceCodeCommentLines translates HTML comments without changing markup", () => {
  assert.equal(
    replaceCodeCommentLines(
      `<main>
  <!-- Landmark exposes the page body to assistive tech. -->
  <h1>Code review</h1>
</main>`,
      ["landmark บอก body หลักของหน้าให้ assistive tech เข้าใจ"],
    ),
    `<main>
  <!-- landmark บอก body หลักของหน้าให้ assistive tech เข้าใจ -->
  <h1>Code review</h1>
</main>`,
  );
});

test("replaceCodeCommentLines translates CSS comments without changing rules", () => {
  assert.equal(
    replaceCodeCommentLines(
      `.card {
  /* Border-box keeps padding inside the declared size. */
  box-sizing: border-box;
}`,
      ["border-box ทำให้ padding อยู่ในขนาดที่ประกาศไว้"],
    ),
    `.card {
  /* border-box ทำให้ padding อยู่ในขนาดที่ประกาศไว้ */
  box-sizing: border-box;
}`,
  );
});

test("replaceCodeCommentLines translates JavaScript line comments without changing code", () => {
  assert.equal(
    replaceCodeCommentLines(
      `function readValue(options) {
  // Nullish fallback preserves valid falsy values.
  return options.count ?? 3;
}`,
      ["nullish fallback รักษา falsy value ที่ตั้งใจไว้"],
    ),
    `function readValue(options) {
  // nullish fallback รักษา falsy value ที่ตั้งใจไว้
  return options.count ?? 3;
}`,
  );
});

test("replaceCodeCommentLines translates Lua comments without changing code", () => {
  assert.equal(
    replaceCodeCommentLines(
      `local function build_review(title)
  -- Named fields make the table shape explicit.
  return { title = title }
end`,
      ["field แบบมีชื่อทำให้ shape ของ table ชัด"],
    ),
    `local function build_review(title)
  -- field แบบมีชื่อทำให้ shape ของ table ชัด
  return { title = title }
end`,
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
