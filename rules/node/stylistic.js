module.exports = {
  rules: {
    'node/callback-return': 'error',
    'node/exports-style': [
      'error', 'module.exports', { allowBatchAssign: true },
    ],
    'node/file-extension-in-import': [
      'error', 'always', { '.js': 'never', '.jsx': 'never' },
    ],
    'node/global-require': 'error',
    'node/no-mixed-requires': 'error',
    'node/no-process-env': 'off',
    'node/no-restricted-import': 'off',
    'node/no-restricted-require': 'off',
    'node/no-sync': 'off',
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-global/text-decoder': ['error', 'always'],
    'node/prefer-global/text-encoder': ['error', 'always'],
    'node/prefer-global/url-search-params': ['error', 'always'],
    'node/prefer-global/url': ['error', 'always'],
    'node/prefer-promises/dns': 'error',
    'node/prefer-promises/fs': 'error',
  },
};
