import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Custom domain (soundledger.ca) is served from site root — base must be "/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
