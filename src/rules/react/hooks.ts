import { TSESLint } from '@typescript-eslint/utils';

const reactHooksRules: TSESLint.SharedConfig.RulesRecord = {
  'react-hooks/exhaustive-deps': 'warn',
  'react-hooks/rules-of-hooks': 'error',
};

export default reactHooksRules;
