import baseConfig from './index.js';

const scriptConfig = [
    {
        'extends': [
            baseConfig
        ],
        files: [
            '**/*.js'
        ],
        languageOptions: {
            sourceType: 'script'
        }
    }
];

export { scriptConfig as default };
