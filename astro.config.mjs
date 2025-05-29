// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';


import db from '@astrojs/db';

// https://astro.build/config
export default defineConfig({
  site: 'https://zixiong-gesplan.github.io',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [ db()],
  output: 'server',
  adapter: vercel(),
});