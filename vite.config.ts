// noinspection ES6PreferShortImport
import {themeColor} from "./src/lib/style/theme.server"
import {sveltekit} from "@sveltejs/kit/vite"
import {defineConfig} from "vite"
import {SvelteKitPWA} from "@vite-pwa/sveltekit"
import ViteYaml from "@modyfi/vite-plugin-yaml"
import {readFile} from "fs/promises"
import {fileURLToPath} from "url"

const isTauri = "TAURI_FAMILY" in process.env
console.info(isTauri ? "Building for Tauri" : "Building for PWA")
const {homepage, bugs} = JSON.parse(
  await readFile(fileURLToPath(new URL("package.json", import.meta.url)), "utf8"),
)

process.env.VITE_HOMEPAGE_URL = homepage
process.env.VITE_BUGS_URL = bugs.url

export default defineConfig({
  build: {
    // we rely on the serial api, so just chrome is fine
    target: ["chrome114", "safari16"],
    rollupOptions: {
      external: isTauri ? [/virtual:pwa.*/] : [],
    },
  },
  envPrefix: ["TAURI_", "VITE_"],
  plugins: [
    ViteYaml(),
    sveltekit(),
    ...(isTauri
      ? []
      : [
          SvelteKitPWA({
            kit: {
              trailingSlash: "always",
            },
            scope: "/",
            base: "/",
            includeAssets: ["favicon.png"],
            workbox: {
              globPatterns: ["**/*.{js,css,html,woff2,json,csv,png,svg}"],
            },
            manifest: {
              name: "dot i/o",
              id: "dot_io_v2",
              theme_color: themeColor,
              icons: [
                {
                  src: "icon.svg",
                  sizes: "144x144",
                  type: "image/svg+xml",
                },
              ],
            },
          }),
        ]),
  ],
})
