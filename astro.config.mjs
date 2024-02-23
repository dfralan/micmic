import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";
import { loadEnv } from 'vite';
import auth from 'auth-astro';
import Google from "@auth/core/providers/google"
const env = loadEnv('production', process.cwd(), '');

export default defineConfig({
  integrations: [tailwind(),
  auth({
    providers: [
      Google({
        clientId: env.GOOGLE_ID,
        clientSecret: env.GOOGLE_SECRET
      })
    ]
  })
  ],
  output: 'server',
  adapter: cloudflare(),
});