// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),          // ← Tailwind-Plugin
  ],
  resolve: {
    alias: {                // Alias wiederherstellen
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/holz-und-gut/',   // ⇐ Repo-Name für GitHub Pages
});