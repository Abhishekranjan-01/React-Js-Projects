/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xm: "350px",
      ssm: "450px",
      sm: "550px",
      md: "720px",
      llg: "900px",
      lg: "1280px",
      xl: "1536px",
    },
    fontFamily: {
      pacifico_regula: ["Pacifico", "cursive"],
    },
  },
  plugins: [],
};
