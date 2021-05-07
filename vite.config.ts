import { defineConfig } from "vite";
import react from "vite-preset-react";
import twindJsx from "@twind/vite-plugin-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), twindJsx()],
});
