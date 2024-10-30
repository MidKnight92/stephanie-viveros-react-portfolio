/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-gray-blue": "#3B474E",
      "warm-brown": "#825D43",
      "warm-gold": "#C99A58",
      "muted-green-gray": "#9BAD9D",
      "muted-teal": "#62989C",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
        serif: ["Ganarti", "Merriweather", "sans-serif"],
      },
    extend: {},
  },
  plugins: [],
}


