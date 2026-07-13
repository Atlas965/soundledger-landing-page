/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070d",
          900: "#0a0e17",
          850: "#0d121d",
          800: "#111726",
          700: "#161d30",
          600: "#1f2942",
          500: "#2b3654",
        },
        accent: {
          cyan: "#3fd7d0",
          blue: "#3b6bf0",
          violet: "#6f5bf0",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, #3fd7d0 0%, #3b6bf0 55%, #6f5bf0 100%)",
        "hero-glow":
          "radial-gradient(60% 50% at 50% 0%, rgba(63,215,208,0.18) 0%, rgba(59,107,240,0.10) 45%, rgba(5,7,13,0) 80%)",
        "ledger-grid":
          "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(63,215,208,0.25)",
        card: "0 8px 30px rgba(0,0,0,0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
