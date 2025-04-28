import type { TSESLint } from '@typescript-eslint/utils';
import overrides from './overrides';

const baseRules: TSESLint.SharedConfig.RulesRecord = {
  '@typescript-eslint/adjacent-overload-signatures': 'error',
  '@typescript-eslint/array-type': [
    'error',
    {
      'default': 'array',
      readonly: 'array',
    },
  ],
  '@typescript-eslint/ban-tslint-comment': 'error',
  '@typescript-eslint/class-literal-property-style': 'off',
  '@typescript-eslint/consistent-generic-constructors': ['error', 'constructor'],
  '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
  '@typescript-eslint/consistent-type-assertions': [
    'error',
    {
      arrayLiteralTypeAssertions: 'allow',
      assertionStyle: 'as',
      objectLiteralTypeAssertions: 'allow',
    },
  ],
  '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
  '@typescript-eslint/no-confusing-non-null-assertion': 'warn',
  '@typescript-eslint/no-empty-function': [
    'error',
    {
      allow: [
        'arrowFunctions', 'functions', 'methods', 'overrideMethods',
      ],
    },
  ],
  '@typescript-eslint/no-inferrable-types': [
    'error',
    {
      ignoreParameters: false,
      ignoreProperties: false,
    },
  ],
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  ...overrides.baseStylistic,
};

const typeCheckedRules: TSESLint.SharedConfig.RulesRecord = {
  '@typescript-eslint/dot-notation': [
    'error',
    {
      allowKeywords: true,
      allowIndexSignaturePropertyAccess: false,
      allowPrivateClassPropertyAccess: false,
      allowProtectedClassPropertyAccess: false,
    },
  ],
  '@typescript-eslint/non-nullable-type-assertion-style': 'error',
  '@typescript-eslint/prefer-find': 'error',
  '@typescript-eslint/prefer-includes': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': 'off',
  '@typescript-eslint/prefer-optional-chain': 'error',
  '@typescript-eslint/prefer-regexp-exec': 'off',
  '@typescript-eslint/prefer-string-starts-ends-with': [
    'error',
    {
      allowSingleElementEquality: 'never',
    },
  ],
  ...overrides.typeCheckedStylistic,
};

const stylisticRules = {
  base: baseRules,
  typeChecked: typeCheckedRules,
};

export default stylisticRules;
