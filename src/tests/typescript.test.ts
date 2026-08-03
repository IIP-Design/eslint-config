import { describe, expect, it } from 'vitest';

import tsRules from '../rules/typescript/index';
import deprecatedRuleset from '../rules/deprecated/typescript';
import extensionsRuleset from '../rules/typescript/extensions';
import miscRuleset from '../rules/typescript/misc';
import recommendedRuleset from '../rules/typescript/recommended';
import stylisticRuleset from '../rules/typescript/stylistic';
import strictRuleset from '../rules/typescript/strict';

import tsConfig from '../typescript';

import { confirmRuleFormatIsValid } from './_helpers';

describe( 'The TypeScript configuration', () => {
  const configName = 'gpalab/typescript';

  it( 'loads without error', () => {
    expect( () => tsConfig ).not.toThrow();
  } );

  const [
    baseConfigObject,
    configsConfigObject,
    tsConfigObject,
  ] = tsConfig;

  it( 'contains the base GPA Lab configurations, and custom overrides for Typescript files', () => {
    expect( Array.isArray( tsConfig ) ).toEqual( true );
    expect( tsConfig ).toHaveLength( 3 );

    // Includes base configurations.
    expect( baseConfigObject.name ).toEqual( 'gpalab/recommended' );
    expect( configsConfigObject.name ).toEqual( 'gpalab/config-files' );

    // Includes custom TS configuration.
    expect( tsConfigObject.name ).toEqual( configName );
  } );

  it( 'applies additional configurations to TypeScript files', () => {
    // Check that the additional config only applies to TypeScript files.
    expect( Array.isArray( tsConfigObject.files ) ).toEqual( true );

    const { files } = tsConfigObject;

    expect( files ).toBeDefined();

    if ( files ) {
      expect( files.length ).toEqual( 2 );

      const tsFiles = ['**/*.ts', '**/*.tsx'];

      tsFiles.forEach( extension => {
        expect( files.includes( extension ) ).toEqual( true );
      } );
    }

    // Ensure that the parser is set.
    const parser = tsConfigObject.languageOptions?.parser as {
      meta?: { name?: string };
    } | undefined;

    expect( parser?.meta?.name ).toEqual( 'typescript-eslint/parser' );

    // Ensure that the TypeScript ESLint plugin is available.
    const { plugins } = tsConfigObject;

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
describe( 'TypeScript deprecated ruleset', () => {
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

describe( 'TypeScript extensions ruleset', () => {
  it( 'loads without error', () => {
    expect( () => extensionsRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const baseRules = Object.entries( extensionsRuleset.base );

    baseRules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'TypeScript misc ruleset', () => {
  it( 'loads without error', () => {
    expect( () => miscRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const baseRules = Object.entries( miscRuleset.base );

    baseRules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'TypeScript recommended ruleset', () => {
  it( 'loads without error', () => {
    expect( () => recommendedRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const baseRules = Object.entries( recommendedRuleset.base );

    baseRules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'TypeScript strict ruleset', () => {
  it( 'loads without error', () => {
    expect( () => strictRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const baseRules = Object.entries( strictRuleset.base );

    baseRules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );

describe( 'TypeScript stylistic ruleset', () => {
  it( 'loads without error', () => {
    expect( () => stylisticRuleset ).not.toThrow();
  } );

  it( 'contains rules that conform to the required format', () => {
    const baseRules = Object.entries( stylisticRuleset.base );

    baseRules.forEach( ( [name, value] ) => {
      expect( confirmRuleFormatIsValid( name, value ) ).toEqual( true );
    } );
  } );
} );
