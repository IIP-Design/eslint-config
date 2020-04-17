const confusingGlobals = require('./confusingGlobals');

module.exports = {
  rules: {
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': ['error'].concat(confusingGlobals),
    'no-shadow': [
      'error',
      {
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
        hoist: 'all'
      }
    ],
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': [
      'warn',
      {
        args: 'after-used',
        argsIgnorePattern: 'res|next|^err',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all'
      }
    ],
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }]
  }
};
