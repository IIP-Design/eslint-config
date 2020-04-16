module.exports = {
  rules: {
    'camelcase': ['error', { properties: 'never', ignoreDestructuring: false }],
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true
        }
      }
    ],
    'consistent-this': 'off',
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true
      }
    ],
    'func-names': 'off',
    'func-style': ['off', 'expression'],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true
      }
    ],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always'
      }
    ],
    'max-depth': ['off', 4],
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true
      }
    ],
    'max-lines-per-function': [
      'off',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true
      }
    ],
    'max-nested-callbacks': 'off',
    'max-params': ['off', 3],
    'max-statements': ['off', 10],
    'max-statements-per-line': ['off', { max: 1 }],
    'multiline-comment-style': ['off', 'starred-block'],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List']
      }
    ],
    'newline-after-var': 'off',
    'newline-before-return': 'off',
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
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
      },
      {
        selector: 'ForOfStatement',
        message:
          'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    'no-spaced-func': 'error',
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'padding-line-between-statements': 'off',
    'prefer-exponentiation-operator': 'off',
    'prefer-object-spread': 'error',
    'require-jsdoc': 'off',
    'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],
    'sort-vars': 'off',
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: ['=', '!'] // space here to support sprockets directives
        },
        block: {
          exceptions: ['-', '+'],
          markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
          balanced: true
        }
      }
    ]
  }
};
