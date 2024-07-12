import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import legacy from "@vitejs/plugin-legacy";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    plugins: [
      ViteImageOptimizer({
        jpeg: {
          quality: 30,
        },
        // exclude: [
        //   "src/img/slider/**",
        //   "./src/img/slider/**",
        //   "/src/img/slider/**",
        //   "**/src/img/slider/**",
        // ],
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
