// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import db from '@astrojs/db';
import yaml from '@rollup/plugin-yaml';

// https://astro.build/config
export default defineConfig({
  site: 'https://zixiong-gesplan.github.io',
  base: 'idafe-formulario',
  vite: {
    plugins: [tailwindcss(),yaml()],
  },

  integrations: [react(), db()],
  output: 'server'
});