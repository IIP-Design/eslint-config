import globals from 'globals';
import { config } from 'typescript-eslint';
import importPlugin, { createNodeResolver } from 'eslint-plugin-import-x';

import jestPlugin from 'eslint-plugin-jest';
import nodePlugin from 'eslint-plugin-n';

import baseRules from './rules/base/index';
import importRules from './rules/import/index';
import nodeRules from './rules/node/index';

import { extensions, allFilesWithExts } from './constants';

const baseConfig = config(
  {
    files: allFilesWithExts( extensions.all ),
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        ...globals.builtin,
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        ...globals.serviceworker,
      },
      parserOptions: {
        ecmaFeatures: {
          globalReturn: false,
          impliedStrict: true,
        },
        ecmaVersion: 'latest',
      },
    },
    name: 'gpalab/recommended',
    plugins: {
      'import-x': importPlugin,
      n: nodePlugin,
    },
    rules: {
      ...baseRules,
      ...importRules,
      ...nodeRules,
    },
    settings: {
      'import-x/extensions': extensions.all,
      'import-x/parsers': {
        espree: [...extensions.js, '.jsx'],
        '@typescript-eslint/parser': extensions.ts,
      },
      'import-x/resolver-next': [createNodeResolver()],
      n: {
        tryExtensions: extensions.all,
      },
      node: {
        version: '>=20.0.0',
      },
    },
  },
  {
    'extends': [jestPlugin.configs['flat/recommended']],
    files: ['**/*.test.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    name: 'gpalab/test-files',
    rules: {
      // For some reason this rule crashes the linter on test files.
      'import-x/dynamic-import-chunkname': 'off',
    },
    plugins: {
      jest: jestPlugin,
    },
  },
  {
    // Allow use of dev dependencies in config files
    files: [
      '**/webpack.*.{js,ts}',
      '**/jest.config.{js,ts}',
      '**/eslint.config.{js,ts}',
      '**/vite.config.{js,ts}',
    ],
    name: 'gpalab/config-files',
    rules: {
      'n/file-extension-in-import': 'off',
      'n/no-unpublished-require': 'off',
      'n/no-unpublished-import': 'off',
    },
  },
);

export default baseConfig;
