/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-100": "#F9FAFB",
        light: "#f7f9fe",
        "light-400": "#D0D5DD",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
