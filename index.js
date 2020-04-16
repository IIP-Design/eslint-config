const rules = [
  './rules/base/bestPractices',
  './rules/base/errors',
  './rules/base/es6',
  './rules/base/nodeCommon',
  './rules/base/strict',
  './rules/base/stylistic',
  './rules/base/variables',
  './rules/import/index.js',
  './rules/prettier/configurable',
  './rules/prettier/core'
].map( require.resolve );

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    jquery: true,
    node: true,
    serviceworker: true
  },
  extends: rules,
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    // Prettier overrides:
    'arrow-parens': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    'space-in-parens': ['warn', 'always']
  }
};
