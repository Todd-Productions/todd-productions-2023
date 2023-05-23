/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/app/**/*.{tsx,ts,jsx,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#083e6c",
        },
        green: {
          500: "#33ba06",
        },
        grey: {
          100: "#e1e1e1",
          500: "#949599",
          600: "#5c6568",
        },
        red: {
          500: "#ff0000",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
      },
    },
  },
  screens: {
    xs: "414px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  plugins: [],
};
