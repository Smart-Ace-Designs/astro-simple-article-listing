// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://smart-ace-designs.github.io",
  base: "/astro-simple-article-listing",
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        "astro/virtual-modules/transitions-router.js",
        "astro/virtual-modules/transitions-types.js",
        "astro/virtual-modules/transitions-events.js",
        "astro/virtual-modules/transitions-swap-functions.js",
      ],
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Poppins",
      cssVariable: "--font-poppins",
      weights: [400, 500, 600],
      styles: ["normal"],
    },
  ],
});
