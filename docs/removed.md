## Deprecated and Removed Rules

ESLint's [deprecation policy](https://eslint.org/docs/user-guide/rule-deprecation) commits to never removing existing rules. However, once deprecated these rules are no longer maintained and could therefore present unforeseen problems. We have therefore placed all deprecated rules in a single list and disabled them.

Prior to implementing their deprecation policy,ESLint permanently removed several rules and replaced them with different rules. In order to ensure that there is no potential for errors, we have removed any reference to these removed rules from our ruleset. The full list of removed rules and their replacements are found below:

| Removed Rule                      | Replacement Rule                           |
| --------------------------------- | ------------------------------------------ |
| generator-star                    | generator-star-spacing                     |
| global-strict                     | strict                                     |
| no-arrow-condition                | no-confusing-arrow no-constant-condition   |
| no-comma-dangle                   | comma-dangle                               |
| no-empty-class                    | no-empty-character-class                   |
| no-empty-label                    | no-labels                                  |
| no-extra-strict                   | strict                                     |
| no-reserved-keys                  | quote-props                                |
| no-space-before-semi              | semi-spacing                               |
| no-wrap-func                      | no-extra-parens                            |
| space-after-function-name         | space-before-function-paren                |
| space-after-keywords              | keyword-spacing                            |
| space-before-function-parentheses | space-before-function-paren                |
| space-before-keywords             | keyword-spacing                            |
| space-in-brackets                 | object-curly-spacing array-bracket-spacing |
| space-return-throw-case           | keyword-spacing                            |
| space-unary-word-ops              | space-unary-ops                            |
| spaced-line-comment               | spaced-comment                             |
