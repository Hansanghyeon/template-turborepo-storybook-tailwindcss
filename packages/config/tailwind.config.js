const colors = {
  gray: {
    60: "#E2E6EA",
    70: "#C5CAD3",
    80: "#959BA6",
    100: "#1F2536",
  },
  bg: "#EDF0F4",
  border: "#EBEDF0",
  green: "#00D69A",
  primary: {
    50: "#E8F0FF",
    100: "#C6DBFF",
    200: "#A3C5FF",
    300: "#81AFFF",
    400: "#5F99FF",
    500: "#1A6DFF",
    600: "#165DD9",
    700: "#0043CB",
  },
  darkPrimary: {
    50: "#0E3C8C",
    100: "#1147A6",
    200: "#1352BF",
    300: "#165DD9",
    400: "#1968F2",
    500: "#5392FF",
    600: "#81AFFF",
    700: "#D1E2FF",
  },
  imwebBlue: "#1A6DFF",
  darkImwebBlue: "#5392FF",
};

module.exports = {
  content: ["../../packages/ui/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      container: {
        center: true,
        padding: {
          DEFAULT: "var(--container-px, 1rem)",
        },
      },
    },
  },
  plugins: [],
};
