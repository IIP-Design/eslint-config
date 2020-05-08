const rules = [
  './shared',
  './rules/prettier/configurable',
  './rules/prettier/core',
  './rules/react/prettier',
].map(require.resolve);

module.exports = {
  extends: rules,
};
