import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  vite: {
    server: {
      // Encaminha /api/*.php pro servidor embutido do PHP em dev local
      // (php -S localhost:8001 -t public). Não afeta o build de produção.
      proxy: {
        '/api': 'http://localhost:8001',
      },
    },
  },
});
