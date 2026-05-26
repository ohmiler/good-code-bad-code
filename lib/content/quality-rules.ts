export type ContentQualityLanguage = "en" | "th";

export type ContentQualityKind =
  | "track-copy"
  | "lesson-copy"
  | "review-notes"
  | "localized-copy"
  | "code-comment";

export type ContentQualityItem = {
  source: string;
  field: string;
  kind: ContentQualityKind;
  text: string;
  language: ContentQualityLanguage;
  track?: string;
  lesson?: string;
};

export type ContentQualitySeverity = "error" | "warning";

export type ContentQualityIssue = {
  severity: ContentQualitySeverity;
  code: string;
  message: string;
  suggestion: string;
  source: string;
  field: string;
  excerpt: string;
  track?: string;
  lesson?: string;
};

export type ContentQualitySummary = {
  errorCount: number;
  warningCount: number;
};

const placeholderPatterns = [
  /\bTODO\b/i,
  /\bTBD\b/i,
  /\bFIXME\b/i,
  /lorem ipsum/i,
] as const;

type VagueCopyPattern = {
  language: ContentQualityLanguage;
  code: string;
  message: string;
  suggestion: string;
  pattern: RegExp;
  allow?: RegExp;
};

const vagueCopyPatterns: VagueCopyPattern[] = [
  {
    language: "en",
    code: "generic-noun",
    message: "Copy leans on a generic noun.",
    suggestion:
      "Name the code object, data shape, boundary, or user-visible behavior instead.",
    pattern: /\b(things?|stuff|something)\b/i,
  },
  {
    language: "en",
    code: "floating-adjective",
    message: "Copy uses a broad adjective without enough review detail.",
    suggestion:
      "Replace the adjective with the concrete review signal or production risk.",
    pattern: /\b(properly|appropriate|clearer|better)\b/i,
  },
  {
    language: "en",
    code: "generic-handle",
    message: "Copy uses 'handle' where a specific action would be stronger.",
    suggestion:
      "Name the action: validate, catch, return, close, retry, log, or reject.",
    pattern: /\bhandle(s|d|ing)?\b/i,
    allow: /\b(file|resource|timer|connection) handles?\b/i,
  },
  {
    language: "th",
    code: "broad-action-th",
    message: "ข้อความใช้คำกริยากว้างเกินไป.",
    suggestion:
      "ระบุ action จริง เช่น validate, return, ปิด resource, ส่ง response, หรือคืน error.",
    pattern: /จัดการ/,
  },
  {
    language: "th",
    code: "floating-adjective-th",
    message: "ข้อความใช้คำคุณศัพท์กว้างโดยยังไม่ชี้ object ในโค้ด.",
    suggestion:
      "บอก code object, boundary, data shape, state, หรือ production risk ให้ตรงขึ้น.",
    pattern: /เหมาะสม|ชัดเจน|ดีขึ้น/,
  },
  {
    language: "th",
    code: "loose-reference-th",
    message: "ข้อความใช้สรรพนามหรือคำรวมที่ทำให้เป้าหมายไม่ชัด.",
    suggestion:
      "แทนด้วยชื่อ object หรือ behavior ที่ reviewer ต้องมองในโค้ด.",
    pattern: /ต่าง ๆ|ต่างๆ|สิ่งนี้|มัน/,
  },
];

function compactWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function excerpt(value: string) {
  const normalized = compactWhitespace(value);
  return normalized.length > 120
    ? `${normalized.slice(0, 117).trimEnd()}...`
    : normalized;
}

function findLongSentence(text: string, language: ContentQualityLanguage) {
  const limit = language === "th" ? 180 : 220;
  const sentences = compactWhitespace(text).split(/(?<=[.!?।])\s+|(?<=ฯ)\s*/);

  return sentences.find((sentence) => sentence.length > limit);
}

function hasPlaceholder(text: string) {
  return placeholderPatterns.some((pattern) => pattern.test(text));
}

function findVagueCopyPattern(item: ContentQualityItem) {
  return vagueCopyPatterns.find(
    ({ allow, language, pattern }) =>
      language === item.language &&
      pattern.test(item.text) &&
      !allow?.test(item.text),
  );
}

export function analyzeContentQualityItem(
  item: ContentQualityItem,
): ContentQualityIssue[] {
  const issues: ContentQualityIssue[] = [];
  const text = compactWhitespace(item.text);

  if (text.length === 0) {
    issues.push({
      severity: "error",
      code: "empty-copy",
      message: "Copy must not be empty.",
      suggestion: "Write a concrete sentence that tells the reader what to review.",
      source: item.source,
      field: item.field,
      excerpt: "",
      track: item.track,
      lesson: item.lesson,
    });
    return issues;
  }

  if (hasPlaceholder(text)) {
    issues.push({
      severity: "error",
      code: "placeholder-copy",
      message: "Placeholder copy must not ship in content.",
      suggestion: "Replace placeholders with final review guidance before publishing.",
      source: item.source,
      field: item.field,
      excerpt: excerpt(text),
      track: item.track,
      lesson: item.lesson,
    });
  }

  const vaguePattern = findVagueCopyPattern(item);
  if (vaguePattern) {
    issues.push({
      severity: "warning",
      code: vaguePattern.code,
      message: vaguePattern.message,
      suggestion: vaguePattern.suggestion,
      source: item.source,
      field: item.field,
      excerpt: excerpt(text),
      track: item.track,
      lesson: item.lesson,
    });
  }

  const longSentence = findLongSentence(text, item.language);
  if (longSentence) {
    issues.push({
      severity: "warning",
      code: "long-sentence",
      message: "Sentence may be too long for quick scanning.",
      suggestion:
        "Split the sentence so one sentence names the review signal and the next explains the risk.",
      source: item.source,
      field: item.field,
      excerpt: excerpt(longSentence),
      track: item.track,
      lesson: item.lesson,
    });
  }

  return issues;
}

export function summarizeContentQuality(
  issues: readonly ContentQualityIssue[],
): ContentQualitySummary {
  return {
    errorCount: issues.filter((issue) => issue.severity === "error").length,
    warningCount: issues.filter((issue) => issue.severity === "warning").length,
  };
}
