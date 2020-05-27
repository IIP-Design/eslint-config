const jestRuleset = require('../rules/testing/jest');

describe('Jest ruleset', () => {
  it('loads without error', () => {
    expect(() => jestRuleset).not.toThrow();
  });

  it('makes the Jest globals available to ESLint', () => {
    const { env } = jestRuleset;

    expect(env).toBeDefined();
    expect(env.jest).toEqual(true);
  });

  it('includes the Jest ESLint plugin recommended rules', () => {
    const extension = jestRuleset.extends;

    expect(extension).toHaveLength(1);
    expect(extension.includes('plugin:jest/recommended')).toEqual(true);
  });

  it('loads the Jest ESLint plugin', () => {
    const { plugins } = jestRuleset;

    expect(plugins).toHaveLength(1);
    expect(plugins.includes('eslint-plugin-jest')).toEqual(true);
  });
});
