import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Encaminha /api/*.php pro servidor embutido do PHP em dev local
    // (php -S localhost:8001 -t public). Não afeta o build de produção.
    proxy: {
      '/api': 'http://localhost:8001',
    },
  },
})
