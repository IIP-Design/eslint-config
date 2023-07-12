import baseConfig from './index.js';

const scriptConfig = [
  ...baseConfig,
  {
    files: ['**/*.js'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          globalReturn: true,
        },
      },
      sourceType: 'script',
    },
  },
];

export default scriptConfig;
