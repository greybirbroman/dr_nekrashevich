/** @type {import('tailwindcss').Config} */


const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      flex: {
        '0': '0 0 auto',
        '1': '1 0 auto',
      },
      screens: {
        'sm': {'min': '320px', 'max': '767px'},
        // => @media (min-width: 320px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1440px',
        // // => @media (min-width: 1280px) { ... }
  
      },
    },
  },
  plugins: [],
}