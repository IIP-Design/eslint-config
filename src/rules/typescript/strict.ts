import type { TSESLint } from '@typescript-eslint/utils';

import overrides from './overrides';

const baseRules: TSESLint.SharedConfig.RulesRecord = {
  '@typescript-eslint/no-dynamic-delete': 'error',
  '@typescript-eslint/no-extraneous-class': [
    'error',
    {
      allowConstructorOnly: false,
      allowEmpty: false,
      allowStaticOnly: false,
      allowWithDecorator: false,
    },
  ],
  '@typescript-eslint/no-invalid-void-type': [
    'error',
    {
      allowAsThisParameter: false,
      allowInGenericTypeArguments: true,
    },
  ],
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
  '@typescript-eslint/no-non-null-assertion': 'error',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/prefer-literal-enum-member': [
    'error',
    { allowBitwiseExpressions: false },
  ],
  '@typescript-eslint/unified-signatures': [
    'error',
    {
      ignoreDifferentlyNamedParameters: false,
      ignoreOverloadsWithDifferentJSDoc: false,
    },
  ],
  ...overrides.baseStrict,
};

const typeCheckedRules: TSESLint.SharedConfig.RulesRecord = {
  '@typescript-eslint/no-confusing-void-expression': [
    'error',
    {
      ignoreArrowShorthand: false,
      ignoreVoidOperator: false,
      ignoreVoidReturningFunctions: false,
    },
  ],
  '@typescript-eslint/no-deprecated': 'error',
  '@typescript-eslint/no-meaningless-void-operator': [
    'error',
    { checkNever: false },
  ],
  '@typescript-eslint/no-misused-spread': 'error',
  '@typescript-eslint/no-mixed-enums': 'error',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
    'error',
    {
      allowComparingNullableBooleansToFalse: true,
      allowComparingNullableBooleansToTrue: true,
    },
  ], // requires strictNullChecks to be enabled in tsconfig
  '@typescript-eslint/no-unnecessary-condition': [
    'error',
    {
      allowConstantLoopConditions: 'never',
      checkTypePredicates: false,
    },
  ],
  '@typescript-eslint/no-unnecessary-template-expression': 'error',
  '@typescript-eslint/no-unnecessary-type-arguments': 'error',
  '@typescript-eslint/no-unnecessary-type-parameters': 'warn',
  '@typescript-eslint/prefer-reduce-type-parameter': 'error',
  '@typescript-eslint/prefer-return-this-type': 'error',
  '@typescript-eslint/related-getter-setter-pairs': 'error',
  '@typescript-eslint/use-unknown-in-catch-callback-variable': 'off',
};

const strictRules = {
  base: baseRules,
  typeChecked: typeCheckedRules,
};

export default strictRules;
