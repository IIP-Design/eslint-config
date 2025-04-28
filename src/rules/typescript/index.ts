import type { TSESLint } from '@typescript-eslint/utils';

import deprecatedTsRules from '../deprecated/typescript';
import extensionRules from './extensions';
import recommendedRules from './misc';
import miscRules from './recommended';
import strictRules from './strict';
import stylisticRules from './stylistic';

interface IOptionallyTypedRuleset {
  base: TSESLint.SharedConfig.RulesRecord
  typeChecked: TSESLint.SharedConfig.RulesRecord
}

/**
 * Select the correct set of rules for a given subset of rules depending on whether type checking is desired.
 * @param typeChecked Whether or not to include rules that require type checking.
 * @param ruleset A subset of ESLint rules splint into base rules and type-checked rules.
 * @returns Either the base ruleset or all available rules.
 */
const includeTypeChecked = ( typeChecked: boolean, ruleset: IOptionallyTypedRuleset ) => {
  if ( typeChecked ) {
    return {
      ...ruleset.base,
      ...ruleset.typeChecked,
    };
  }

  return ruleset.base;
};

/**
 * Select the correct set of rules depending on whether type checking is desired.
 * @param typeChecked Whether or not to include rules that require type checking.
 * @returns Either the base ruleset or all available rules.
 */
const typescriptRules = ( typeChecked: boolean ) => ( {
  ...deprecatedTsRules,
  ...includeTypeChecked( typeChecked, recommendedRules ),
  ...includeTypeChecked( typeChecked, extensionRules ),
  ...includeTypeChecked( typeChecked, miscRules ),
  ...includeTypeChecked( typeChecked, strictRules ),
  ...includeTypeChecked( typeChecked, stylisticRules ),
} );

export default typescriptRules;
