/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
    },
    colors: {
      dark: "#1b1b1b",
      light: "#f5f5f5",
      primary: "#B63E96", // 240,86,199
      primaryDark: "#58E6D9", // 80,230,217
      grey: "#00000080",
      active: "#919292",
      text: "#444242 ",
      education: "#9F4BD0",
      orange: "#CEF7A0",
      degree: "#37718E",
      sc: "#63AABF",
    },
  },
  plugins: [],
};
