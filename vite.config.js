import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        jpeg: {
          quality: 30,
        },
        exclude: [
          path.resolve(__dirname, "public"),
          path.resolve(__dirname, "public/**"),
        ],
      }),
      legacy({
        targets: ["last 3 versions", "safari >= 12"],
      }),
    ],
    optimizeDeps: {
      include: ["jquery"],
    },
    envFile: ".env",
  };
});
