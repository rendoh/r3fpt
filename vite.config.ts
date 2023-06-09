import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { ImageLoader } from 'esbuild-vanilla-image-loader';
import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/r3fpt/',
  plugins: [
    react(),
    vanillaExtractPlugin({
      esbuildOptions: {
        plugins: [ImageLoader()],
      },
    }),
    glsl(),
  ],
});
