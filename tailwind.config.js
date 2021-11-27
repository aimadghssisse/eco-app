module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.js', './src/**/*.tsx']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          light: '#F4F4F4',
          DEFAULT: '#5C5C5C',
          dark: '#6c757d'
        },
        blue: {
          DEFAULT: '#212529',
          dark: '#212529'
        },
        black: {
          DEFAULT: '#262626',
          hover: '#000000b3'
        },
        white: '#FFFFFF',
        green: {
          light: '#8BC53F',
          DEFAULT: '#8BC53F',
          dark: '#80AD3C'
        },
        isRecommended: '#C2E29E'
      },
      boxShadow: {
        'green-md': '0 0 0 0.2rem rgb(212 234 187)'
      },
    },
    screens: {
      // mobile is default

      'sm': '750px',
      // => @media (min-width: 750px) { ... }

      'md': '978px',
      // => @media (min-width: 978px) { ... }

      'lg': '1140px'
      // => @media (min-width: 1182px) { ... }

    },
    fontFamily: {
      sans: ['Quicksand', 'sans-serif']
    },
    container: {
      center: true
    }
  },
  variants: {
    extend: {
      margin: ['first', 'last']
    },
  },
  plugins: [],
}
