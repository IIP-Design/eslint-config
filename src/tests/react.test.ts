import { describe, expect, it } from 'vitest';

import reactConfig from '../react';
import a11yRuleset from '../rules/react/a11y';
import baseRuleset from '../rules/react/base';
import deprecatedRuleset from '../rules/deprecated/react';
import hooksRuleset from '../rules/react/hooks';
import jsxRuleset from '../rules/react/jsx';
import formatRuleset from '../rules/react/formatting';

import { confirmRuleFormatIsValid } from './_helpers';

// eslint-disable-next-line n/no-extraneous-import
import type { ParserOptions } from '@typescript-eslint/parser';

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

    // Inspect the React-specific configuration object.
    expect( reactConfigObject.name ).toEqual( 'gpalab/react' );

    const { files } = reactConfigObject;

    expect( files ).toHaveLength( 2 );

    if ( files ) {
      jsxFileExts.forEach( ext => {
        expect( files.includes( `**/*${ext}` ) ).toEqual( true );
      } );
    }
  } );

  it( 'includes the React, JSX a11y, and hooks plugins', () => {
    expect( reactConfigObject.plugins ).toBeDefined();

    const { plugins } = reactConfigObject;

    expect( plugins ).toBeDefined();

    if ( plugins ) {
      expect( Object.keys( plugins ).length ).toEqual( 3 );

      expect( plugins.react ).toBeDefined();
      expect( plugins['react-hooks'] ).toBeDefined();
      expect( plugins['jsx-a11y'] ).toBeDefined();
    }
  } );

  it( 'enables the use of JSX', () => {
    const parserOptions = reactConfigObject.languageOptions?.parserOptions as ParserOptions;

    expect( parserOptions ).toBeDefined();

    expect( parserOptions.ecmaFeatures ).toBeDefined();
    expect( parserOptions.ecmaFeatures?.jsx ).toEqual( true );
  } );

  it( "detects the user's version of React", () => {
    const reactSettings = reactConfigObject.settings?.react as IReactSettings;

    expect( reactSettings ).toBeDefined();
    expect( reactSettings.version ).toEqual( 'detect' );
  } );
} );

// Confirm that each of the constituent rulesets load without issue.
describe( 'React accessibility ruleset', () => {
  it( 'loads without error', () => {
    expect( () => a11yRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( a11yRuleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'React base ruleset', () => {
  it( 'loads without error', () => {
    expect( () => baseRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( baseRuleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'Deprecated React ruleset', () => {
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

describe( 'React hooks ruleset', () => {
  it( 'loads without error', () => {
    expect( () => hooksRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( hooksRuleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'React JSX ruleset', () => {
  it( 'loads without error', () => {
    expect( () => jsxRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( jsxRuleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'React formatting ruleset', () => {
  it( 'loads without error', () => {
    expect( () => formatRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( formatRuleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );
