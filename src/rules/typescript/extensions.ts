import type { TSESLint } from '@typescript-eslint/utils';

import overrides from './overrides';

const baseRules: TSESLint.SharedConfig.RulesRecord = {
  '@typescript-eslint/class-methods-use-this': [
    'warn',
    {
      enforceForClassFields: false,
      exceptMethods: [] as string[],
      ignoreOverrideMethods: false,
      ignoreClassesThatImplementAnInterface: false,
    },
  ],
  '@typescript-eslint/default-param-last': 'warn',
  '@typescript-eslint/init-declarations': 'off',
  '@typescript-eslint/max-params': 'off',
  '@typescript-eslint/no-dupe-class-members': 'off', // Unnecessary as already checked by the compiler.
  '@typescript-eslint/no-invalid-this': 'off', // Unnecessary as already checked by the compiler (when strict or noImplicitThis flags enabled).
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-magic-numbers': 'off',
  '@typescript-eslint/no-redeclare': 'off', // Unnecessary as already checked by the compiler.
  '@typescript-eslint/no-restricted-imports': 'off',
  '@typescript-eslint/no-shadow': [
    'error',
    {
      builtinGlobals: false,
      hoist: 'all',
      ignoreTypeValueShadow: true,
      ignoreFunctionTypeParameterNameValueShadow: true,
    },
  ],
  '@typescript-eslint/no-use-before-define': [
    'error',
    {
      allowNamedExports: false,
      classes: true,
      enums: true,
      functions: true,
      ignoreTypeReferences: true,
      typedefs: true,
      variables: true,
    },
  ],
  ...overrides.baseExtensions,
};

const typeCheckedRules: TSESLint.SharedConfig.RulesRecord = {
  '@typescript-eslint/consistent-return': 'off', // If desired, should use noImplicitReturns in tsconfig instead.
  '@typescript-eslint/prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
      enforceForDeclarationWithTypeAnnotation: false,
    },
  ],
  ...overrides.typeCheckedExtensions,
};

const extensionRules = {
  base: baseRules,
  typeChecked: typeCheckedRules,
};

export default extensionRules;
