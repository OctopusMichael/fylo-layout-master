/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'veryDarkBlue' : '#070439',
        'regalBlue': '#243c5a',
        'desaturatedBlue': '#585989',
        'strongCyan': '#26baa4',
        'lightBlue': '#6173ff',
        'darkGrayishBlue': '#4c545d',
        'grayishBlue' : '#9fabb2',
        'lightGray ': '#bfbfbf',
        'lightGrayishBlue': '#f6f6fe',

      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1440px',
        // => @media (min-width: 1280px) { ... }
      },
      customClasses: {
        'my-flex': 'flex flex-col justify-center',
        // Agrega más clases personalizadas aquí si es necesario
      },
    },
  },
  plugins: [],
}

