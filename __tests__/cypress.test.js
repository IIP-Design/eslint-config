import cypressConfig from '../cypress.js';
import cypressRuleset from '../rules/testing/cypress.js';

describe.skip( 'Cypress config', () => {
  it( 'loads without error', () => {
    expect( () => cypressConfig ).not.toThrow();
  } );
} );

describe.skip( 'Cypress ruleset', () => {
  it( 'loads without error', () => {
    expect( () => cypressRuleset ).not.toThrow();
  } );

  it( 'makes the Cypress globals available to ESLint', () => {
    const { env } = cypressRuleset;

    expect( env ).toBeDefined();
    expect( env['cypress/globals'] ).toEqual( true );
  } );

  it( 'includes the Cypress ESLint plugin recommended rules', () => {
    const extension = cypressRuleset.extends;

    expect( extension ).toHaveLength( 1 );
    expect( extension.includes( 'plugin:cypress/recommended' ) ).toEqual( true );
  } );

  it( 'loads the Cypress ESLint plugin', () => {
    const { plugins } = cypressRuleset;

    expect( plugins ).toHaveLength( 1 );
    expect( plugins.includes( 'eslint-plugin-cypress' ) ).toEqual( true );
  } );
} );
