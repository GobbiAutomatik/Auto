import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: '0.0.0.0', // Permite acesso de qualquer IP
    strictPort: true, // Força usar a porta 5173
    open: false, // Não abre automaticamente
    cors: true,
    hmr: {
      port: 5173, // Use the same port as the main server
      host: '0.0.0.0'
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  preview: {
    port: 4173,
    host: '0.0.0.0'
  }
});