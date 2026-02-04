// @ts-check
import { defineConfig } from "astro/config";

const base = process.env.ASTRO_BASE ?? "/";

// https://astro.build/config
export default defineConfig({
  base,
});
