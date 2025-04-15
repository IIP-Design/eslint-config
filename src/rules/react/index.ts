import deprecatedReactRules from '../deprecated/react';
import jsxA11yRules from './a11y';
import reactBaseRules from './base';
import reactFormattingRules from './formatting';
import reactHooksRules from './hooks';
import reactJsxRules from './jsx';

const reactRules = {
  ...deprecatedReactRules,
  ...jsxA11yRules,
  ...reactBaseRules,
  ...reactFormattingRules,
  ...reactHooksRules,
  ...reactJsxRules,
};

export default reactRules;
