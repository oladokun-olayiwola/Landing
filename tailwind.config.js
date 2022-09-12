/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.2, 1, 0.3, 1)",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/images/bg.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
