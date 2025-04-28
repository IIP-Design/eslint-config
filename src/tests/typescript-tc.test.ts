import { describe, expect, it } from 'vitest';

import tsRules from '../rules/typescript/index';
import extensionsRuleset from '../rules/typescript/extensions';
import miscRuleset from '../rules/typescript/misc';
import recommendedRuleset from '../rules/typescript/recommended';
import stylisticRuleset from '../rules/typescript/stylistic';
import strictRuleset from '../rules/typescript/strict';

import tsTcConfig from '../typescript-tc';

import { confirmRuleFormatIsValid } from './_helpers';

describe( 'The TypeScript configuration', () => {
  const configName = 'gpalab/typescript-tc';

  it( 'loads without error', () => {
    expect( () => tsTcConfig ).not.toThrow();
  } );

  const [
    baseConfigObject,
    jestConfigObject,
    testConfigObject,
    configsConfigObject,
    tsTcConfigObject,
  ] = tsTcConfig;

  it( 'contains the base GPA Lab configurations, and custom overrides for Typescript files', () => {
    expect( Array.isArray( tsTcConfig ) ).toEqual( true );
    expect( tsTcConfig ).toHaveLength( 5 );

    // Includes base configurations.
    expect( baseConfigObject.name ).toEqual( 'gpalab/recommended' );
    expect( jestConfigObject.name ).toEqual( 'gpalab/test-files' );
    expect( testConfigObject.name ).toEqual( 'gpalab/test-files' );
    expect( configsConfigObject.name ).toEqual( 'gpalab/config-files' );

    // Includes custom TS configuration.
    expect( tsTcConfigObject.name ).toEqual( configName );
  } );

  it( 'applies additional configurations to TypeScript files', () => {
    // Check that the additional config only applies to TypeScript files.
    expect( Array.isArray( tsTcConfigObject.files ) ).toEqual( true );

    const { files } = tsTcConfigObject;

    expect( files ).toBeDefined();

    if ( files && files.length > 0 ) {
      expect( files.length ).toEqual( 2 );

      const tsFiles = ['**/*.ts', '**/*.tsx'];

      tsFiles.forEach( extension => {
        expect( files.includes( extension ) ).toEqual( true );
      } );
    }

    // Ensure that the parser is set.
    const parser = tsTcConfigObject.languageOptions?.parser;

    expect( parser?.meta?.name ).toEqual( 'typescript-eslint/parser' );

    // Ensure that the the parser options identify the TS config that should be used.
    const parserOptions = tsTcConfigObject.languageOptions?.parserOptions;

    expect( parserOptions?.projectService ).toEqual( true );
    expect( parserOptions?.tsconfigRootDir ).toBeDefined();

    // Ensure that the node version is set to 22 and above.
    const nodeSettings = tsTcConfigObject.settings?.node as { version: string };

    expect( nodeSettings ).toBeDefined();
    expect( nodeSettings.version ).toBeDefined();

    if ( nodeSettings.version ) {
      expect( nodeSettings.version ).toEqual( '>=22.0.0' );
    }

    // Ensure that the TypeScript ESLint plugin is available.
    const { plugins } = tsTcConfigObject;

    expect( plugins ).toBeDefined();

    if ( plugins ) {
      expect( Object.keys( plugins ).length ).toEqual( 1 );

      expect( plugins['@typescript-eslint'] ).toBeDefined();
    }
  } );
} );

describe( 'Combined TypeScript rules', () => {
  it( 'load without error', () => {
    expect( () => tsRules ).not.toThrow();
  } );
} );

// Confirm that each of the constituent rulesets load without issue and contains valid rules.
describe( 'TypeScript extensions ruleset', () => {
  it( 'loads without error', () => {
    expect( () => extensionsRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const tcRules = Object.entries( extensionsRuleset.typeChecked );

    tcRules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'TypeScript misc ruleset', () => {
  it( 'loads without error', () => {
    expect( () => miscRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const tcRules = Object.entries( miscRuleset.typeChecked );

    tcRules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'TypeScript recommended ruleset', () => {
  it( 'loads without error', () => {
    expect( () => recommendedRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const tcRules = Object.entries( recommendedRuleset.typeChecked );

    tcRules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'TypeScript strict ruleset', () => {
  it( 'loads without error', () => {
    expect( () => strictRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const tcRules = Object.entries( strictRuleset.typeChecked );

    tcRules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'TypeScript stylistic ruleset', () => {
  it( 'loads without error', () => {
    expect( () => stylisticRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const tcRules = Object.entries( stylisticRuleset.typeChecked );

    tcRules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );
