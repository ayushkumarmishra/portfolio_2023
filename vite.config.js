import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { createRequire } from "node:module";

import { viteStaticCopy } from "vite-plugin-static-copy";

const require = createRequire(import.meta.url);
const cMapsDir = path.join(
  path.dirname(require.resolve("pdfjs-dist/package.json")),
  "cmaps"
);
const standardFontsDir = path.join(
  path.dirname(require.resolve("pdfjs-dist/package.json")),
  "standard_fonts"
);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: cMapsDir, dest: "" },
        { src: standardFontsDir, dest: "" },
      ],
    }),
    react(),
  ],
});
