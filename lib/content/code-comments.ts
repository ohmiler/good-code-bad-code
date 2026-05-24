export function replaceCodeCommentLines(
  code: string,
  translatedComments: readonly string[] = [],
) {
  let commentIndex = 0;

  return code
    .split("\n")
    .map((line) => {
      const trimmedStart = line.trimStart();

      if (!trimmedStart.startsWith("# ")) {
        return line;
      }

      const translatedComment = translatedComments[commentIndex];
      commentIndex += 1;

      if (!translatedComment) {
        return line;
      }

      const indentation = line.slice(0, line.length - trimmedStart.length);

      return `${indentation}# ${translatedComment}`;
    })
    .join("\n");
}
