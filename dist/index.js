import { _ as _extends } from './cc-he3fHS3P.js';
import globals from 'globals';
import { config } from 'typescript-eslint';
import importPlugin, { createNodeResolver } from 'eslint-plugin-import-x';
import nodePlugin from 'eslint-plugin-n';

/**
 * These rules relate to better ways of doing things to help avoid problems.
 */ const bestPracticeRules = {
    'accessor-pairs': 'off',
    'array-callback-return': [
        'error',
        {
            allowImplicit: true
        }
    ],
    'block-scoped-var': 'error',
    'class-methods-use-this': [
        'warn',
        {
            enforceForClassFields: false,
            exceptMethods: []
        }
    ],
    complexity: 'off',
    'consistent-return': 'off',
    'default-case': [
        'error',
        {
            commentPattern: '^no default$'
        }
    ],
    'default-case-last': 'error',
    'default-param-last': 'off',
    'dot-notation': [
        'error',
        {
            allowKeywords: true
        }
    ],
    eqeqeq: [
        'error',
        'always',
        {
            'null': 'ignore'
        }
    ],
    'grouped-accessor-pairs': 'off',
    'guard-for-in': 'error',
    'logical-assignment-operators': [
        'error',
        'never'
    ],
    'max-classes-per-file': [
        'error',
        1
    ],
    'no-alert': 'warn',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'off',
    'no-div-regex': 'off',
    'no-else-return': [
        'error',
        {
            allowElseIf: false
        }
    ],
    'no-empty-function': [
        'error',
        {
            allow: [
                'arrowFunctions',
                'functions',
                'methods'
            ]
        }
    ],
    'no-empty-pattern': 'error',
    'no-empty-static-block': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-global-assign': [
        'error',
        {
            exceptions: []
        }
    ],
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': [
        'error',
        {
            allowLoop: false,
            allowSwitch: false
        }
    ],
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-nonoctal-decimal-escape': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': [
        'error',
        {
            props: false
        }
    ],
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': [
        'error',
        {
            object: 'arguments',
            property: 'callee',
            message: 'arguments.callee is deprecated'
        },
        {
            object: 'global',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead'
        },
        {
            object: 'self',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead'
        },
        {
            object: 'window',
            property: 'isFinite',
            message: 'Please use Number.isFinite instead'
        },
        {
            object: 'global',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead'
        },
        {
            object: 'self',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead'
        },
        {
            object: 'window',
            property: 'isNaN',
            message: 'Please use Number.isNaN instead'
        },
        {
            property: '__defineGetter__',
            message: 'Please use Object.defineProperty instead.'
        },
        {
            property: '__defineSetter__',
            message: 'Please use Object.defineProperty instead.'
        },
        {
            object: 'Math',
            property: 'pow',
            message: 'Use the exponentiation operator (**) instead.'
        }
    ],
    'no-return-assign': [
        'error',
        'always'
    ],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': [
        'error',
        {
            props: true
        }
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'off',
    'no-unused-expressions': [
        'error',
        {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true
        }
    ],
    'no-unused-labels': 'error',
    'no-useless-call': 'off',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': [
        'warn',
        {
            terms: [
                'todo',
                'fixme',
                'xxx'
            ],
            location: 'start'
        }
    ],
    'no-with': 'error',
    'prefer-named-capture-group': 'off',
    'prefer-object-has-own': 'off',
    'prefer-promise-reject-errors': [
        'error',
        {
            allowEmptyReject: true
        }
    ],
    'prefer-regex-literals': 'off',
    radix: 'error',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'error',
    yoda: 'error'
};

/**
 * These rules relate to possible syntax or logic errors in JavaScript code.
 */ const errorRules = {
    'for-direction': 'error',
    'getter-return': [
        'error',
        {
            allowImplicit: true
        }
    ],
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': [
        'error',
        'always'
    ],
    'no-console': 'warn',
    'no-constant-condition': 'warn',
    'no-constant-binary-expression': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'warn',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'off',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'off',
    'no-inner-declarations': [
        'error',
        'both'
    ],
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-promise-executor-return': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'off',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unsafe-optional-chaining': 'error',
    'no-unused-private-class-members': 'warn',
    'no-useless-backreference': 'error',
    'require-atomic-updates': 'warn',
    'use-isnan': 'error',
    'valid-typeof': [
        'error',
        {
            requireStringLiterals: true
        }
    ]
};

/**
 * These rules relate to ES6, also known as ES2015.
 */ const es6Rules = {
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'off',
    'no-new-native-nonconstructor': 'error',
    'no-new-symbol': 'off',
    'no-restricted-exports': 'off',
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': [
        'error',
        {
            ignoreDestructuring: false,
            ignoreImport: false,
            ignoreExport: false
        }
    ],
    'no-var': 'error',
    'object-shorthand': [
        'error',
        'always',
        {
            ignoreConstructors: false,
            avoidQuotes: true
        }
    ],
    'prefer-const': [
        'error',
        {
            destructuring: 'all',
            ignoreReadBeforeAssign: true
        }
    ],
    'prefer-destructuring': [
        'error',
        {
            VariableDeclarator: {
                array: false,
                object: true
            },
            AssignmentExpression: {
                array: true,
                object: false
            }
        },
        {
            enforceForRenamedProperties: false
        }
    ],
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'sort-imports': 'off',
    'symbol-description': 'error'
};

/**
 * Deprecated rules listed in reverse chronological order relative to their
 * deprecation date and annotated with the following information:
 * package - version when deprecated - replacement rule if any
 *
 * ESLint's deprecation policy can be found here: https://eslint.org/docs/user-guide/rule-deprecation
 * A list of all deprecated rules can be found here: https://eslint.org/docs/rules/#deprecated
 *
 */ const deprecatedEslintRules = {
    'id-blacklist': 'off',
    'callback-return': 'off',
    'global-require': 'off',
    'handle-callback-err': 'off',
    'no-buffer-constructor': 'off',
    'no-mixed-requires': 'off',
    'no-new-require': 'off',
    'no-path-concat': 'off',
    'no-process-env': 'off',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
    'no-catch-shadow': 'off',
    'indent-legacy': 'off',
    'lines-around-directive': 'off',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'prefer-reflect': 'off',
    'no-native-reassign': 'off',
    'no-negated-in-lhs': 'off',
    'no-spaced-func': 'off'
};

/*
 * The Lab team traditionally used Prettier for formatting and ESLint for linting.
 * Since ESLint provides nearly all of the capabilities of Prettier, we opted for
 * reduced tooling and now allow ESLint to handle both tasks.
 *
 * While the Lab's Prettier config was deprecate in version 1.6.0 of this package,
 * we still split up the formatting rules into those handled by Prettier and those
 * handled by ESLint should a future iteration of the team choose to go back to Prettier.
 */ // Configure the rules typically disabled by Prettier.
// For using the default setup without Prettier.
const baseFormatRules = {
    'array-bracket-newline': [
        'error',
        {
            multiline: true,
            minItems: 3
        }
    ],
    'array-bracket-spacing': [
        'error',
        'never'
    ],
    'array-element-newline': [
        'error',
        'consistent'
    ],
    'arrow-parens': [
        'error',
        'as-needed'
    ],
    'arrow-spacing': [
        'error',
        {
            before: true,
            after: true
        }
    ],
    'block-spacing': [
        'error',
        'always'
    ],
    'brace-style': [
        'error',
        '1tbs',
        {
            allowSingleLine: true
        }
    ],
    'comma-dangle': [
        'error',
        {
            arrays: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
            imports: 'always-multiline',
            objects: 'always-multiline'
        }
    ],
    'comma-spacing': [
        'error',
        {
            before: false,
            after: true
        }
    ],
    'comma-style': [
        'error',
        'last'
    ],
    'computed-property-spacing': [
        'error',
        'never'
    ],
    'dot-location': [
        'error',
        'property'
    ],
    'eol-last': [
        'error',
        'always'
    ],
    'func-call-spacing': [
        'error',
        'never'
    ],
    'function-call-argument-newline': [
        'error',
        'consistent'
    ],
    'function-paren-newline': [
        'error',
        'consistent'
    ],
    'generator-star-spacing': [
        'error',
        {
            before: true,
            after: false
        }
    ],
    'implicit-arrow-linebreak': [
        'error',
        'beside'
    ],
    indent: [
        'error',
        2,
        {
            SwitchCase: 1
        }
    ],
    'jsx-quotes': [
        'error',
        'prefer-double'
    ],
    'key-spacing': [
        'error',
        {
            beforeColon: false,
            afterColon: true
        }
    ],
    'keyword-spacing': [
        'error',
        {
            before: true,
            after: true
        }
    ],
    'linebreak-style': [
        'error',
        'unix'
    ],
    'multiline-ternary': [
        'error',
        'always-multiline'
    ],
    'newline-per-chained-call': [
        'error',
        {
            ignoreChainWithDepth: 2
        }
    ],
    'new-parens': 'error',
    'no-extra-parens': [
        'error',
        'functions'
    ],
    'no-extra-semi': 'error',
    'no-floating-decimal': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': [
        'error',
        {
            ignoreEOLComments: true
        }
    ],
    'no-multiple-empty-lines': [
        'error',
        {
            max: 2,
            maxBOF: 0,
            maxEOF: 1
        }
    ],
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': [
        'error',
        'beside'
    ],
    'object-curly-newline': [
        'error',
        {
            consistent: true
        }
    ],
    'object-curly-spacing': [
        'error',
        'always'
    ],
    'object-property-newline': [
        'error',
        {
            allowAllPropertiesOnSameLine: true
        }
    ],
    'one-var-declaration-per-line': [
        'error',
        'always'
    ],
    'operator-linebreak': [
        'error',
        'before'
    ],
    'padded-blocks': [
        'error',
        'never'
    ],
    'quote-props': [
        'error',
        'as-needed',
        {
            keywords: true,
            unnecessary: true
        }
    ],
    'rest-spread-spacing': [
        'error',
        'never'
    ],
    semi: [
        'error',
        'always',
        {
            omitLastInOneLineBlock: true,
            omitLastInOneLineClassBody: true
        }
    ],
    'semi-spacing': [
        'error',
        {
            before: false,
            after: true
        }
    ],
    'semi-style': [
        'error',
        'last'
    ],
    'space-before-blocks': [
        'error',
        {
            functions: 'always',
            keywords: 'always',
            classes: 'always'
        }
    ],
    'space-before-function-paren': [
        'error',
        {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always'
        }
    ],
    'space-in-parens': [
        'warn',
        'always'
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': [
        'error',
        {
            words: true,
            nonwords: false
        }
    ],
    'switch-colon-spacing': [
        'error',
        {
            after: true,
            before: false
        }
    ],
    'template-curly-spacing': [
        'error',
        'never'
    ],
    'template-tag-spacing': [
        'error',
        'never'
    ],
    'unicode-bom': [
        'error',
        'never'
    ],
    'wrap-iife': [
        'error',
        'inside'
    ],
    'wrap-regex': 'error',
    'yield-star-spacing': [
        'error',
        {
            before: true,
            after: false
        }
    ]
};
// Prettier leaves the following stylistic rules somewhat open to the user's discretion.
// For more details see: https://github.com/prettier/eslint-config-prettier#special-rules
const configurableFormatRules = {
    'arrow-body-style': [
        'error',
        'as-needed',
        {
            requireReturnForObjectLiteral: false
        }
    ],
    curly: 'off',
    'lines-around-comment': 'off',
    'max-len': [
        'warn',
        {
            code: 120,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
            tabWidth: 2
        }
    ],
    'no-confusing-arrow': [
        'error',
        {
            allowParens: true,
            onlyOneSimpleParam: false
        }
    ],
    'no-mixed-operators': [
        'error',
        {
            allowSamePrecedence: false,
            // the list of arithmetic groups disallows mixing `%` and `**`
            // with other arithmetic operators.
            groups: [
                [
                    '%',
                    '**'
                ],
                [
                    '%',
                    '+'
                ],
                [
                    '%',
                    '-'
                ],
                [
                    '%',
                    '*'
                ],
                [
                    '%',
                    '/'
                ],
                [
                    '/',
                    '*'
                ],
                [
                    '&',
                    '|',
                    '<<',
                    '>>',
                    '>>>'
                ],
                [
                    '==',
                    '!=',
                    '===',
                    '!=='
                ],
                [
                    '&&',
                    '||'
                ]
            ]
        }
    ],
    'no-tabs': 'error',
    'no-unexpected-multiline': 'error',
    'prefer-arrow-callback': [
        'error',
        {
            allowNamedFunctions: true,
            allowUnboundThis: true
        }
    ],
    quotes: [
        'error',
        'single',
        {
            allowTemplateLiterals: false,
            avoidEscape: true
        }
    ]
};
const formatRules = _extends({}, baseFormatRules, configurableFormatRules);

/**
 * These rules relate to strict mode directives.
 */ const strictRules = {
    // Generally Babel will take care of this for us
    strict: [
        'error',
        'never'
    ]
};

/**
 * These rules relate to style guidelines.
 */ const stylisticRules = {
    camelcase: [
        'error',
        {
            properties: 'never',
            ignoreDestructuring: false
        }
    ],
    'capitalized-comments': 'off',
    'consistent-this': 'off',
    'func-name-matching': 'error',
    'func-names': 'off',
    'func-style': 'off',
    'id-denylist': 'off',
    'id-length': 'off',
    'id-match': 'off',
    'line-comment-position': 'off',
    'lines-between-class-members': [
        'error',
        'always',
        {
            exceptAfterSingleLine: false
        }
    ],
    'max-depth': 'off',
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-nested-callbacks': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'max-statements-per-line': 'off',
    'multiline-comment-style': 'off',
    'new-cap': [
        'error',
        {
            newIsCap: true,
            newIsCapExceptions: [],
            capIsNew: false,
            capIsNewExceptions: [
                'Immutable.Map',
                'Immutable.Set',
                'Immutable.List'
            ]
        }
    ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-multi-assign': [
        'error'
    ],
    'no-negated-condition': 'off',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': [
        'warn',
        {
            allowForLoopAfterthoughts: true
        }
    ],
    'no-restricted-syntax': [
        'error',
        {
            selector: 'ForInStatement',
            message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.'
        },
        {
            selector: 'ForOfStatement',
            message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.'
        },
        {
            selector: 'LabeledStatement',
            message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
        },
        {
            selector: 'WithStatement',
            message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
        }
    ],
    'no-ternary': 'off',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': [
        'error',
        {
            defaultAssignment: false
        }
    ],
    'one-var': [
        'error',
        'never'
    ],
    'operator-assignment': [
        'error',
        'always'
    ],
    'padding-line-between-statements': [
        'error',
        {
            blankLine: 'always',
            prev: '*',
            next: 'return'
        },
        {
            blankLine: 'always',
            prev: [
                'const',
                'let',
                'var'
            ],
            next: '*'
        },
        {
            blankLine: 'any',
            prev: [
                'const',
                'let',
                'var'
            ],
            next: [
                'const',
                'let',
                'var'
            ]
        }
    ],
    'prefer-exponentiation-operator': 'off',
    'prefer-object-spread': 'error',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': [
        'error',
        'always',
        {
            line: {
                exceptions: [
                    '-',
                    '+'
                ],
                markers: [
                    '=',
                    '!'
                ]
            },
            block: {
                exceptions: [
                    '-',
                    '+'
                ],
                markers: [
                    '=',
                    '!',
                    ':',
                    '::'
                ],
                balanced: true
            }
        }
    ]
};

/*
 * A list of browser globals not recommended to use without an explicit window qualifier.
 * Inspired by the confusing-browser-globals package found at:
 * https://github.com/facebook/create-react-app/tree/master/packages/confusing-browser-globals
 */ const confusingGlobals = [
    'addEventListener',
    'blur',
    'close',
    'closed',
    'confirm',
    'defaultStatus',
    'defaultstatus',
    'event',
    'external',
    'find',
    'focus',
    'frameElement',
    'frames',
    'history',
    'innerHeight',
    'innerWidth',
    'isFinite',
    'isNaN',
    'length',
    'location',
    'locationbar',
    'menubar',
    'moveBy',
    'moveTo',
    'name',
    'onblur',
    'onerror',
    'onfocus',
    'onload',
    'onresize',
    'onunload',
    'open',
    'opener',
    'opera',
    'outerHeight',
    'outerWidth',
    'pageXOffset',
    'pageYOffset',
    'parent',
    'print',
    'removeEventListener',
    'resizeBy',
    'resizeTo',
    'screen',
    'screenLeft',
    'screenTop',
    'screenX',
    'screenY',
    'scroll',
    'scrollbars',
    'scrollBy',
    'scrollTo',
    'scrollX',
    'scrollY',
    'self',
    'status',
    'statusbar',
    'stop',
    'toolbar',
    'top'
];

const variableRules = {
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': [
        'error'
    ].concat(confusingGlobals),
    'no-shadow': [
        'error',
        {
            builtinGlobals: false,
            hoist: 'all'
        }
    ],
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': [
        'warn',
        {
            args: 'after-used',
            argsIgnorePattern: 'res|next|^err',
            caughtErrors: 'none',
            destructuredArrayIgnorePattern: '^_',
            ignoreRestSiblings: true,
            vars: 'all'
        }
    ],
    'no-use-before-define': [
        'error',
        {
            allowNamedExports: false,
            classes: true,
            functions: true,
            variables: true
        }
    ]
};

const baseRules = _extends({}, deprecatedEslintRules, bestPracticeRules, errorRules, es6Rules, formatRules, strictRules, stylisticRules, variableRules);

const importModuleRules = {
    'import-x/no-amd': 'error',
    'import-x/no-commonjs': 'off',
    'import-x/no-import-module-exports': 'off',
    'import-x/no-nodejs-modules': 'off',
    'import-x/unambiguous': 'off'
};

const importStaticAnalysisRules = {
    'import-x/default': 'off',
    'import-x/named': 'error',
    'import-x/namespace': 'off',
    'import-x/no-absolute-path': 'error',
    'import-x/no-cycle': 'error',
    'import-x/no-dynamic-require': 'error',
    'import-x/no-internal-modules': 'off',
    'import-x/no-relative-packages': 'off',
    'import-x/no-relative-parent-imports': 'off',
    'import-x/no-restricted-paths': 'off',
    'import-x/no-self-import': 'error',
    'import-x/no-unresolved': [
        'error',
        {
            amd: true,
            commonjs: true
        }
    ],
    'import-x/no-useless-path-segments': [
        'error',
        {
            noUselessIndex: false
        }
    ],
    'import-x/no-webpack-loader-syntax': 'warn'
};

const importStylisticRules = {
    'import-x/consistent-type-specifier-style': [
        'error',
        'prefer-top-level'
    ],
    'import-x/dynamic-import-chunkname': [
        'warn',
        {
            allowEmpty: true
        }
    ],
    'import-x/exports-last': 'off',
    'import-x/extensions': [
        'warn',
        'always',
        {
            js: 'never',
            json: 'always',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
        }
    ],
    'import-x/first': 'error',
    'import-x/group-exports': 'off',
    'import-x/max-dependencies': 'off',
    'import-x/newline-after-import': [
        'error',
        {
            considerComments: true,
            count: 1
        }
    ],
    'import-x/no-anonymous-default-export': 'warn',
    'import-x/no-default-export': 'off',
    'import-x/no-duplicates': 'error',
    'import-x/no-named-default': 'error',
    'import-x/no-named-export': 'off',
    'import-x/no-namespace': 'off',
    'import-x/no-unassigned-import': [
        'error',
        {
            allow: [
                '**/*.css',
                '**/*.sass',
                '**/*.scss',
                '@babel/polyfill',
                'dotenv/config'
            ]
        }
    ],
    'import-x/order': 'off',
    'import-x/prefer-default-export': 'off'
};

const importWarningRules = {
    'import-x/export': 'error',
    'import-x/no-deprecated': 'error',
    'import-x/no-empty-named-blocks': 'error',
    'import-x/no-extraneous-dependencies': [
        'warn',
        {
            devDependencies: true,
            optionalDependencies: true,
            peerDependencies: true
        }
    ],
    'import-x/no-mutable-exports': 'error',
    'import-x/no-named-as-default': 'error',
    'import-x/no-named-as-default-member': 'error',
    'import-x/no-unused-modules': 'off'
};

const importRules = _extends({}, importModuleRules, importStaticAnalysisRules, importStylisticRules, importWarningRules);

/**
 * The following eslint-plugin-node rules have been deprecated.
 * They are listed in reverse chronological order relative to their
 * deprecation date and annotated with the following information:
 * package - version when deprecated - replacement rule if any
 *
 * eslint-plugin-node follows ESLint's deprecation policy, which can be found here: https://eslint.org/docs/user-guide/rule-deprecation
 * A list of all deprecated rules can be found here: https://github.com/mysticatea/eslint-plugin-node#deprecated-rules
 */ const deprecatedNodeRules = {
    'node/no-unsupported-features': 'off',
    'node/no-hide-core-modules': 'off'
};

const nodeBestPracticeRules = {
    'n/no-deprecated-api': 'error'
};

const nodeErrorRules = {
    'n/handle-callback-err': 'off',
    'n/no-callback-literal': 'off',
    'n/no-exports-assign': 'error',
    'n/no-extraneous-import': 'error',
    'n/no-extraneous-require': 'error',
    'n/no-missing-import': 'off',
    'n/no-missing-require': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'off',
    'n/no-process-exit': 'error',
    'n/no-unpublished-bin': 'error',
    'n/no-unpublished-import': [
        'error',
        {
            allowModules: [
                '@axe-core/react',
                '@testing-library/react',
                'prop-types'
            ]
        }
    ],
    'n/no-unpublished-require': [
        'error',
        {
            allowModules: [
                '@next/bundle-analyzer',
                '@wordpress/scripts'
            ]
        }
    ],
    'n/no-unsupported-features/es-builtins': 'error',
    'n/no-unsupported-features/es-syntax': 'off',
    'n/no-unsupported-features/node-builtins': 'error',
    'n/process-exit-as-throw': 'error',
    'n/shebang': 'error'
};

const nodeStylisticRules = {
    'n/callback-return': 'error',
    'n/exports-style': [
        'error',
        'module.exports',
        {
            allowBatchAssign: true
        }
    ],
    'n/file-extension-in-import': [
        'error',
        'always',
        {
            '.js': 'never',
            '.jsx': 'never',
            '.ts': 'never',
            '.tsx': 'never'
        }
    ],
    'n/global-require': 'error',
    'n/no-mixed-requires': 'error',
    'n/no-process-env': 'off',
    'n/no-restricted-import': 'off',
    'n/no-restricted-require': 'off',
    'n/no-sync': 'off',
    'n/prefer-global/buffer': [
        'error',
        'always'
    ],
    'n/prefer-global/console': [
        'error',
        'always'
    ],
    'n/prefer-global/process': [
        'error',
        'always'
    ],
    'n/prefer-global/text-decoder': [
        'error',
        'always'
    ],
    'n/prefer-global/text-encoder': [
        'error',
        'always'
    ],
    'n/prefer-global/url-search-params': [
        'error',
        'always'
    ],
    'n/prefer-global/url': [
        'error',
        'always'
    ],
    'n/prefer-promises/dns': 'error',
    'n/prefer-promises/fs': 'error'
};

const nodeRules = _extends({}, deprecatedNodeRules, nodeBestPracticeRules, nodeErrorRules, nodeStylisticRules);

/**
 * Combine multiple arrays of strings into one de-duplicated array of strings.
 * @param args A list of arrays containing strings.
 * @returns The combined, de-duped string array.
 */ const blendArrays = (...args)=>{
    let blended = [];
    args.forEach((arr)=>{
        blended = [
            ...blended,
            ...arr
        ];
    });
    return [
        ...new Set(blended)
    ];
};
// List of various file extension groupings.
const extsJs = [
    '.js'
];
const extsJsModules = [
    '.cjs',
    '.mjs'
];
const extJsAll = blendArrays(extsJs, extsJsModules);
const extsReact = [
    '.jsx'
];
const extsTs = [
    '.ts'
];
const extsTsReact = [
    '.tsx'
];
const extsTsAll = blendArrays(extsTs, extsTsReact);
const extsReactAll = blendArrays(extsReact, extsTsReact);
const extsAll = blendArrays(extJsAll, extsTsAll, extsReactAll);
/**
 * @prop {string[]} all All possible JavaScript and TypeScript file extensions.
 * @prop {string[]} js All non-JSX JavaScript file types.
 * @prop {string[]} react All JavaScript and TypeScript file extensions supporting React/JSX.
 * @prop {string[]} ts All possible TypeScript file extensions.
 */ const extensions = {
    all: extsAll,
    js: extJsAll,
    ts: extsTsAll
};
/**
 * Converts a list of file extensions into an analogous list
 * of glob patterns that match all file with the provided extensions.
 * Handles file extensions both with and without a leading period.
 * @param exts A list of file extensions.
 * @returns A corresponding list of glob patterns.
 */ const allFilesWithExts = (exts)=>exts.map((ext)=>{
        if (ext.startsWith('.')) {
            return `**/*${ext}`;
        }
        return `**/*.${ext}`;
    });

const baseConfig = config({
    files: allFilesWithExts(extensions.all),
    languageOptions: {
        ecmaVersion: 'latest',
        globals: _extends({}, globals.builtin, globals.browser, globals.es2021, globals.node, globals.serviceworker),
        parserOptions: {
            ecmaFeatures: {
                globalReturn: false,
                impliedStrict: true
            },
            ecmaVersion: 'latest'
        }
    },
    name: 'gpalab/recommended',
    plugins: {
        'import-x': importPlugin,
        n: nodePlugin
    },
    rules: _extends({}, baseRules, importRules, nodeRules),
    settings: {
        'import-x/extensions': extensions.all,
        'import-x/parsers': {
            espree: [
                ...extensions.js,
                '.jsx'
            ],
            '@typescript-eslint/parser': extensions.ts
        },
        'import-x/resolver-next': [
            createNodeResolver()
        ],
        n: {
            tryExtensions: extensions.all
        }
    }
}, {
    files: [
        '**/*.test.js'
    ],
    languageOptions: {
        globals: _extends({}, globals.jest)
    }
}, {
    // Allow use of dev dependencies in webpack configs
    files: [
        '**/webpack.*.js'
    ],
    rules: {
        'n/no-unpublished-require': 'off'
    }
}, {
    files: [
        '**/eslint.config.js'
    ],
    rules: {
        'n/file-extension-in-import': 'off'
    }
});

export { baseConfig as default };
