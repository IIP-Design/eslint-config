const prettierConfig = require('../prettier');

describe('Prettier config', () => {
  it('loads without error', () => {
    expect(() => prettierConfig).not.toThrow();
  });

  it('includes the shared, Prettier, and Jest rulesets', () => {
    const extension = prettierConfig.extends;

    expect(extension).toHaveLength(5);

    expect(extension[0].endsWith('shared.js')).toEqual(true);
    expect(extension[1].endsWith('rules/prettier/configurable.js')).toEqual(true);
    expect(extension[2].endsWith('rules/prettier/core.js')).toEqual(true);
    expect(extension[3].endsWith('rules/react/prettier.js')).toEqual(true);
    expect(extension[4].endsWith('rules/testing/jest.js')).toEqual(true);
  });
});
