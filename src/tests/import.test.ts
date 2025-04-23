import importRules from '../rules/import/index';
import moduleRuleset from '../rules/import/module';
import staticAnalysisRuleset from '../rules/import/staticAnalysis';
import stylisticRuleset from '../rules/import/stylistic';
import warningsRuleset from '../rules/import/warnings';

describe( 'Combined import rules', () => {
  it( 'load without error', () => {
    expect( () => importRules ).not.toThrow();
  } );
} );

// Confirm that each of the constituent rulesets load without issue.
describe( 'Imports module ruleset', () => {
  it( 'loads without error', () => {
    expect( () => moduleRuleset ).not.toThrow();
  } );
} );

describe( 'Imports static analysis ruleset', () => {
  it( 'loads without error', () => {
    expect( () => staticAnalysisRuleset ).not.toThrow();
  } );
} );

describe( 'Import stylistic ruleset', () => {
  it( 'loads without error', () => {
    expect( () => stylisticRuleset ).not.toThrow();
  } );
} );

describe( 'Imports warning ruleset', () => {
  it( 'loads without error', () => {
    expect( () => warningsRuleset ).not.toThrow();
  } );
} );
