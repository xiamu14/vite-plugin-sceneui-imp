import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Inspect from "vite-plugin-inspect";
import vitePluginSceneuiImp from "vite-plugin-sceneui-imp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Inspect(), vitePluginSceneuiImp()],
});
