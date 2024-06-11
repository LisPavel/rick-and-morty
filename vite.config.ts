import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import manifest from "./public/manifest.json";
import { ManifestOptions, VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: manifest as Partial<ManifestOptions>,
      srcDir: "./service-worker",
      filename: "sw.js",
      strategies: "injectManifest",
      injectRegister: false,
      // mode: "development",
      base: "/",
      includeAssets: ["favicon.svg"],
      injectManifest: {
        minify: false,
        enableWorkboxModulesLogs: true,
        injectionPoint: undefined,
      },
      devOptions: {
        enabled: true,
        /* when using generateSW the PWA plugin will switch to classic */
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
    ],
  },
  server: {
    open: true,
  },
});
