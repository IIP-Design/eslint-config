/* eslint-disable @typescript-eslint/no-explicit-any */
import globals from 'globals';
import { config } from 'typescript-eslint';
import importPlugin, { createNodeResolver } from 'eslint-plugin-import-x';

// import jestPlugin from 'eslint-plugin-jest';
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
      ...baseRules as Partial<Record<string, any>>,
      ...importRules as Partial<Record<string, any>>,
      ...nodeRules as Partial<Record<string, any>>,
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
    },
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    // plugins: {
    //   jest: jestPlugin,
    // },
  },
  {
    // Allow use of dev dependencies in webpack configs
    files: ['**/webpack.*.js'],
    rules: {
      'n/no-unpublished-require': 'off',
    },
  },
  {
    files: ['**/eslint.config.js'],
    rules: {
      'n/file-extension-in-import': 'off',
    },
  },
);

export default baseConfig;
