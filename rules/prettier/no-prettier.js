// Confirgure the rules typically disabled by Prettier.
// For using the default setup without Prettier.
module.exports = {
  rules: {
    'array-bracket-newline': ['error', { multiline: true, minItems: 3 }],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consitent'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'consistent'],
    'generator-star-spacing': [
      'error',
      {
        before: true,
        after: false
      }
    ],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'linebreak-style': ['error', 'unix'],
    'multiline-ternary': ['error', 'always-multiline'],
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
    'new-parens': ['error', 'always'],
    'no-extra-parens': ['error', 'all', { ignoreJSX: 'multi-line' }],
    'no-extra-semi': 'error',
    'no-floating-decimal': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }],
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': ['error', { minProperties: 3 }],
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
    'one-var-declaration-per-line': ['error', 'always'],
    'operator-linebreak': ['error', 'before'],
    'padded-blocks': ['error', 'never'],
    'quote-props': ['error', 'as-needed', { keywords: true, unnecessary: true }],
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'always'],
    'semi-spacing': ['error', { before: false, after: true }],
    'semi-style': ['error', 'last'],
    'space-before-blocks': [
      'error',
      { functions: 'always', keywords: 'always', classes: 'always' }
    ],
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['warn', 'always'],
    'space-infix-ops': 'error',
    'space-unary-ops': ['error', { words: true, nonwords: false }],
    'switch-colon-spacing': ['error', { after: true, before: false }],
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': ['error', 'always'],
    'unicode-bom': ['error', 'never'],
    'wrap-iife': ['error', 'inside'],
    'wrap-regex': 'error',
    'yield-star-spacing': ['error', { before: true, after: false }]
  }
};
