const rules = ['./shared', './rules/prettier/configurable', './rules/prettier/no-prettier'].map(
  require.resolve
);

module.exports = {
  extends: rules
};
