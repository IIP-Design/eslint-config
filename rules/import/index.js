import importModuleRules from './module.js';
import importStaticAnalysisRules from './staticAnalysis.js';
import importStylisticRules from './stylistic.js';
import importWarningRules from './warnings.js';

const importRules = {
  ...importModuleRules,
  ...importStaticAnalysisRules,
  ...importStylisticRules,
  ...importWarningRules,
};

export default importRules;
