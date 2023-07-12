import baseConfig from './index.js';

const config = [
  ...baseConfig,
  {
    files: ['**/*.js'],
    rules: {
      'import/extensions': [
        'warn',
        'always',
      ],
      'import/no-useless-path-segments': 'off',
      'node/file-extension-in-import': ['error', 'always'],
    },
  },
];

export default config;
