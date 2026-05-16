import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.energie-cote-sud.com',
  integrations: [tailwind()],
  build: {
    format: 'file',
    inlineStylesheets: 'auto'
  }
});
