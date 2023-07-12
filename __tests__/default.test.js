import defaultConfig from '../index.js';

import deprecatedRuleset from '../rules/deprecated/deprecated.js';
import bestPracticesRuleset from '../rules/base/bestPractices.js';
import errorsRuleset from '../rules/base/errors.js';
import es6Ruleset from '../rules/base/es6.js';
import strictRuleset from '../rules/base/strict.js';
import stylisticRuleset from '../rules/base/stylistic.js';
import variablesRuleset from '../rules/base/variables.js';
import importRuleset from '../rules/import/index.js';
import nodeRuleset from '../rules/node/index.js';

describe( 'Default config', () => {
  let baseConfigObject = {};
  let testConfigObject = {};
  let webpackConfigObject = {};

  it( 'loads without error', () => {
    expect( () => defaultConfig ).not.toThrow();
  } );

  it( 'is a list of rulesets that contains rules for JS files, tests, and Webpack configs', () => {
    expect( Array.isArray( defaultConfig ) ).toEqual( true );
    expect( defaultConfig ).toHaveLength( 3 );

    [
      baseConfigObject, testConfigObject, webpackConfigObject,
    ] = defaultConfig;

    expect( baseConfigObject.files.includes( '**/*.js' ) ).toEqual( true );
    expect( testConfigObject.files.includes( '**/*.test.js' ) ).toEqual( true );
    expect( webpackConfigObject.files.includes( '**/webpack.*.js' ) ).toEqual( true );
  } );

  it( 'includes the import and node plugins in the base ruleset', () => {
    expect( baseConfigObject.plugins ).toBeDefined();

    const { plugins } = baseConfigObject;

    expect( Object.keys( plugins ).length ).toEqual( 2 );

    expect( plugins.import ).toBeDefined();
    expect( plugins.node ).toBeDefined();
  } );

  it( 'includes the jest plugins in the tests ruleset', () => {
    expect( testConfigObject.plugins ).toBeDefined();

    const { plugins } = testConfigObject;

    expect( Object.keys( plugins ).length ).toEqual( 1 );

    expect( plugins.jest ).toBeDefined();
  } );

  it( 'sets the language and parser options', () => {
    expect( baseConfigObject.languageOptions ).toBeDefined();

    expect( baseConfigObject.languageOptions.ecmaVersion ).toBeDefined();
    expect( baseConfigObject.languageOptions.globals ).toBeDefined();
    expect( baseConfigObject.languageOptions.parserOptions ).toBeDefined();

    const { ecmaVersion, parserOptions: { ecmaFeatures } } = baseConfigObject.languageOptions;

    expect( ecmaVersion ).toEqual( 'latest' );

    expect( ecmaFeatures.impliedStrict ).toEqual( true );
    expect( ecmaFeatures.globalReturn ).toEqual( false );
  } );
} );

describe( 'Deprecated ruleset', () => {
  it( 'loads without error', () => {
    expect( () => deprecatedRuleset ).not.toThrow();
  } );
} );

describe( 'Best practices ruleset', () => {
  it( 'loads without error', () => {
    expect( () => bestPracticesRuleset ).not.toThrow();
  } );
} );

describe( 'Errors ruleset', () => {
  it( 'loads without error', () => {
    expect( () => errorsRuleset ).not.toThrow();
  } );
} );
describe( 'ES6 base ruleset', () => {
  it( 'loads without error', () => {
    expect( () => es6Ruleset ).not.toThrow();
  } );
} );

describe( 'Strict mode ruleset', () => {
  it( 'loads without error', () => {
    expect( () => strictRuleset ).not.toThrow();
  } );
} );

describe( 'Stylistic ruleset', () => {
  it( 'loads without error', () => {
    expect( () => stylisticRuleset ).not.toThrow();
  } );
} );

describe( 'Variables ruleset', () => {
  it( 'loads without error', () => {
    expect( () => variablesRuleset ).not.toThrow();
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
