# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/IIP-Design/styled-block-builder/compare/v1.0.0...HEAD)

_This sections lists changes commited to master since most recent release_

## [v1.0.0](https://github.com/IIP-Design/eslint-config/releases/tag/v1.0.0) - 2020.04.16

### Added:

- Jest, jquery, and serviceworkers as supported environments
- Set ecmaFeature `impliedStrict` to true
- Setting in React index to detect the version of React in use
- Prettier overrides in base ruleset index
- Prettier as a dependency applying the [@gpa-lab/prettier-config](https://github.com/IIP-Design/prettier-config) settings
- ESLint and required ESLint plugins to allow for meta-linting
- Post version script to push up new tag after new release
- A changelog
- Repo and issues links to package.json

### Changed:
- Altered rules to conform to existing GPA/LAB team conventions. Specifically:
  - Change `consistent-return` from error to off
  - Set the `props` option on `no-param-reassign` to `false` rather than `true` with additional `ignorePropertyModificationsFor` options
  - Change `destructuring` option on `prefer-const` to `all` rather than `any`
  - Disable `func-names`
  - Disable `no-underscore-dangle` to allow for convention of prefixing "private" function with an underscore
  - Add options `allow` with array `['resolve', 'reject', 'done', 'next', 'err', 'error']` and `hoist` with value `all` to `no-shadow`
  - Change `no-unused-vars` from error to warning and added options `argsIgnorePattern: 'res|next|^err'` and `caughtErrors: 'none'`
  - Add `@babel/polyfill` as an allowed unassigned import to `import/no-unassigned-import`
  - Disable `import/order`
  - Disable `import/prefer-default-export`
  - Disable `import/no-unused-modules`
  - Disable `curly` in prettier configurable ruleset
  - Disable `jsx-a11y/accessible-emoji`
  - Remove `noHref` and `preferButton` values from `aspects` option and add `specialLink` option with values `hrefLeft` and `hrefRight` to `jsx-a11y/anchor-is-valid` (to account for how Next.js's Link component works)
  - Disable `react/boolean-prop-naming`
  - Disable `react/no-multi-comp`
  - Disable `react/prefer-stateless-function`
  - Disable `react/react-in-jsx-scope` to allow for Jest test files that don't have React imported in scope
  - Disable `react/sort-comp`
  - Disable `react/sort-prop-types`
  - Disable `react/static-property-placement`
  - Disable `react/jsx-fragments`
  - Disable `react/jsx-handler-names`
  - Disable `react/jsx-props-no-spreading`
  - Disable `react/jsx-sort-default-props`
  - Disable `react/jsx-sort-props`
- Switch the following errors to warnings to allow for more immediate implementation of config GPA/LAB projects. These rules remain targets for upgrade to errors.
  - `class-methods-use-this`
  - `no-debugger`
  - `import/extensions`
  - `import/no-anonymous-default-export`
  - `react/destructuring-assignment`
  - `react/no-array-index-key`
  - `react/no-unescaped-entities`
  - `react/jsx-filename-extension`
- Updated ecmaVersion to `2020`
- Moved ecmaFeatures `jsx: true` and eslint-plugin-react set up to React settings index

## [v0.1.1](https://github.com/IIP-Design/eslint-config/releases/tag/v0.1.1) - 2020.01.03

### Added:

- A readme file and license

### Changed:

- Disable `react/display-name` and `react-hooks/ehxhaustive-deps` as not used by the team
- Altered `import/no-extraneous-dependencies` to allow for devDependencies, optionalDependencies, and peerDependencies
- List all needed plugins as peerDependencies rather than dependencies, since ESLint resolves relative to eslint config file not shared config file

## [v0.1.0](https://github.com/IIP-Design/eslint-config/releases/tag/v0.1.0) - 2020.01.03 (Initial Release)

### Added:

- Base ESLint rule definitions modeled largely on [AirBnB ruleset](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- React-related ESLint plugins (jsx-a11y, react, and react-hooks) and rule definitions
- Import rule definitions
- Seamless Prettier integration

