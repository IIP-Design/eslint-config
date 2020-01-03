module.exports = {
  rules: {
    'import/dynamic-import-chunkname': 'warn',
    'import/exports-last': 'off',
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'import/first': 'error',
    'import/group-exports': 'off',
    'import/max-dependencies': [
      'off',
      {
        max: 15,
      },
    ],
    'import/newline-after-import': [
      'error',
      {
        count: 1,
      },
    ],
    'import/no-anonymous-default-export': 'error',
    'import/no-default-export': 'off', // Inverse of prefer-default-export
    'import/no-duplicates': 'error',
    'import/no-named-default': 'error',
    'import/no-named-export': 'off',
    'import/no-namespace': 'off',
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.css', '**/*.sass', '**/*.scss'],
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal'
        ],
      }
    ],
    'import/prefer-default-export': 'error',
  },
};