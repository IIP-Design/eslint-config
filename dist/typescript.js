import { config, plugin, parser, configs } from 'typescript-eslint';
import { createNodeResolver } from 'eslint-plugin-import-x';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import baseConfig from './index.js';

const scriptConfig = config(baseConfig, {
    files: [
        '**/*.ts',
        '**/*.tsx'
    ],
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
