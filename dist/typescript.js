import { config, plugin, parser, configs } from 'typescript-eslint';
import { createNodeResolver } from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import baseConfig from './index.js';

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

const scriptConfig = config(baseConfig, {
    files: allFilesWithExts(extensions.ts),
    'extends': [
        configs.recommended
    ],
    languageOptions: {
        parser
    },
    plugins: {
        '@typescript-eslint': plugin
    },
    settings: {
        'import-x/resolver-next': [
            createTypeScriptImportResolver(),
            createNodeResolver()
        ]
    }
});

export { scriptConfig as default };
