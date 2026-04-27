import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pkli: {
          red: "#BE0000",
          "red-dark": "#8B0000",
          "red-light": "#E53935",
          navy: "#0A1628",
          "navy-light": "#1B2B4B",
          blue: "#1E3A5F",
          "blue-light": "#2A4A7F",
          gold: "#C8981A",
        },
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-montserrat)", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(10,22,40,0.85) 0%, rgba(190,0,0,0.35) 100%)",
        "card-gradient":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%)",
        "section-gradient":
          "linear-gradient(180deg, #F0F4F8 0%, #FFFFFF 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        premium: "0 20px 60px rgba(0,0,0,0.12)",
        "premium-hover": "0 30px 80px rgba(0,0,0,0.18)",
        card: "0 4px 24px rgba(0,0,0,0.08)",
        "card-hover": "0 12px 48px rgba(190,0,0,0.15)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
