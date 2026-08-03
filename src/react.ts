import { defineConfig } from 'eslint/config';

import type { ESLint } from 'eslint';

import hooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';

import reactRules from './rules/react/index';

import { extensions, allFilesWithExts } from './constants';

const reactConfig = defineConfig(
  {
    files: allFilesWithExts( extensions.react ),
    name: 'gpalab/react',
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
      react: reactPlugin,
      'react-hooks': hooksPlugin as ESLint.Plugin,
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
);

export default reactConfig;
