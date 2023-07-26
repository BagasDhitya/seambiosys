/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "seambiosys-orange": "#f25801",
        "seambiosys-blue": "#012470",
      },
    },
  },
  plugins: [],
};
