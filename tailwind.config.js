module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {
        'greenDrop': '5px 5px 0px #1FAF7B',
        'blackDrop': '5px 5px 0px #000000',
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#3490dc',
        'secondary': '#1FAF7B',
        'danger': '#e3342f',
        'bgMain': '#aaa9a9'
      })
    },
    textColor: {
      'link': '#17a2b8'
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}