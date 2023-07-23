/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      headline: ["Playfair Display", "sans-serif"],
      copy: ["Archivo", "Verdana", "sans-serif"],
    },
    extend: {
      colors: {
        'rose': '#e5476b',
        'fire': '#f96f37',
        'gold': '#eea10c',
        'planty': '#92a520',
        'forest': '#567C35',
        'poisonIvy': '#c8c8433',
        'sky': '#78aba4', 
      },
    },
  },
  plugins: [],
}