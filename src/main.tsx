import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* basename must match vite.config.ts `base` for GitHub Pages project sites */}
    <BrowserRouter basename="/soundledger-landing-page">
      <App />
    </BrowserRouter>
  </StrictMode>
);
