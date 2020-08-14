const reactConfig = require('../react');
const a11yRuleset = require('../rules/react/a11y');
const baseRuleset = require('../rules/react/base');
const deprecatedRuleset = require('../rules/deprecated/react');
const hooksRuleset = require('../rules/react/hooks');
const jsxRuleset = require('../rules/react/jsx');
const noPrettierRuleset = require('../rules/react/no-prettier');

describe('React config', () => {
  it('loads without error', () => {
    expect(() => reactConfig).not.toThrow();
  });

  it('includes the React rulesets', () => {
    const extension = reactConfig.extends;

    expect(extension).toHaveLength(6);

    expect(extension[0].endsWith('rules/deprecated/react.js')).toEqual(true);
    expect(extension[1].endsWith('rules/react/a11y.js')).toEqual(true);
    expect(extension[2].endsWith('rules/react/base.js')).toEqual(true);
    expect(extension[3].endsWith('rules/react/hooks.js')).toEqual(true);
    expect(extension[4].endsWith('rules/react/jsx.js')).toEqual(true);
    expect(extension[5].endsWith('rules/react/no-prettier.js')).toEqual(true);
  });

  it('loads the React ESLint plugin', () => {
    const { plugins } = reactConfig;

    expect(plugins).toHaveLength(1);
    expect(plugins.includes('eslint-plugin-react')).toEqual(true);
  });

  it("detects the user's version of React", () => {
    const reactSettings = reactConfig.settings.react;

    expect(reactSettings).toBeDefined();
    expect(reactSettings.version).toEqual('detect');
  });
});

describe('React accessibility ruleset', () => {
  it('loads without error', () => {
    expect(() => a11yRuleset).not.toThrow();
  });

  it('loads the React JSX accessibility ESLint plugin', () => {
    const { plugins } = a11yRuleset;

    expect(plugins).toHaveLength(1);
    expect(plugins.includes('eslint-plugin-jsx-a11y')).toEqual(true);
  });
});

describe('React base ruleset', () => {
  it('loads without error', () => {
    expect(() => baseRuleset).not.toThrow();
  });
});

describe('Deprecated React ruleset', () => {
  it('loads without error', () => {
    expect(() => deprecatedRuleset).not.toThrow();
  });
});

describe('React hooks ruleset', () => {
  it('loads without error', () => {
    expect(() => hooksRuleset).not.toThrow();
  });

  it('loads the React hooks ESLint plugin', () => {
    const { plugins } = hooksRuleset;

    expect(plugins).toHaveLength(1);
    expect(plugins.includes('eslint-plugin-react-hooks')).toEqual(true);
  });
});

describe('React JSX ruleset', () => {
  it('loads without error', () => {
    expect(() => jsxRuleset).not.toThrow();
  });
});

describe('React no-Prettier ruleset', () => {
  it('loads without error', () => {
    expect(() => noPrettierRuleset).not.toThrow();
  });
});
