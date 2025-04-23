import { config } from 'typescript-eslint';

import baseConfig from './index';

const scriptConfig = config(
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
