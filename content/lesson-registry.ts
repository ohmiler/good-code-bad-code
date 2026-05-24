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
import JsStrictEqualityNullishChecks, {
  metadata as jsStrictEqualityNullishChecksMetadata,
} from "./javascript/strict-equality-nullish-checks.mdx";
import JsGuardClauses, {
  metadata as jsGuardClausesMetadata,
} from "./javascript/guard-clauses.mdx";
import JsDataBoundaryValidation, {
  metadata as jsDataBoundaryValidationMetadata,
} from "./javascript/data-boundary-validation.mdx";
import JsNamingSideEffects, {
  metadata as jsNamingSideEffectsMetadata,
} from "./javascript/naming-side-effects.mdx";
import JsArrayTransformations, {
  metadata as jsArrayTransformationsMetadata,
} from "./javascript/array-transformations.mdx";
import JsAsyncErrorHandling, {
  metadata as jsAsyncErrorHandlingMetadata,
} from "./javascript/async-error-handling.mdx";
import JsPromiseConcurrency, {
  metadata as jsPromiseConcurrencyMetadata,
} from "./javascript/promise-concurrency.mdx";
import JsEventListenerCleanup, {
  metadata as jsEventListenerCleanupMetadata,
} from "./javascript/event-listener-cleanup.mdx";
import JsModuleBoundariesGlobals, {
  metadata as jsModuleBoundariesGlobalsMetadata,
} from "./javascript/module-boundaries-globals.mdx";
import JsDatesTimeZones, {
  metadata as jsDatesTimeZonesMetadata,
} from "./javascript/dates-time-zones.mdx";
import TsTypeInferenceBoundaries, {
  metadata as tsTypeInferenceBoundariesMetadata,
} from "./typescript/type-inference-boundaries.mdx";
import TsNarrowingUnknown, {
  metadata as tsNarrowingUnknownMetadata,
} from "./typescript/narrowing-unknown.mdx";
import TsUnsafeAssertions, {
  metadata as tsUnsafeAssertionsMetadata,
} from "./typescript/unsafe-assertions.mdx";
import TsDiscriminatedUnions, {
  metadata as tsDiscriminatedUnionsMetadata,
} from "./typescript/discriminated-unions.mdx";
import TsExhaustiveNeverChecks, {
  metadata as tsExhaustiveNeverChecksMetadata,
} from "./typescript/exhaustive-never-checks.mdx";
import TsPreciseFunctionTypes, {
  metadata as tsPreciseFunctionTypesMetadata,
} from "./typescript/precise-function-types.mdx";
import TsOptionalVsNullable, {
  metadata as tsOptionalVsNullableMetadata,
} from "./typescript/optional-vs-nullable.mdx";
import TsGenericConstraints, {
  metadata as tsGenericConstraintsMetadata,
} from "./typescript/generic-constraints.mdx";
import TsUtilityTypesApiBoundaries, {
  metadata as tsUtilityTypesApiBoundariesMetadata,
} from "./typescript/utility-types-api-boundaries.mdx";
import TsTypeOnlyImportsModuleBoundaries, {
  metadata as tsTypeOnlyImportsModuleBoundariesMetadata,
} from "./typescript/type-only-imports-module-boundaries.mdx";
import ReactPropsComponentBoundaries, {
  metadata as reactPropsComponentBoundariesMetadata,
} from "./react/props-component-boundaries.mdx";
import ReactStableKeysLists, {
  metadata as reactStableKeysListsMetadata,
} from "./react/stable-keys-lists.mdx";
import ReactDerivedState, {
  metadata as reactDerivedStateMetadata,
} from "./react/derived-state.mdx";
import ReactUpdatingStateFromPreviousState, {
  metadata as reactUpdatingStateFromPreviousStateMetadata,
} from "./react/updating-state-from-previous-state.mdx";
import ReactControlledFormInputs, {
  metadata as reactControlledFormInputsMetadata,
} from "./react/controlled-form-inputs.mdx";
import ReactEffectDependencies, {
  metadata as reactEffectDependenciesMetadata,
} from "./react/effect-dependencies.mdx";
import ReactAsyncEffectCleanup, {
  metadata as reactAsyncEffectCleanupMetadata,
} from "./react/async-effect-cleanup.mdx";
import ReactContextBoundaries, {
  metadata as reactContextBoundariesMetadata,
} from "./react/context-boundaries.mdx";
import ReactMemoizationWhenItHelps, {
  metadata as reactMemoizationWhenItHelpsMetadata,
} from "./react/memoization-when-it-helps.mdx";
import ReactCompositionOverPropFlags, {
  metadata as reactCompositionOverPropFlagsMetadata,
} from "./react/composition-over-prop-flags.mdx";
import NextjsAppRouterFileConventions, {
  metadata as nextjsAppRouterFileConventionsMetadata,
} from "./nextjs/app-router-file-conventions.mdx";
import NextjsLayoutPageBoundaries, {
  metadata as nextjsLayoutPageBoundariesMetadata,
} from "./nextjs/layout-page-boundaries.mdx";
import NextjsServerClientComponents, {
  metadata as nextjsServerClientComponentsMetadata,
} from "./nextjs/server-client-components.mdx";
import NextjsSmallClientIslands, {
  metadata as nextjsSmallClientIslandsMetadata,
} from "./nextjs/small-client-islands.mdx";
import NextjsServerSideDataFetching, {
  metadata as nextjsServerSideDataFetchingMetadata,
} from "./nextjs/server-side-data-fetching.mdx";
import NextjsParallelDataFetching, {
  metadata as nextjsParallelDataFetchingMetadata,
} from "./nextjs/parallel-data-fetching.mdx";
import NextjsLoadingErrorBoundaries, {
  metadata as nextjsLoadingErrorBoundariesMetadata,
} from "./nextjs/loading-error-boundaries.mdx";
import NextjsCachingRevalidationIntent, {
  metadata as nextjsCachingRevalidationIntentMetadata,
} from "./nextjs/caching-revalidation-intent.mdx";
import NextjsMetadataPerRoute, {
  metadata as nextjsMetadataPerRouteMetadata,
} from "./nextjs/metadata-per-route.mdx";
import NextjsRouteHandlersApiBoundaries, {
  metadata as nextjsRouteHandlersApiBoundariesMetadata,
} from "./nextjs/route-handlers-api-boundaries.mdx";
import NodejsRuntimeBoundariesEntryPoints, {
  metadata as nodejsRuntimeBoundariesEntryPointsMetadata,
} from "./nodejs/runtime-boundaries-entry-points.mdx";
import NodejsAsyncFilesystemWithoutBlocking, {
  metadata as nodejsAsyncFilesystemWithoutBlockingMetadata,
} from "./nodejs/async-filesystem-without-blocking.mdx";
import NodejsAsyncErrorHandling, {
  metadata as nodejsAsyncErrorHandlingMetadata,
} from "./nodejs/async-failure-boundaries.mdx";
import NodejsEnvironmentConfiguration, {
  metadata as nodejsEnvironmentConfigurationMetadata,
} from "./nodejs/environment-configuration.mdx";
import NodejsModuleSideEffectsStartup, {
  metadata as nodejsModuleSideEffectsStartupMetadata,
} from "./nodejs/module-side-effects-startup.mdx";
import NodejsStreamsLargePayloads, {
  metadata as nodejsStreamsLargePayloadsMetadata,
} from "./nodejs/streams-large-payloads.mdx";
import NodejsHttpRequestLifecycle, {
  metadata as nodejsHttpRequestLifecycleMetadata,
} from "./nodejs/http-request-lifecycle.mdx";
import NodejsGracefulShutdownSignals, {
  metadata as nodejsGracefulShutdownSignalsMetadata,
} from "./nodejs/graceful-shutdown-signals.mdx";
import NodejsStructuredLogging, {
  metadata as nodejsStructuredLoggingMetadata,
} from "./nodejs/structured-logging.mdx";
import NodejsInputValidationPathSafety, {
  metadata as nodejsInputValidationPathSafetyMetadata,
} from "./nodejs/input-validation-path-safety.mdx";
import ExpressAppFactoryServerStartup, {
  metadata as expressAppFactoryServerStartupMetadata,
} from "./express/app-factory-server-startup.mdx";
import ExpressRouterBoundaries, {
  metadata as expressRouterBoundariesMetadata,
} from "./express/router-boundaries.mdx";
import ExpressMiddlewareOrder, {
  metadata as expressMiddlewareOrderMetadata,
} from "./express/middleware-order.mdx";
import ExpressRequestValidation, {
  metadata as expressRequestValidationMetadata,
} from "./express/request-validation.mdx";
import ExpressAsyncRouteErrorForwarding, {
  metadata as expressAsyncRouteErrorForwardingMetadata,
} from "./express/async-route-error-forwarding.mdx";
import ExpressCentralErrorHandler, {
  metadata as expressCentralErrorHandlerMetadata,
} from "./express/central-error-handler.mdx";
import ExpressResponseShapeConsistency, {
  metadata as expressResponseShapeConsistencyMetadata,
} from "./express/response-shape-consistency.mdx";
import ExpressAuthMiddlewareBoundaries, {
  metadata as expressAuthMiddlewareBoundariesMetadata,
} from "./express/auth-middleware-boundaries.mdx";
import ExpressRateLimitingTrustProxy, {
  metadata as expressRateLimitingTrustProxyMetadata,
} from "./express/rate-limiting-trust-proxy.mdx";
import ExpressBusinessLogicOutOfRoutes, {
  metadata as expressBusinessLogicOutOfRoutesMetadata,
} from "./express/business-logic-out-of-routes.mdx";
import SqlSchemaKeysConstraints, {
  metadata as sqlSchemaKeysConstraintsMetadata,
} from "./sql/schema-keys-constraints.mdx";
import SqlExplicitSelectColumns, {
  metadata as sqlExplicitSelectColumnsMetadata,
} from "./sql/explicit-select-columns.mdx";
import SqlFilteringNullHandling, {
  metadata as sqlFilteringNullHandlingMetadata,
} from "./sql/filtering-null-handling.mdx";
import SqlJoinCardinality, {
  metadata as sqlJoinCardinalityMetadata,
} from "./sql/join-cardinality.mdx";
import SqlAggregationGrouping, {
  metadata as sqlAggregationGroupingMetadata,
} from "./sql/aggregation-grouping.mdx";
import SqlIndexFriendlyPredicates, {
  metadata as sqlIndexFriendlyPredicatesMetadata,
} from "./sql/index-friendly-predicates.mdx";
import SqlTransactionsAtomicWorkflows, {
  metadata as sqlTransactionsAtomicWorkflowsMetadata,
} from "./sql/transactions-atomic-workflows.mdx";
import SqlMigrationBackfills, {
  metadata as sqlMigrationBackfillsMetadata,
} from "./sql/migration-backfills.mdx";
import SqlParameterizedQueries, {
  metadata as sqlParameterizedQueriesMetadata,
} from "./sql/parameterized-queries.mdx";
import SqlStablePagination, {
  metadata as sqlStablePaginationMetadata,
} from "./sql/stable-pagination.mdx";

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
    slug: "strict-equality-nullish-checks",
    source: "content/javascript/strict-equality-nullish-checks.mdx",
    metadata: jsStrictEqualityNullishChecksMetadata,
    Component: JsStrictEqualityNullishChecks,
  },
  {
    slug: "guard-clauses",
    source: "content/javascript/guard-clauses.mdx",
    metadata: jsGuardClausesMetadata,
    Component: JsGuardClauses,
  },
  {
    slug: "data-boundary-validation",
    source: "content/javascript/data-boundary-validation.mdx",
    metadata: jsDataBoundaryValidationMetadata,
    Component: JsDataBoundaryValidation,
  },
  {
    slug: "naming-side-effects",
    source: "content/javascript/naming-side-effects.mdx",
    metadata: jsNamingSideEffectsMetadata,
    Component: JsNamingSideEffects,
  },
  {
    slug: "array-transformations",
    source: "content/javascript/array-transformations.mdx",
    metadata: jsArrayTransformationsMetadata,
    Component: JsArrayTransformations,
  },
  {
    slug: "async-error-handling",
    source: "content/javascript/async-error-handling.mdx",
    metadata: jsAsyncErrorHandlingMetadata,
    Component: JsAsyncErrorHandling,
  },
  {
    slug: "promise-concurrency",
    source: "content/javascript/promise-concurrency.mdx",
    metadata: jsPromiseConcurrencyMetadata,
    Component: JsPromiseConcurrency,
  },
  {
    slug: "event-listener-cleanup",
    source: "content/javascript/event-listener-cleanup.mdx",
    metadata: jsEventListenerCleanupMetadata,
    Component: JsEventListenerCleanup,
  },
  {
    slug: "module-boundaries-globals",
    source: "content/javascript/module-boundaries-globals.mdx",
    metadata: jsModuleBoundariesGlobalsMetadata,
    Component: JsModuleBoundariesGlobals,
  },
  {
    slug: "dates-time-zones",
    source: "content/javascript/dates-time-zones.mdx",
    metadata: jsDatesTimeZonesMetadata,
    Component: JsDatesTimeZones,
  },
  {
    slug: "type-inference-boundaries",
    source: "content/typescript/type-inference-boundaries.mdx",
    metadata: tsTypeInferenceBoundariesMetadata,
    Component: TsTypeInferenceBoundaries,
  },
  {
    slug: "narrowing-unknown",
    source: "content/typescript/narrowing-unknown.mdx",
    metadata: tsNarrowingUnknownMetadata,
    Component: TsNarrowingUnknown,
  },
  {
    slug: "unsafe-assertions",
    source: "content/typescript/unsafe-assertions.mdx",
    metadata: tsUnsafeAssertionsMetadata,
    Component: TsUnsafeAssertions,
  },
  {
    slug: "discriminated-unions",
    source: "content/typescript/discriminated-unions.mdx",
    metadata: tsDiscriminatedUnionsMetadata,
    Component: TsDiscriminatedUnions,
  },
  {
    slug: "exhaustive-never-checks",
    source: "content/typescript/exhaustive-never-checks.mdx",
    metadata: tsExhaustiveNeverChecksMetadata,
    Component: TsExhaustiveNeverChecks,
  },
  {
    slug: "precise-function-types",
    source: "content/typescript/precise-function-types.mdx",
    metadata: tsPreciseFunctionTypesMetadata,
    Component: TsPreciseFunctionTypes,
  },
  {
    slug: "optional-vs-nullable",
    source: "content/typescript/optional-vs-nullable.mdx",
    metadata: tsOptionalVsNullableMetadata,
    Component: TsOptionalVsNullable,
  },
  {
    slug: "generic-constraints",
    source: "content/typescript/generic-constraints.mdx",
    metadata: tsGenericConstraintsMetadata,
    Component: TsGenericConstraints,
  },
  {
    slug: "utility-types-api-boundaries",
    source: "content/typescript/utility-types-api-boundaries.mdx",
    metadata: tsUtilityTypesApiBoundariesMetadata,
    Component: TsUtilityTypesApiBoundaries,
  },
  {
    slug: "type-only-imports-module-boundaries",
    source: "content/typescript/type-only-imports-module-boundaries.mdx",
    metadata: tsTypeOnlyImportsModuleBoundariesMetadata,
    Component: TsTypeOnlyImportsModuleBoundaries,
  },
  {
    slug: "props-component-boundaries",
    source: "content/react/props-component-boundaries.mdx",
    metadata: reactPropsComponentBoundariesMetadata,
    Component: ReactPropsComponentBoundaries,
  },
  {
    slug: "stable-keys-lists",
    source: "content/react/stable-keys-lists.mdx",
    metadata: reactStableKeysListsMetadata,
    Component: ReactStableKeysLists,
  },
  {
    slug: "derived-state",
    source: "content/react/derived-state.mdx",
    metadata: reactDerivedStateMetadata,
    Component: ReactDerivedState,
  },
  {
    slug: "updating-state-from-previous-state",
    source: "content/react/updating-state-from-previous-state.mdx",
    metadata: reactUpdatingStateFromPreviousStateMetadata,
    Component: ReactUpdatingStateFromPreviousState,
  },
  {
    slug: "controlled-form-inputs",
    source: "content/react/controlled-form-inputs.mdx",
    metadata: reactControlledFormInputsMetadata,
    Component: ReactControlledFormInputs,
  },
  {
    slug: "effect-dependencies",
    source: "content/react/effect-dependencies.mdx",
    metadata: reactEffectDependenciesMetadata,
    Component: ReactEffectDependencies,
  },
  {
    slug: "async-effect-cleanup",
    source: "content/react/async-effect-cleanup.mdx",
    metadata: reactAsyncEffectCleanupMetadata,
    Component: ReactAsyncEffectCleanup,
  },
  {
    slug: "context-boundaries",
    source: "content/react/context-boundaries.mdx",
    metadata: reactContextBoundariesMetadata,
    Component: ReactContextBoundaries,
  },
  {
    slug: "memoization-when-it-helps",
    source: "content/react/memoization-when-it-helps.mdx",
    metadata: reactMemoizationWhenItHelpsMetadata,
    Component: ReactMemoizationWhenItHelps,
  },
  {
    slug: "composition-over-prop-flags",
    source: "content/react/composition-over-prop-flags.mdx",
    metadata: reactCompositionOverPropFlagsMetadata,
    Component: ReactCompositionOverPropFlags,
  },
  {
    slug: "app-router-file-conventions",
    source: "content/nextjs/app-router-file-conventions.mdx",
    metadata: nextjsAppRouterFileConventionsMetadata,
    Component: NextjsAppRouterFileConventions,
  },
  {
    slug: "layout-page-boundaries",
    source: "content/nextjs/layout-page-boundaries.mdx",
    metadata: nextjsLayoutPageBoundariesMetadata,
    Component: NextjsLayoutPageBoundaries,
  },
  {
    slug: "server-client-components",
    source: "content/nextjs/server-client-components.mdx",
    metadata: nextjsServerClientComponentsMetadata,
    Component: NextjsServerClientComponents,
  },
  {
    slug: "small-client-islands",
    source: "content/nextjs/small-client-islands.mdx",
    metadata: nextjsSmallClientIslandsMetadata,
    Component: NextjsSmallClientIslands,
  },
  {
    slug: "server-side-data-fetching",
    source: "content/nextjs/server-side-data-fetching.mdx",
    metadata: nextjsServerSideDataFetchingMetadata,
    Component: NextjsServerSideDataFetching,
  },
  {
    slug: "parallel-data-fetching",
    source: "content/nextjs/parallel-data-fetching.mdx",
    metadata: nextjsParallelDataFetchingMetadata,
    Component: NextjsParallelDataFetching,
  },
  {
    slug: "loading-error-boundaries",
    source: "content/nextjs/loading-error-boundaries.mdx",
    metadata: nextjsLoadingErrorBoundariesMetadata,
    Component: NextjsLoadingErrorBoundaries,
  },
  {
    slug: "caching-revalidation-intent",
    source: "content/nextjs/caching-revalidation-intent.mdx",
    metadata: nextjsCachingRevalidationIntentMetadata,
    Component: NextjsCachingRevalidationIntent,
  },
  {
    slug: "metadata-per-route",
    source: "content/nextjs/metadata-per-route.mdx",
    metadata: nextjsMetadataPerRouteMetadata,
    Component: NextjsMetadataPerRoute,
  },
  {
    slug: "route-handlers-api-boundaries",
    source: "content/nextjs/route-handlers-api-boundaries.mdx",
    metadata: nextjsRouteHandlersApiBoundariesMetadata,
    Component: NextjsRouteHandlersApiBoundaries,
  },
  {
    slug: "runtime-boundaries-entry-points",
    source: "content/nodejs/runtime-boundaries-entry-points.mdx",
    metadata: nodejsRuntimeBoundariesEntryPointsMetadata,
    Component: NodejsRuntimeBoundariesEntryPoints,
  },
  {
    slug: "async-filesystem-without-blocking",
    source: "content/nodejs/async-filesystem-without-blocking.mdx",
    metadata: nodejsAsyncFilesystemWithoutBlockingMetadata,
    Component: NodejsAsyncFilesystemWithoutBlocking,
  },
  {
    slug: "async-failure-boundaries",
    source: "content/nodejs/async-failure-boundaries.mdx",
    metadata: nodejsAsyncErrorHandlingMetadata,
    Component: NodejsAsyncErrorHandling,
  },
  {
    slug: "environment-configuration",
    source: "content/nodejs/environment-configuration.mdx",
    metadata: nodejsEnvironmentConfigurationMetadata,
    Component: NodejsEnvironmentConfiguration,
  },
  {
    slug: "module-side-effects-startup",
    source: "content/nodejs/module-side-effects-startup.mdx",
    metadata: nodejsModuleSideEffectsStartupMetadata,
    Component: NodejsModuleSideEffectsStartup,
  },
  {
    slug: "streams-large-payloads",
    source: "content/nodejs/streams-large-payloads.mdx",
    metadata: nodejsStreamsLargePayloadsMetadata,
    Component: NodejsStreamsLargePayloads,
  },
  {
    slug: "http-request-lifecycle",
    source: "content/nodejs/http-request-lifecycle.mdx",
    metadata: nodejsHttpRequestLifecycleMetadata,
    Component: NodejsHttpRequestLifecycle,
  },
  {
    slug: "graceful-shutdown-signals",
    source: "content/nodejs/graceful-shutdown-signals.mdx",
    metadata: nodejsGracefulShutdownSignalsMetadata,
    Component: NodejsGracefulShutdownSignals,
  },
  {
    slug: "structured-logging",
    source: "content/nodejs/structured-logging.mdx",
    metadata: nodejsStructuredLoggingMetadata,
    Component: NodejsStructuredLogging,
  },
  {
    slug: "input-validation-path-safety",
    source: "content/nodejs/input-validation-path-safety.mdx",
    metadata: nodejsInputValidationPathSafetyMetadata,
    Component: NodejsInputValidationPathSafety,
  },
  {
    slug: "app-factory-server-startup",
    source: "content/express/app-factory-server-startup.mdx",
    metadata: expressAppFactoryServerStartupMetadata,
    Component: ExpressAppFactoryServerStartup,
  },
  {
    slug: "router-boundaries",
    source: "content/express/router-boundaries.mdx",
    metadata: expressRouterBoundariesMetadata,
    Component: ExpressRouterBoundaries,
  },
  {
    slug: "middleware-order",
    source: "content/express/middleware-order.mdx",
    metadata: expressMiddlewareOrderMetadata,
    Component: ExpressMiddlewareOrder,
  },
  {
    slug: "request-validation",
    source: "content/express/request-validation.mdx",
    metadata: expressRequestValidationMetadata,
    Component: ExpressRequestValidation,
  },
  {
    slug: "async-route-error-forwarding",
    source: "content/express/async-route-error-forwarding.mdx",
    metadata: expressAsyncRouteErrorForwardingMetadata,
    Component: ExpressAsyncRouteErrorForwarding,
  },
  {
    slug: "central-error-handler",
    source: "content/express/central-error-handler.mdx",
    metadata: expressCentralErrorHandlerMetadata,
    Component: ExpressCentralErrorHandler,
  },
  {
    slug: "response-shape-consistency",
    source: "content/express/response-shape-consistency.mdx",
    metadata: expressResponseShapeConsistencyMetadata,
    Component: ExpressResponseShapeConsistency,
  },
  {
    slug: "auth-middleware-boundaries",
    source: "content/express/auth-middleware-boundaries.mdx",
    metadata: expressAuthMiddlewareBoundariesMetadata,
    Component: ExpressAuthMiddlewareBoundaries,
  },
  {
    slug: "rate-limiting-trust-proxy",
    source: "content/express/rate-limiting-trust-proxy.mdx",
    metadata: expressRateLimitingTrustProxyMetadata,
    Component: ExpressRateLimitingTrustProxy,
  },
  {
    slug: "business-logic-out-of-routes",
    source: "content/express/business-logic-out-of-routes.mdx",
    metadata: expressBusinessLogicOutOfRoutesMetadata,
    Component: ExpressBusinessLogicOutOfRoutes,
  },
  {
    slug: "schema-keys-constraints",
    source: "content/sql/schema-keys-constraints.mdx",
    metadata: sqlSchemaKeysConstraintsMetadata,
    Component: SqlSchemaKeysConstraints,
  },
  {
    slug: "explicit-select-columns",
    source: "content/sql/explicit-select-columns.mdx",
    metadata: sqlExplicitSelectColumnsMetadata,
    Component: SqlExplicitSelectColumns,
  },
  {
    slug: "filtering-null-handling",
    source: "content/sql/filtering-null-handling.mdx",
    metadata: sqlFilteringNullHandlingMetadata,
    Component: SqlFilteringNullHandling,
  },
  {
    slug: "join-cardinality",
    source: "content/sql/join-cardinality.mdx",
    metadata: sqlJoinCardinalityMetadata,
    Component: SqlJoinCardinality,
  },
  {
    slug: "aggregation-grouping",
    source: "content/sql/aggregation-grouping.mdx",
    metadata: sqlAggregationGroupingMetadata,
    Component: SqlAggregationGrouping,
  },
  {
    slug: "index-friendly-predicates",
    source: "content/sql/index-friendly-predicates.mdx",
    metadata: sqlIndexFriendlyPredicatesMetadata,
    Component: SqlIndexFriendlyPredicates,
  },
  {
    slug: "transactions-atomic-workflows",
    source: "content/sql/transactions-atomic-workflows.mdx",
    metadata: sqlTransactionsAtomicWorkflowsMetadata,
    Component: SqlTransactionsAtomicWorkflows,
  },
  {
    slug: "migration-backfills",
    source: "content/sql/migration-backfills.mdx",
    metadata: sqlMigrationBackfillsMetadata,
    Component: SqlMigrationBackfills,
  },
  {
    slug: "parameterized-queries",
    source: "content/sql/parameterized-queries.mdx",
    metadata: sqlParameterizedQueriesMetadata,
    Component: SqlParameterizedQueries,
  },
  {
    slug: "stable-pagination",
    source: "content/sql/stable-pagination.mdx",
    metadata: sqlStablePaginationMetadata,
    Component: SqlStablePagination,
  },
];

export const lessonSources: LessonRecord[] = rawLessons.map((lesson) => ({
  ...validateLessonMetadata(lesson.metadata, lesson.source),
  slug: lesson.slug,
  Component: lesson.Component,
}));
