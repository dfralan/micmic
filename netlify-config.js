import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from "@astrojs/tailwind";
import auth from 'auth-astro';

export default defineConfig({
  integrations: [auth(), tailwind()],
  output: 'server',
  adapter: netlify(),
});