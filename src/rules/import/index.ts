import importModuleRules from './module';
import importStaticAnalysisRules from './staticAnalysis';
import importStylisticRules from './stylistic';
import importWarningRules from './warnings';

const importRules = {
  ...importModuleRules,
  ...importStaticAnalysisRules,
  ...importStylisticRules,
  ...importWarningRules,
};

export default importRules;
