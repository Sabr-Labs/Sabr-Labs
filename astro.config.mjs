import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sabrlabs.co.uk",
  base: "/",
  integrations: [
    tailwind(),
    react(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Homepage gets higher priority
        if (item.url === "https://sabrlabs.co.uk/") {
          item.priority = 1.0;
          item.changefreq = "daily";
        }
        // Founders page
        if (item.url === "https://sabrlabs.co.uk/founders/") {
          item.priority = 0.8;
          item.changefreq = "monthly";
        }
        return item;
      },
    }),
  ],
});
