import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// base relativa: funciona tanto em dimas.space quanto em usuario.github.io/repositorio
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // uma página HTML por público: dados/Power BI (raiz) e criação de sites
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        sites: resolve(import.meta.dirname, 'criacao-de-sites/index.html'),
      },
    },
  },
});
