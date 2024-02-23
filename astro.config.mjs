import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import auth from 'auth-astro';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [tailwind(), auth()],
  output: 'server',
  adapter: cloudflare(),
  image: {
    service: {
       entrypoint: 'astro/assets/services/sharp',
       config: {
         limitInputPixels: false,
      },
     },
  },
});