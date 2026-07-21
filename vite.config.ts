import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub Pages project site base path.
 * Repo: https://github.com/Atlas965/soundledger-landing-page
 *
 * When SoundLedger.ca custom domain DNS is fully connected, change this to "/"
 * and remove the BrowserRouter basename in src/main.tsx.
 */
export default defineConfig({
  base: "/soundledger-landing-page/",
  plugins: [react()],
});
