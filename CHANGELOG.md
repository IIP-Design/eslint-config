# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased](https://github.com/IIP-Design/eslint-config/compare/v1.6.1...HEAD)

_This sections lists changes committed to master since most recent release_

## [v1.6.1](https://github.com/IIP-Design/eslint-config/compare/v1.6.0...v1.6.1) - 2022.04.19

**Changed:**

- Reverted changes applied in v1.6.0 to the `no-shadow` rule, which included checks for `builtinGlobals`. We found this rule to be too restrictive and barred the use of several common variable names (such as `name`, `status`, and `parent`). Rather than enumerating a list of exceptions, we opted to disable the rule.

**Build:**

- Update dependencies:
  - `eslint`: 8.11.0 => 8.13.0
  - `eslint-plugin-import`: 2.25.4 => 2.26.0
  - `eslint-plugin-jest`: 26.1.1 => 26.1.4
  - `eslint-plugin-react`: 7.29.3 => 7.29.4
  - `eslint-plugin-react-hooks`: 4.3.0 => 4.4.0

## [v1.6.0](https://github.com/IIP-Design/eslint-config/compare/v1.5.0...v1.6.0) - 2022.03.13

**Added:**

- New rules and options added to ESLint between 7.32.0 -> 8.11.0. Specifically:
  - `no-unused-private-class-members` at the level `warn` to indicate the presence of private methods that should probably be removed. (added v8.1.0)
  - `prefer-object-has-own` at the level `off`. This rule favors the use of `Object.hasOwn()` over `Object.prototype.hasOwnProperty.call()` a pattern we do not typically use. Furthermore, it is only relevant in an ES2020 context which some projects may not conform to. (added v8.5.0)
  - Set the new `enforceForClassFields` property on `class-methods-use-this` to `false` to allow for arrow function class methods.
  - Set the new `onlyOneSimpleParam` property on `no-confusing-arrow` to false. This explicitly chooses the current default behavior.
  - Set the new `destructuredArrayIgnorePattern` property on `no-unused-vars` to `^_`. This allows us to indicate unused array elements when destructuring with a leading underscore.
- New rules and options added to ESLint plugin React between 7.26.0 -> 7.29.3. Specifically:
  - `react/no-arrow-function-lifecycle` to prevent the declaration of React class lifecycle methods as arrow functions, which can have performance implications. (added in v7.27.0 of eslint-plugin-react)
  - `react/no-invalid-html-attribute` which prevents the assignment of an invalid value to a number of attributes on native HTML elements. (added in v7.27.0 of eslint-plugin-react)
  - `react/no-unused-class-component-methods` to ensure that all methods declared in class components are used. (added in v7.27.0 of eslint-plugin-react)
  - `react/hook-use-state` to enforce the `[value,setValue]` naming convention when destructuring the return from a `useState` call. (added in v7.29.0 of eslint-plugin-react)
  - `react/iframe-missing-sandbox` to follow security best practices and require a `sandbox` property on iframe elements. (added in v7.29.0 of eslint-plugin-react)
  - Utilize the new `propElementValues` property on `react/jsx-curly-brace-presence` to ensure that when passing a JSX element as a prop, it is always surrounded by curly brackets.
  - Enable the new `warnOnDuplicates` property on `react/jsx-key` to detect non-unique keys in an array.
- Several existing plugin rules that had been omitted in previous versions of this configuration. Namely:
  - `import/no-relative-packages` - set to the level `off` since we do not currently use Yarn/Lerna workspaces, but included for the sake of completeness. (added in v2.23.0 of eslint-plugin-import)
  - `import/no-import-module-exports` - set to the level `off` as it is unclear what impact stricter control would have on our codebase, but included for the sake of completeness. (added in v2.23.0 of eslint-plugin-import)
  - `jsx-a11y/autocomplete-valid` - set to `error` to ensure that the autocomplete attribute is only used with appropriate input elements. (added in v6.3.0 of eslint-plugin-jsx-a11y)
- An override to allow unpublished require statements in Webpack config files (identified by the filenames `webpack.*.js`).

**Changed:**

- Switched the ESLint config used by this repo to the standard version (as opposed to the Prettier-based version).
- Enable the `func-name-matching` rule, which was disabled. In practice we have been already following this rule.
- Enable the `require-atomic-updates` rule at the `warn` level. As we deal with more asynchronous operations these sorts of bugs become more of a concern.
- Use a stricter configuration of the `no-inner-declarations` rule disallowing variable declarations as well as function declarations. We typically use block bound `let` and `const` declarations so this may be a bit redundant, but it doesn't hurt.
- Use a stricter configuration of the `no-shadow` rule by setting the `builtinGlobals` property to `true`. This disables shadowing of global variables (ex. `Object` and `Array`).

**Deprecated:**

- The version of this configuration intended for use with Prettier has been deprecated (but not yet removed). The team disagreed with some of Prettier's firm held opinions and has hence phased out it's use. Allowed for the removal of the following, corresponding dependencies:
  - `eslint-plugin-prettier`
  - `prettier`
  - `@gpa-lab/prettier-config`

**Build:**

- Update all dependencies:
  - `eslint`: 7.32.0 -> 8.11.0
  - `eslint-plugin-import`: 2.24.2 -> 2.25.4
  - `eslint-plugin-jest`: 24.4.3 -> 26.1.1
  - `eslint-plugin-jsx-a11y`: 6.4.1 -> 6.5.1
  - `eslint-plugin-react`: 7.26.0 -> 7.29.3
  - `eslint-plugin-react-hooks`: 4.2.0 -> 4.3.0
  - `jest`: 27.2.3 -> 27.5.1

## [v1.5.0](https://github.com/IIP-Design/eslint-config/compare/v1.4.1...v1.5.0) - 2021.09.28

**Added:**

- New rules added to the ESLint React Plugin between 7.24.0 -> 7.26.0. Specifically:
  - `react/prefer-exact-props`
  - `react/no-namespace`
- Set the new `allowExpressions` property on `react/jsx-no-useless-fragment` to `false` to disallow all fragments.
- Set the new `allowLeadingUnderscore` property on `react/jsx-pascal-case` to `false` to disallow component names staring with an underscore.
- Set the new `links` and `forms` properties to true to prevent usage of unsafe `target='_blank'` inside links and forms.

**Build:**

- Update all dependencies

## [v1.4.1](https://github.com/IIP-Design/eslint-config/compare/v1.4.0...v1.4.1) - 2021.02.08

**Changed:**

- Remove the `allow: 'as-needed'` property from the `react/jsx-filename-extension` rule as it was behaving in an unexpected fashion.
- Update contact info in the package.json file.

## [v1.4.0](https://github.com/IIP-Design/eslint-config/compare/v1.3.1...v1.4.0) - 2021.01.26

**Added:**

- New rules added to ESLint between releases 7.8.1 -> 7.18.0. Specifically:
  - `no-nonoctal-decimal-escape`
  - `no-unsafe-optional-chaining`
- New rules added to the ESLint React Plugin between 7.20.6 -> 7.22.0. Specifically:
  - `react/jsx-newline`
  - `react/jsx-no-constructed-context-values`

**Changed:**

- Set the new `allow` property on `react/jsx-filename-extension` to `as-needed` to prevent the use of the `.jsx` file extension on files not using the JSX syntax.
- Set the new `checkKeyMustBeforeSpread` property on `react/jsx-key` to `true` to enforce listing the JSX element key prior to spreading other props. This avoids a potential, unexpected createElement fallback.
- Set the new `warnOnSpreadAttributes` property on `react/jsx-no-target-blank` to `true`. This ensures that the use of `target="_blank"` without `rel="noreferrer"` isn't missed even when spreading in props.
- Switch the `allowAllCaps` property on `react/jsx-pascal-case` to `true`.
- Add `@axe-core/react`, `@testing-library/react`, and `prop-types` as allowed modules in `node/no-unpublished-import`.
- Add `@next/bundle-analyzer` and `@wordpress/scripts` as allowed modules in `node/no-unpublished-require`.
- Disable the `node/no-missing-import` rule. It overlaps with the `import/no-unresolved` rule and can cause problems when module aliasing.

**Build:**

- Update dependencies

## [v1.3.1](https://github.com/IIP-Design/eslint-config/compare/v1.3.0...v1.3.1) - 2020.09.10

**Added:**

- A scripts configuration which extends the base config and is indented for CommonJS scripts

**Changed:**

- Disabled the rule `node/no-unsupported-features/es-syntax` to allow for ES6 modules by default

**Build:**

- Update dependencies

## [v1.3.0](https://github.com/IIP-Design/eslint-config/compare/v1.2.2...v1.3.0) - 2020.08.14

**Added:**

- Node linting vis eslint-plugin-node
- New rules by ESLint between releases 6.8.0 -> 7.6.0. Specifically:
  - `default-case-last`
  - `no-promise-executor-return`
  - `no-restricted-exports`
  - `no-unreachable-loop`
  - `no-useless-backreference`
  - `prefer-named-capture-group`
- The `indent-legacy` rule to the deprecated list
- Deprecated React rules to the deprecated list
- Unit tests for the eslint-plugin-node ruleset config

**Changed:**

- Disabled and deprecated all Node/CommonJS core rules due to deprecation by ESLint (replaced by eslint-plugin-node)
- Loosen the `no-extra-parens` to only apply to functions
- Replace deprecated `id-blacklist` rule with `id-denylist`
- Updated unit tests to reflect base Node/CommonJS rule deprecation

**Fixed:**

- Removed options and replaced array notation with string notation for all disabled rules

## [v1.2.2](https://github.com/IIP-Design/eslint-config/compare/v1.2.1...v1.2.2) - 2020.05.27

**Added:**

- Tests to ensure that all configs are loaded properly

**Changed:**

- Add option to `react/jsx-curly-spacing` to add padding to children within curly brackets

## [v1.2.1](https://github.com/IIP-Design/eslint-config/compare/v1.2.0...v1.2.1) - 2020.05.08

**Added:**

- Documentation on the Cypress sub-package and Jest plugin to the readme

**Changed:**

- Move Jest rules out of shared config and into the default configuration
- Make Cypress package a complete ruleset extending the shared configuration
- Updated React and Jest plugins, Prettier config
- Use JSON rather than JavaScript example snippets in the readme since most GPA/LAB projects use an `.eslintrc` file rather than an `.eslintrc.js` file

**Fixed:**

- Corrected the setting of `cypress/globals` as an available environment (previously set to `cypress` which was undefined)

## [v1.2.0](https://github.com/IIP-Design/eslint-config/compare/v1.1.2...v1.2.0) - 2020.05.03

**Added:**

- Jest and Cypress plugins with the recommended rules enabled
- Missing rule from React rule set `react/function-component-definition` set to both named and un-named declarations to `arrow-function`

**Changed:**

- Set `react-hooks/exhaustive-deps` to warn as [recommended](https://reactjs.org/docs/hooks-rules.html#eslint-plugin)
- Set `comma-dangle` to `always-multiline` to enforce a comma on the last item of a multiline array/object. Makes for more readable git diffs
- Use `space-before-function-paren` to require space before parens for async arrow functions: `async () => {}` rather than `async() => {}`
- Amend `indent` rule to enforce indentation of two spaces on switch cases
- Updates dependencies
- Set default published NPM package access to public

## [v1.1.2](https://github.com/IIP-Design/eslint-config/compare/v1.1.1...v1.1.2) - 2020.04.20

**Changed:**

- Add `dotenv/config` as an allowed unassigned import to `import/no-unassigned-import`
- Change `template-tag-spacing` from `always` to `never`
- Move Prettier and React configs to optional dependencies so users do not get prompted to install them as peer dependencies

## [v1.1.1](https://github.com/IIP-Design/eslint-config/compare/v1.1.0...v1.1.1) - 2020.04.20

**Changed:**

- Remove `always` value from the `new-parens` rule as this is the default value and including it at times causes and error

## [v1.1.0](https://github.com/IIP-Design/eslint-config/compare/v1.0.0...v1.1.0) - 2020.04.17

**Added:**

- Links to peer dependency repos/docs in the readme

**Changed:**

- Removed Prettier configurations from the default ruleset, implementing them as an optional sub-package (@gpa-lab/eslint-config/prettier)
- Create a `shared.js` module that sets the base rules shared by both the default and the prettier configurations
- Define `no-prettier` rules for both base and React configurations to provide formatting when Prettier sub-package is not used
- Move deprecated rules into their own file and disable them, deleted references to removed rules
- Update readme with information on Prettier sub-package

## [v1.0.0](https://github.com/IIP-Design/eslint-config/compare/v0.1.1...v1.0.0) - 2020.04.16

**Added:**

- Jest, JQuery, and service workers as supported environments
- Set ecmaFeature `impliedStrict` to true
- Setting in React index to detect the version of React in use
- Prettier overrides in base ruleset index
- Prettier as a dependency applying the [@gpa-lab/prettier-config](https://github.com/IIP-Design/prettier-config) settings
- ESLint and required ESLint plugins to allow for meta-linting
- Post version script to push up new tag after new release
- A changelog
- Repo and issues links to package.json

**Changed:**

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

## [v0.1.1](https://github.com/IIP-Design/eslint-config/compare/v0.1.0...v0.1.1) - 2020.01.03

**Added:**

- A readme file and license

**Changed:**

- Disable `react/display-name` and `react-hooks/exhaustive-deps` as not used by the team
- Altered `import/no-extraneous-dependencies` to allow for devDependencies, optionalDependencies, and peerDependencies
- List all needed plugins as peerDependencies rather than dependencies, since ESLint resolves relative to eslint config file not shared config file

## [v0.1.0](https://github.com/IIP-Design/eslint-config/releases/tag/v0.1.0) - 2020.01.03 (Initial Release)

**Added:**

- Base ESLint rule definitions modeled largely on [AirBnB ruleset](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
- React-related ESLint plugins (jsx-a11y, react, and react-hooks) and rule definitions
- Import rule definitions
- Seamless Prettier integration
