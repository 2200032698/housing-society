import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const githubBase = "/housing-society/";

function fixAssetPaths() {
  return {
    name: "fix-github-pages-asset-paths",

    generateBundle(_, bundle) {
      for (const file of Object.values(bundle)) {
        // Fix paths inside JavaScript files
        if (file.type === "chunk") {
          file.code = file.code.replace(
            /(["'`])\/assets\//g,
            `$1${githubBase}assets/`
          );
        }

        // Fix paths inside CSS / HTML and other generated assets
        if (file.type === "asset" && typeof file.source === "string") {
          file.source = file.source.replace(
            /(["'(])\/assets\//g,
            `$1${githubBase}assets/`
          );
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    fixAssetPaths(),
  ],

  base: "/housing-society/",

  build: {
    outDir: "docs",
  },
});