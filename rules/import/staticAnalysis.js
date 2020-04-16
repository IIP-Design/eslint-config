module.exports = {
  rules: {
    'import/default': 'off',
    'import/named': 'error',
    'import/namespace': 'off',
    'import/no-absolute-path': 'error',
    'import/no-cycle': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-internal-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/no-self-import': 'error',
    'import/no-unresolved': [
      'error',
      {
        amd: true,
        commonjs: true
      }
    ],
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true
      }
    ],
    'import/no-webpack-loader-syntax': 'warn'
  }
};
