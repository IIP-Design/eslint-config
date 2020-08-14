const rules = ['../deprecated/node', './bestPractices', './errors', './stylistic'].map(
  require.resolve
);

module.exports = {
  extends: rules,
  plugins: ['eslint-plugin-node'],
};
