/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#2b3945",
        darkBlueBg: "#202c37",
        darkBlueLightText: "#111517",
        darkGray: "#858585",
        lightGray: "#fafafa",
      },
      fontFamily: {
        nunitoSans: ["NunitoSans", "serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
