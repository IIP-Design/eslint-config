import { describe, expect, it } from 'vitest';

import scriptConfig from '../script';

describe( 'Node.js script config', () => {
  const [
    baseConfigObject,
    jestConfigObject,
    testConfigObject,
    configsConfigObject,
    scriptConfigObject,
  ] = scriptConfig;

  it( 'loads without error', () => {
    expect( () => scriptConfig ).not.toThrow();
  } );

  it( 'includes the base rulesets', () => {
    const configName = 'gpalab/script-files';
    const getExtensionName = ( extended: string ) => `${configName}__${extended}`;

    expect( Array.isArray( scriptConfig ) ).toEqual( true );
    expect( scriptConfig ).toHaveLength( 5 );

    expect( baseConfigObject.name ).toEqual( getExtensionName( 'gpalab/recommended' ) );
    expect( jestConfigObject.name ).toEqual( getExtensionName( 'gpalab/test-files' ) );
    expect( testConfigObject.name ).toEqual( getExtensionName( 'gpalab/test-files' ) );
    expect( configsConfigObject.name ).toEqual( getExtensionName( 'gpalab/config-files' ) );

    // The final config is that which applies to script files.
    expect( scriptConfigObject.name ).toEqual( configName );
  } );

  it( 'overrides the base language options', () => {
    // Applies to all files with .js extension.
    expect( scriptConfigObject.files.length ).toEqual( 1 );
    expect( scriptConfigObject.files.includes( '**/*.js' ) ).toEqual( true );

    // Changes the source type.
    const sourceType = scriptConfigObject?.languageOptions?.sourceType;

    expect( sourceType ).toBeDefined();
    expect( sourceType ).toEqual( 'script' );
  } );
} );
