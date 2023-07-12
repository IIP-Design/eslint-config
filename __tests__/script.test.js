import scriptConfig from '../script.js';

describe( 'Node.js script config', () => {
  let baseConfigObject = {};
  let testConfigObject = {};
  let webpackConfigObject = {};
  let scriptsConfigObject = {};

  it( 'loads without error', () => {
    expect( () => scriptConfig ).not.toThrow();
  } );

  it( 'includes the base rulesets', () => {
    expect( Array.isArray( scriptConfig ) ).toEqual( true );
    expect( scriptConfig ).toHaveLength( 4 );

    [
      baseConfigObject, testConfigObject, webpackConfigObject, scriptsConfigObject,
    ] = scriptConfig;

    expect( baseConfigObject.files.includes( '**/*.js' ) ).toEqual( true );
    expect( testConfigObject.files.includes( '**/*.test.js' ) ).toEqual( true );
    expect( webpackConfigObject.files.includes( '**/webpack.*.js' ) ).toEqual( true );
    expect( scriptsConfigObject.files.includes( '**/*.js' ) ).toEqual( true );
  } );

  it( 'overrides the base language options', () => {
    expect( scriptsConfigObject.languageOptions ).toBeDefined();

    const { parserOptions: { ecmaFeatures }, sourceType } = scriptsConfigObject.languageOptions;

    expect( ecmaFeatures ).toBeDefined();
    expect( ecmaFeatures.globalReturn ).toEqual( true );

    expect( sourceType ).toBeDefined();
    expect( sourceType ).toEqual( 'script' );
  } );
} );
