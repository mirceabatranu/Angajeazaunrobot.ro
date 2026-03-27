import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://angajeazaunrobot.ro",
  output: "static",
  integrations: [sitemap()]
});
