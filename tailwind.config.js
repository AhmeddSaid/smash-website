// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#047ab8",
        "main-blue": "#0f172a",
        "blue-1": "#1100db",
      },
    },
  },
  plugins: [],
};
