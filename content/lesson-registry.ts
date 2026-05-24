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
import PythonNamingAndReadability, {
  metadata as pythonNamingAndReadabilityMetadata,
} from "./python/naming-and-readability.mdx";
import PythonTruthyFalsyNoneChecks, {
  metadata as pythonTruthyFalsyNoneChecksMetadata,
} from "./python/truthy-falsy-none-checks.mdx";
import PythonMutableDefaultArguments, {
  metadata as pythonMutableDefaultArgumentsMetadata,
} from "./python/mutable-default-arguments.mdx";
import PythonListDictComprehensions, {
  metadata as pythonListDictComprehensionsMetadata,
} from "./python/list-dict-comprehensions.mdx";
import PythonExceptionBoundaries, {
  metadata as pythonExceptionBoundariesMetadata,
} from "./python/exception-boundaries.mdx";
import PythonContextManagersFiles, {
  metadata as pythonContextManagersFilesMetadata,
} from "./python/context-managers-files.mdx";
import PythonDataclassesDataShapes, {
  metadata as pythonDataclassesDataShapesMetadata,
} from "./python/dataclasses-data-shapes.mdx";
import PythonTypeHintsBoundaries, {
  metadata as pythonTypeHintsBoundariesMetadata,
} from "./python/type-hints-boundaries.mdx";
import PythonDependencyInjectionTestability, {
  metadata as pythonDependencyInjectionTestabilityMetadata,
} from "./python/dependency-injection-testability.mdx";
import PythonAsyncAwaitBoundaries, {
  metadata as pythonAsyncAwaitBoundariesMetadata,
} from "./python/async-await-boundaries.mdx";
import FastapiPathOperationOrder, {
  metadata as fastapiPathOperationOrderMetadata,
} from "./fastapi/path-operation-order.mdx";
import FastapiRequestModelsValidation, {
  metadata as fastapiRequestModelsValidationMetadata,
} from "./fastapi/request-models-validation.mdx";
import FastapiResponseModelsContracts, {
  metadata as fastapiResponseModelsContractsMetadata,
} from "./fastapi/response-models-contracts.mdx";
import FastapiDependenciesBoundaries, {
  metadata as fastapiDependenciesBoundariesMetadata,
} from "./fastapi/dependencies-boundaries.mdx";
import FastapiAuthSecurityDependencies, {
  metadata as fastapiAuthSecurityDependenciesMetadata,
} from "./fastapi/auth-security-dependencies.mdx";
import FastapiAsyncHandlerBoundaries, {
  metadata as fastapiAsyncHandlerBoundariesMetadata,
} from "./fastapi/async-handler-boundaries.mdx";
import FastapiHttpExceptionHandling, {
  metadata as fastapiHttpExceptionHandlingMetadata,
} from "./fastapi/http-exception-handling.mdx";
import FastapiDatabaseSessionLifecycle, {
  metadata as fastapiDatabaseSessionLifecycleMetadata,
} from "./fastapi/database-session-lifecycle.mdx";
import FastapiTestingDependencyOverrides, {
  metadata as fastapiTestingDependencyOverridesMetadata,
} from "./fastapi/testing-dependency-overrides.mdx";
import FastapiAppStructureRouters, {
  metadata as fastapiAppStructureRoutersMetadata,
} from "./fastapi/app-structure-routers.mdx";
import DjangoUrlPatternOrder, {
  metadata as djangoUrlPatternOrderMetadata,
} from "./django/url-pattern-order.mdx";
import DjangoModelsFieldsConstraints, {
  metadata as djangoModelsFieldsConstraintsMetadata,
} from "./django/models-fields-constraints.mdx";
import DjangoQuerysetsLazyEvaluation, {
  metadata as djangoQuerysetsLazyEvaluationMetadata,
} from "./django/querysets-lazy-evaluation.mdx";
import DjangoModelManagerBoundaries, {
  metadata as djangoModelManagerBoundariesMetadata,
} from "./django/model-manager-boundaries.mdx";
import DjangoFormsAndValidation, {
  metadata as djangoFormsAndValidationMetadata,
} from "./django/forms-and-validation.mdx";
import DjangoClassBasedViewResponsibilities, {
  metadata as djangoClassBasedViewResponsibilitiesMetadata,
} from "./django/class-based-view-responsibilities.mdx";
import DjangoCsrfAndUnsafeMethods, {
  metadata as djangoCsrfAndUnsafeMethodsMetadata,
} from "./django/csrf-and-unsafe-methods.mdx";
import DjangoSettingsEnvironments, {
  metadata as djangoSettingsEnvironmentsMetadata,
} from "./django/settings-environments.mdx";
import DjangoTransactionsAndSideEffects, {
  metadata as djangoTransactionsAndSideEffectsMetadata,
} from "./django/transactions-and-side-effects.mdx";
import DjangoTestsClientAndFixtures, {
  metadata as djangoTestsClientAndFixturesMetadata,
} from "./django/tests-client-and-fixtures.mdx";
import GoPackageAndFileOrganization, {
  metadata as goPackageAndFileOrganizationMetadata,
} from "./go/package-and-file-organization.mdx";
import GoNamingAndExportedApi, {
  metadata as goNamingAndExportedApiMetadata,
} from "./go/naming-and-exported-api.mdx";
import GoErrorHandlingWrapping, {
  metadata as goErrorHandlingWrappingMetadata,
} from "./go/error-handling-wrapping.mdx";
import GoContextCancellation, {
  metadata as goContextCancellationMetadata,
} from "./go/context-cancellation.mdx";
import GoInterfacesAtBoundaries, {
  metadata as goInterfacesAtBoundariesMetadata,
} from "./go/interfaces-at-boundaries.mdx";
import GoStructValidationZeroValues, {
  metadata as goStructValidationZeroValuesMetadata,
} from "./go/struct-validation-zero-values.mdx";
import GoGoroutinesAndChannelOwnership, {
  metadata as goGoroutinesAndChannelOwnershipMetadata,
} from "./go/goroutines-and-channel-ownership.mdx";
import GoDeferResourceCleanup, {
  metadata as goDeferResourceCleanupMetadata,
} from "./go/defer-resource-cleanup.mdx";
import GoTableDrivenTests, {
  metadata as goTableDrivenTestsMetadata,
} from "./go/table-driven-tests.mdx";
import GoJsonHttpHandlerBoundaries, {
  metadata as goJsonHttpHandlerBoundariesMetadata,
} from "./go/json-http-handler-boundaries.mdx";
import DockerBuildContextDockerignore, {
  metadata as dockerBuildContextDockerignoreMetadata,
} from "./docker/build-context-dockerignore.mdx";
import DockerBaseImagesAndTagPinning, {
  metadata as dockerBaseImagesAndTagPinningMetadata,
} from "./docker/base-images-and-tag-pinning.mdx";
import DockerLayerCacheDependencyOrder, {
  metadata as dockerLayerCacheDependencyOrderMetadata,
} from "./docker/layer-cache-dependency-order.mdx";
import DockerMultiStageBuilds, {
  metadata as dockerMultiStageBuildsMetadata,
} from "./docker/multi-stage-builds.mdx";
import DockerCopyAddAndWorkdir, {
  metadata as dockerCopyAddAndWorkdirMetadata,
} from "./docker/copy-add-and-workdir.mdx";
import DockerNonRootUserPermissions, {
  metadata as dockerNonRootUserPermissionsMetadata,
} from "./docker/non-root-user-permissions.mdx";
import DockerArgsEnvAndSecrets, {
  metadata as dockerArgsEnvAndSecretsMetadata,
} from "./docker/args-env-and-secrets.mdx";
import DockerEntrypointCmdAndSignals, {
  metadata as dockerEntrypointCmdAndSignalsMetadata,
} from "./docker/entrypoint-cmd-and-signals.mdx";
import DockerHealthchecksAndRuntimeConfig, {
  metadata as dockerHealthchecksAndRuntimeConfigMetadata,
} from "./docker/healthchecks-and-runtime-config.mdx";
import DockerComposeServicesVolumesNetworks, {
  metadata as dockerComposeServicesVolumesNetworksMetadata,
} from "./docker/compose-services-volumes-networks.mdx";
import TailwindcssUtilityCompositionReadability, {
  metadata as tailwindcssUtilityCompositionReadabilityMetadata,
} from "./tailwindcss/utility-composition-readability.mdx";
import TailwindcssResponsiveBreakpoints, {
  metadata as tailwindcssResponsiveBreakpointsMetadata,
} from "./tailwindcss/responsive-breakpoints.mdx";
import TailwindcssStateVariantsHoverFocusDisabled, {
  metadata as tailwindcssStateVariantsHoverFocusDisabledMetadata,
} from "./tailwindcss/state-variants-hover-focus-disabled.mdx";
import TailwindcssSpacingLayoutConsistency, {
  metadata as tailwindcssSpacingLayoutConsistencyMetadata,
} from "./tailwindcss/spacing-layout-consistency.mdx";
import TailwindcssThemeTokensAndCustomValues, {
  metadata as tailwindcssThemeTokensAndCustomValuesMetadata,
} from "./tailwindcss/theme-tokens-and-custom-values.mdx";
import TailwindcssDarkModeVariants, {
  metadata as tailwindcssDarkModeVariantsMetadata,
} from "./tailwindcss/dark-mode-variants.mdx";
import TailwindcssClassReuseComponentBoundaries, {
  metadata as tailwindcssClassReuseComponentBoundariesMetadata,
} from "./tailwindcss/class-reuse-component-boundaries.mdx";
import TailwindcssArbitraryValuesRestraint, {
  metadata as tailwindcssArbitraryValuesRestraintMetadata,
} from "./tailwindcss/arbitrary-values-restraint.mdx";
import TailwindcssAccessibilityContrastFocus, {
  metadata as tailwindcssAccessibilityContrastFocusMetadata,
} from "./tailwindcss/accessibility-contrast-focus.mdx";
import TailwindcssConditionalClassesAndConflicts, {
  metadata as tailwindcssConditionalClassesAndConflictsMetadata,
} from "./tailwindcss/conditional-classes-and-conflicts.mdx";

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
  {
    slug: "naming-and-readability",
    source: "content/python/naming-and-readability.mdx",
    metadata: pythonNamingAndReadabilityMetadata,
    Component: PythonNamingAndReadability,
  },
  {
    slug: "truthy-falsy-none-checks",
    source: "content/python/truthy-falsy-none-checks.mdx",
    metadata: pythonTruthyFalsyNoneChecksMetadata,
    Component: PythonTruthyFalsyNoneChecks,
  },
  {
    slug: "mutable-default-arguments",
    source: "content/python/mutable-default-arguments.mdx",
    metadata: pythonMutableDefaultArgumentsMetadata,
    Component: PythonMutableDefaultArguments,
  },
  {
    slug: "list-dict-comprehensions",
    source: "content/python/list-dict-comprehensions.mdx",
    metadata: pythonListDictComprehensionsMetadata,
    Component: PythonListDictComprehensions,
  },
  {
    slug: "exception-boundaries",
    source: "content/python/exception-boundaries.mdx",
    metadata: pythonExceptionBoundariesMetadata,
    Component: PythonExceptionBoundaries,
  },
  {
    slug: "context-managers-files",
    source: "content/python/context-managers-files.mdx",
    metadata: pythonContextManagersFilesMetadata,
    Component: PythonContextManagersFiles,
  },
  {
    slug: "dataclasses-data-shapes",
    source: "content/python/dataclasses-data-shapes.mdx",
    metadata: pythonDataclassesDataShapesMetadata,
    Component: PythonDataclassesDataShapes,
  },
  {
    slug: "type-hints-boundaries",
    source: "content/python/type-hints-boundaries.mdx",
    metadata: pythonTypeHintsBoundariesMetadata,
    Component: PythonTypeHintsBoundaries,
  },
  {
    slug: "dependency-injection-testability",
    source: "content/python/dependency-injection-testability.mdx",
    metadata: pythonDependencyInjectionTestabilityMetadata,
    Component: PythonDependencyInjectionTestability,
  },
  {
    slug: "async-await-boundaries",
    source: "content/python/async-await-boundaries.mdx",
    metadata: pythonAsyncAwaitBoundariesMetadata,
    Component: PythonAsyncAwaitBoundaries,
  },
  {
    slug: "path-operation-order",
    source: "content/fastapi/path-operation-order.mdx",
    metadata: fastapiPathOperationOrderMetadata,
    Component: FastapiPathOperationOrder,
  },
  {
    slug: "request-models-validation",
    source: "content/fastapi/request-models-validation.mdx",
    metadata: fastapiRequestModelsValidationMetadata,
    Component: FastapiRequestModelsValidation,
  },
  {
    slug: "response-models-contracts",
    source: "content/fastapi/response-models-contracts.mdx",
    metadata: fastapiResponseModelsContractsMetadata,
    Component: FastapiResponseModelsContracts,
  },
  {
    slug: "dependencies-boundaries",
    source: "content/fastapi/dependencies-boundaries.mdx",
    metadata: fastapiDependenciesBoundariesMetadata,
    Component: FastapiDependenciesBoundaries,
  },
  {
    slug: "auth-security-dependencies",
    source: "content/fastapi/auth-security-dependencies.mdx",
    metadata: fastapiAuthSecurityDependenciesMetadata,
    Component: FastapiAuthSecurityDependencies,
  },
  {
    slug: "async-handler-boundaries",
    source: "content/fastapi/async-handler-boundaries.mdx",
    metadata: fastapiAsyncHandlerBoundariesMetadata,
    Component: FastapiAsyncHandlerBoundaries,
  },
  {
    slug: "http-exception-handling",
    source: "content/fastapi/http-exception-handling.mdx",
    metadata: fastapiHttpExceptionHandlingMetadata,
    Component: FastapiHttpExceptionHandling,
  },
  {
    slug: "database-session-lifecycle",
    source: "content/fastapi/database-session-lifecycle.mdx",
    metadata: fastapiDatabaseSessionLifecycleMetadata,
    Component: FastapiDatabaseSessionLifecycle,
  },
  {
    slug: "testing-dependency-overrides",
    source: "content/fastapi/testing-dependency-overrides.mdx",
    metadata: fastapiTestingDependencyOverridesMetadata,
    Component: FastapiTestingDependencyOverrides,
  },
  {
    slug: "app-structure-routers",
    source: "content/fastapi/app-structure-routers.mdx",
    metadata: fastapiAppStructureRoutersMetadata,
    Component: FastapiAppStructureRouters,
  },
  {
    slug: "url-pattern-order",
    source: "content/django/url-pattern-order.mdx",
    metadata: djangoUrlPatternOrderMetadata,
    Component: DjangoUrlPatternOrder,
  },
  {
    slug: "models-fields-constraints",
    source: "content/django/models-fields-constraints.mdx",
    metadata: djangoModelsFieldsConstraintsMetadata,
    Component: DjangoModelsFieldsConstraints,
  },
  {
    slug: "querysets-lazy-evaluation",
    source: "content/django/querysets-lazy-evaluation.mdx",
    metadata: djangoQuerysetsLazyEvaluationMetadata,
    Component: DjangoQuerysetsLazyEvaluation,
  },
  {
    slug: "model-manager-boundaries",
    source: "content/django/model-manager-boundaries.mdx",
    metadata: djangoModelManagerBoundariesMetadata,
    Component: DjangoModelManagerBoundaries,
  },
  {
    slug: "forms-and-validation",
    source: "content/django/forms-and-validation.mdx",
    metadata: djangoFormsAndValidationMetadata,
    Component: DjangoFormsAndValidation,
  },
  {
    slug: "class-based-view-responsibilities",
    source: "content/django/class-based-view-responsibilities.mdx",
    metadata: djangoClassBasedViewResponsibilitiesMetadata,
    Component: DjangoClassBasedViewResponsibilities,
  },
  {
    slug: "csrf-and-unsafe-methods",
    source: "content/django/csrf-and-unsafe-methods.mdx",
    metadata: djangoCsrfAndUnsafeMethodsMetadata,
    Component: DjangoCsrfAndUnsafeMethods,
  },
  {
    slug: "settings-environments",
    source: "content/django/settings-environments.mdx",
    metadata: djangoSettingsEnvironmentsMetadata,
    Component: DjangoSettingsEnvironments,
  },
  {
    slug: "transactions-and-side-effects",
    source: "content/django/transactions-and-side-effects.mdx",
    metadata: djangoTransactionsAndSideEffectsMetadata,
    Component: DjangoTransactionsAndSideEffects,
  },
  {
    slug: "tests-client-and-fixtures",
    source: "content/django/tests-client-and-fixtures.mdx",
    metadata: djangoTestsClientAndFixturesMetadata,
    Component: DjangoTestsClientAndFixtures,
  },
  {
    slug: "package-and-file-organization",
    source: "content/go/package-and-file-organization.mdx",
    metadata: goPackageAndFileOrganizationMetadata,
    Component: GoPackageAndFileOrganization,
  },
  {
    slug: "naming-and-exported-api",
    source: "content/go/naming-and-exported-api.mdx",
    metadata: goNamingAndExportedApiMetadata,
    Component: GoNamingAndExportedApi,
  },
  {
    slug: "error-handling-wrapping",
    source: "content/go/error-handling-wrapping.mdx",
    metadata: goErrorHandlingWrappingMetadata,
    Component: GoErrorHandlingWrapping,
  },
  {
    slug: "context-cancellation",
    source: "content/go/context-cancellation.mdx",
    metadata: goContextCancellationMetadata,
    Component: GoContextCancellation,
  },
  {
    slug: "interfaces-at-boundaries",
    source: "content/go/interfaces-at-boundaries.mdx",
    metadata: goInterfacesAtBoundariesMetadata,
    Component: GoInterfacesAtBoundaries,
  },
  {
    slug: "struct-validation-zero-values",
    source: "content/go/struct-validation-zero-values.mdx",
    metadata: goStructValidationZeroValuesMetadata,
    Component: GoStructValidationZeroValues,
  },
  {
    slug: "goroutines-and-channel-ownership",
    source: "content/go/goroutines-and-channel-ownership.mdx",
    metadata: goGoroutinesAndChannelOwnershipMetadata,
    Component: GoGoroutinesAndChannelOwnership,
  },
  {
    slug: "defer-resource-cleanup",
    source: "content/go/defer-resource-cleanup.mdx",
    metadata: goDeferResourceCleanupMetadata,
    Component: GoDeferResourceCleanup,
  },
  {
    slug: "table-driven-tests",
    source: "content/go/table-driven-tests.mdx",
    metadata: goTableDrivenTestsMetadata,
    Component: GoTableDrivenTests,
  },
  {
    slug: "json-http-handler-boundaries",
    source: "content/go/json-http-handler-boundaries.mdx",
    metadata: goJsonHttpHandlerBoundariesMetadata,
    Component: GoJsonHttpHandlerBoundaries,
  },
  {
    slug: "build-context-dockerignore",
    source: "content/docker/build-context-dockerignore.mdx",
    metadata: dockerBuildContextDockerignoreMetadata,
    Component: DockerBuildContextDockerignore,
  },
  {
    slug: "base-images-and-tag-pinning",
    source: "content/docker/base-images-and-tag-pinning.mdx",
    metadata: dockerBaseImagesAndTagPinningMetadata,
    Component: DockerBaseImagesAndTagPinning,
  },
  {
    slug: "layer-cache-dependency-order",
    source: "content/docker/layer-cache-dependency-order.mdx",
    metadata: dockerLayerCacheDependencyOrderMetadata,
    Component: DockerLayerCacheDependencyOrder,
  },
  {
    slug: "multi-stage-builds",
    source: "content/docker/multi-stage-builds.mdx",
    metadata: dockerMultiStageBuildsMetadata,
    Component: DockerMultiStageBuilds,
  },
  {
    slug: "copy-add-and-workdir",
    source: "content/docker/copy-add-and-workdir.mdx",
    metadata: dockerCopyAddAndWorkdirMetadata,
    Component: DockerCopyAddAndWorkdir,
  },
  {
    slug: "non-root-user-permissions",
    source: "content/docker/non-root-user-permissions.mdx",
    metadata: dockerNonRootUserPermissionsMetadata,
    Component: DockerNonRootUserPermissions,
  },
  {
    slug: "args-env-and-secrets",
    source: "content/docker/args-env-and-secrets.mdx",
    metadata: dockerArgsEnvAndSecretsMetadata,
    Component: DockerArgsEnvAndSecrets,
  },
  {
    slug: "entrypoint-cmd-and-signals",
    source: "content/docker/entrypoint-cmd-and-signals.mdx",
    metadata: dockerEntrypointCmdAndSignalsMetadata,
    Component: DockerEntrypointCmdAndSignals,
  },
  {
    slug: "healthchecks-and-runtime-config",
    source: "content/docker/healthchecks-and-runtime-config.mdx",
    metadata: dockerHealthchecksAndRuntimeConfigMetadata,
    Component: DockerHealthchecksAndRuntimeConfig,
  },
  {
    slug: "compose-services-volumes-networks",
    source: "content/docker/compose-services-volumes-networks.mdx",
    metadata: dockerComposeServicesVolumesNetworksMetadata,
    Component: DockerComposeServicesVolumesNetworks,
  },
  {
    slug: "utility-composition-readability",
    source: "content/tailwindcss/utility-composition-readability.mdx",
    metadata: tailwindcssUtilityCompositionReadabilityMetadata,
    Component: TailwindcssUtilityCompositionReadability,
  },
  {
    slug: "responsive-breakpoints",
    source: "content/tailwindcss/responsive-breakpoints.mdx",
    metadata: tailwindcssResponsiveBreakpointsMetadata,
    Component: TailwindcssResponsiveBreakpoints,
  },
  {
    slug: "state-variants-hover-focus-disabled",
    source: "content/tailwindcss/state-variants-hover-focus-disabled.mdx",
    metadata: tailwindcssStateVariantsHoverFocusDisabledMetadata,
    Component: TailwindcssStateVariantsHoverFocusDisabled,
  },
  {
    slug: "spacing-layout-consistency",
    source: "content/tailwindcss/spacing-layout-consistency.mdx",
    metadata: tailwindcssSpacingLayoutConsistencyMetadata,
    Component: TailwindcssSpacingLayoutConsistency,
  },
  {
    slug: "theme-tokens-and-custom-values",
    source: "content/tailwindcss/theme-tokens-and-custom-values.mdx",
    metadata: tailwindcssThemeTokensAndCustomValuesMetadata,
    Component: TailwindcssThemeTokensAndCustomValues,
  },
  {
    slug: "dark-mode-variants",
    source: "content/tailwindcss/dark-mode-variants.mdx",
    metadata: tailwindcssDarkModeVariantsMetadata,
    Component: TailwindcssDarkModeVariants,
  },
  {
    slug: "class-reuse-component-boundaries",
    source: "content/tailwindcss/class-reuse-component-boundaries.mdx",
    metadata: tailwindcssClassReuseComponentBoundariesMetadata,
    Component: TailwindcssClassReuseComponentBoundaries,
  },
  {
    slug: "arbitrary-values-restraint",
    source: "content/tailwindcss/arbitrary-values-restraint.mdx",
    metadata: tailwindcssArbitraryValuesRestraintMetadata,
    Component: TailwindcssArbitraryValuesRestraint,
  },
  {
    slug: "accessibility-contrast-focus",
    source: "content/tailwindcss/accessibility-contrast-focus.mdx",
    metadata: tailwindcssAccessibilityContrastFocusMetadata,
    Component: TailwindcssAccessibilityContrastFocus,
  },
  {
    slug: "conditional-classes-and-conflicts",
    source: "content/tailwindcss/conditional-classes-and-conflicts.mdx",
    metadata: tailwindcssConditionalClassesAndConflictsMetadata,
    Component: TailwindcssConditionalClassesAndConflicts,
  },
];

export const lessonSources: LessonRecord[] = rawLessons.map((lesson) => ({
  ...validateLessonMetadata(lesson.metadata, lesson.source),
  slug: lesson.slug,
  Component: lesson.Component,
}));
