/**
 * @deprecated - The Lab team has largely phased out the use
 * of Prettier. As such we no longer intend to use (and will
 * no longer maintain) this configuration.
 */
const rules = [
  './shared',
  './rules/prettier/configurable',
  './rules/prettier/core',
  './rules/react/prettier',
  './rules/testing/jest.js',
].map( require.resolve );

module.exports = {
  'extends': rules,
};
