const rules = [
  './rules/react/a11y',
  './rules/react/base',
  './rules/react/hooks',
  './rules/react/jsx',
  './rules/react/prettier'
].map(require.resolve);

module.exports = {
  extends: rules,
  rules: {}
};
