import nodeRules from '../rules/node/index';
import bestPracticesRuleset from '../rules/node/bestPractices';
import errorsRuleset from '../rules/node/errors';
import stylisticRuleset from '../rules/node/stylistic';
import deprecatedRuleset from '../rules/deprecated/node';

import { confirmRuleFormatIsValid } from './_helpers';

// Confirm that each of the constituent rulesets load without issue.
describe( 'Combined node rules', () => {
  it( 'load without error', () => {
    expect( () => nodeRules ).not.toThrow();
  } );
} );

describe( 'Node best practices ruleset', () => {
  it( 'loads without error', () => {
    expect( () => bestPracticesRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( bestPracticesRuleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'Node errors ruleset', () => {
  it( 'loads without error', () => {
    expect( () => errorsRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( errorsRuleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'Node stylistic ruleset', () => {
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

describe( 'Node deprecated ruleset', () => {
  it( 'loads without error', () => {
    expect( () => deprecatedRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( deprecatedRuleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );
