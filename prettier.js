const rules = [
  './shared',
  './rules/prettier/configurable',
  './rules/prettier/core',
  './rules/react/prettier',
  './rules/testing/jest.js',
].map(require.resolve);

module.exports = {
  extends: rules,
};
