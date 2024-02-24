import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: 'https://micmic.shop/', // this line is required
  integrations: [tailwind()],
  output: "server",
  adapter: netlify()
});