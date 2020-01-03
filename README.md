# GPA/LAB ESLint Config

This package provides an opinionated but extensible ESLint configuration that enforces the JavaScript coding preferences defined by the GPA/LAB style guide.

## Installation

Run the following command from the root of your project to install the config and [ESLint](https://www.npmjs.com/package/eslint) (on which it depends):

`npm install @gpa-lab/eslint-config --save-dev`

There are a number of peer dependencies that you will also need to install in order for the plugin to work. Namely:

  - eslint
  - eslint-plugin-import
  - eslint-plugin-jsx-a11y
  - eslint-plugin-prettier
  - eslint-plugin-react
  - eslint-plugin-react-hooks
  - prettier

  These can all be installed using the command:

  ```bash
  npm i -D eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier
  ```

## Usage

### Basic

Once installed, add an `.eslintrc` file to your project root and extend the GPA/LAB eslint-config as such:

```js
module.exports = {
  extends: ['@gpa-lab/eslint-config'],
};
```

**Note:** More details on configuring ESLint for you project can be found in [ESLint's official documentation](https://eslint.org/docs/user-guide/configuring).

### Sub-packages

This package bundles an additional set of optional rules pertaining to React applications. To enable the React sub-package, add `@gpa-lab/eslint-config/react` to the extends array as such:

```js
module.exports = {
  extends: ['@gpa-lab/eslint-config', '@gpa-lab/eslint-config/react'],
};
```