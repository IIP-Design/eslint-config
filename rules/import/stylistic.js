const importStylisticRules = {
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'import/dynamic-import-chunkname': 'warn',
  'import/exports-last': 'off',
  'import/extensions': [
    'warn',
    'always',
    {
      js: 'never',
      jsx: 'never',
    },
  ],
  'import/first': 'error',
  'import/group-exports': 'off',
  'import/max-dependencies': 'off',
  'import/newline-after-import': [
    'error',
    {
      considerComments: true,
      count: 1,
    },
  ],
  'import/no-anonymous-default-export': 'warn',
  'import/no-default-export': 'off', // Inverse of prefer-default-export
  'import/no-duplicates': 'error',
  'import/no-named-default': 'error',
  'import/no-named-export': 'off',
  'import/no-namespace': 'off',
  'import/no-unassigned-import': [
    'error',
    {
      allow: [
        '**/*.css', '**/*.sass', '**/*.scss', '@babel/polyfill', 'dotenv/config',
      ],
    },
  ],
  'import/order': 'off',
  'import/prefer-default-export': 'off',
};

export default importStylisticRules;
