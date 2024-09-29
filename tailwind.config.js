/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coustomGreenColors: "#4CAF4F",
        coustomwhiteColors: "#F5F7FA",
        coustomZinkColors: "#4D4D4D",
        coustomGrayColors: "#717171",
        coustomebackgroundfooter: "#263238",
      },
    },
  },
  plugins: [],
};
