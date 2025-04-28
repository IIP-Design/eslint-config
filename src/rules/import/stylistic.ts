import type { TSESLint } from '@typescript-eslint/utils';

const importStylisticRules: TSESLint.SharedConfig.RulesRecord = {
  'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'import-x/dynamic-import-chunkname': ['warn', { allowEmpty: true }],
  'import-x/exports-last': 'off',
  'import-x/extensions': [
    'warn',
    'always',
    {
      js: 'never',
      json: 'always',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],
  'import-x/first': 'error',
  'import-x/group-exports': 'off',
  'import-x/max-dependencies': 'off',
  'import-x/newline-after-import': [
    'error',
    {
      considerComments: true,
      count: 1,
    },
  ],
  'import-x/no-anonymous-default-export': 'warn',
  'import-x/no-default-export': 'off', // Inverse of prefer-default-export
  'import-x/no-duplicates': 'error',
  'import-x/no-named-default': 'error',
  'import-x/no-named-export': 'off',
  'import-x/no-namespace': 'off',
  'import-x/no-unassigned-import': [
    'error',
    {
      allow: [
        '**/*.css', '**/*.sass', '**/*.scss', '@babel/polyfill', 'dotenv/config',
      ],
    },
  ],
  'import-x/order': 'off',
  'import-x/prefer-default-export': 'off',
};

export default importStylisticRules;
