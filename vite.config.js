import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    // Don't use lightningcss
  },
  build: {
    cssMinify: 'esbuild', // Use esbuild instead
  },
});