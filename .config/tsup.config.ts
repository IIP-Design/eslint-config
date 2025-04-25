import { defineConfig } from 'tsup';

const tsupConfig = defineConfig( {
  dts: true,
  entry: {
    index: './src/index.ts',
    react: './src/react.ts',
    script: './src/script.ts',
    typescript: './src/typescript.ts',
    'typescript-tc': './src/typescript-tc.ts',
  },
  format: ['esm'],
  minify: true,
} );

export default tsupConfig;
