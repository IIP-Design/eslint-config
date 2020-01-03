module.exports = {
  rules: {
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.mdx']
      }
    ],
    'react/jsx-fragments': ['warn', 'element'],
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on'
      }
    ],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true
      }
    ],
    'react/jsx-max-depth': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true,
        allowBind: false,
        allowFunctions: false,
        ignoreDOMComponents: false,
        ignoreRefs: true
      }
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: true
      }
    ],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': [
      'error',
      {
        enforceDynamicLinks: 'always'
      }
    ],
    'react/jsx-no-undef': [
      'error',
      {
        allowGlobals: false
      }
    ],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: false
      }
    ],
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-sort-default-props': [
      'error',
      {
        ignoreCase: true
      }
    ],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
        shorthandFirst: false,
        shorthandLast: false
      }
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
};
