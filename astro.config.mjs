import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://angajeazaunrobot.ro",
  output: "static",
  integrations: [sitemap()],
  vite: {
    // Cloud Run preview hostnames change per deployment.
    // Allow all hosts so the Firebase/App Hosting ingress is accepted.
    server: {
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
  },
});
