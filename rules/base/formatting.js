// Configure the rules typically disabled by Prettier.
// For using the default setup without Prettier.
const baseFormatRules = {
  'array-bracket-newline': ['error', { multiline: true, minItems: 3 }],
  'array-bracket-spacing': ['error', 'never'],
  'array-element-newline': ['error', 'consistent'],
  'arrow-parens': ['error', 'as-needed'],
  'arrow-spacing': ['error', { before: true, after: true }],
  'block-spacing': ['error', 'always'],
  'brace-style': [
    'error', '1tbs', { allowSingleLine: true },
  ],
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
      imports: 'always-multiline',
      objects: 'always-multiline',
    },
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
      after: false,
    },
  ],
  'implicit-arrow-linebreak': ['error', 'beside'],
  indent: [
    'error', 2, { SwitchCase: 1 },
  ],
  'jsx-quotes': ['error', 'prefer-double'],
  'key-spacing': ['error', { beforeColon: false, afterColon: true }],
  'keyword-spacing': ['error', { before: true, after: true }],
  'linebreak-style': ['error', 'unix'],
  'multiline-ternary': ['error', 'always-multiline'],
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
  'new-parens': 'error',
  'no-extra-parens': ['error', 'functions'],
  'no-extra-semi': 'error',
  'no-floating-decimal': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-spaces': ['error', { ignoreEOLComments: true }],
  'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 1 }],
  'no-trailing-spaces': 'error',
  'no-whitespace-before-property': 'error',
  'nonblock-statement-body-position': ['error', 'beside'],
  'object-curly-newline': ['error', { consistent: true }],
  'object-curly-spacing': ['error', 'always'],
  'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  'one-var-declaration-per-line': ['error', 'always'],
  'operator-linebreak': ['error', 'before'],
  'padded-blocks': ['error', 'never'],
  'quote-props': [
    'error', 'as-needed', { keywords: true, unnecessary: true },
  ],
  'rest-spread-spacing': ['error', 'never'],
  semi: [
    'error',
    'always',
    { omitLastInOneLineBlock: true, omitLastInOneLineClassBody: true },
  ],
  'semi-spacing': ['error', { before: false, after: true }],
  'semi-style': ['error', 'last'],
  'space-before-blocks': [
    'error',
    { functions: 'always', keywords: 'always', classes: 'always' },
  ],
  'space-before-function-paren': [
    'error',
    { anonymous: 'never', named: 'never', asyncArrow: 'always' },
  ],
  'space-in-parens': ['warn', 'always'],
  'space-infix-ops': 'error',
  'space-unary-ops': ['error', { words: true, nonwords: false }],
  'switch-colon-spacing': ['error', { after: true, before: false }],
  'template-curly-spacing': ['error', 'never'],
  'template-tag-spacing': ['error', 'never'],
  'unicode-bom': ['error', 'never'],
  'wrap-iife': ['error', 'inside'],
  'wrap-regex': 'error',
  'yield-star-spacing': ['error', { before: true, after: false }],
};

// Prettier leaves the following stylistic rules somewhat open to the user's discretion.
// For more details see: https://github.com/prettier/eslint-config-prettier#special-rules
const configurableFormatRules = {
  'arrow-body-style': [
    'error',
    'as-needed',
    {
      requireReturnForObjectLiteral: false,
    },
  ],
  curly: 'off',
  'lines-around-comment': 'off',
  'max-len': [
    'warn',
    {
      code: 120,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      tabWidth: 2,
    },
  ],
  'no-confusing-arrow': [
    'error',
    {
      allowParens: true,
      onlyOneSimpleParam: false,
    },
  ],
  'no-mixed-operators': [
    'error',
    {
      allowSamePrecedence: false,
      // the list of arithmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        [
          '&', '|', '<<', '>>', '>>>',
        ],
        [
          '==', '!=', '===', '!==',
        ],
        ['&&', '||'],
      ],
    },
  ],
  'no-tabs': 'error',
  'no-unexpected-multiline': 'error',
  'prefer-arrow-callback': [
    'error',
    {
      allowNamedFunctions: true,
      allowUnboundThis: true,
    },
  ],
  quotes: [
    'error',
    'single',
    {
      allowTemplateLiterals: false,
      avoidEscape: true,
    },
  ],
};

export default {
  ...baseFormatRules,
  ...configurableFormatRules,
};
