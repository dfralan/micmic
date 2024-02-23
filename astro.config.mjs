import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from "@astrojs/tailwind";
const GoogleID = import.meta.env.GOOGLE_ID;
const GoogleSecret = import.meta.env.GOOGLE_SECRET;
import auth from 'auth-astro';
import Google from "@auth/core/providers/google"

export default defineConfig({
  integrations: [tailwind(),
  auth({
    providers: [
      Google({
        clientId: GoogleID,
        clientSecret: GoogleSecret
      })
    ]
  })
  ],
  output: 'server',
  adapter: cloudflare(),
});