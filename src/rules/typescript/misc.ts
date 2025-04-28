import type { TSESLint } from '@typescript-eslint/utils';

const baseRules: TSESLint.SharedConfig.RulesRecord = {
  '@typescript-eslint/consistent-type-imports': [
    'error',
    {
      disallowTypeAnnotations: true,
      fixStyle: 'separate-type-imports',
      prefer: 'type-imports',
    },
  ],
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-member-accessibility': [
    'error',
    {
      accessibility: 'no-public',
    },
  ],
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/member-ordering': 'off',
  '@typescript-eslint/method-signature-style': ['error', 'property'],
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/no-restricted-types': 'off',
  '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
  '@typescript-eslint/no-useless-empty-export': 'error',
  '@typescript-eslint/parameter-properties': [
    'error',
    {
      allow: [],
      prefer: 'class-property',
    },
  ],
  '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/typedef': 'off',
};

const typeCheckedRules: TSESLint.SharedConfig.RulesRecord = {
  '@typescript-eslint/consistent-type-exports': [
    'error',
    { fixMixedExportsWithInlineTypeSpecifier: false },
  ],
  '@typescript-eslint/naming-convention': [
    'warn',
    {
      selector: 'import',
      format: ['camelCase', 'PascalCase'],
    },
    {
      selector: 'variable',
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
      trailingUnderscore: 'allow',
    },
    {
      selector: 'variable',
      modifiers: ['destructured'],
      format: null,
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
    {
      selector: 'interface',
      format: ['PascalCase'],
      prefix: ['I'],
    },
    {
      selector: ['typeAlias', 'typeParameter'],
      format: ['PascalCase'],
      prefix: ['T'],
    },
    {
      selector: 'memberLike',
      modifiers: ['private'],
      format: ['camelCase'],
      leadingUnderscore: 'require',
    },
  ],
  '@typescript-eslint/no-unnecessary-qualifier': 'error',
  '@typescript-eslint/no-unsafe-type-assertion': 'off',
  '@typescript-eslint/prefer-readonly': [
    'error',
    { onlyInlineLambdas: false },
  ],
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/promise-function-async': [
    'error',
    {
      allowAny: true,
      checkArrowFunctions: true,
      checkFunctionDeclarations: true,
      checkFunctionExpressions: true,
      checkMethodDeclarations: true,
    },
  ],
  '@typescript-eslint/require-array-sort-compare': [
    'error',
    { ignoreStringArrays: true },
  ],
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/switch-exhaustiveness-check': [
    'error',
    {
      allowDefaultCaseForExhaustiveSwitch: true,
      considerDefaultExhaustiveForUnions: true,
      requireDefaultForNonUnion: true,
    },
  ],
};

const miscRules = {
  base: baseRules,
  typeChecked: typeCheckedRules,
};

export default miscRules;
