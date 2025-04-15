import baseConfig from './index';

const scriptConfig = [
  {
    'extends': [baseConfig],
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'script',
    },
  },
];

export default scriptConfig;
