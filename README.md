# GPA/LAB ESLint Config

This package provides an opinionated but extensible ESLint configuration that enforces the JavaScript coding preferences defined by the GPA/LAB style guide.

## Installation

Run the following command from the root of your project to install the config.

`npm install @gpa-lab/eslint-config --save-dev`

There are a number of peer dependencies listened for this project. Namely:

- [eslint](https://eslint.org/docs/) - Required
- [eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress) - Required for Cypress
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - Required
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) - Required
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Required for React
- [eslint-plugin-node](github.com/mysticatea/eslint-plugin-node) - Required
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Required for React
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) - Required for React

Please note that several of these peer dependencies pertain only to the optional [React](#React) and [Cypress](#Cypress) configurations available as sub-packages (see more details below).

To install the minimum dependencies required for the base configuration run the command:

```bash
npm i -D @gpa-lab/eslint-config eslint eslint-plugin-import eslint-plugin-jest eslint-plugin-node
```

If you intend to also use the React sub-package, run the following install the React-specific plugins as well:

```bash
npm i -D @gpa-lab/eslint-config eslint eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-node eslint-plugin-react eslint-plugin-react-hooks
```

## Usage

### Basic

Once installed, add an `.eslintrc` file to your project root and extend the GPA/LAB eslint-config as such:

```json
{
  "extends": ["@gpa-lab/eslint-config"]
}
```

This will apply the base ruleset to your project.

**Note:** More details on configuring ESLint for you project can be found in [ESLint's official documentation](https://eslint.org/docs/user-guide/configuring).

### Sub-packages

#### React

This optional package includes an additional set of rules pertaining to React applications. To enable the React sub-package, add `@gpa-lab/eslint-config/react` to the extends array as such:

```json
{
  "extends": ["@gpa-lab/eslint-config", "@gpa-lab/eslint-config/react"]
}
```

The React sub-package depends on some ESLint plugins not needed by the base configuration. If you did not install them during the initial setup, you will need to run the following command to install these required peer dependencies.

```bash
  npm i -D eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

#### CommonJS Scripts

The default configuration supports Node.js out of the box, however, it assumes that ES6 modules are supported. This configuration can be used when ES6 import syntax is not desired.

```json
{
  "extends": ["@gpa-lab/eslint-config/script"]
}
```

#### Cypress

This optional package extends the base ESLint rules from this package, adding a ruleset for the Cypress end-to-end testing tool and removing the Jest ruleset (which can conflict with Cypress rules). As such, it should be used in lieu of, rather than in addition to the base configuration. We recommend putting a distinct `.eslintrc` in the `cypress` directory and setting it to root so that it does not conflict with your project-wide `.eslintrc`. The result should look something like:

```json
{
  "extends": ["@gpa-lab/eslint-config/cypress"],
  "root": true
}
```

The Cypress sub-package depends on the Cypress ESLint plugin which can be installed by running the following command:

```bash
  npm i -D eslint-plugin-cypress
```
