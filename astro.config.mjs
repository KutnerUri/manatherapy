// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const base = process.env.ASTRO_BASE ?? "/";

// https://astro.build/config
export default defineConfig({
  base,
  site: "https://mana.nefzen.workers.dev",
  integrations: [
    sitemap({
      filter: (page) =>
        !["/purity/", "/fairness/", "/loyalty/", "/freedom/"].some((path) =>
          page.endsWith(path),
        ),
    }),
  ],
  redirects: {
    "/metal/": "/bond/",
    "/respect/": "/bond/",
  },
});
