import importRules from '../rules/import/index.js';
import moduleRuleset from '../rules/import/module.js';
import staticAnalysisRuleset from '../rules/import/staticAnalysis.js';
import stylisticRuleset from '../rules/import/stylistic.js';
import warningsRuleset from '../rules/import/warnings.js';

describe( 'Combined import rules', () => {
  it( 'load without error', () => {
    expect( () => importRules ).not.toThrow();
  } );
} );

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
