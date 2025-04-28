import type { TSESLint } from '@typescript-eslint/utils';

const nodeStylisticRules: TSESLint.SharedConfig.RulesRecord = {
  'n/callback-return': 'error',
  'n/exports-style': [
    'error', 'module.exports', { allowBatchAssign: true },
  ],
  'n/file-extension-in-import': [
    'error', 'always', { '.js': 'never', '.jsx': 'never', '.ts': 'never', '.tsx': 'never' },
  ],
  'n/global-require': 'error',
  'n/no-mixed-requires': 'error',
  'n/no-process-env': 'off',
  'n/no-restricted-import': 'off',
  'n/no-restricted-require': 'off',
  'n/no-sync': 'off',
  'n/prefer-global/buffer': ['error', 'always'],
  'n/prefer-global/console': ['error', 'always'],
  'n/prefer-global/process': ['error', 'always'],
  'n/prefer-global/text-decoder': ['error', 'always'],
  'n/prefer-global/text-encoder': ['error', 'always'],
  'n/prefer-global/url-search-params': ['error', 'always'],
  'n/prefer-global/url': ['error', 'always'],
  'n/prefer-promises/dns': 'error',
  'n/prefer-promises/fs': 'error',
};

export default nodeStylisticRules;
