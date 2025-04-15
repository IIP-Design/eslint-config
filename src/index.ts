/* eslint-disable @typescript-eslint/no-explicit-any */
import globals from 'globals';
import { config } from 'typescript-eslint';
import importPlugin, { createNodeResolver } from 'eslint-plugin-import-x';

// import jestPlugin from 'eslint-plugin-jest';
import nodePlugin from 'eslint-plugin-n';

import baseRules from './rules/base/index';
import importRules from './rules/import/index';
import nodeRules from './rules/node/index';

const baseConfig = config(
  {
    files: [
      '**/*.cjs', '**/*.js', '**/*.jsx', '**/*.mjs', '**/*.ts', '**/*.tsx',
    ],
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
      'import-x/extensions': [
        '.cjs', '.js', '.jsx', '.mjs', '.ts', '.tsx',
      ],
      'import-x/parsers': {
        espree: [
          '.js', '.cjs', '.mjs', '.jsx',
        ],
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import-x/resolver-next': [createNodeResolver()],
      n: {
        tryExtensions: [
          '.cjs', '.js', '.jsx', '.mjs', '.ts', '.tsx',
        ],
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
