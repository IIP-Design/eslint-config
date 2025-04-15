import deprecatedNodeRules from '../deprecated/node';
import nodeBestPracticeRules from './bestPractices';
import nodeErrorRules from './errors';
import nodeStylisticRules from './stylistic';

const nodeRules = {
  ...deprecatedNodeRules,
  ...nodeBestPracticeRules,
  ...nodeErrorRules,
  ...nodeStylisticRules,
};

export default nodeRules;
