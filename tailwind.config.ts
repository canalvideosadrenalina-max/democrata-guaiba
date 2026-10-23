import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071422",
        paper: "#F3EFE6",
        mist: "#E5EEF6",
        cream: "#F7F4EC",
        democrata: {
          blue: "#003F9E",
          green: "#009640",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "ui-serif", "serif"],
      },
      boxShadow: {
        dossier: "0 28px 60px -36px rgba(0, 63, 158, 0.45)",
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
