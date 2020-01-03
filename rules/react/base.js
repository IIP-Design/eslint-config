module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['eslint-plugin-react'],
  rules: {
    'react/boolean-prop-naming': [
      'warn',
      {
        message:
          'It is preferred that your prop ({{ propName }}) matches the pattern: is{{ pattern }} or has{{ pattern }}',
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+'
      }
    ],
    'react/button-has-type': [
      'error',
      {
        button: true,
        reset: true,
        submit: true
      }
    ],
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': ['error', 'always'],
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': 'off',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'off',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': ['error', 'disallow-in-func'],
    'react/no-did-update-set-state': ['error', 'disallow-in-func'],
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'warn',
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
    'react/no-unescaped-entities': 'error',
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
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
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
    'react/sort-comp': [
      'error',
      {
        groups: {
          lifecycle: [
            'displayName',
            'contextTypes',
            'childContextTypes',
            'mixins',
            'statics',
            'constructor',
            'getDefaultProps',
            'state',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount'
          ],
          'props-validation': ['propTypes', 'defaultProps']
        },
        order: [
          'static-methods',
          'lifecycle',
          '/^handle.+$/',
          'everything-else',
          'render',
          'props-validation'
        ]
      }
    ],
    'react/sort-prop-types': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: false,
        noSortAlphabetically: false,
        requiredFirst: true,
        sortShapeProp: true
      }
    ],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error'
  }
};
