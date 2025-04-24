/* eslint-disable import-x/extensions */
import { defineConfig } from 'eslint/config';

import tsConfig from './dist/typescript.js';

const config = [
  ...tsConfig,
  {
    ignores: [
      '__tests__/*', 'coverage/*', 'dist/*',
    ],
    rules: {
      'n/no-unpublished-import': [
        'error',
        {
          allowModules: ['@typescript-eslint/utils'],
        },
      ],
    },
  },
];

export default defineConfig( config );
