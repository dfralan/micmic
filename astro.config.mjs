import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";
import auth from 'auth-astro';

export default defineConfig({
  integrations: [tailwind(), auth()],
  output: 'server',
  adapter: cloudflare(),
});