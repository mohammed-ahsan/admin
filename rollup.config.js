import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      input: "src/main.js", // Entry point of your application
      output: {
        dir: "build", // Output directory
        format: "es", // Output format (ES module)
      },
    },
  },
});
