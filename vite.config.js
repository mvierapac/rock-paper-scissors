import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@components': path.resolve(process.cwd(), 'src/components'),
      '@constants': path.resolve(process.cwd(), 'src/constants'),
      '@views': path.resolve(process.cwd(), 'src/views'),
      '@styles': path.resolve(process.cwd(), 'src/assets/styles'),
    },
  },
});
