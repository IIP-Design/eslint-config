module.exports = {
  rules: {
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx', '.mdx'],
      },
    ],
    'react/jsx-fragments': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
      },
    ],
    'react/jsx-max-depth': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        allowFunctions: false,
        ignoreDOMComponents: false,
        ignoreRefs: true,
      },
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': [
      'error',
      {
        allowReferrer: false,
        enforceDynamicLinks: 'always',
        forms: true,
        links: true,
        warnOnSpreadAttributes: true,
      },
    ],
    'react/jsx-no-undef': [
      'error',
      {
        allowGlobals: false,
      },
    ],
    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: false,
      },
    ],
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        allowLeadingUnderscore: false,
        allowNamespace: false,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
};
