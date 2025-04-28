import { describe, expect, it } from 'vitest';

import { isRuleException } from './_exceptions';

describe( 'The identification of exceptions to standard rule formats', () => {
  it( 'sets the correct data for non-special rule', () => {
    const ruleDetails = isRuleException( 'example-rule' );

    expect( ruleDetails.expectedLength ).toEqual( 2 );
    expect( ruleDetails.isSpecialCase ).toEqual( false );
    expect( ruleDetails.isStringOpt ).toEqual( false );
    expect( ruleDetails.isThreePart ).toEqual( false );
  } );

  it( 'sets the correct data for a three-part type rule', () => {
    const ruleDetails = isRuleException( 'lines-between-class-members' );

    expect( ruleDetails.expectedLength ).toEqual( 3 );
    expect( ruleDetails.isSpecialCase ).toEqual( false );
    expect( ruleDetails.isStringOpt ).toEqual( false );
    expect( ruleDetails.isThreePart ).toEqual( true );
  } );

  it( 'sets the correct data for a string option-type rule', () => {
    const ruleDetails = isRuleException( 'eqeqeq' );

    expect( ruleDetails.expectedLength ).toEqual( 2 );
    expect( ruleDetails.isSpecialCase ).toEqual( false );
    expect( ruleDetails.isStringOpt ).toEqual( true );
    expect( ruleDetails.isThreePart ).toEqual( false );
  } );

  it( 'sets the correct data for a special case-type rule', () => {
    const ruleDetails = isRuleException( 'max-classes-per-file' );

    expect( ruleDetails.isSpecialCase ).toEqual( true );
    expect( ruleDetails.isStringOpt ).toEqual( false );
    expect( ruleDetails.isThreePart ).toEqual( false );
  } );
} );
