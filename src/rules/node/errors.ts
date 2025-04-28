import type { TSESLint } from '@typescript-eslint/utils';

const nodeErrorRules: TSESLint.SharedConfig.RulesRecord = {
  'n/handle-callback-err': 'off',
  'n/no-callback-literal': 'off',
  'n/no-exports-assign': 'error',
  'n/no-extraneous-import': 'error',
  'n/no-extraneous-require': 'error',
  'n/no-missing-import': 'off',
  'n/no-missing-require': 'error',
  'n/no-new-require': 'error',
  'n/no-path-concat': 'off',
  'n/no-process-exit': 'error',
  'n/no-unpublished-bin': 'error',
  'n/no-unpublished-import': [
    'error',
    {
      allowModules: [
        '@axe-core/react', '@testing-library/react', 'prop-types',
      ],
    },
  ],
  'n/no-unpublished-require': [
    'error',
    {
      allowModules: ['@next/bundle-analyzer', '@wordpress/scripts'],
    },
  ],
  'n/no-unsupported-features/es-builtins': 'error',
  'n/no-unsupported-features/es-syntax': 'off',
  'n/no-unsupported-features/node-builtins': 'error',
  'n/process-exit-as-throw': 'error',
  'n/shebang': 'error',
};

export default nodeErrorRules;
