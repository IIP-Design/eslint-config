const defaultConfig = require('../index');
const sharedConfig = require('../shared');

const deprecatedRuleset = require('../rules/deprecated/deprecated');
const bestPracticesRuleset = require('../rules/base/bestPractices');
const errorsRuleset = require('../rules/base/errors');
const es6Ruleset = require('../rules/base/es6');
const strictRuleset = require('../rules/base/strict');
const stylisticRuleset = require('../rules/base/stylistic');
const variablesRuleset = require('../rules/base/variables');
const importRuleset = require('../rules/import/index.js');
const nodeRuleset = require('../rules/node/index.js');

describe('Default config', () => {
  it('loads without error', () => {
    expect(() => defaultConfig).not.toThrow();
  });

  it('includes the shared, no-Prettier, and Jest rulesets', () => {
    const extension = defaultConfig.extends;

    expect(extension).toHaveLength(4);

    expect(extension[0].endsWith('shared.js')).toEqual(true);
    expect(extension[1].endsWith('rules/prettier/configurable.js')).toEqual(true);
    expect(extension[2].endsWith('rules/prettier/no-prettier.js')).toEqual(true);
    expect(extension[3].endsWith('rules/testing/jest.js')).toEqual(true);
  });
});

describe('Shared configurations', () => {
  it('loads without error', () => {
    expect(() => sharedConfig).not.toThrow();
  });

  it('includes the base, import, and deprecated rulesets', () => {
    const extension = sharedConfig.extends;

    expect(extension).toHaveLength(9);

    expect(extension[0].endsWith('rules/deprecated/deprecated.js')).toEqual(true);
    expect(extension[1].endsWith('rules/base/bestPractices.js')).toEqual(true);
    expect(extension[2].endsWith('rules/base/errors.js')).toEqual(true);
    expect(extension[3].endsWith('rules/base/es6.js')).toEqual(true);
    expect(extension[4].endsWith('rules/base/strict.js')).toEqual(true);
    expect(extension[5].endsWith('rules/base/stylistic.js')).toEqual(true);
    expect(extension[6].endsWith('rules/base/variables.js')).toEqual(true);
    expect(extension[7].endsWith('rules/import/index.js')).toEqual(true);
    expect(extension[8].endsWith('rules/node/index.js')).toEqual(true);
  });

  it('makes the commons globals available to ESLint', () => {
    const { env } = sharedConfig;

    expect(env).toBeDefined();
    expect(env.browser).toEqual(true);
    expect(env.es6).toEqual(true);
    expect(env.jquery).toEqual(true);
    expect(env.node).toEqual(true);
    expect(env.serviceworker).toEqual(true);
  });

  it('sets the parser options', () => {
    const { ecmaFeatures } = sharedConfig.parserOptions;
    const { ecmaVersion } = sharedConfig.parserOptions;
    const { sourceType } = sharedConfig.parserOptions;

    expect(ecmaFeatures.impliedStrict).toEqual(true);
    expect(ecmaVersion).toEqual(2020);
    expect(sourceType).toEqual('module');
  });
});

describe('Deprecates ruleset', () => {
  it('loads without error', () => {
    expect(() => deprecatedRuleset).not.toThrow();
  });
});

describe('Best practices ruleset', () => {
  it('loads without error', () => {
    expect(() => bestPracticesRuleset).not.toThrow();
  });
});

describe('Errors ruleset', () => {
  it('loads without error', () => {
    expect(() => errorsRuleset).not.toThrow();
  });
});
describe('ES6 base ruleset', () => {
  it('loads without error', () => {
    expect(() => es6Ruleset).not.toThrow();
  });
});

describe('Strict mode ruleset', () => {
  it('loads without error', () => {
    expect(() => strictRuleset).not.toThrow();
  });
});

describe('Stylistic ruleset', () => {
  it('loads without error', () => {
    expect(() => stylisticRuleset).not.toThrow();
  });
});

describe('Variables ruleset', () => {
  it('loads without error', () => {
    expect(() => variablesRuleset).not.toThrow();
  });
});

describe('Import ruleset', () => {
  it('loads without error', () => {
    expect(() => importRuleset).not.toThrow();
  });
});

describe('Node ruleset', () => {
  it('loads without error', () => {
    expect(() => nodeRuleset).not.toThrow();
  });
});
