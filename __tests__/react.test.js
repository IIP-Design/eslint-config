import reactConfig from '../react.js';
import a11yRuleset from '../rules/react/a11y.js';
import baseRuleset from '../rules/react/base.js';
import deprecatedRuleset from '../rules/deprecated/react.js';
import hooksRuleset from '../rules/react/hooks.js';
import jsxRuleset from '../rules/react/jsx.js';
import formatRuleset from '../rules/react/formatting.js';

describe( 'React config', () => {
  let baseConfigObject = {};
  let testConfigObject = {};
  let webpackConfigObject = {};
  let reactConfigObject = {};

  it( 'loads without error', () => {
    expect( () => reactConfig ).not.toThrow();
  } );

  it( 'includes the base configuration along with the React rulesets', () => {
    expect( Array.isArray( reactConfig ) ).toEqual( true );
    expect( reactConfig ).toHaveLength( 4 );

    [
      baseConfigObject, testConfigObject, webpackConfigObject, reactConfigObject,
    ] = reactConfig;

    expect( baseConfigObject.files.includes( '**/*.js' ) ).toEqual( true );
    expect( testConfigObject.files.includes( '**/*.test.js' ) ).toEqual( true );
    expect( webpackConfigObject.files.includes( '**/webpack.*.js' ) ).toEqual( true );
    expect( reactConfigObject.files.includes( '**/*.js', '**/*.jsx', '**/*.tsx' ) ).toEqual( true );
  } );

  it( 'includes the React, JSX a11y, and hooks plugins', () => {
    expect( reactConfigObject.plugins ).toBeDefined();

    const { plugins } = reactConfigObject;

    expect( Object.keys( plugins ).length ).toEqual( 3 );

    expect( plugins.react ).toBeDefined();
    expect( plugins['react-hooks'] ).toBeDefined();
    expect( plugins['jsx-a11y'] ).toBeDefined();
  } );

  it( 'enables the use of JSX', () => {
    expect( reactConfigObject.parserOptions ).toBeDefined();

    const { ecmaFeatures } = reactConfigObject.parserOptions;

    expect( ecmaFeatures ).toBeDefined();
    expect( ecmaFeatures.jsx ).toEqual( true );
  } );

  it( "detects the user's version of React", () => {
    expect( reactConfigObject.settings ).toBeDefined();

    const reactSettings = reactConfigObject.settings.react;

    expect( reactSettings ).toBeDefined();
    expect( reactSettings.version ).toEqual( 'detect' );
  } );
} );

describe( 'React accessibility ruleset', () => {
  it( 'loads without error', () => {
    expect( () => a11yRuleset ).not.toThrow();
  } );
} );

describe( 'React base ruleset', () => {
  it( 'loads without error', () => {
    expect( () => baseRuleset ).not.toThrow();
  } );
} );

describe( 'Deprecated React ruleset', () => {
  it( 'loads without error', () => {
    expect( () => deprecatedRuleset ).not.toThrow();
  } );
} );

describe( 'React hooks ruleset', () => {
  it( 'loads without error', () => {
    expect( () => hooksRuleset ).not.toThrow();
  } );
} );

describe( 'React JSX ruleset', () => {
  it( 'loads without error', () => {
    expect( () => jsxRuleset ).not.toThrow();
  } );
} );

describe( 'React formatting ruleset', () => {
  it( 'loads without error', () => {
    expect( () => formatRuleset ).not.toThrow();
  } );
} );
