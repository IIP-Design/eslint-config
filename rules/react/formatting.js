// Enable ESLint React rules typically handled by Prettier.
const reactFormattingRules = {
  'react/jsx-child-element-spacing': 'error',
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
  'react/jsx-closing-tag-location': 'error',
  'react/jsx-curly-newline': [
    'error',
    {
      multiline: 'consistent',
      singleline: 'forbid',
    },
  ],
  'react/jsx-curly-spacing': [
    'error',
    {
      when: 'always',
      children: true,
    },
  ],
  'react/jsx-equals-spacing': ['error', 'never'],
  'react/jsx-first-prop-new-line': ['error', 'multiline'],
  'react/jsx-indent': [
    'error',
    2,
    {
      checkAttributes: true,
      indentLogicalExpressions: true,
    },
  ],
  'react/jsx-indent-props': ['error', 2],
  'react/jsx-max-props-per-line': [
    'error',
    {
      maximum: 1,
      when: 'multiline',
    },
  ],
  'react/jsx-one-expression-per-line': [
    'error',
    {
      allow: 'single-child',
    },
  ],
  'react/jsx-props-no-multi-spaces': 'off', // Handled by `no-multi-spaces` in base config.
  'react/jsx-tag-spacing': [
    'error',
    {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    },
  ],
  'react/jsx-wrap-multilines': [
    'error',
    {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      'return': 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    },
  ],
};

export default reactFormattingRules;
