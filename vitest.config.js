import { defineConfig } from 'vitest/config';
import { mergeConfig } from 'vite';
import { fileURLToPath } from 'node:url';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  })
);
