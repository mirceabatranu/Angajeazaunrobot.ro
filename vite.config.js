import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    middlewareMode: false,
    allowedHosts: 'all',
  },
  preview: {
    allowedHosts: 'all',
  },
});
