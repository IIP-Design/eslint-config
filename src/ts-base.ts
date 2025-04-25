import { config, parser, plugin } from 'typescript-eslint';
import { createNodeResolver } from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { TSESLint } from '@typescript-eslint/utils';

import baseConfig from './index';
import tsRules from './rules/typescript/index';

import { extensions, allFilesWithExts } from './constants';

/**
 *
 * @param typeChecked Whether or not to enable linting with type information.
 * @returns The appropriate language options configuration.
 */
const setLanguageOptions = ( typeChecked: boolean ) => {
  const langOpts: TSESLint.FlatConfig.LanguageOptions = {
    parser,
  };

  if ( typeChecked ) {
    langOpts.parserOptions = {
      projectService: true,
      tsconfigRootDir: import.meta.dirname,
    };
  }

  return langOpts;
};

/**
 *
 * @param typeChecked Whether or not to enable linting with type information.
 * @returns The appropriate settings configuration.
 */
const setSettings = ( typeChecked: boolean ) => {
  const settings: TSESLint.SharedConfigurationSettings = {
    'import-x/resolver-next': [createTypeScriptImportResolver(), createNodeResolver()],
  };

  if ( typeChecked ) {
    // When using type checking we use import.meta to identify the location
    // of the tsconfig.json file. This feature is only available in Node >=21
    // therefore, in those cases we require Node 22 (LTS) or above.
    settings.node = {
      version: '>=22.0.0',
    };
  }

  return settings;
};

/**
 *
 * @param typeChecked Whether or not to enable linting with type information.
 * @returns The base TypeScript linting config adjusted based on whether type checking is enabled.
 */
const tsBaseConfig = ( typeChecked: boolean ) => config(
  baseConfig,
  {
    files: allFilesWithExts( extensions.ts ),
    languageOptions: setLanguageOptions( typeChecked ),
    name: `gpalab/typescript${typeChecked ? '-tc' : ''}`,
    plugins: {
      '@typescript-eslint': plugin,
    },
    rules: {
      ...tsRules( typeChecked ),
    },
    settings: setSettings( typeChecked ),
  },
);

export default tsBaseConfig;
