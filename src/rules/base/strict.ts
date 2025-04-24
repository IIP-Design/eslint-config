import { TSESLint } from '@typescript-eslint/utils';

/**
 * These rules relate to strict mode directives.
 */
const strictRules: TSESLint.SharedConfig.RulesRecord = {
  // Generally Babel will take care of this for us
  strict: ['error', 'never'],
};

export default strictRules;
