import type { TSESLint } from '@typescript-eslint/utils';

/**
 * Some core ESLint rules do not support TypeScript syntax. In these cases, TypeScript ESLint
 * creates an "extension rule" that has the same functionality, but also supports TypeScript.
 *
 * Extension rules generally completely replace the base rule from ESLint core, therefore
 * we disable all of the equivalent base ESLint rules.
 */
const baseExtensions: TSESLint.SharedConfig.RulesRecord = {
  'class-methods-use-this': 'off', // @typescript-eslint/class-methods-use-this
  'default-param-last': 'off', // @typescript-eslint/default-param-last
  'init-declarations': 'off', // @typescript-eslint/init-declarations
  'max-params': 'off', // @typescript-eslint/max-params
  'no-dupe-class-members': 'off', // @typescript-eslint/no-dupe-class-members
  'no-invalid-this': 'off', // @typescript-eslint/no-invalid-this
  'no-loop-func': 'off', // @typescript-eslint/no-loop-func
  'no-magic-numbers': 'off', // @typescript-eslint/no-magic-numbers
  'no-redeclare': 'off', // @typescript-eslint/no-redeclare
  'no-restricted-imports': 'off', // @typescript-eslint/no-restricted-imports
  'no-shadow': 'off', // @typescript-eslint/no-shadow
  'no-use-before-define': 'off', // @typescript-eslint/no-use-before-define
};

const baseRecommended: TSESLint.SharedConfig.RulesRecord = {
  'no-array-constructor': 'off', // @typescript-eslint/no-array-constructor
  'no-unused-expressions': 'off', // @typescript-eslint/no-unused-expressions
  'no-unused-vars': 'off', // @typescript-eslint/no-unused-vars
  'no-useless-constructor': 'off', // @typescript-eslint/no-useless-constructor
};

const baseStrict: TSESLint.SharedConfig.RulesRecord = {
  'no-useless-constructor': 'off', // @typescript-eslint/no-useless-constructor
};

const baseStylistic: TSESLint.SharedConfig.RulesRecord = {
  'no-empty-function': 'off', // @typescript-eslint/no-empty-function
};

const typeCheckedExtensions: TSESLint.SharedConfig.RulesRecord = {
  'consistent-return': 'off', // @typescript-eslint/consistent-return
  'prefer-destructuring': 'off', // @typescript-eslint/prefer-destructuring
};

const typeCheckedRecommended: TSESLint.SharedConfig.RulesRecord = {
  'no-implied-eval': 'off', // @typescript-eslint/no-implied-eval
  'no-throw-literal': 'off', // @typescript-eslint/only-throw-error
  'prefer-promise-reject-errors': 'off', // @typescript-eslint/prefer-promise-reject-errors
  'require-await': 'off', // @typescript-eslint/require-await
};

const typeCheckedStylistic: TSESLint.SharedConfig.RulesRecord = {
  'dot-notation': 'off', // @typescript-eslint/dot-notation
};

const extensionOverrides = {
  baseExtensions,
  baseRecommended,
  baseStrict,
  baseStylistic,
  typeCheckedExtensions,
  typeCheckedRecommended,
  typeCheckedStylistic,
};

export default extensionOverrides;
