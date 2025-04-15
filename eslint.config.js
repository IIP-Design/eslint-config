/* eslint-disable import-x/extensions */
import { defineConfig } from 'eslint/config';

import tsConfig from './dist/typescript.js';

const config = [
  {
    ignores: [
      '__tests__/*', 'coverage/*', 'dist/*',
    ],
  },
  ...tsConfig,
];

export default defineConfig( config );
