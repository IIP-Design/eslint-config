const rules = ['./index'].map(require.resolve);

module.exports = {
  extends: rules,
  parserOptions: {
    ecmaFeatures: { globalReturn: true },
    sourceType: 'script',
  },
};
