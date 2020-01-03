module.exports = {
  // Prettier leaves the following stylistic rules somewhat open to the user's discretion.
  // For more details see: https://github.com/prettier/eslint-config-prettier#special-rules
  rules: {
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false
      }
    ],
    curly: ['error', 'all'],
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
        tabWidth: 2
      }
    ],
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true
      }
    ],
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: false,
        // the list of arthmetic groups disallows mixing `%` and `**`
        // with other arithmetic operators.
        groups: [
          ['%', '**'],
          ['%', '+'],
          ['%', '-'],
          ['%', '*'],
          ['%', '/'],
          ['/', '*'],
          ['&', '|', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!=='],
          ['&&', '||']
        ]
      }
    ],
    'no-tabs': 'error',
    'no-unexpected-multiline': 'error',
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: true,
        allowUnboundThis: true
      }
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true
      }
    ]
  }
};
