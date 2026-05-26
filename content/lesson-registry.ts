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
import VueSingleFileComponentBoundaries, {
  metadata as vueSingleFileComponentBoundariesMetadata,
} from "./vue/single-file-component-boundaries.mdx";
import VuePropsEmitsContracts, {
  metadata as vuePropsEmitsContractsMetadata,
} from "./vue/props-emits-contracts.mdx";
import VueComputedVsWatch, {
  metadata as vueComputedVsWatchMetadata,
} from "./vue/computed-vs-watch.mdx";
import VueListRenderingKeys, {
  metadata as vueListRenderingKeysMetadata,
} from "./vue/list-rendering-keys.mdx";
import VueFormVModelBoundaries, {
  metadata as vueFormVModelBoundariesMetadata,
} from "./vue/form-v-model-boundaries.mdx";
import VueComposablesStateOwnership, {
  metadata as vueComposablesStateOwnershipMetadata,
} from "./vue/composables-state-ownership.mdx";
import VueAsyncStateLoadingErrors, {
  metadata as vueAsyncStateLoadingErrorsMetadata,
} from "./vue/async-state-loading-errors.mdx";
import VuePiniaStoreActions, {
  metadata as vuePiniaStoreActionsMetadata,
} from "./vue/pinia-store-actions.mdx";
import VueProvideInjectBoundaries, {
  metadata as vueProvideInjectBoundariesMetadata,
} from "./vue/provide-inject-boundaries.mdx";
import VueSlotsComponentComposition, {
  metadata as vueSlotsComponentCompositionMetadata,
} from "./vue/slots-component-composition.mdx";
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
import NestjsModuleControllerProviderBoundaries, {
  metadata as nestjsModuleControllerProviderBoundariesMetadata,
} from "./nestjs/module-controller-provider-boundaries.mdx";
import NestjsDependencyInjectionProviders, {
  metadata as nestjsDependencyInjectionProvidersMetadata,
} from "./nestjs/dependency-injection-providers.mdx";
import NestjsDtoValidationPipes, {
  metadata as nestjsDtoValidationPipesMetadata,
} from "./nestjs/dto-validation-pipes.mdx";
import NestjsGuardsAuthAuthorization, {
  metadata as nestjsGuardsAuthAuthorizationMetadata,
} from "./nestjs/guards-auth-authorization.mdx";
import NestjsExceptionFiltersErrorShape, {
  metadata as nestjsExceptionFiltersErrorShapeMetadata,
} from "./nestjs/exception-filters-error-shape.mdx";
import NestjsInterceptorsResponseLogging, {
  metadata as nestjsInterceptorsResponseLoggingMetadata,
} from "./nestjs/interceptors-response-logging.mdx";
import NestjsConfigModuleValidation, {
  metadata as nestjsConfigModuleValidationMetadata,
} from "./nestjs/config-module-validation.mdx";
import NestjsRepositoryServiceBoundaries, {
  metadata as nestjsRepositoryServiceBoundariesMetadata,
} from "./nestjs/repository-service-boundaries.mdx";
import NestjsRequestLifecycleMiddlewareGuards, {
  metadata as nestjsRequestLifecycleMiddlewareGuardsMetadata,
} from "./nestjs/request-lifecycle-middleware-guards.mdx";
import NestjsTestingModuleOverrides, {
  metadata as nestjsTestingModuleOverridesMetadata,
} from "./nestjs/testing-module-overrides.mdx";
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
import PhpStrictTypesAndReturnTypes, {
  metadata as phpStrictTypesAndReturnTypesMetadata,
} from "./php/strict-types-and-return-types.mdx";
import PhpInputValidationFiltering, {
  metadata as phpInputValidationFilteringMetadata,
} from "./php/input-validation-filtering.mdx";
import PhpOutputEscapingXss, {
  metadata as phpOutputEscapingXssMetadata,
} from "./php/output-escaping-xss.mdx";
import PhpPdoPreparedStatements, {
  metadata as phpPdoPreparedStatementsMetadata,
} from "./php/pdo-prepared-statements.mdx";
import PhpPasswordHashingVerification, {
  metadata as phpPasswordHashingVerificationMetadata,
} from "./php/password-hashing-verification.mdx";
import PhpSessionHandlingCookies, {
  metadata as phpSessionHandlingCookiesMetadata,
} from "./php/session-handling-cookies.mdx";
import PhpErrorHandlingExceptions, {
  metadata as phpErrorHandlingExceptionsMetadata,
} from "./php/error-handling-exceptions.mdx";
import PhpAutoloadingAndNamespaces, {
  metadata as phpAutoloadingAndNamespacesMetadata,
} from "./php/autoloading-and-namespaces.mdx";
import PhpConfigurationAndSecrets, {
  metadata as phpConfigurationAndSecretsMetadata,
} from "./php/configuration-and-secrets.mdx";
import PhpSeparatingLogicFromTemplates, {
  metadata as phpSeparatingLogicFromTemplatesMetadata,
} from "./php/separating-logic-from-templates.mdx";
import LaravelRoutingControllerBoundaries, {
  metadata as laravelRoutingControllerBoundariesMetadata,
} from "./laravel/routing-controller-boundaries.mdx";
import LaravelFormRequestValidation, {
  metadata as laravelFormRequestValidationMetadata,
} from "./laravel/form-request-validation.mdx";
import LaravelMiddlewareAuthBoundaries, {
  metadata as laravelMiddlewareAuthBoundariesMetadata,
} from "./laravel/middleware-auth-boundaries.mdx";
import LaravelServiceContainerBinding, {
  metadata as laravelServiceContainerBindingMetadata,
} from "./laravel/service-container-binding.mdx";
import LaravelEloquentQueryScopes, {
  metadata as laravelEloquentQueryScopesMetadata,
} from "./laravel/eloquent-query-scopes.mdx";
import LaravelMigrationsSchemaConstraints, {
  metadata as laravelMigrationsSchemaConstraintsMetadata,
} from "./laravel/migrations-schema-constraints.mdx";
import LaravelApiResourcesResponseShape, {
  metadata as laravelApiResourcesResponseShapeMetadata,
} from "./laravel/api-resources-response-shape.mdx";
import LaravelPoliciesAuthorization, {
  metadata as laravelPoliciesAuthorizationMetadata,
} from "./laravel/policies-authorization.mdx";
import LaravelQueuesAfterCommit, {
  metadata as laravelQueuesAfterCommitMetadata,
} from "./laravel/queues-after-commit.mdx";
import LaravelFeatureTestsDatabase, {
  metadata as laravelFeatureTestsDatabaseMetadata,
} from "./laravel/feature-tests-database.mdx";
import JavaNullHandlingAndOptionalBoundaries, {
  metadata as javaNullHandlingAndOptionalBoundariesMetadata,
} from "./java/null-handling-and-optional-boundaries.mdx";
import JavaImmutableDataAndDefensiveCopies, {
  metadata as javaImmutableDataAndDefensiveCopiesMetadata,
} from "./java/immutable-data-and-defensive-copies.mdx";
import JavaEqualsHashcodeAndValueObjects, {
  metadata as javaEqualsHashcodeAndValueObjectsMetadata,
} from "./java/equals-hashcode-and-value-objects.mdx";
import JavaExceptionBoundaries, {
  metadata as javaExceptionBoundariesMetadata,
} from "./java/exception-handling-boundaries.mdx";
import JavaTryWithResourcesCleanup, {
  metadata as javaTryWithResourcesCleanupMetadata,
} from "./java/try-with-resources-cleanup.mdx";
import JavaGenericsAndCollectionTypes, {
  metadata as javaGenericsAndCollectionTypesMetadata,
} from "./java/generics-and-collection-types.mdx";
import JavaStreamsVsReadableLoops, {
  metadata as javaStreamsVsReadableLoopsMetadata,
} from "./java/streams-vs-readable-loops.mdx";
import JavaConcurrencyAndSharedState, {
  metadata as javaConcurrencyAndSharedStateMetadata,
} from "./java/concurrency-and-shared-state.mdx";
import JavaRecordsAndDtoBoundaries, {
  metadata as javaRecordsAndDtoBoundariesMetadata,
} from "./java/records-and-dto-boundaries.mdx";
import JavaPackageServiceBoundaries, {
  metadata as javaPackageServiceBoundariesMetadata,
} from "./java/package-service-boundaries.mdx";
import CPointerOwnership, {
  metadata as cPointerOwnershipMetadata,
} from "./c/pointer-ownership.mdx";
import CBufferBounds, {
  metadata as cBufferBoundsMetadata,
} from "./c/buffer-bounds.mdx";
import CAllocationFreeOwnership, {
  metadata as cAllocationFreeOwnershipMetadata,
} from "./c/allocation-free-ownership.mdx";
import CConstCorrectness, {
  metadata as cConstCorrectnessMetadata,
} from "./c/const-correctness.mdx";
import CStructOwnership, {
  metadata as cStructOwnershipMetadata,
} from "./c/struct-ownership.mdx";
import CErrorCodes, {
  metadata as cErrorCodesMetadata,
} from "./c/error-codes.mdx";
import CFileIoCleanup, {
  metadata as cFileIoCleanupMetadata,
} from "./c/file-io-cleanup.mdx";
import CIntegerOverflow, {
  metadata as cIntegerOverflowMetadata,
} from "./c/integer-overflow.mdx";
import CCompilerWarningsFlags, {
  metadata as cCompilerWarningsFlagsMetadata,
} from "./c/compiler-warnings-flags.mdx";
import CUnitTestsCases, {
  metadata as cUnitTestsCasesMetadata,
} from "./c/unit-tests-cases.mdx";
import CppRaiiResourceOwnership, {
  metadata as cppRaiiResourceOwnershipMetadata,
} from "./cpp/raii-resource-ownership.mdx";
import CppSmartPointerOwnership, {
  metadata as cppSmartPointerOwnershipMetadata,
} from "./cpp/smart-pointer-ownership.mdx";
import CppMoveSemanticsLifetimes, {
  metadata as cppMoveSemanticsLifetimesMetadata,
} from "./cpp/move-semantics-lifetimes.mdx";
import CppConstReferencesStringView, {
  metadata as cppConstReferencesStringViewMetadata,
} from "./cpp/const-references-string-view.mdx";
import CppRuleOfZero, {
  metadata as cppRuleOfZeroMetadata,
} from "./cpp/rule-of-zero.mdx";
import CppExceptionBoundaries, {
  metadata as cppExceptionBoundariesMetadata,
} from "./cpp/exception-translation-boundaries.mdx";
import CppTemplateConstraints, {
  metadata as cppTemplateConstraintsMetadata,
} from "./cpp/template-constraints.mdx";
import CppAlgorithmIteratorIntent, {
  metadata as cppAlgorithmIteratorIntentMetadata,
} from "./cpp/algorithm-iterator-intent.mdx";
import CppScopedLocksSharedState, {
  metadata as cppScopedLocksSharedStateMetadata,
} from "./cpp/scoped-locks-shared-state.mdx";
import CppUnitTestsEdgeCases, {
  metadata as cppUnitTestsEdgeCasesMetadata,
} from "./cpp/unit-tests-edge-cases.mdx";
import CsharpNullableReferenceBoundaries, {
  metadata as csharpNullableReferenceBoundariesMetadata,
} from "./csharp/nullable-reference-boundaries.mdx";
import CsharpRecordsImmutability, {
  metadata as csharpRecordsImmutabilityMetadata,
} from "./csharp/records-immutability.mdx";
import CsharpAsyncAwaitCancellation, {
  metadata as csharpAsyncAwaitCancellationMetadata,
} from "./csharp/async-await-cancellation.mdx";
import CsharpDependencyInjectionBoundaries, {
  metadata as csharpDependencyInjectionBoundariesMetadata,
} from "./csharp/dependency-injection-boundaries.mdx";
import CsharpUsingDisposal, {
  metadata as csharpUsingDisposalMetadata,
} from "./csharp/using-disposal.mdx";
import CsharpExceptionsResultBoundaries, {
  metadata as csharpExceptionsResultBoundariesMetadata,
} from "./csharp/exceptions-result-boundaries.mdx";
import CsharpLinqQueryIntent, {
  metadata as csharpLinqQueryIntentMetadata,
} from "./csharp/linq-query-intent.mdx";
import CsharpPatternMatchingSwitches, {
  metadata as csharpPatternMatchingSwitchesMetadata,
} from "./csharp/pattern-matching-switches.mdx";
import CsharpOptionsConfiguration, {
  metadata as csharpOptionsConfigurationMetadata,
} from "./csharp/options-configuration.mdx";
import CsharpUnitTestsArrangeActAssert, {
  metadata as csharpUnitTestsArrangeActAssertMetadata,
} from "./csharp/unit-tests-arrange-act-assert.mdx";
import RustOwnershipBorrowing, {
  metadata as rustOwnershipBorrowingMetadata,
} from "./rust/ownership-borrowing.mdx";
import RustLifetimesReturnedData, {
  metadata as rustLifetimesReturnedDataMetadata,
} from "./rust/lifetimes-returned-data.mdx";
import RustResultErrorBoundaries, {
  metadata as rustResultErrorBoundariesMetadata,
} from "./rust/result-error-boundaries.mdx";
import RustOptionUnwrapBoundaries, {
  metadata as rustOptionUnwrapBoundariesMetadata,
} from "./rust/option-unwrap-boundaries.mdx";
import RustPatternMatchingExhaustiveness, {
  metadata as rustPatternMatchingExhaustivenessMetadata,
} from "./rust/pattern-matching-exhaustiveness.mdx";
import RustTraitsAndGenerics, {
  metadata as rustTraitsAndGenericsMetadata,
} from "./rust/traits-and-generics.mdx";
import RustIteratorOwnership, {
  metadata as rustIteratorOwnershipMetadata,
} from "./rust/iterator-ownership.mdx";
import RustAsyncSendSyncBoundaries, {
  metadata as rustAsyncSendSyncBoundariesMetadata,
} from "./rust/async-send-sync-boundaries.mdx";
import RustCargoFeatureDependencies, {
  metadata as rustCargoFeatureDependenciesMetadata,
} from "./rust/cargo-feature-dependencies.mdx";
import RustTestsFixturesAssertions, {
  metadata as rustTestsFixturesAssertionsMetadata,
} from "./rust/tests-fixtures-assertions.mdx";
import GitStatusBeforeWork, {
  metadata as gitStatusBeforeWorkMetadata,
} from "./git/status-before-work.mdx";
import GitInteractiveStagingHunks, {
  metadata as gitInteractiveStagingHunksMetadata,
} from "./git/interactive-staging-hunks.mdx";
import GitAtomicCommitsMessages, {
  metadata as gitAtomicCommitsMessagesMetadata,
} from "./git/atomic-commits-messages.mdx";
import GitBranchNamingUpstream, {
  metadata as gitBranchNamingUpstreamMetadata,
} from "./git/branch-naming-upstream.mdx";
import GitFetchPullRebaseSync, {
  metadata as gitFetchPullRebaseSyncMetadata,
} from "./git/fetch-pull-rebase-sync.mdx";
import GitReviewingDiffsBeforePush, {
  metadata as gitReviewingDiffsBeforePushMetadata,
} from "./git/reviewing-diffs-before-push.mdx";
import GitConflictResolutionWithoutOverwriting, {
  metadata as gitConflictResolutionWithoutOverwritingMetadata,
} from "./git/conflict-resolution-without-overwriting.mdx";
import GitRevertVsReset, {
  metadata as gitRevertVsResetMetadata,
} from "./git/revert-vs-reset.mdx";
import GitGitignoreAndSecretSafety, {
  metadata as gitGitignoreAndSecretSafetyMetadata,
} from "./git/gitignore-and-secret-safety.mdx";
import GitTagsAndReleasePoints, {
  metadata as gitTagsAndReleasePointsMetadata,
} from "./git/tags-and-release-points.mdx";
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
    slug: "single-file-component-boundaries",
    source: "content/vue/single-file-component-boundaries.mdx",
    metadata: vueSingleFileComponentBoundariesMetadata,
    Component: VueSingleFileComponentBoundaries,
  },
  {
    slug: "props-emits-contracts",
    source: "content/vue/props-emits-contracts.mdx",
    metadata: vuePropsEmitsContractsMetadata,
    Component: VuePropsEmitsContracts,
  },
  {
    slug: "computed-vs-watch",
    source: "content/vue/computed-vs-watch.mdx",
    metadata: vueComputedVsWatchMetadata,
    Component: VueComputedVsWatch,
  },
  {
    slug: "list-rendering-keys",
    source: "content/vue/list-rendering-keys.mdx",
    metadata: vueListRenderingKeysMetadata,
    Component: VueListRenderingKeys,
  },
  {
    slug: "form-v-model-boundaries",
    source: "content/vue/form-v-model-boundaries.mdx",
    metadata: vueFormVModelBoundariesMetadata,
    Component: VueFormVModelBoundaries,
  },
  {
    slug: "composables-state-ownership",
    source: "content/vue/composables-state-ownership.mdx",
    metadata: vueComposablesStateOwnershipMetadata,
    Component: VueComposablesStateOwnership,
  },
  {
    slug: "async-state-loading-errors",
    source: "content/vue/async-state-loading-errors.mdx",
    metadata: vueAsyncStateLoadingErrorsMetadata,
    Component: VueAsyncStateLoadingErrors,
  },
  {
    slug: "pinia-store-actions",
    source: "content/vue/pinia-store-actions.mdx",
    metadata: vuePiniaStoreActionsMetadata,
    Component: VuePiniaStoreActions,
  },
  {
    slug: "provide-inject-boundaries",
    source: "content/vue/provide-inject-boundaries.mdx",
    metadata: vueProvideInjectBoundariesMetadata,
    Component: VueProvideInjectBoundaries,
  },
  {
    slug: "slots-component-composition",
    source: "content/vue/slots-component-composition.mdx",
    metadata: vueSlotsComponentCompositionMetadata,
    Component: VueSlotsComponentComposition,
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
    slug: "module-controller-provider-boundaries",
    source: "content/nestjs/module-controller-provider-boundaries.mdx",
    metadata: nestjsModuleControllerProviderBoundariesMetadata,
    Component: NestjsModuleControllerProviderBoundaries,
  },
  {
    slug: "dependency-injection-providers",
    source: "content/nestjs/dependency-injection-providers.mdx",
    metadata: nestjsDependencyInjectionProvidersMetadata,
    Component: NestjsDependencyInjectionProviders,
  },
  {
    slug: "dto-validation-pipes",
    source: "content/nestjs/dto-validation-pipes.mdx",
    metadata: nestjsDtoValidationPipesMetadata,
    Component: NestjsDtoValidationPipes,
  },
  {
    slug: "guards-auth-authorization",
    source: "content/nestjs/guards-auth-authorization.mdx",
    metadata: nestjsGuardsAuthAuthorizationMetadata,
    Component: NestjsGuardsAuthAuthorization,
  },
  {
    slug: "exception-filters-error-shape",
    source: "content/nestjs/exception-filters-error-shape.mdx",
    metadata: nestjsExceptionFiltersErrorShapeMetadata,
    Component: NestjsExceptionFiltersErrorShape,
  },
  {
    slug: "interceptors-response-logging",
    source: "content/nestjs/interceptors-response-logging.mdx",
    metadata: nestjsInterceptorsResponseLoggingMetadata,
    Component: NestjsInterceptorsResponseLogging,
  },
  {
    slug: "config-module-validation",
    source: "content/nestjs/config-module-validation.mdx",
    metadata: nestjsConfigModuleValidationMetadata,
    Component: NestjsConfigModuleValidation,
  },
  {
    slug: "repository-service-boundaries",
    source: "content/nestjs/repository-service-boundaries.mdx",
    metadata: nestjsRepositoryServiceBoundariesMetadata,
    Component: NestjsRepositoryServiceBoundaries,
  },
  {
    slug: "request-lifecycle-middleware-guards",
    source: "content/nestjs/request-lifecycle-middleware-guards.mdx",
    metadata: nestjsRequestLifecycleMiddlewareGuardsMetadata,
    Component: NestjsRequestLifecycleMiddlewareGuards,
  },
  {
    slug: "testing-module-overrides",
    source: "content/nestjs/testing-module-overrides.mdx",
    metadata: nestjsTestingModuleOverridesMetadata,
    Component: NestjsTestingModuleOverrides,
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
    slug: "strict-types-and-return-types",
    source: "content/php/strict-types-and-return-types.mdx",
    metadata: phpStrictTypesAndReturnTypesMetadata,
    Component: PhpStrictTypesAndReturnTypes,
  },
  {
    slug: "input-validation-filtering",
    source: "content/php/input-validation-filtering.mdx",
    metadata: phpInputValidationFilteringMetadata,
    Component: PhpInputValidationFiltering,
  },
  {
    slug: "output-escaping-xss",
    source: "content/php/output-escaping-xss.mdx",
    metadata: phpOutputEscapingXssMetadata,
    Component: PhpOutputEscapingXss,
  },
  {
    slug: "pdo-prepared-statements",
    source: "content/php/pdo-prepared-statements.mdx",
    metadata: phpPdoPreparedStatementsMetadata,
    Component: PhpPdoPreparedStatements,
  },
  {
    slug: "password-hashing-verification",
    source: "content/php/password-hashing-verification.mdx",
    metadata: phpPasswordHashingVerificationMetadata,
    Component: PhpPasswordHashingVerification,
  },
  {
    slug: "session-handling-cookies",
    source: "content/php/session-handling-cookies.mdx",
    metadata: phpSessionHandlingCookiesMetadata,
    Component: PhpSessionHandlingCookies,
  },
  {
    slug: "error-handling-exceptions",
    source: "content/php/error-handling-exceptions.mdx",
    metadata: phpErrorHandlingExceptionsMetadata,
    Component: PhpErrorHandlingExceptions,
  },
  {
    slug: "autoloading-and-namespaces",
    source: "content/php/autoloading-and-namespaces.mdx",
    metadata: phpAutoloadingAndNamespacesMetadata,
    Component: PhpAutoloadingAndNamespaces,
  },
  {
    slug: "configuration-and-secrets",
    source: "content/php/configuration-and-secrets.mdx",
    metadata: phpConfigurationAndSecretsMetadata,
    Component: PhpConfigurationAndSecrets,
  },
  {
    slug: "separating-logic-from-templates",
    source: "content/php/separating-logic-from-templates.mdx",
    metadata: phpSeparatingLogicFromTemplatesMetadata,
    Component: PhpSeparatingLogicFromTemplates,
  },
  {
    slug: "routing-controller-boundaries",
    source: "content/laravel/routing-controller-boundaries.mdx",
    metadata: laravelRoutingControllerBoundariesMetadata,
    Component: LaravelRoutingControllerBoundaries,
  },
  {
    slug: "form-request-validation",
    source: "content/laravel/form-request-validation.mdx",
    metadata: laravelFormRequestValidationMetadata,
    Component: LaravelFormRequestValidation,
  },
  {
    slug: "middleware-auth-boundaries",
    source: "content/laravel/middleware-auth-boundaries.mdx",
    metadata: laravelMiddlewareAuthBoundariesMetadata,
    Component: LaravelMiddlewareAuthBoundaries,
  },
  {
    slug: "service-container-binding",
    source: "content/laravel/service-container-binding.mdx",
    metadata: laravelServiceContainerBindingMetadata,
    Component: LaravelServiceContainerBinding,
  },
  {
    slug: "eloquent-query-scopes",
    source: "content/laravel/eloquent-query-scopes.mdx",
    metadata: laravelEloquentQueryScopesMetadata,
    Component: LaravelEloquentQueryScopes,
  },
  {
    slug: "migrations-schema-constraints",
    source: "content/laravel/migrations-schema-constraints.mdx",
    metadata: laravelMigrationsSchemaConstraintsMetadata,
    Component: LaravelMigrationsSchemaConstraints,
  },
  {
    slug: "api-resources-response-shape",
    source: "content/laravel/api-resources-response-shape.mdx",
    metadata: laravelApiResourcesResponseShapeMetadata,
    Component: LaravelApiResourcesResponseShape,
  },
  {
    slug: "policies-authorization",
    source: "content/laravel/policies-authorization.mdx",
    metadata: laravelPoliciesAuthorizationMetadata,
    Component: LaravelPoliciesAuthorization,
  },
  {
    slug: "queues-after-commit",
    source: "content/laravel/queues-after-commit.mdx",
    metadata: laravelQueuesAfterCommitMetadata,
    Component: LaravelQueuesAfterCommit,
  },
  {
    slug: "feature-tests-database",
    source: "content/laravel/feature-tests-database.mdx",
    metadata: laravelFeatureTestsDatabaseMetadata,
    Component: LaravelFeatureTestsDatabase,
  },
  {
    slug: "null-handling-and-optional-boundaries",
    source: "content/java/null-handling-and-optional-boundaries.mdx",
    metadata: javaNullHandlingAndOptionalBoundariesMetadata,
    Component: JavaNullHandlingAndOptionalBoundaries,
  },
  {
    slug: "immutable-data-and-defensive-copies",
    source: "content/java/immutable-data-and-defensive-copies.mdx",
    metadata: javaImmutableDataAndDefensiveCopiesMetadata,
    Component: JavaImmutableDataAndDefensiveCopies,
  },
  {
    slug: "equals-hashcode-and-value-objects",
    source: "content/java/equals-hashcode-and-value-objects.mdx",
    metadata: javaEqualsHashcodeAndValueObjectsMetadata,
    Component: JavaEqualsHashcodeAndValueObjects,
  },
  {
    slug: "exception-handling-boundaries",
    source: "content/java/exception-handling-boundaries.mdx",
    metadata: javaExceptionBoundariesMetadata,
    Component: JavaExceptionBoundaries,
  },
  {
    slug: "try-with-resources-cleanup",
    source: "content/java/try-with-resources-cleanup.mdx",
    metadata: javaTryWithResourcesCleanupMetadata,
    Component: JavaTryWithResourcesCleanup,
  },
  {
    slug: "generics-and-collection-types",
    source: "content/java/generics-and-collection-types.mdx",
    metadata: javaGenericsAndCollectionTypesMetadata,
    Component: JavaGenericsAndCollectionTypes,
  },
  {
    slug: "streams-vs-readable-loops",
    source: "content/java/streams-vs-readable-loops.mdx",
    metadata: javaStreamsVsReadableLoopsMetadata,
    Component: JavaStreamsVsReadableLoops,
  },
  {
    slug: "concurrency-and-shared-state",
    source: "content/java/concurrency-and-shared-state.mdx",
    metadata: javaConcurrencyAndSharedStateMetadata,
    Component: JavaConcurrencyAndSharedState,
  },
  {
    slug: "records-and-dto-boundaries",
    source: "content/java/records-and-dto-boundaries.mdx",
    metadata: javaRecordsAndDtoBoundariesMetadata,
    Component: JavaRecordsAndDtoBoundaries,
  },
  {
    slug: "package-service-boundaries",
    source: "content/java/package-service-boundaries.mdx",
    metadata: javaPackageServiceBoundariesMetadata,
    Component: JavaPackageServiceBoundaries,
  },
  {
    slug: "pointer-ownership",
    source: "content/c/pointer-ownership.mdx",
    metadata: cPointerOwnershipMetadata,
    Component: CPointerOwnership,
  },
  {
    slug: "buffer-bounds",
    source: "content/c/buffer-bounds.mdx",
    metadata: cBufferBoundsMetadata,
    Component: CBufferBounds,
  },
  {
    slug: "allocation-free-ownership",
    source: "content/c/allocation-free-ownership.mdx",
    metadata: cAllocationFreeOwnershipMetadata,
    Component: CAllocationFreeOwnership,
  },
  {
    slug: "const-correctness",
    source: "content/c/const-correctness.mdx",
    metadata: cConstCorrectnessMetadata,
    Component: CConstCorrectness,
  },
  {
    slug: "struct-ownership",
    source: "content/c/struct-ownership.mdx",
    metadata: cStructOwnershipMetadata,
    Component: CStructOwnership,
  },
  {
    slug: "error-codes",
    source: "content/c/error-codes.mdx",
    metadata: cErrorCodesMetadata,
    Component: CErrorCodes,
  },
  {
    slug: "file-io-cleanup",
    source: "content/c/file-io-cleanup.mdx",
    metadata: cFileIoCleanupMetadata,
    Component: CFileIoCleanup,
  },
  {
    slug: "integer-overflow",
    source: "content/c/integer-overflow.mdx",
    metadata: cIntegerOverflowMetadata,
    Component: CIntegerOverflow,
  },
  {
    slug: "compiler-warnings-flags",
    source: "content/c/compiler-warnings-flags.mdx",
    metadata: cCompilerWarningsFlagsMetadata,
    Component: CCompilerWarningsFlags,
  },
  {
    slug: "unit-tests-cases",
    source: "content/c/unit-tests-cases.mdx",
    metadata: cUnitTestsCasesMetadata,
    Component: CUnitTestsCases,
  },
  {
    slug: "raii-resource-ownership",
    source: "content/cpp/raii-resource-ownership.mdx",
    metadata: cppRaiiResourceOwnershipMetadata,
    Component: CppRaiiResourceOwnership,
  },
  {
    slug: "smart-pointer-ownership",
    source: "content/cpp/smart-pointer-ownership.mdx",
    metadata: cppSmartPointerOwnershipMetadata,
    Component: CppSmartPointerOwnership,
  },
  {
    slug: "move-semantics-lifetimes",
    source: "content/cpp/move-semantics-lifetimes.mdx",
    metadata: cppMoveSemanticsLifetimesMetadata,
    Component: CppMoveSemanticsLifetimes,
  },
  {
    slug: "const-references-string-view",
    source: "content/cpp/const-references-string-view.mdx",
    metadata: cppConstReferencesStringViewMetadata,
    Component: CppConstReferencesStringView,
  },
  {
    slug: "rule-of-zero",
    source: "content/cpp/rule-of-zero.mdx",
    metadata: cppRuleOfZeroMetadata,
    Component: CppRuleOfZero,
  },
  {
    slug: "exception-translation-boundaries",
    source: "content/cpp/exception-translation-boundaries.mdx",
    metadata: cppExceptionBoundariesMetadata,
    Component: CppExceptionBoundaries,
  },
  {
    slug: "template-constraints",
    source: "content/cpp/template-constraints.mdx",
    metadata: cppTemplateConstraintsMetadata,
    Component: CppTemplateConstraints,
  },
  {
    slug: "algorithm-iterator-intent",
    source: "content/cpp/algorithm-iterator-intent.mdx",
    metadata: cppAlgorithmIteratorIntentMetadata,
    Component: CppAlgorithmIteratorIntent,
  },
  {
    slug: "scoped-locks-shared-state",
    source: "content/cpp/scoped-locks-shared-state.mdx",
    metadata: cppScopedLocksSharedStateMetadata,
    Component: CppScopedLocksSharedState,
  },
  {
    slug: "unit-tests-edge-cases",
    source: "content/cpp/unit-tests-edge-cases.mdx",
    metadata: cppUnitTestsEdgeCasesMetadata,
    Component: CppUnitTestsEdgeCases,
  },
  {
    slug: "nullable-reference-boundaries",
    source: "content/csharp/nullable-reference-boundaries.mdx",
    metadata: csharpNullableReferenceBoundariesMetadata,
    Component: CsharpNullableReferenceBoundaries,
  },
  {
    slug: "records-immutability",
    source: "content/csharp/records-immutability.mdx",
    metadata: csharpRecordsImmutabilityMetadata,
    Component: CsharpRecordsImmutability,
  },
  {
    slug: "async-await-cancellation",
    source: "content/csharp/async-await-cancellation.mdx",
    metadata: csharpAsyncAwaitCancellationMetadata,
    Component: CsharpAsyncAwaitCancellation,
  },
  {
    slug: "dependency-injection-boundaries",
    source: "content/csharp/dependency-injection-boundaries.mdx",
    metadata: csharpDependencyInjectionBoundariesMetadata,
    Component: CsharpDependencyInjectionBoundaries,
  },
  {
    slug: "using-disposal",
    source: "content/csharp/using-disposal.mdx",
    metadata: csharpUsingDisposalMetadata,
    Component: CsharpUsingDisposal,
  },
  {
    slug: "exceptions-result-boundaries",
    source: "content/csharp/exceptions-result-boundaries.mdx",
    metadata: csharpExceptionsResultBoundariesMetadata,
    Component: CsharpExceptionsResultBoundaries,
  },
  {
    slug: "linq-query-intent",
    source: "content/csharp/linq-query-intent.mdx",
    metadata: csharpLinqQueryIntentMetadata,
    Component: CsharpLinqQueryIntent,
  },
  {
    slug: "pattern-matching-switches",
    source: "content/csharp/pattern-matching-switches.mdx",
    metadata: csharpPatternMatchingSwitchesMetadata,
    Component: CsharpPatternMatchingSwitches,
  },
  {
    slug: "options-configuration",
    source: "content/csharp/options-configuration.mdx",
    metadata: csharpOptionsConfigurationMetadata,
    Component: CsharpOptionsConfiguration,
  },
  {
    slug: "unit-tests-arrange-act-assert",
    source: "content/csharp/unit-tests-arrange-act-assert.mdx",
    metadata: csharpUnitTestsArrangeActAssertMetadata,
    Component: CsharpUnitTestsArrangeActAssert,
  },
  {
    slug: "ownership-borrowing",
    source: "content/rust/ownership-borrowing.mdx",
    metadata: rustOwnershipBorrowingMetadata,
    Component: RustOwnershipBorrowing,
  },
  {
    slug: "lifetimes-returned-data",
    source: "content/rust/lifetimes-returned-data.mdx",
    metadata: rustLifetimesReturnedDataMetadata,
    Component: RustLifetimesReturnedData,
  },
  {
    slug: "result-error-boundaries",
    source: "content/rust/result-error-boundaries.mdx",
    metadata: rustResultErrorBoundariesMetadata,
    Component: RustResultErrorBoundaries,
  },
  {
    slug: "option-unwrap-boundaries",
    source: "content/rust/option-unwrap-boundaries.mdx",
    metadata: rustOptionUnwrapBoundariesMetadata,
    Component: RustOptionUnwrapBoundaries,
  },
  {
    slug: "pattern-matching-exhaustiveness",
    source: "content/rust/pattern-matching-exhaustiveness.mdx",
    metadata: rustPatternMatchingExhaustivenessMetadata,
    Component: RustPatternMatchingExhaustiveness,
  },
  {
    slug: "traits-and-generics",
    source: "content/rust/traits-and-generics.mdx",
    metadata: rustTraitsAndGenericsMetadata,
    Component: RustTraitsAndGenerics,
  },
  {
    slug: "iterator-ownership",
    source: "content/rust/iterator-ownership.mdx",
    metadata: rustIteratorOwnershipMetadata,
    Component: RustIteratorOwnership,
  },
  {
    slug: "async-send-sync-boundaries",
    source: "content/rust/async-send-sync-boundaries.mdx",
    metadata: rustAsyncSendSyncBoundariesMetadata,
    Component: RustAsyncSendSyncBoundaries,
  },
  {
    slug: "cargo-feature-dependencies",
    source: "content/rust/cargo-feature-dependencies.mdx",
    metadata: rustCargoFeatureDependenciesMetadata,
    Component: RustCargoFeatureDependencies,
  },
  {
    slug: "tests-fixtures-assertions",
    source: "content/rust/tests-fixtures-assertions.mdx",
    metadata: rustTestsFixturesAssertionsMetadata,
    Component: RustTestsFixturesAssertions,
  },
  {
    slug: "status-before-work",
    source: "content/git/status-before-work.mdx",
    metadata: gitStatusBeforeWorkMetadata,
    Component: GitStatusBeforeWork,
  },
  {
    slug: "interactive-staging-hunks",
    source: "content/git/interactive-staging-hunks.mdx",
    metadata: gitInteractiveStagingHunksMetadata,
    Component: GitInteractiveStagingHunks,
  },
  {
    slug: "atomic-commits-messages",
    source: "content/git/atomic-commits-messages.mdx",
    metadata: gitAtomicCommitsMessagesMetadata,
    Component: GitAtomicCommitsMessages,
  },
  {
    slug: "branch-naming-upstream",
    source: "content/git/branch-naming-upstream.mdx",
    metadata: gitBranchNamingUpstreamMetadata,
    Component: GitBranchNamingUpstream,
  },
  {
    slug: "fetch-pull-rebase-sync",
    source: "content/git/fetch-pull-rebase-sync.mdx",
    metadata: gitFetchPullRebaseSyncMetadata,
    Component: GitFetchPullRebaseSync,
  },
  {
    slug: "reviewing-diffs-before-push",
    source: "content/git/reviewing-diffs-before-push.mdx",
    metadata: gitReviewingDiffsBeforePushMetadata,
    Component: GitReviewingDiffsBeforePush,
  },
  {
    slug: "conflict-resolution-without-overwriting",
    source: "content/git/conflict-resolution-without-overwriting.mdx",
    metadata: gitConflictResolutionWithoutOverwritingMetadata,
    Component: GitConflictResolutionWithoutOverwriting,
  },
  {
    slug: "revert-vs-reset",
    source: "content/git/revert-vs-reset.mdx",
    metadata: gitRevertVsResetMetadata,
    Component: GitRevertVsReset,
  },
  {
    slug: "gitignore-and-secret-safety",
    source: "content/git/gitignore-and-secret-safety.mdx",
    metadata: gitGitignoreAndSecretSafetyMetadata,
    Component: GitGitignoreAndSecretSafety,
  },
  {
    slug: "tags-and-release-points",
    source: "content/git/tags-and-release-points.mdx",
    metadata: gitTagsAndReleasePointsMetadata,
    Component: GitTagsAndReleasePoints,
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
  source: lesson.source,
  Component: lesson.Component,
}));
