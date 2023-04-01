/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      'sm': '375px',

      'md': '768px',

      'lg': '1113px',

      'xl': '1440px',

    },

    extend: {
      display: ["group-hover"],
      fontFamily:{
        burtons: "burtons",
      },
    },
  },
  plugins: [],
}
