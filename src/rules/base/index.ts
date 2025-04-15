import bestPracticeRules from './bestPractices';
import errorRules from './errors';
import es6Rules from './es6';
import deprecatedEslintRules from '../deprecated/deprecated';
import formatRules from './formatting';
import strictRules from './strict';
import stylisticRules from './stylistic';
import variableRules from './variables';

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
