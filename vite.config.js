import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        png: {
          quality: 10,
        },
        jpeg: {
          quality: 40,
        },
        jpg: {
          quality: 100,
        },
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
