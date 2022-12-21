/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#FFFFFF",
      },
      spacing: {
        85: "22rem",
        100: "25rem",
        130: "30rem",
      },
    },
  },
  plugins: [],
};
