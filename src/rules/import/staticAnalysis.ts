import type { TSESLint } from '@typescript-eslint/utils';

const importStaticAnalysisRules: TSESLint.SharedConfig.RulesRecord = {
  'import-x/default': 'off',
  'import-x/named': 'error',
  'import-x/namespace': 'off',
  'import-x/no-absolute-path': 'error',
  'import-x/no-cycle': 'error',
  'import-x/no-dynamic-require': 'error',
  'import-x/no-internal-modules': 'off',
  'import-x/no-relative-packages': 'off',
  'import-x/no-relative-parent-imports': 'off',
  'import-x/no-restricted-paths': 'off',
  'import-x/no-self-import': 'error',
  'import-x/no-unresolved': [
    'error',
    {
      amd: true,
      commonjs: true,
    },
  ],
  'import-x/no-useless-path-segments': [
    'error',
    {
      noUselessIndex: false,
    },
  ],
  'import-x/no-webpack-loader-syntax': 'warn',
};

export default importStaticAnalysisRules;
