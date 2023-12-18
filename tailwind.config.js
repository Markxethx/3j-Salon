/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
       kolker: ["Kolker Brush", "cursive"],
       workSans: ['Work Sans', 'sans-serif']
      },
    },

      colors: {
        light: "#F7F3EF",
        peach: "#F1E3D6",
        choco: "#4B4036",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        smd: "840px",
        md: "1020px",
        lg: "1280px",
        xlg: "1439px",
        xl: "1700px",
      },
  },
  plugins: [],
}