module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
      'main-bg': "url('http://localhost:3000/background/bg.jpg')",
    },
  },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
