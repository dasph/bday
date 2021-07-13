module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.tsx']
  },
  theme: {
    fontFamily: {
      sans: ['Quicksand', '"Segoe UI"',  '"Helvetica Neue"', 'Arial', 'sans-serif']
    },
    extend: {
      borderWidth: {
        '1': '1px'
      },
      animation: {
        'type': 'type .5s alternate infinite'
      },
      keyframes: {
        type: {
          'from': { 'box-shadow': 'inset -2px 0px 0px currentColor' },
          'to': { 'box-shadow': 'inset -2px 0px 0px transparent' }
        }
      }
    }
  },
  variants: {
    extend: {
    }
  }
}
