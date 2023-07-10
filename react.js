const rules = [
  './rules/deprecated/react.js',
  './rules/react/a11y',
  './rules/react/base',
  './rules/react/hooks',
  './rules/react/jsx',
  './rules/react/no-prettier',
].map( require.resolve );

module.exports = {
  'extends': rules,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['eslint-plugin-react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
