/**
 * GitHub Pages serves 404.html for unknown paths.
 * Copying index.html → 404.html lets React Router handle /privacy-policy and /terms-of-service on refresh.
 */
const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const indexFile = path.join(distDir, "index.html");
const notFoundFile = path.join(distDir, "404.html");

if (!fs.existsSync(indexFile)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}

fs.copyFileSync(indexFile, notFoundFile);
console.log("Created dist/404.html for GitHub Pages SPA routing.");
