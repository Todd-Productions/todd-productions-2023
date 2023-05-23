const media = require("./config/media");
const colors = require("./config/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./ui/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  debugProp: false,
  theme: {
    extend: {
      colors: {
        blue: {
          500: colors.blue500,
          700: colors.blue700,
        },
        green: {
          300: colors.green300,
          500: colors.green500,
          800: colors.green800,
        },
        grey: {
          200: colors.grey200,
          300: colors.grey300,
          400: colors.grey400,
          700: colors.grey700,
        },
        orange: {
          500: colors.orange500,
        },
        red: {
          500: colors.red500,
        },
        yellow: {
          500: colors.yello500,
        },
        tan: {
          500: colors.tan500,
        },
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
      },
    },
  },
  screens: {
    sm: media.sm,
    md: media.md,
    lg: media.lg,
    xl: media.xl,
    "2xl": media["2xl"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
