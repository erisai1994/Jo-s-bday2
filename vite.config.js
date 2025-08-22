// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',     // IMPORTANT : pour que les chemins relatifs fonctionnent
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});
