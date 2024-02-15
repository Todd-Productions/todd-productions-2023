/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#083e6c",
          700: "#04233d",
        },
        green: {
          500: "#33ba06",
        },
        grey: {
          100: "#e1e1e1",
          400: "#c8c9cb",
          500: "#949599",
          600: "#5c6568",
          700: "#414949",
        },
        red: {
          500: "#ff0000",
        },
        orange: {
          500: "#E97300",
        },
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
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
}
