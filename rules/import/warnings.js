module.exports = {
  rules: {
    'import/export': 'error',
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-unused-modules': [
      'warn',
      {
        missingExports: false,
        unusedExports: true,
      },
    ],
  },
};