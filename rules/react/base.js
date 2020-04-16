module.exports = {
  rules: {
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': [
      'error',
      {
        button: true,
        reset: true,
        submit: true
      }
    ],
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': ['warn', 'always'],
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': 'off',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'off',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': ['error', 'disallow-in-func'],
    'react/no-did-update-set-state': ['error', 'disallow-in-func'],
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': [
      'error',
      {
        noTemplateLiterals: true
      }
    ],
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': [
      'error',
      {
        checkAliases: true
      }
    ],
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': ['error', 'disallow-in-func'],
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-read-only-props': 'error',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'off', // Disabled so as not to set of errors in test files
    'react/require-default-props': 'off',
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true
      }
    ],
    'react/sort-comp': 'off',
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error'
  }
};
