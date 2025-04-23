import { _ as _extends } from './cc-he3fHS3P.js';
import { config } from 'typescript-eslint';
import hooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';

/**
 * The following eslint-plugin-react rules have been deprecated.
 *
 */ const deprecatedReactRules = {
    'react/jsx-sort-default-props': 'off',
    'react/jsx-space-before-closing': 'off',
    'react/require-extension': 'off',
    'react/jsx-sort-prop-types': 'off',
    'jsx-a11y/no-onchange': 'off',
    'jsx-a11y/accessible-emoji': 'off'
};

const jsxA11yRules = {
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-ambiguous-text': 'off',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': [
        'error',
        {
            component: [
                'Link'
            ],
            specialLink: [
                'hrefLeft',
                'hrefRight'
            ],
            aspects: [
                'invalidHref'
            ]
        }
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': [
        'error',
        {
            ignoreNonDOM: true
        }
    ],
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/autocomplete-valid': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/interactive-supports-focus': 'error',
    'jsx-a11y/label-has-associated-control': [
        'error',
        {
            assert: 'both',
            depth: 3
        }
    ],
    'jsx-a11y/lang': 'error',
    'jsx-a11y/media-has-caption': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-aria-hidden-on-focusable': 'error',
    'jsx-a11y/no-autofocus': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': 'error',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
    'jsx-a11y/no-noninteractive-tabindex': 'warn',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/no-static-element-interactions': [
        'error',
        {
            handlers: [
                'onClick',
                'onMouseDown',
                'onMouseUp',
                'onKeyPress',
                'onKeyDown',
                'onKeyUp'
            ]
        }
    ],
    'jsx-a11y/prefer-tag-over-role': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error'
};

const reactBaseRules = {
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
    'react/destructuring-assignment': [
        'warn',
        'always'
    ],
    'react/display-name': 'off',
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': [
        'error',
        {
            namedComponents: 'arrow-function',
            unnamedComponents: 'arrow-function'
        }
    ],
    'react/hook-use-state': [
        'error',
        {
            allowDestructuredState: true
        }
    ],
    'react/iframe-missing-sandbox': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-children-prop': 'off',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': [
        'error',
        'disallow-in-func'
    ],
    'react/no-did-update-set-state': [
        'error',
        'disallow-in-func'
    ],
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'off',
    'react/no-namespace': 'error',
    'react/no-object-type-as-default-prop': 'warn',
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
    'react/no-unused-class-component-methods': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': [
        'error',
        'disallow-in-func'
    ],
    'react/prefer-es6-class': [
        'error',
        'always'
    ],
    'react/prefer-exact-props': 'off',
    'react/prefer-read-only-props': 'error',
    'react/prefer-stateless-function': 'off',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'off',
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
};

// Enable ESLint React rules typically handled by Prettier.
const reactFormattingRules = {
    'react/jsx-child-element-spacing': 'error',
    'react/jsx-closing-bracket-location': [
        'error',
        'line-aligned'
    ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-newline': [
        'error',
        {
            multiline: 'consistent',
            singleline: 'forbid'
        }
    ],
    'react/jsx-curly-spacing': [
        'error',
        {
            when: 'always',
            children: true
        }
    ],
    'react/jsx-equals-spacing': [
        'error',
        'never'
    ],
    'react/jsx-first-prop-new-line': [
        'error',
        'multiline'
    ],
    'react/jsx-indent': [
        'error',
        2,
        {
            checkAttributes: true,
            indentLogicalExpressions: true
        }
    ],
    'react/jsx-indent-props': [
        'error',
        2
    ],
    'react/jsx-max-props-per-line': [
        'error',
        {
            maximum: 1,
            when: 'multiline'
        }
    ],
    'react/jsx-one-expression-per-line': [
        'error',
        {
            allow: 'single-child'
        }
    ],
    'react/jsx-props-no-multi-spaces': 'off',
    'react/jsx-tag-spacing': [
        'error',
        {
            closingSlash: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
            beforeClosing: 'never'
        }
    ],
    'react/jsx-wrap-multilines': [
        'error',
        {
            declaration: 'parens-new-line',
            assignment: 'parens-new-line',
            'return': 'parens-new-line',
            arrow: 'parens-new-line',
            condition: 'parens-new-line',
            logical: 'parens-new-line',
            prop: 'parens-new-line'
        }
    ]
};

const reactHooksRules = {
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error'
};

const reactJsxRules = {
    'react/jsx-boolean-value': [
        'error',
        'never'
    ],
    'react/jsx-curly-brace-presence': [
        'error',
        {
            children: 'never',
            propElementValues: 'always',
            props: 'never'
        }
    ],
    'react/jsx-filename-extension': [
        'warn',
        {
            extensions: [
                '.jsx',
                '.mdx',
                '.tsx'
            ]
        }
    ],
    'react/jsx-fragments': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-key': [
        'error',
        {
            checkFragmentShorthand: true,
            checkKeyMustBeforeSpread: true,
            warnOnDuplicates: true
        }
    ],
    'react/jsx-max-depth': 'off',
    'react/jsx-newline': 'off',
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
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-no-duplicate-props': [
        'error',
        {
            ignoreCase: true
        }
    ],
    'react/jsx-no-leaked-render': [
        'error',
        {
            validStrategies: [
                'ternary',
                'coerce'
            ]
        }
    ],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': [
        'error',
        {
            allowReferrer: false,
            enforceDynamicLinks: 'always',
            forms: true,
            links: true,
            warnOnSpreadAttributes: true
        }
    ],
    'react/jsx-no-undef': [
        'error',
        {
            allowGlobals: false
        }
    ],
    'react/jsx-no-useless-fragment': [
        'error',
        {
            allowExpressions: false
        }
    ],
    'react/jsx-pascal-case': [
        'error',
        {
            allowAllCaps: true,
            allowLeadingUnderscore: false,
            allowNamespace: false
        }
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/sort-default-props': 'off'
};

const reactRules = _extends({}, deprecatedReactRules, jsxA11yRules, reactBaseRules, reactFormattingRules, reactHooksRules, reactJsxRules);

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
blendArrays(extJsAll, extsTsAll, extsReactAll);
/**
 * @prop {string[]} all All possible JavaScript and TypeScript file extensions.
 * @prop {string[]} js All non-JSX JavaScript file types.
 * @prop {string[]} react All JavaScript and TypeScript file extensions supporting React/JSX.
 * @prop {string[]} ts All possible TypeScript file extensions.
 */ const extensions = {
    react: extsReactAll};
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

const reactConfig = config({
    files: allFilesWithExts(extensions.react),
    name: 'gpalab/react',
    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true
            }
        }
    },
    plugins: {
        'jsx-a11y': jsxA11yPlugin,
        react: reactPlugin,
        'react-hooks': hooksPlugin
    },
    rules: _extends({}, reactRules),
    settings: {
        react: {
            version: 'detect'
        }
    }
});

export { reactConfig as default };
