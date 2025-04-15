/**
 * The following eslint-plugin-node rules have been deprecated.
 * They are listed in reverse chronological order relative to their
 * deprecation date and annotated with the following information:
 * package - version when deprecated - replacement rule if any
 *
 * eslint-plugin-node follows ESLint's deprecation policy, which can be found here: https://eslint.org/docs/user-guide/rule-deprecation
 * A list of all deprecated rules can be found here: https://github.com/mysticatea/eslint-plugin-node#deprecated-rules
 */
const deprecatedNodeRules = {
  'node/no-unsupported-features': 'off', // node - v7.0.0 -  node/no-unsupported-features/es-syntax & node/no-unsupported-features/es-builtins
  'node/no-hide-core-modules': 'off', // node - v4.2.0
};

export default deprecatedNodeRules;
