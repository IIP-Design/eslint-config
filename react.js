import hooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';

import baseConfig from './index.js';
import reactRules from './rules/react/index.js';

const reactConfig = [
  ...baseConfig,
  {
    files: [
      '**/*.js', '**/*.jsx', '**/*.tsx',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
      react: reactPlugin,
      'react-hooks': hooksPlugin,
    },
    rules: {
      ...reactRules,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

export default reactConfig;
