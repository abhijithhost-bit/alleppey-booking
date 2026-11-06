import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // 60% Dominant Base
          cream: "#FAF8F5",
          creamMuted: "#F3EFEA",
          creamBorder: "#EAE5DD",
          creamCard: "#FFFFFF",

          // 30% Structural & Content
          blue: "#0A2540",
          blueDark: "#061727",
          blueLight: "#163B65",
          navy: "#0A2540",
          dark: "#111827",

          // 10% High-Conversion Accent
          orange: "#FF6600",
          orangeHover: "#E65C00",
          orangeLight: "#FFF5EB",
          orangeMuted: "#FFE0CC",

          // Action Accents
          whatsapp: "#2CD664",
          whatsappHover: "#22B350",
          whatsappLight: "#E6F9ED",
          green: "#2CD664",
          greenDark: "#22B350",
          greenLight: "#E6F9ED",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
