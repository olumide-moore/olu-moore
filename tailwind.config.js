/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sacramento: ["Sacramento", "sans-serif"],
        mali: ["Mali", "sans-serif"],
      },
    },
  },
  plugins: [],
};
