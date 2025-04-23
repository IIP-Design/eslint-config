import { config, configs, parser, plugin } from 'typescript-eslint';
import { createNodeResolver } from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

import baseConfig from './index';

import { extensions, allFilesWithExts } from './constants';

const scriptConfig = config(
  baseConfig,
  {
    files: allFilesWithExts( extensions.ts ),
    'extends': [configs.recommended],
    languageOptions: {
      parser,
    },
    plugins: {
      '@typescript-eslint': plugin,
    },
    settings: {
      'import-x/resolver-next': [createTypeScriptImportResolver(), createNodeResolver()],
    },
  },
);

export default scriptConfig;
