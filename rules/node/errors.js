const nodeErrorRules = {
  'node/handle-callback-err': 'off',
  'node/no-callback-literal': 'off',
  'node/no-exports-assign': 'error',
  'node/no-extraneous-import': 'error',
  'node/no-extraneous-require': 'error',
  'node/no-missing-import': 'off',
  'node/no-missing-require': 'error',
  'node/no-new-require': 'error',
  'node/no-path-concat': 'off',
  'node/no-process-exit': 'error',
  'node/no-unpublished-bin': 'error',
  'node/no-unpublished-import': [
    'error',
    {
      allowModules: [
        '@axe-core/react', '@testing-library/react', 'prop-types',
      ],
    },
  ],
  'node/no-unpublished-require': [
    'error',
    {
      allowModules: ['@next/bundle-analyzer', '@wordpress/scripts'],
    },
  ],
  'node/no-unsupported-features/es-builtins': 'error',
  'node/no-unsupported-features/es-syntax': 'off',
  'node/no-unsupported-features/node-builtins': 'error',
  'node/process-exit-as-throw': 'error',
  'node/shebang': 'error',
};

export default nodeErrorRules;
