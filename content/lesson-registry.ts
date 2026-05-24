import type { ComponentType } from "react";
import {
  validateLessonMetadata,
  type LessonMetadata,
  type LessonRecord,
} from "@/lib/content/schema";

import HtmlSemanticStructure, {
  metadata as htmlSemanticStructureMetadata,
} from "./html/semantic-document-structure.mdx";
import HtmlAccessibleFormLabels, {
  metadata as htmlAccessibleFormLabelsMetadata,
} from "./html/accessible-form-labels.mdx";
import HtmlInteractiveElements, {
  metadata as htmlInteractiveElementsMetadata,
} from "./html/interactive-elements.mdx";
import CssFlexLayoutBoundaries, {
  metadata as cssFlexLayoutBoundariesMetadata,
} from "./css/flex-layout-boundaries.mdx";
import CssColorContrastStates, {
  metadata as cssColorContrastStatesMetadata,
} from "./css/color-contrast-states.mdx";
import CssResponsiveUnits, {
  metadata as cssResponsiveUnitsMetadata,
} from "./css/responsive-units.mdx";
import JsGuardClauses, {
  metadata as jsGuardClausesMetadata,
} from "./javascript/guard-clauses.mdx";
import JsAsyncErrorHandling, {
  metadata as jsAsyncErrorHandlingMetadata,
} from "./javascript/async-error-handling.mdx";
import JsNamingSideEffects, {
  metadata as jsNamingSideEffectsMetadata,
} from "./javascript/naming-side-effects.mdx";
import TsDiscriminatedUnions, {
  metadata as tsDiscriminatedUnionsMetadata,
} from "./typescript/discriminated-unions.mdx";
import TsNarrowingUnknown, {
  metadata as tsNarrowingUnknownMetadata,
} from "./typescript/narrowing-unknown.mdx";
import TsPreciseFunctionTypes, {
  metadata as tsPreciseFunctionTypesMetadata,
} from "./typescript/precise-function-types.mdx";
import ReactPropsComponentBoundaries, {
  metadata as reactPropsComponentBoundariesMetadata,
} from "./react/props-component-boundaries.mdx";
import ReactDerivedState, {
  metadata as reactDerivedStateMetadata,
} from "./react/derived-state.mdx";
import ReactEffectDependencies, {
  metadata as reactEffectDependenciesMetadata,
} from "./react/effect-dependencies.mdx";

type RawLesson = {
  slug: string;
  source: string;
  metadata: LessonMetadata;
  Component: ComponentType;
};

const rawLessons: RawLesson[] = [
  {
    slug: "semantic-document-structure",
    source: "content/html/semantic-document-structure.mdx",
    metadata: htmlSemanticStructureMetadata,
    Component: HtmlSemanticStructure,
  },
  {
    slug: "accessible-form-labels",
    source: "content/html/accessible-form-labels.mdx",
    metadata: htmlAccessibleFormLabelsMetadata,
    Component: HtmlAccessibleFormLabels,
  },
  {
    slug: "interactive-elements",
    source: "content/html/interactive-elements.mdx",
    metadata: htmlInteractiveElementsMetadata,
    Component: HtmlInteractiveElements,
  },
  {
    slug: "flex-layout-boundaries",
    source: "content/css/flex-layout-boundaries.mdx",
    metadata: cssFlexLayoutBoundariesMetadata,
    Component: CssFlexLayoutBoundaries,
  },
  {
    slug: "color-contrast-states",
    source: "content/css/color-contrast-states.mdx",
    metadata: cssColorContrastStatesMetadata,
    Component: CssColorContrastStates,
  },
  {
    slug: "responsive-units",
    source: "content/css/responsive-units.mdx",
    metadata: cssResponsiveUnitsMetadata,
    Component: CssResponsiveUnits,
  },
  {
    slug: "guard-clauses",
    source: "content/javascript/guard-clauses.mdx",
    metadata: jsGuardClausesMetadata,
    Component: JsGuardClauses,
  },
  {
    slug: "async-error-handling",
    source: "content/javascript/async-error-handling.mdx",
    metadata: jsAsyncErrorHandlingMetadata,
    Component: JsAsyncErrorHandling,
  },
  {
    slug: "naming-side-effects",
    source: "content/javascript/naming-side-effects.mdx",
    metadata: jsNamingSideEffectsMetadata,
    Component: JsNamingSideEffects,
  },
  {
    slug: "discriminated-unions",
    source: "content/typescript/discriminated-unions.mdx",
    metadata: tsDiscriminatedUnionsMetadata,
    Component: TsDiscriminatedUnions,
  },
  {
    slug: "narrowing-unknown",
    source: "content/typescript/narrowing-unknown.mdx",
    metadata: tsNarrowingUnknownMetadata,
    Component: TsNarrowingUnknown,
  },
  {
    slug: "precise-function-types",
    source: "content/typescript/precise-function-types.mdx",
    metadata: tsPreciseFunctionTypesMetadata,
    Component: TsPreciseFunctionTypes,
  },
  {
    slug: "props-component-boundaries",
    source: "content/react/props-component-boundaries.mdx",
    metadata: reactPropsComponentBoundariesMetadata,
    Component: ReactPropsComponentBoundaries,
  },
  {
    slug: "derived-state",
    source: "content/react/derived-state.mdx",
    metadata: reactDerivedStateMetadata,
    Component: ReactDerivedState,
  },
  {
    slug: "effect-dependencies",
    source: "content/react/effect-dependencies.mdx",
    metadata: reactEffectDependenciesMetadata,
    Component: ReactEffectDependencies,
  },
];

export const lessonSources: LessonRecord[] = rawLessons.map((lesson) => ({
  ...validateLessonMetadata(lesson.metadata, lesson.source),
  slug: lesson.slug,
  Component: lesson.Component,
}));
