/**
 * These rules relate to variable declarations.
 */
import confusingGlobals from './confusingGlobals.js';

const variableRules = {
  'init-declarations': 'off',
  'no-delete-var': 'error',
  'no-label-var': 'error',
  'no-restricted-globals': ['error'].concat( confusingGlobals ),
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
