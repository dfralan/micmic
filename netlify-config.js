import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import auth from 'auth-astro';
import netlify from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [tailwind(), auth()],
  output: 'server',
  adapter: netlify(),
});