const rules = ['./module', './staticAnalysis', './stylistic', './warnings'].map(require.resolve);

module.exports = {
  extends: rules,
  plugins: ['eslint-plugin-import'],
};
