import { describe, expect, it } from 'vitest';

import { confirmRuleFormatIsValid } from './_helpers';

const severities = {
  valid: [
    'error', 'warn', 'off',
  ],
  invalid: [
    'test', '', 0, undefined,
  ],
};

describe( 'The validation of rule formats', () => {
  it( 'correctly identifies valid and invalid severity values', () => {
    severities.valid.forEach( sev => {
      expect( confirmRuleFormatIsValid( 'severity-valid', sev ) ).toEqual( true );
    } );

    severities.invalid.forEach( sev => {
      const result = confirmRuleFormatIsValid( 'severity-invalid', sev );

      expect( result ).not.toEqual( true );
      expect( typeof result ).toEqual( 'string' );
    } );
  } );

  it( 'rejects rules configurations that are not a string or array', () => {
    [
      1, false, null, undefined, {}, () => {},
    ].forEach( invalidType => {
      const result = confirmRuleFormatIsValid( 'invalid-rule-type', invalidType );

      expect( result ).not.toEqual( true );
      expect( typeof result ).toEqual( 'string' );
    } );
  } );

  it( 'confirms that severity in an array type rule is valid', () => {
    const invalidSeveritiesInArray = [['test', { test: '' }], [1, { test: '' }]];

    invalidSeveritiesInArray.forEach( arr => {
      const result = confirmRuleFormatIsValid( 'severity-invalid-in-array', arr );

      expect( result ).not.toEqual( true );
      expect( typeof result ).toEqual( 'string' );
    } );
  } );

  const exampleStringOption = 'eqeqeq';
  const exampleThreePart = 'lines-between-class-members';

  it( 'confirms that there are the correct number of elements in the configuration array', () => {
    const stringOptionResult = confirmRuleFormatIsValid( exampleStringOption, [
      'error', 'test', {},
    ] );

    expect( stringOptionResult ).not.toEqual( true );
    expect( typeof stringOptionResult ).toEqual( 'string' );

    const threePartResult = confirmRuleFormatIsValid( exampleThreePart, ['error', 'test'] );

    expect( threePartResult ).not.toEqual( true );
    expect( typeof threePartResult ).toEqual( 'string' );
  } );

  it( 'rejects three part rules rules when the string option portion is not a string', () => {
    const invalidThreePart = [
      'error', { stringOpt: '' }, { opts: '' },
    ];

    const result = confirmRuleFormatIsValid( exampleThreePart, invalidThreePart );

    expect( result ).not.toEqual( true );
    expect( typeof result ).toEqual( 'string' );
  } );

  it( 'rejects string option type rules when the option is not a string', () => {
    const invalidStringOpt = ['error', { test: '' }];

    const result = confirmRuleFormatIsValid( exampleStringOption, invalidStringOpt );

    expect( result ).not.toEqual( true );
    expect( typeof result ).toEqual( 'string' );
  } );

  it( 'rejects rules when the options are not expressed as an object', () => {
    const result = confirmRuleFormatIsValid( 'non-object-options', ['error', 'option'] );

    expect( result ).not.toEqual( true );
    expect( typeof result ).toEqual( 'string' );

    const threePartResult = confirmRuleFormatIsValid( exampleThreePart, [
      'error', 'test', 'option',
    ] );

    expect( threePartResult ).not.toEqual( true );
    expect( typeof threePartResult ).toEqual( 'string' );
  } );
} );
