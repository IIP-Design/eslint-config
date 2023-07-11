import moduleRules from './module.js';
import staticAnalysisRules from './staticAnalysis.js';
import stylisticRules from './stylistic.js';
import warningRules from './warnings.js';

const importRules = {
  ...moduleRules,
  ...staticAnalysisRules,
  ...stylisticRules,
  ...warningRules,
};

export default importRules;
