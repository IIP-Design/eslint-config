/**
 * Some rules include three parts to their configuration: a severity level,
 * a principal option value, and an object of additional options.
 */
const THREE_PART_RULES = [
  'lines-between-class-members',
  'object-shorthand',
  'spaced-comment',
  'import-x/extensions',
  'n/exports-style',
  'n/file-extension-in-import',
  'react/destructuring-assignment',
];

/**
 * Some rules take a single string as their option rather than an
 * object of options.
 */
const STRING_OPTION_RULES = [
  'eqeqeq',
  'logical-assignment-operators',
  'no-cond-assign',
  'no-inner-declarations',
  'no-return-assign',
  'one-var',
  'operator-assignment',
  'strict',
  'import-x/consistent-type-specifier-style',
  'react/jsx-boolean-value',
  'react/jsx-closing-bracket-location',
  'react/jsx-equals-spacing',
  'react/jsx-first-prop-new-line',
  'react/no-did-mount-set-state',
  'react/no-did-update-set-state',
  'react/no-will-update-set-state',
  'react/prefer-es6-class',
  '@typescript-eslint/consistent-generic-constructors',
  '@typescript-eslint/consistent-indexed-object-style',
  '@typescript-eslint/consistent-type-definitions',
  '@typescript-eslint/method-signature-style',
  '@typescript-eslint/return-await',
];

/**
 * Some rules do not follow the common configuration pattern and expect unusual options.
 * These instances are rare enough that is not work creating special tests for them.
 */
const SPECIAL_CASE_RULES = [
  'max-classes-per-file',
  'no-restricted-properties',
  'no-restricted-globals',
  'prefer-destructuring',
  'no-restricted-syntax',
  'padding-line-between-statements',
  'react/jsx-indent',
  'react/jsx-indent-props',
  '@typescript-eslint/prefer-destructuring',
  '@typescript-eslint/naming-convention',
];

/**
 * Checks whether a rule is one of the eslint-plugin-n "prefer-global" rules.
 * These are all string option rules and this approach simpler than listing all
 * these rules out in an array.
 * @param name The name of a given rule.
 * @returns Whether or not it is a "prefer-global" rule.
 */
const isNodePreferGlobal = ( name: string ) => name.startsWith( 'n/prefer-global' );

/**
 * Check whether a given rule follows some unusual configuration pattern that requires special handling.
 * @param name The name of a given rule.
 * Exception data for the given rule.
*/
export const isRuleException = ( name: string ) => {
  const isSpecialCase = SPECIAL_CASE_RULES.includes( name );
  const isStringOpt = isNodePreferGlobal( name ) || STRING_OPTION_RULES.includes( name );
  const isThreePart = THREE_PART_RULES.includes( name );
  const expectedLength = isThreePart ? 3 : 2;

  return {
    expectedLength,
    isSpecialCase,
    isStringOpt,
    isThreePart,
  };
};
