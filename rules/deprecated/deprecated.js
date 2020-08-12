/**
 * Deprecated rules listed in reverse chronological order relative to their
 * deprecation date and annotated with the following information:
 * package - version when deprecated - replacement rule if any
 *
 * ESLint's deprecation policy can be found here: https://eslint.org/docs/user-guide/rule-deprecation
 * A list of all deprecated rules can be found here: https://eslint.org/docs/rules/#deprecated
 *
 */

module.exports = {
  rules: {
    'callback-return': 'off', // ESLint - v7.0.0 - eslint-plugin-node
    'global-require': 'off', // ESLint - v7.0.0 - eslint-plugin-node
    'handle-callback-err': 'off', // ESLint - v7.0.0 - eslint-plugin-node
    'no-buffer-constructor': 'off', // ESLint - v7.0.0 - eslint-plugin-node
    'no-mixed-requires': 'off', // ESLint - v7.0.0 - eslint-plugin-node
    'no-new-require': 'off', // ESLint - v7.0.0 - eslint-plugin-node
    'no-path-concat': 'off', // ESLint - v7.0.0 - eslint-plugin-node
    'no-process-env': 'off', // ESLint - v7.0.0 - eslint-plugin-node
    'no-process-exit': 'off', // ESLint - v7.0.0 - eslint-plugin-node
    'no-restricted-modules': 'off', // ESLint - v7.0.0 - eslint-plugin-node
    'no-sync': 'off', // ESLint - v7.0.0 - eslint-plugin-node
    'require-jsdoc': 'off', // ESLint - v5.10.0
    'valid-jsdoc': 'off', // ESLint - v5.10.0
    'no-catch-shadow': 'off', // ESLint - v5.1.0 - no-shadow
    'lines-around-directive': 'off', // ESLint - v4.0.0 - padding-line-between-statements
    'newline-after-var': 'off', // ESLint - v4.0.0 - padding-line-between-statements
    'newline-before-return': 'off', // ESLint - v4.0.0 - padding-line-between-statements
    'prefer-reflect': 'off', // ESLint - v3.9.0
    'no-native-reassign': 'off', // ESLint - v3.3.0 - no-global-assign
    'no-negated-in-lhs': 'off', // ESLint - v3.3.0 - no-unsafe-negation
    'no-spaced-func': 'off', // ESLint - v3.3.0 - func-call-spacing
  },
};
