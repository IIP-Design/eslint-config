import bestPracticeRules from './bestPractices.js';
import errorRules from './errors.js';
import es6Rules from './es6.js';
import deprecatedEslintRules from '../deprecated/deprecated.js';
import formatRules from './formatting.js';
import strictRules from './strict.js';
import stylisticRules from './stylistic.js';
import variableRules from './variables.js';

const baseRules = {
  ...deprecatedEslintRules,
  ...bestPracticeRules,
  ...errorRules,
  ...es6Rules,
  ...formatRules,
  ...strictRules,
  ...stylisticRules,
  ...variableRules,
};

export default baseRules;
