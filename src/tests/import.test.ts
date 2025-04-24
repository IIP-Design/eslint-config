import importRules from '../rules/import/index';
import moduleRuleset from '../rules/import/module';
import staticAnalysisRuleset from '../rules/import/staticAnalysis';
import stylisticRuleset from '../rules/import/stylistic';
import warningsRuleset from '../rules/import/warnings';

import { confirmRuleFormatIsValid } from './_helpers';

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

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( moduleRuleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'Imports static analysis ruleset', () => {
  it( 'loads without error', () => {
    expect( () => staticAnalysisRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( staticAnalysisRuleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'Import stylistic ruleset', () => {
  it( 'loads without error', () => {
    expect( () => stylisticRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( stylisticRuleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'Imports warning ruleset', () => {
  it( 'loads without error', () => {
    expect( () => warningsRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( warningsRuleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );
