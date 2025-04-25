import { describe, expect, it } from 'vitest';

import tsConfig from '../typescript';

describe( 'The TypeScript configuration', () => {
  const configName = 'gpalab/typescript';
  const getExtensionName = ( extended: string ) => `${configName}__${extended}`;

  it( 'loads without error', () => {
    expect( () => tsConfig ).not.toThrow();
  } );

  const [
    baseConfigObject,
    jestConfigObject,
    testConfigObject,
    configsConfigObject,
    tsEslintBaseConfigObject,
    tsEslintEslintRecommendedConfigObject,
    tsEslintRecommendedConfigObject,
    tsConfigObject,
  ] = tsConfig;

  it( 'contains the base GPA Lab configurations, and custom overrides for Typescript files', () => {
    expect( Array.isArray( tsConfig ) ).toEqual( true );
    expect( tsConfig ).toHaveLength( 8 );

    // Includes base configurations.
    expect( baseConfigObject.name ).toEqual( 'gpalab/recommended' );
    expect( jestConfigObject.name ).toEqual( 'gpalab/test-files' );
    expect( testConfigObject.name ).toEqual( 'gpalab/test-files' );
    expect( configsConfigObject.name ).toEqual( 'gpalab/config-files' );

    // Includes TSEslint configurations.
    expect( tsEslintBaseConfigObject.name ).toEqual( getExtensionName( 'typescript-eslint/base' ) );
    expect( tsEslintEslintRecommendedConfigObject.name ).toEqual( getExtensionName( 'typescript-eslint/eslint-recommended' ) );
    expect( tsEslintRecommendedConfigObject.name ).toEqual( getExtensionName( 'typescript-eslint/recommended' ) );

    // Includes custom TS configuration.
    expect( tsConfigObject.name ).toEqual( configName );
  } );

  it( 'applies additional configurations to TypeScript files', () => {
    // Check that the additional config only applies to TypeScript files.
    expect( Array.isArray( tsConfigObject.files ) ).toEqual( true );
    expect( tsConfigObject.files.length ).toEqual( 2 );

    const tsFiles = ['**/*.ts', '**/*.tsx'];

    tsFiles.forEach( extension => {
      expect( tsConfigObject.files.includes( extension ) ).toEqual( true );
    } );

    // Ensure that the parser is set.
    const parser = tsConfigObject?.languageOptions?.parser;

    expect( parser?.meta?.name ).toEqual( 'typescript-eslint/parser' );

    // Ensure that the TypeScript ESLint plugin is available.
    expect( tsConfigObject.plugins ).toBeDefined();
    expect( Object.keys( tsConfigObject.plugins ).length ).toEqual( 1 );

    expect( tsConfigObject.plugins['@typescript-eslint'] ).toBeDefined();
  } );
} );
