/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],

  daisyui: {
    themes: [
      "wireframe",
      "black",
    ],
  },

  plugins: [
    require("daisyui"),
    require('tw-elements/dist/plugin')
  ],
}
