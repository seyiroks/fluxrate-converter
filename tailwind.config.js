/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cardGlass: "rgba(255,255,255,0.08)",
        cardGlassLight: "rgba(255,255,255,0.35)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },


  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
