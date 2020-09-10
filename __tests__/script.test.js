const scriptConfig = require('../script');

describe('Node.js script config', () => {
  it('loads without error', () => {
    expect(() => scriptConfig).not.toThrow();
  });

  it('includes the Node.js script rulesets', () => {
    const extension = scriptConfig.extends;

    expect(extension).toHaveLength(1);

    expect(extension[0].endsWith('index.js')).toEqual(true);
  });

  it('sets the parser options', () => {
    const { ecmaFeatures } = scriptConfig.parserOptions;
    const { sourceType } = scriptConfig.parserOptions;

    expect(ecmaFeatures.globalReturn).toEqual(true);
    expect(sourceType).toEqual('script');
  });
});
