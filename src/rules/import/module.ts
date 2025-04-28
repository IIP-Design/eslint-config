import type { TSESLint } from '@typescript-eslint/utils';

const importModuleRules: TSESLint.SharedConfig.RulesRecord = {
  'import-x/no-amd': 'error',
  'import-x/no-commonjs': 'off',
  'import-x/no-import-module-exports': 'off',
  'import-x/no-nodejs-modules': 'off',
  'import-x/unambiguous': 'off',
};

export default importModuleRules;
