/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  theme: {
    // screens: {
    //   sm: "480px",
    //   md: "768px",
    //   lg: "976px",
    //   xl: "1440px",
    // },
    colors: {
      "dark-grayish-blue": "#3B474E",
      "warm-brownish-tone": "#825D43",
      "warm-gold": "#C99A58",
      "muted-greenish-gray": "#9BAD9D",
      "muted-teal": "#62989C",
    },
    fontFamily: {
      sans: ["Ganarti", "Merriweather", "sans-serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    plugins: [],
  },
};
