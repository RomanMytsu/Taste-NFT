import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vite.dev/config/
export default defineConfig({
  base: "/taste-nft/",
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/app/styles/variables.scss" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
