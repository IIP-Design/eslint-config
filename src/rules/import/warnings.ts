import { TSESLint } from '@typescript-eslint/utils';

const importWarningRules: TSESLint.SharedConfig.RulesRecord = {
  'import-x/export': 'error',
  'import-x/no-deprecated': 'error',
  'import-x/no-empty-named-blocks': 'error',
  'import-x/no-extraneous-dependencies': [
    'warn',
    {
      devDependencies: true,
      optionalDependencies: true,
      peerDependencies: true,
    },
  ],
  'import-x/no-mutable-exports': 'error',
  'import-x/no-named-as-default': 'error',
  'import-x/no-named-as-default-member': 'error',
  'import-x/no-unused-modules': 'off',
};

export default importWarningRules;
