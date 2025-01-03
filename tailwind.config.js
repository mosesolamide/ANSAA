module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif']
      },
      colors: {
        bgColor: "#DAE0E9",
        buttonColor: "#080239",
        modal:"#EDF1F7"
      },
      screens: {
        'smallLg': '800px',
        'largeLg': '1030px',
        'eight': '820px'
      }
    },
  },
  plugins: [],
}
