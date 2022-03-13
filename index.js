const rules = [
  './shared',
  './rules/prettier/configurable',
  './rules/prettier/no-prettier',
  './rules/testing/jest.js',
].map( require.resolve );

module.exports = {
  'extends': rules,
};
