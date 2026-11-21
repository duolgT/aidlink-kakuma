
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "prompt",

      includeAssets: [
        "aidlink-icon.svg",
        "favicon.ico",
        "apple-touch-icon-180x180.png",
      ],

      manifest: {
        name: "AidLink Kakuma",
        short_name: "AidLink",
        description:
          "Offline-first community service discovery and support platform.",

        start_url: "/",
        scope: "/",
        display: "standalone",

        background_color: "#f8fafc",
        theme_color: "#087c75",

        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,ico}"],

        navigateFallback: "/index.html",

        cleanupOutdatedCaches: true,
      },
    }),
  ],
});
