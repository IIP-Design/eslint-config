import type { TSESLint } from '@typescript-eslint/utils';

const nodeBestPracticeRules: TSESLint.SharedConfig.RulesRecord = {
  'n/no-deprecated-api': 'error',
};

export default nodeBestPracticeRules;
