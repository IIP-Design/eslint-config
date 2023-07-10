const nodeConfig = require( '../rules/node/index' );
const bestPracticesRuleset = require( '../rules/node/bestPractices' );
const errorsRuleset = require( '../rules/node/errors' );
const stylisticRuleset = require( '../rules/node/stylistic' );
const deprecatedRuleset = require( '../rules/deprecated/node' );

describe( 'Import config', () => {
  it( 'loads without error', () => {
    expect( () => nodeConfig ).not.toThrow();
  } );

  it( 'includes the import rulesets', () => {
    const extension = nodeConfig.extends;

    expect( extension ).toHaveLength( 4 );

    expect( extension[0].endsWith( 'rules/deprecated/node.js' ) ).toEqual( true );
    expect( extension[1].endsWith( 'rules/node/bestPractices.js' ) ).toEqual( true );
    expect( extension[2].endsWith( 'rules/node/errors.js' ) ).toEqual( true );
    expect( extension[3].endsWith( 'rules/node/stylistic.js' ) ).toEqual( true );
  } );

  it( 'loads the import ESLint plugin', () => {
    const { plugins } = nodeConfig;

    expect( plugins ).toHaveLength( 1 );
    expect( plugins.includes( 'eslint-plugin-node' ) ).toEqual( true );
  } );
} );

describe( 'Imports module ruleset', () => {
  it( 'loads without error', () => {
    expect( () => bestPracticesRuleset ).not.toThrow();
  } );
} );

describe( 'Imports static analysis ruleset', () => {
  it( 'loads without error', () => {
    expect( () => errorsRuleset ).not.toThrow();
  } );
} );

describe( 'Import stylistic ruleset', () => {
  it( 'loads without error', () => {
    expect( () => stylisticRuleset ).not.toThrow();
  } );
} );

describe( 'Imports warning ruleset', () => {
  it( 'loads without error', () => {
    expect( () => deprecatedRuleset ).not.toThrow();
  } );
} );
