import nodeRules from '../rules/node/index';
import bestPracticesRuleset from '../rules/node/bestPractices';
import errorsRuleset from '../rules/node/errors';
import stylisticRuleset from '../rules/node/stylistic';
import deprecatedRuleset from '../rules/deprecated/node';

// Confirm that each of the constituent rulesets load without issue.
describe( 'Combined node rules', () => {
  it( 'load without error', () => {
    expect( () => nodeRules ).not.toThrow();
  } );
} );

describe( 'Node best practices ruleset', () => {
  it( 'loads without error', () => {
    expect( () => bestPracticesRuleset ).not.toThrow();
  } );
} );

describe( 'Node errors ruleset', () => {
  it( 'loads without error', () => {
    expect( () => errorsRuleset ).not.toThrow();
  } );
} );

describe( 'Node stylistic ruleset', () => {
  it( 'loads without error', () => {
    expect( () => stylisticRuleset ).not.toThrow();
  } );
} );

describe( 'Node deprecated ruleset', () => {
  it( 'loads without error', () => {
    expect( () => deprecatedRuleset ).not.toThrow();
  } );
} );
