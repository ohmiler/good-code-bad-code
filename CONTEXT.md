# Good Code Bad Code

Good Code Bad Code is a learning context for developers who want to study code review patterns through side-by-side examples. The initial product is a read-only example library, not an interactive review exercise.

## Language

**Example Library**:
A curated collection of side-by-side code examples organized for self-paced reading. Each example belongs to a Track and compares one good version and one bad version of code around the same Review Lesson.
_Avoid_: Exercise platform, quiz, challenge

**Track**:
A top-level learning category in the Example Library. Tracks can be languages, frameworks, runtimes, tools, or styling systems; Track is used because not every category is a programming language.
_Avoid_: Language

**Good Code**:
The version of an example that demonstrates the preferred implementation for the review lesson. It is shown as the left column in a comparison.
_Avoid_: Correct answer, solution

**Bad Code**:
The version of an example that demonstrates a review issue, trade-off, or maintainability problem. It is shown as the right column in a comparison.
_Avoid_: Wrong answer, broken code

**Review Lesson**:
The specific idea a reader should learn from comparing Good Code and Bad Code, such as naming, error handling, boundaries, or testability. A Review Lesson belongs to one Track and includes Review Notes and Takeaways.
_Avoid_: Roadmap item, task, assignment

**Review Notes**:
The explanation that connects the visible differences between Good Code and Bad Code to the underlying review issue.
_Avoid_: Answer key, grading notes

**Takeaway**:
A short memorable rule or habit the reader should carry into future code reviews after reading a Review Lesson.
_Avoid_: Score, result

**Tag**:
A lightweight label that helps readers filter or scan Review Lessons across Tracks.
_Avoid_: Category, badge

**Code Comment**:
A short comment inside Good Code or Bad Code that points at the review signal in the example. A Code Comment should support the Review Lesson without explaining every line.
_Avoid_: Inline tutorial, annotation layer

**Localized Copy**:
Reader-facing lesson text adapted for a supported language. Localized Copy should explain the same Review Lesson naturally for that reader, not mirror the source text word-for-word.
_Avoid_: Literal translation, machine translation

## Example Dialogue

Dev: "Should this be a code review exercise?"
Domain expert: "Not for the first version. It is an Example Library where readers browse a Review Lesson and compare Good Code against Bad Code."

Dev: "Should React, Next.js, Docker, and Git be listed under languages?"
Domain expert: "No. Use Track for the top-level category so languages, frameworks, runtimes, tools, and styling systems can sit together cleanly."

Dev: "Is the Bad Code always non-functional?"
Domain expert: "No. Bad Code can still run; it exists to make a review issue visible."

Dev: "What should a Review Lesson contain?"
Domain expert: "Enough context to read by yourself: a short summary, Good Code, Bad Code, Review Notes, Takeaways, and Tags."

Dev: "Should Thai copy translate every technical word?"
Domain expert: "No. Localized Copy should be natural for Thai developers, keeping common technical terms when they are clearer than forced translations."
