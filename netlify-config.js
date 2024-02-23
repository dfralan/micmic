import { defineConfig } from 'astro/config';
import netlify from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";
import auth from 'auth-astro';

export default defineConfig({
  integrations: [tailwind(), auth()],
  output: 'server',
  adapter: netlify(),
});