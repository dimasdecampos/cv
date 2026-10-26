import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// base relativa: funciona tanto em dimas.space quanto em usuario.github.io/repositorio
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
