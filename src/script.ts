import { defineConfig } from 'eslint/config';

import baseConfig from './index';

const scriptConfig = defineConfig(
  {
    'extends': [baseConfig],
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'script',
    },
    name: 'gpalab/script-files',
  },
);

export default scriptConfig;
