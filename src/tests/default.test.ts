import { describe, expect, it } from 'vitest';

import defaultConfig from '../index';

import deprecatedRuleset from '../rules/deprecated/deprecated';
import bestPracticesRuleset from '../rules/base/bestPractices';
import errorsRuleset from '../rules/base/errors';
import es6Ruleset from '../rules/base/es6';
import strictRuleset from '../rules/base/strict';
import stylisticRuleset from '../rules/base/stylistic';
import variablesRuleset from '../rules/base/variables';
import importRuleset from '../rules/import/index';
import nodeRuleset from '../rules/node/index';

import { confirmRuleFormatIsValid } from './_helpers';

describe( 'Default config', () => {
  // The default config is composed of four sub-configs that we extract here.
  const [
    baseConfigObject, jestConfigObject, testConfigObject, configsConfigObject,
  ] = defaultConfig;

  it( 'loads without error', () => {
    expect( () => defaultConfig ).not.toThrow();
  } );

  it( 'is a list of rulesets that contains rules for JS files, tests, and configuration file configs', () => {
    expect( Array.isArray( defaultConfig ) ).toEqual( true );
    expect( defaultConfig ).toHaveLength( 4 );

    // Make sure that the base config applies to JS files.
    expect( baseConfigObject.files ).toBeDefined();

    if ( baseConfigObject.files ) {
      expect( baseConfigObject.files.includes( '**/*.js' ) ).toEqual( true );
    }
    expect( baseConfigObject.name ).toEqual( 'gpalab/recommended' );

    // Make sure that the jest and test configs apply to both Typescript and JS test files.
    expect( jestConfigObject.files ).toBeDefined();

    if ( jestConfigObject.files ) {
      expect( jestConfigObject.files.includes( '**/*.test.{js,ts}' ) ).toEqual( true );
    }

    expect( testConfigObject.files ).toBeDefined();

    if ( testConfigObject.files ) {
      expect( testConfigObject.files.includes( '**/*.test.{js,ts}' ) ).toEqual( true );
    }
    expect( testConfigObject.name ).toEqual( 'gpalab/test-files' );

    // Make sure that the configuration file config apply only to files.
    expect( configsConfigObject.files ).toBeDefined();

    if ( configsConfigObject.files ) {
      const regex = new RegExp( /\b(?:config|webpack|eslint|jest)\b/ );

      configsConfigObject.files.forEach( file => {
        if ( typeof file === 'string' ) {
          expect( regex.test( file ) ).toBe( true );
        }
      } );
    }

    expect( configsConfigObject.name ).toEqual( 'gpalab/config-files' );
  } );

  it( 'includes the import and node plugins in the base ruleset', () => {
    expect( baseConfigObject.plugins ).toBeDefined();

    const { plugins } = baseConfigObject;

    expect( plugins ).toBeDefined();

    if ( plugins ) {
      expect( Object.keys( plugins ).length ).toEqual( 2 );

      expect( plugins['import-x'] ).toBeDefined();
      expect( plugins.n ).toBeDefined();
    }
  } );

  it( 'includes the Jest plugins in the tests ruleset', () => {
    expect( testConfigObject.plugins ).toBeDefined();

    const { plugins } = testConfigObject;

    expect( plugins ).toBeDefined();

    if ( plugins ) {
      expect( Object.keys( plugins ).length ).toEqual( 1 );

      expect( plugins.jest ).toBeDefined();
    }
  } );

  it( 'sets the language and parser options', () => {
    const { languageOptions } = baseConfigObject;

    expect( languageOptions ).toBeDefined();

    if ( languageOptions ) {
      expect( languageOptions.ecmaVersion ).toBeDefined();
      expect( languageOptions.globals ).toBeDefined();
      expect( languageOptions.parserOptions ).toBeDefined();

      const { ecmaVersion, parserOptions } = languageOptions;

      expect( ecmaVersion ).toEqual( 'latest' );

      expect( parserOptions?.ecmaFeatures?.impliedStrict ).toEqual( true );
      expect( parserOptions?.ecmaFeatures?.globalReturn ).toEqual( false );
    }
  } );
} );

// Confirm that each of the constituent rulesets load without issue.
describe( 'Deprecated ruleset', () => {
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

describe( 'Best practices ruleset', () => {
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

describe( 'Errors ruleset', () => {
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

describe( 'ES6 base ruleset', () => {
  it( 'loads without error', () => {
    expect( () => es6Ruleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( es6Ruleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'Strict mode ruleset', () => {
  it( 'loads without error', () => {
    expect( () => strictRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( strictRuleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'Stylistic ruleset', () => {
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

describe( 'Variables ruleset', () => {
  it( 'loads without error', () => {
    expect( () => variablesRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const rules = Object.entries( variablesRuleset );

    rules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'Import ruleset', () => {
  it( 'loads without error', () => {
    expect( () => importRuleset ).not.toThrow();
  } );
} );

describe( 'Node ruleset', () => {
  it( 'loads without error', () => {
    expect( () => nodeRuleset ).not.toThrow();
  } );
} );
