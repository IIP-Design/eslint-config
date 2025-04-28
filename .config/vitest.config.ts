import { defineConfig } from 'vitest/config';

const vitestConfig = defineConfig( {
  test: {
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: [
        'html-spa',
        ['json-summary', { file: 'coverage.json' }],
        'text-summary',
      ],
    },
  },
  root: './',
} );

export default vitestConfig;
