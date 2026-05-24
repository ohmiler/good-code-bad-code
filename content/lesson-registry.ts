import type { ComponentType } from "react";
import {
  validateLessonMetadata,
  type LessonMetadata,
  type LessonRecord,
} from "@/lib/content/schema";

import HtmlSemanticStructure, {
  metadata as htmlSemanticStructureMetadata,
} from "./html/semantic-document-structure.mdx";
import HtmlDocumentLanguageMetadata, {
  metadata as htmlDocumentLanguageMetadata,
} from "./html/document-language-metadata.mdx";
import HtmlHeadingHierarchy, {
  metadata as htmlHeadingHierarchyMetadata,
} from "./html/heading-hierarchy.mdx";
import HtmlLinksAndNavigation, {
  metadata as htmlLinksAndNavigationMetadata,
} from "./html/links-and-navigation.mdx";
import HtmlImagesAltText, {
  metadata as htmlImagesAltTextMetadata,
} from "./html/images-alt-text.mdx";
import HtmlAccessibleFormLabels, {
  metadata as htmlAccessibleFormLabelsMetadata,
} from "./html/accessible-form-labels.mdx";
import HtmlFormHelpErrors, {
  metadata as htmlFormHelpErrorsMetadata,
} from "./html/form-help-errors.mdx";
import HtmlInteractiveElements, {
  metadata as htmlInteractiveElementsMetadata,
} from "./html/interactive-elements.mdx";
import HtmlTablesTabularData, {
  metadata as htmlTablesTabularDataMetadata,
} from "./html/tables-tabular-data.mdx";
import HtmlAriaRestraint, {
  metadata as htmlAriaRestraintMetadata,
} from "./html/aria-restraint.mdx";
import CssBoxModelSizing, {
  metadata as cssBoxModelSizingMetadata,
} from "./css/box-model-sizing.mdx";
import CssCascadeSpecificity, {
  metadata as cssCascadeSpecificityMetadata,
} from "./css/cascade-specificity.mdx";
import CssFlexLayoutBoundaries, {
  metadata as cssFlexLayoutBoundariesMetadata,
} from "./css/flex-layout-boundaries.mdx";
import CssGridLayoutTracks, {
  metadata as cssGridLayoutTracksMetadata,
} from "./css/grid-layout-tracks.mdx";
import CssResponsiveUnits, {
  metadata as cssResponsiveUnitsMetadata,
} from "./css/responsive-units.mdx";
import CssColorContrastStates, {
  metadata as cssColorContrastStatesMetadata,
} from "./css/color-contrast-states.mdx";
import CssFocusVisibleStates, {
  metadata as cssFocusVisibleStatesMetadata,
} from "./css/focus-visible-states.mdx";
import CssLogicalProperties, {
  metadata as cssLogicalPropertiesMetadata,
} from "./css/logical-properties.mdx";
import CssCustomPropertiesTokens, {
  metadata as cssCustomPropertiesTokensMetadata,
} from "./css/custom-properties-tokens.mdx";
import CssReducedMotion, {
  metadata as cssReducedMotionMetadata,
} from "./css/reduced-motion.mdx";
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
    slug: "document-language-metadata",
    source: "content/html/document-language-metadata.mdx",
    metadata: htmlDocumentLanguageMetadata,
    Component: HtmlDocumentLanguageMetadata,
  },
  {
    slug: "semantic-document-structure",
    source: "content/html/semantic-document-structure.mdx",
    metadata: htmlSemanticStructureMetadata,
    Component: HtmlSemanticStructure,
  },
  {
    slug: "heading-hierarchy",
    source: "content/html/heading-hierarchy.mdx",
    metadata: htmlHeadingHierarchyMetadata,
    Component: HtmlHeadingHierarchy,
  },
  {
    slug: "links-and-navigation",
    source: "content/html/links-and-navigation.mdx",
    metadata: htmlLinksAndNavigationMetadata,
    Component: HtmlLinksAndNavigation,
  },
  {
    slug: "images-alt-text",
    source: "content/html/images-alt-text.mdx",
    metadata: htmlImagesAltTextMetadata,
    Component: HtmlImagesAltText,
  },
  {
    slug: "accessible-form-labels",
    source: "content/html/accessible-form-labels.mdx",
    metadata: htmlAccessibleFormLabelsMetadata,
    Component: HtmlAccessibleFormLabels,
  },
  {
    slug: "form-help-errors",
    source: "content/html/form-help-errors.mdx",
    metadata: htmlFormHelpErrorsMetadata,
    Component: HtmlFormHelpErrors,
  },
  {
    slug: "interactive-elements",
    source: "content/html/interactive-elements.mdx",
    metadata: htmlInteractiveElementsMetadata,
    Component: HtmlInteractiveElements,
  },
  {
    slug: "tables-tabular-data",
    source: "content/html/tables-tabular-data.mdx",
    metadata: htmlTablesTabularDataMetadata,
    Component: HtmlTablesTabularData,
  },
  {
    slug: "aria-restraint",
    source: "content/html/aria-restraint.mdx",
    metadata: htmlAriaRestraintMetadata,
    Component: HtmlAriaRestraint,
  },
  {
    slug: "box-model-sizing",
    source: "content/css/box-model-sizing.mdx",
    metadata: cssBoxModelSizingMetadata,
    Component: CssBoxModelSizing,
  },
  {
    slug: "cascade-specificity",
    source: "content/css/cascade-specificity.mdx",
    metadata: cssCascadeSpecificityMetadata,
    Component: CssCascadeSpecificity,
  },
  {
    slug: "flex-layout-boundaries",
    source: "content/css/flex-layout-boundaries.mdx",
    metadata: cssFlexLayoutBoundariesMetadata,
    Component: CssFlexLayoutBoundaries,
  },
  {
    slug: "grid-layout-tracks",
    source: "content/css/grid-layout-tracks.mdx",
    metadata: cssGridLayoutTracksMetadata,
    Component: CssGridLayoutTracks,
  },
  {
    slug: "responsive-units",
    source: "content/css/responsive-units.mdx",
    metadata: cssResponsiveUnitsMetadata,
    Component: CssResponsiveUnits,
  },
  {
    slug: "color-contrast-states",
    source: "content/css/color-contrast-states.mdx",
    metadata: cssColorContrastStatesMetadata,
    Component: CssColorContrastStates,
  },
  {
    slug: "focus-visible-states",
    source: "content/css/focus-visible-states.mdx",
    metadata: cssFocusVisibleStatesMetadata,
    Component: CssFocusVisibleStates,
  },
  {
    slug: "logical-properties",
    source: "content/css/logical-properties.mdx",
    metadata: cssLogicalPropertiesMetadata,
    Component: CssLogicalProperties,
  },
  {
    slug: "custom-properties-tokens",
    source: "content/css/custom-properties-tokens.mdx",
    metadata: cssCustomPropertiesTokensMetadata,
    Component: CssCustomPropertiesTokens,
  },
  {
    slug: "reduced-motion",
    source: "content/css/reduced-motion.mdx",
    metadata: cssReducedMotionMetadata,
    Component: CssReducedMotion,
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
