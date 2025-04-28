import type { TSESLint } from '@typescript-eslint/utils';
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
  '@typescript-eslint/await-thenable': 'error',
  '@typescript-eslint/no-array-delete': 'error',
  '@typescript-eslint/no-base-to-string': 'error',
  '@typescript-eslint/no-duplicate-type-constituents': [
    'error',
    {
      ignoreIntersections: false,
      ignoreUnions: false,
    },
  ],
  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      checkThenables: false,
      ignoreIIFE: false,
      ignoreVoid: true,
    },
  ],
  '@typescript-eslint/no-for-in-array': 'error',
  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksConditionals: true,
      checksSpreads: true,
      checksVoidReturn: true,
    },
  ],
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unsafe-argument': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'error',
  '@typescript-eslint/no-unsafe-call': 'error',
  '@typescript-eslint/no-unsafe-enum-comparison': 'error',
  '@typescript-eslint/no-unsafe-member-access': 'error',
  '@typescript-eslint/no-unsafe-return': 'error',
  '@typescript-eslint/no-unsafe-unary-minus': 'error',
  '@typescript-eslint/only-throw-error': [
    'error',
    {
      allowThrowingAny: false,
      allowThrowingUnknown: true,
    },
  ],
  '@typescript-eslint/prefer-promise-reject-errors': [
    'error',
    {
      allowEmptyReject: true,
      allowThrowingAny: false,
      allowThrowingUnknown: true,
    },
  ],
  '@typescript-eslint/require-await': 'off',
  '@typescript-eslint/restrict-plus-operands': [
    'error',
    {
      allowAny: false,
      allowBoolean: false,
      allowNullish: false,
      allowNumberAndString: false,
      allowRegExp: false,
      skipCompoundAssignments: false,
    },
  ],
  '@typescript-eslint/restrict-template-expressions': [
    'error',
    {
      allow: [
        { name: [
          'Error', 'URL', 'URLSearchParams',
        ],
        from: 'lib' },
      ],
      allowAny: false,
      allowBoolean: true,
      allowNever: false,
      allowNullish: false,
      allowNumber: true,
      allowRegExp: false,
    },
  ],
  '@typescript-eslint/return-await': ['error', 'in-try-catch'],
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
