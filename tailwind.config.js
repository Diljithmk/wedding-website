/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        charcoal: {
          DEFAULT: "#141414",
          light: "#2C2C2C",
          muted: "#666666",
          subtle: "#8A8A8A",
        },
        champagne: {
          DEFAULT: "#F4ECE1",
          light: "#FAF7F2",
          dark: "#E3D5C0",
        },
        gold: {
          DEFAULT: "#C5A880",
          light: "#D8BF98",
          dark: "#A6865A",
          accent: "#D4AF37",
        },
        ivory: "#FDFBF7",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', '"DM Sans"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.05em",
        wider: "0.15em",
        widest: "0.25em",
        luxury: "0.35em",
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '3/4': '3 / 4',
        '16/9': '16 / 9',
        '21/9': '21 / 9',
      },
    },
  },
  plugins: [],
}
