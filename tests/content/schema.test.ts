import assert from "node:assert/strict";
import { test } from "node:test";
import { validateLessonMetadata } from "../../lib/content/schema";

const validMetadata = {
  title: "Semantic document structure",
  track: "html",
  order: 2,
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

test("validateLessonMetadata accepts Go code samples", () => {
  const goMetadata = {
    ...validMetadata,
    track: "go",
    goodCode: {
      language: "go",
      filename: "reviews/repository.go",
      code: "func FindReview(id string) (Review, error) { return Review{}, nil }",
    },
    badCode: {
      language: "go",
      filename: "reviews/repository.go",
      code: "func findReview(id string) Review { return Review{} }",
    },
  };

  assert.deepEqual(
    validateLessonMetadata(goMetadata, "content/go/naming-and-exported-api.mdx"),
    goMetadata,
  );
});

test("validateLessonMetadata accepts Dockerfile and YAML code samples", () => {
  const dockerMetadata = {
    ...validMetadata,
    track: "docker",
    goodCode: {
      language: "dockerfile",
      filename: "Dockerfile",
      code: "FROM node:22-alpine\\nWORKDIR /app\\nCOPY package*.json ./",
    },
    badCode: {
      language: "yaml",
      filename: "compose.yaml",
      code: "services:\\n  app:\\n    image: node:latest",
    },
  };

  assert.deepEqual(
    validateLessonMetadata(
      dockerMetadata,
      "content/docker/multi-stage-builds.mdx",
    ),
    dockerMetadata,
  );
});

test("validateLessonMetadata accepts PHP code samples", () => {
  const phpMetadata = {
    ...validMetadata,
    track: "php",
    goodCode: {
      language: "php",
      filename: "src/Controller/ProfileController.php",
      code: "<?php declare(strict_types=1);\\nfunction show(int $id): string { return (string) $id; }",
    },
    badCode: {
      language: "php",
      filename: "profile.php",
      code: "<?php echo $_GET['id'];",
    },
  };

  assert.deepEqual(
    validateLessonMetadata(
      phpMetadata,
      "content/php/strict-types-and-return-types.mdx",
    ),
    phpMetadata,
  );
});

test("validateLessonMetadata accepts Java code samples", () => {
  const javaMetadata = {
    ...validMetadata,
    track: "java",
    goodCode: {
      language: "java",
      filename: "src/main/java/dev/review/UserService.java",
      code: "public Optional<User> findById(UserId id) { return users.find(id); }",
    },
    badCode: {
      language: "java",
      filename: "UserService.java",
      code: "public User findById(String id) { return users.get(id); }",
    },
  };

  assert.deepEqual(
    validateLessonMetadata(
      javaMetadata,
      "content/java/null-handling-and-optional-boundaries.mdx",
    ),
    javaMetadata,
  );
});

test("validateLessonMetadata accepts C code samples", () => {
  const cMetadata = {
    ...validMetadata,
    track: "c",
    goodCode: {
      language: "c",
      filename: "src/review_buffer.c",
      code: "int copy_review(char *dst, size_t dst_size, const char *src) { return 0; }",
    },
    badCode: {
      language: "c",
      filename: "review_buffer.c",
      code: "void copy_review(char *dst, char *src) { strcpy(dst, src); }",
    },
  };

  assert.deepEqual(
    validateLessonMetadata(cMetadata, "content/c/pointer-ownership.mdx"),
    cMetadata,
  );
});

test("validateLessonMetadata accepts C++ code samples", () => {
  const cppMetadata = {
    ...validMetadata,
    track: "cpp",
    goodCode: {
      language: "cpp",
      filename: "src/review_store.cpp",
      code: "std::unique_ptr<Review> make_review(std::string title) { return std::make_unique<Review>(std::move(title)); }",
    },
    badCode: {
      language: "cpp",
      filename: "review_store.cpp",
      code: "Review* make_review(std::string title) { return new Review(title); }",
    },
  };

  assert.deepEqual(
    validateLessonMetadata(cppMetadata, "content/cpp/smart-pointer-ownership.mdx"),
    cppMetadata,
  );
});

test("validateLessonMetadata accepts C# code samples", () => {
  const csharpMetadata = {
    ...validMetadata,
    track: "csharp",
    goodCode: {
      language: "csharp",
      filename: "src/ReviewService.cs",
      code: "public Task<ReviewDto?> FindAsync(Guid id, CancellationToken cancellationToken) => reviews.FindAsync(id, cancellationToken);",
    },
    badCode: {
      language: "csharp",
      filename: "ReviewService.cs",
      code: "public ReviewDto Find(string id) => reviews.Find(id);",
    },
  };

  assert.deepEqual(
    validateLessonMetadata(csharpMetadata, "content/csharp/nullable-reference-boundaries.mdx"),
    csharpMetadata,
  );
});

test("validateLessonMetadata accepts Vue single-file component samples", () => {
  const vueMetadata = {
    ...validMetadata,
    track: "vue",
    goodCode: {
      language: "vue",
      filename: "ReviewCard.vue",
      code: "<script setup lang=\"ts\">\\ndefineProps<{ title: string }>();\\n</script>",
    },
    badCode: {
      language: "vue",
      filename: "ReviewCard.vue",
      code: "<script setup>\\ndefineProps([\"title\"]);\\n</script>",
    },
  };

  assert.deepEqual(
    validateLessonMetadata(
      vueMetadata,
      "content/vue/single-file-component-boundaries.mdx",
    ),
    vueMetadata,
  );
});

test("validateLessonMetadata accepts Bash code samples for Git lessons", () => {
  const gitMetadata = {
    ...validMetadata,
    track: "git",
    goodCode: {
      language: "bash",
      filename: "review-workflow.sh",
      code: "git status --short\\ngit diff --staged",
    },
    badCode: {
      language: "bash",
      filename: "review-workflow.sh",
      code: "git add .\\ngit commit -m update",
    },
  };

  assert.deepEqual(
    validateLessonMetadata(gitMetadata, "content/git/reviewing-diffs.mdx"),
    gitMetadata,
  );
});

test("validateLessonMetadata rejects unknown tracks", () => {
  assert.throws(
    () =>
      validateLessonMetadata(
        { ...validMetadata, track: "ruby" },
        "content/ruby/component-state.mdx",
      ),
    /unknown track "ruby"/,
  );
});

test("validateLessonMetadata rejects missing lesson order", () => {
  const metadataWithoutOrder: Partial<typeof validMetadata> = {
    ...validMetadata,
  };
  delete metadataWithoutOrder.order;

  assert.throws(
    () =>
      validateLessonMetadata(
        metadataWithoutOrder,
        "content/html/semantic-document-structure.mdx",
      ),
    /order must be a positive integer/,
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
