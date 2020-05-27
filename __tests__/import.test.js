const importConfig = require('../rules/import/index');
const moduleRuleset = require('../rules/import/module');
const staticAnalysisRuleset = require('../rules/import/staticAnalysis');
const stylisticRuleset = require('../rules/import/stylistic');
const warningsRuleset = require('../rules/import/warnings');

describe('Import config', () => {
  it('loads without error', () => {
    expect(() => importConfig).not.toThrow();
  });

  it('includes the import rulesets', () => {
    const extension = importConfig.extends;

    expect(extension).toHaveLength(4);

    expect(extension[0].endsWith('rules/import/module.js')).toEqual(true);
    expect(extension[1].endsWith('rules/import/staticAnalysis.js')).toEqual(true);
    expect(extension[2].endsWith('rules/import/stylistic.js')).toEqual(true);
    expect(extension[3].endsWith('rules/import/warnings.js')).toEqual(true);
  });

  it('loads the import ESLint plugin', () => {
    const { plugins } = importConfig;

    expect(plugins).toHaveLength(1);
    expect(plugins.includes('eslint-plugin-import')).toEqual(true);
  });
});

describe('Imports module ruleset', () => {
  it('loads without error', () => {
    expect(() => moduleRuleset).not.toThrow();
  });
});

describe('Imports static analysis ruleset', () => {
  it('loads without error', () => {
    expect(() => staticAnalysisRuleset).not.toThrow();
  });
});

describe('Import stylistic ruleset', () => {
  it('loads without error', () => {
    expect(() => stylisticRuleset).not.toThrow();
  });
});

describe('Imports warning ruleset', () => {
  it('loads without error', () => {
    expect(() => warningsRuleset).not.toThrow();
  });
});
