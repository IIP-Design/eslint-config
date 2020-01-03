const rules = [
  './rules/base/bestPractices',
  './rules/base/errors',
  './rules/base/es6',
  './rules/base/nodeCommon',
  './rules/base/strict',
  './rules/base/stylistic',
  './rules/base/variables',
  // "./rules/import/index.js",
  './rules/prettier/configurable',
  './rules/prettier/core'
].map(require.resolve);

module.exports = {
  env: {
    browser: true
  },
  extends: rules,
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    strict: ['error', 'safe']
  }
};
