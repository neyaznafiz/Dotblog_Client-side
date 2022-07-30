/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],

  daisyui: {
    themes: [
      "black",
      "wireframe",
    ],
  },

  plugins: [
    require("daisyui"),
    require('tw-elements/dist/plugin')
  ],
}
