import deprecatedNodeRules from '../deprecated/node.js';
import nodeBestPracticeRules from './bestPractices.js';
import nodeErrorRules from './errors.js';
import nodeStylisticRules from './stylistic.js';

const nodeRules = {
  ...deprecatedNodeRules,
  ...nodeBestPracticeRules,
  ...nodeErrorRules,
  ...nodeStylisticRules,
};

export default nodeRules;
