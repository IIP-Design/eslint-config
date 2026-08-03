import { describe, expect, it } from 'vitest';

import scriptConfig from '../script';

describe( 'Node.js script config', () => {
  const [
    baseConfigObject,
    configsConfigObject,
    scriptConfigObject,
  ] = scriptConfig;

  it( 'loads without error', () => {
    expect( () => scriptConfig ).not.toThrow();
  } );

  it( 'includes the base rulesets', () => {
    const configName = 'gpalab/script-files';
    const getExtensionName = ( extended: string ) => `${configName} > ${extended}`;

    expect( Array.isArray( scriptConfig ) ).toEqual( true );
    expect( scriptConfig ).toHaveLength( 3 );

    expect( baseConfigObject.name ).toEqual( getExtensionName( 'gpalab/recommended' ) );
    expect( configsConfigObject.name ).toEqual( getExtensionName( 'gpalab/config-files' ) );

    // The final config is that which applies to script files.
    expect( scriptConfigObject.name ).toEqual( configName );
  } );

  it( 'overrides the base language options', () => {
    // Applies to all files with .js extension.
    const { files } = scriptConfigObject;

    expect( files ).toBeDefined();

    if ( files ) {
      expect( files.length ).toEqual( 1 );
      expect( files.includes( '**/*.js' ) ).toEqual( true );
    }

    // Changes the source type.
    const sourceType = scriptConfigObject.languageOptions?.sourceType;

    expect( sourceType ).toBeDefined();
    expect( sourceType ).toEqual( 'script' );
  } );
} );
