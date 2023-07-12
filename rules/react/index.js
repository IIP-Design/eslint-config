import deprecatedReactRules from '../deprecated/react.js';
import jsxA11yRules from './a11y.js';
import reactBaseRules from './base.js';
import reactFormattingRules from './formatting.js';
import reactHooksRules from './hooks.js';
import reactJsxRules from './jsx.js';

const reactRules = {
  ...deprecatedReactRules,
  ...jsxA11yRules,
  ...reactBaseRules,
  ...reactFormattingRules,
  ...reactHooksRules,
  ...reactJsxRules,
};

export default reactRules;
