/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        darkBlue:'rgb(3,37,65)',
        lightGreen:'rgb(38,213,169)',
        lightBlue:'rgb(1,180,228)'

      },
      backgroundImage:{
        banner:'linear-gradient(to right,rgba(3,37,65,0.8)0%,rgba(3,37,65,0)100%),url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg")'
      }
    },
  },
  plugins: [],
}