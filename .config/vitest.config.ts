import { defineConfig } from 'vitest/config';

const vitestConfig = defineConfig( {
  test: {
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['json-summary', 'text-summary'],
    },
  },
} );

export default vitestConfig;
