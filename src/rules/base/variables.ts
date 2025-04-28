import type { TSESLint } from '@typescript-eslint/utils';

/**
 * These rules relate to variable declarations.
 */
import confusingGlobals from './confusingGlobals';

const variableRules: TSESLint.SharedConfig.RulesRecord = {
  'init-declarations': 'off',
  'no-delete-var': 'error',
  'no-label-var': 'error',
  'no-restricted-globals': ['error', ...confusingGlobals],
  'no-shadow': [
    'error',
    {
      builtinGlobals: false,
      hoist: 'all',
    },
  ],
  'no-shadow-restricted-names': 'error',
  'no-undef': 'error',
  'no-undef-init': 'error',
  'no-undefined': 'off',
  'no-unused-vars': [
    'warn',
    {
      args: 'after-used',
      argsIgnorePattern: 'res|next|^err',
      caughtErrors: 'none',
      destructuredArrayIgnorePattern: '^_',
      ignoreRestSiblings: true,
      vars: 'all',
    },
  ],
  'no-use-before-define': [
    'error',
    {
      allowNamedExports: false,
      classes: true,
      functions: true,
      variables: true,
    },
  ],
};

export default variableRules;
