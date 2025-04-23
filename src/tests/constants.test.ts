import { allFilesWithExts } from '../constants';

describe( 'The glob pattern helper function', () => {
  const exts = [
    '.js', 'json', '.tsx',
  ];

  it( 'properly returns a list of', () => {
    const globs = allFilesWithExts( exts );

    // Converts all items in array.
    expect( Array.isArray( globs ) ).toEqual( true );
    expect( globs.length ).toEqual( 3 );

    // Properly handles both files with and without leading period.
    expect( globs.includes( '**/*.js' ) ).toEqual( true );
    expect( globs.includes( '**/*.json' ) ).toEqual( true );
  } );
} );
