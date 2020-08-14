const rules = [
  './rules/deprecated/deprecated',
  './rules/base/bestPractices',
  './rules/base/errors',
  './rules/base/es6',
  './rules/base/strict',
  './rules/base/stylistic',
  './rules/base/variables',
  './rules/import/index.js',
  './rules/node/index.js',
].map(require.resolve);

module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true,
    node: true,
    serviceworker: true,
  },
  extends: rules,
  parserOptions: {
    ecmaFeatures: {
      impliedStrict: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};
