import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import jestPlugin from 'eslint-plugin-jest';
import nodePlugin from 'eslint-plugin-node';

import baseRules from './rules/base/index.js';
import importRules from './rules/import/index.js';
import nodeRules from './rules/node/index.js';

const baseConfig = [
  {
    files: ['**/*.js'],
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
    plugins: {
      'import': importPlugin,
      node: nodePlugin,
    },
    rules: {
      ...baseRules,
      ...importRules,
      ...nodeRules,
    },
    settings: {
      'import/parsers': {
        espree: [
          '.js', '.cjs', '.mjs', '.jsx',
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
    plugins: {
      jest: jestPlugin,
    },
  },
  {
    // Allow use of dev dependencies in webpack configs
    files: ['**/webpack.*.js'],
    rules: {
      'node/no-unpublished-require': 'off',
    },
  },
];

export default baseConfig;
