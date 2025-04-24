import { TSESLint } from '@typescript-eslint/utils';

/**
 * These rules relate to strict mode directives.
 */
const strictRules: TSESLint.SharedConfig.RulesRecord = {
  strict: ['error', 'safe'],
};

export default strictRules;
