/**
 * Combine multiple arrays of strings into one de-duplicated array of strings.
 * @param args A list of arrays containing strings.
 * @returns The combined, de-duped string array.
 */
const blendArrays = ( ...args: string[][] ) => {
  let blended = [] as string[];

  args.forEach( arr => { blended = [...blended, ...arr] } );

  return [...new Set( blended )];
};

// List of various file extension groupings.
const extsJs = ['.js'];
const extsJsModules = ['.cjs', '.mjs'];
const extJsAll = blendArrays( extsJs, extsJsModules );
const extsReact = ['.jsx'];
const extsTs = ['.ts'];
const extsTsReact = ['.tsx'];
const extsTsAll = blendArrays( extsTs, extsTsReact );
const extsReactAll = blendArrays( extsReact, extsTsReact );
const extsAll = blendArrays( extJsAll, extsTsAll, extsReactAll );

/**
 * @prop {string[]} all All possible JavaScript and TypeScript file extensions.
 * @prop {string[]} js All non-JSX JavaScript file types.
 * @prop {string[]} react All JavaScript and TypeScript file extensions supporting React/JSX.
 * @prop {string[]} ts All possible TypeScript file extensions.
 */
export const extensions = {
  all: extsAll,
  js: extJsAll,
  react: extsReactAll,
  ts: extsTsAll,
};

/**
 * Converts a list of file extensions into an analogous list
 * of glob patterns that match all file with the provided extensions.
 * Handles file extensions both with and without a leading period.
 * @param exts A list of file extensions.
 * @returns A corresponding list of glob patterns.
 */
export const allFilesWithExts = ( exts: string[] ) => exts.map( ext => {
  if ( ext.startsWith( '.' ) ) {
    return `**/*${ext}`;
  }

  return `**/*.${ext}`;
} );
