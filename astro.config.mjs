import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";
import auth from 'auth-astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://micmic.shop/', // this line is required
  integrations: [tailwind(), auth()],
  output: "server",
  adapter: netlify()
});