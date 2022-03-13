const rules = ['./shared', './rules/testing/cypress.js'].map( require.resolve );

module.exports = {
  'extends': rules,
};
