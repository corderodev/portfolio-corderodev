import { defineConfig, squooshImageService } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  image: {
    service: squooshImageService(),
  },
});