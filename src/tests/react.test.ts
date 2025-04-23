import reactConfig from '../react';
import a11yRuleset from '../rules/react/a11y';
import baseRuleset from '../rules/react/base';
import deprecatedRuleset from '../rules/deprecated/react';
import hooksRuleset from '../rules/react/hooks';
import jsxRuleset from '../rules/react/jsx';
import formatRuleset from '../rules/react/formatting';

interface IReactSettings {
  version: string
}

const jsxFileExts = ['.jsx', '.tsx'];

describe( 'React config', () => {
  const [reactConfigObject] = reactConfig;

  it( 'loads without error', () => {
    expect( () => reactConfig ).not.toThrow();
  } );

  it( 'includes the base configuration along with the React rulesets', () => {
    expect( Array.isArray( reactConfig ) ).toEqual( true );
    expect( reactConfig ).toHaveLength( 1 );

    // Inspect the React-specific configuration objct.
    expect( reactConfigObject.name ).toEqual( 'gpalab/react' );
    expect( reactConfigObject.files ).toHaveLength( 2 );

    jsxFileExts.forEach( ext => {
      expect( reactConfigObject.files.includes( `**/*${ext}` ) ).toEqual( true );
    } );
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
    const parserOptions = reactConfigObject?.languageOptions?.parserOptions;

    expect( parserOptions ).toBeDefined();

    const { ecmaFeatures } = parserOptions;

    expect( ecmaFeatures ).toBeDefined();
    expect( ecmaFeatures.jsx ).toEqual( true );
  } );

  it( "detects the user's version of React", () => {
    const reactSettings = reactConfigObject?.settings?.react as IReactSettings;

    expect( reactSettings ).toBeDefined();
    expect( reactSettings.version ).toEqual( 'detect' );
  } );
} );

// Confirm that each of the constituent rulesets load without issue.
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
