module.exports = {
  rules: {
    camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],
    'capitalized-comments': 'off',
    'consistent-this': 'off',
    'func-name-matching': 'error',
    'func-names': 'off',
    'func-style': 'off',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'line-comment-position': 'off',
    'lines-between-class-members': [
      'error', 'always', { exceptAfterSingleLine: false },
    ],
    'max-depth': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'off',
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map', 'Immutable.Set', 'Immutable.List',
        ],
      },
    ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-multi-assign': ['error'],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['warn', { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always',
        prev: [
          'const', 'let', 'var',
        ],
        next: '*' },
      { blankLine: 'any',
        prev: [
          'const', 'let', 'var',
        ],
        next: [
          'const', 'let', 'var',
        ] },
    ],
    'prefer-exponentiation-operator': 'off',
    'prefer-object-spread': 'error',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!'], // space here to support sprockets directives
        },
        block: {
          exceptions: ['-', '+'],
          markers: [
            '=', '!', ':', '::',
          ], // space here to support sprockets directives and flow comment types
          balanced: true,
        },
      },
    ],
  },
};
