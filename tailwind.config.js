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
        'xs': {'min': '320px', 'max': '417px'},

        
        'sm': {'min': '320px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '981px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '768px', 'max': '1535px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        // 'xl': {'min': '1280px', 'max': '1535px'},
        // // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}