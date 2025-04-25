import { TSESLint } from '@typescript-eslint/utils';
import overrides from './overrides';

const baseRules: TSESLint.SharedConfig.RulesRecord = {
  '@typescript-eslint/ban-ts-comment': [
    'error',
    {
      minimumDescriptionLength: 10,
      'ts-check': false,
      'ts-expect-error': 'allow-with-description',
      'ts-ignore': true,
      'ts-nocheck': true,
    },
  ],
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-duplicate-enum-values': 'error',
  '@typescript-eslint/no-empty-object-type': [
    'error',
    {
      allowInterfaces: 'never',
      allowObjectTypes: 'never',
    },
  ],
  '@typescript-eslint/no-explicit-any': [
    'warn',
    {
      fixToUnknown: false,
      ignoreRestArgs: false,
    },
  ],
  '@typescript-eslint/no-extra-non-null-assertion': 'error',
  '@typescript-eslint/no-misused-new': 'error',
  '@typescript-eslint/no-namespace': [
    'error',
    {
      allowDeclarations: false,
      allowDefinitionFiles: true,
    },
  ],
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
  '@typescript-eslint/no-require-imports': 'error',
  '@typescript-eslint/no-this-alias': [
    'error',
    { allowDestructuring: true },
  ],
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-declaration-merging': 'error',
  '@typescript-eslint/no-unsafe-function-type': 'error',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true,
      enforceForJSX: true,
    },
  ],
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      args: 'after-used',
      argsIgnorePattern: 'res|next|^_',
      caughtErrors: 'all',
      destructuredArrayIgnorePattern: '^_',
      ignoreClassWithStaticInitBlock: false,
      ignoreRestSiblings: true,
      vars: 'all',
    },
  ],
  '@typescript-eslint/no-wrapper-object-types': 'error',
  '@typescript-eslint/prefer-as-const': 'error',
  '@typescript-eslint/prefer-namespace-keyword': 'error',
  '@typescript-eslint/triple-slash-reference': [
    'error',
    {
      lib: 'never',
      path: 'never',
      types: 'prefer-import',
    },
  ],
  ...overrides.baseRecommended,
};

const typeCheckedRules: TSESLint.SharedConfig.RulesRecord = {
  // '@typescript-eslint/await-thenable': '',
  '@typescript-eslint/no-array-delete': 'error',
  '@typescript-eslint/no-base-to-string': 'error',
  // '@typescript-eslint/no-duplicate-type-constituents': '',
  // '@typescript-eslint/no-floating-promises': '',
  // '@typescript-eslint/no-for-in-array': '',
  // '@typescript-eslint/no-implied-eval': '',
  // '@typescript-eslint/no-misused-promises': '',
  // '@typescript-eslint/no-redundant-type-constituents': '',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-unsafe-enum-comparison': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
  '@typescript-eslint/no-unsafe-unary-minus': 'error',
  // '@typescript-eslint/only-throw-error': '',
  // '@typescript-eslint/prefer-promise-reject-errors': '',
  // '@typescript-eslint/require-await': '',
  // '@typescript-eslint/restrict-plus-operands': '',
  // '@typescript-eslint/restrict-template-expressions': '',
  // '@typescript-eslint/return-await': '',
  '@typescript-eslint/unbound-method': [
    'error',
    { ignoreStatic: true },
  ],
  ...overrides.typeCheckedRecommended,
};

const recommendedRules = {
  base: baseRules,
  typeChecked: typeCheckedRules,
};

export default recommendedRules;
