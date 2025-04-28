import type { TSESLint } from '@typescript-eslint/utils';

/**
 * The following @typescript-eslint rules have been deprecated.
 *
 * Listed in reverse chronological order relative to their
 * deprecation date and annotated with the following information:
 * package - version when deprecated - replacement rule if any
 *
 * A list of all deprecated rules can be found here: https://typescript-eslint.io/rules/?=deprecated
 *
 */
const deprecatedReactRules: TSESLint.SharedConfig.RulesRecord = {
  '@typescript-eslint/no-empty-interface': 'off', // ts - v8.0.0 - @typescript-eslint/no-empty-object-type
  '@typescript-eslint/no-loss-of-precision': 'off', // ts - v8.0.0 - eslint/no-loss-of-precision
  '@typescript-eslint/no-var-requires': 'off', // ts - v8.0.0 - @typescript-eslint/no-require-imports
  '@typescript-eslint/sort-type-constituents': 'off', // ts - v7.13.0 - eslint-plugin-perfectionist
  '@typescript-eslint/prefer-ts-expect-error': 'off', // ts - v7.11.0 - @typescript-eslint/ban-ts-comment
  '@typescript-eslint/no-type-alias': 'off', // ts - v6.0.0 - @typescript-eslint/consistent-type-definitions
};

export default deprecatedReactRules;
