/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'accent-900': '#010625',
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(#00B2FF , white )',
        'gradient-radial-100': 'radial-gradient(#212121 , transparent )',
        'gradient-linear': 'linear-gradient(to right, #005594, #D9212C)',
        'gradient-linear-100': 'linear-gradient(to right, #0099F7, #12F1E4)',
        'footer-texture': "url('/src/assets/images/background-texture.png')",
        'property-1': "url('/src/assets/images/property1.png')",
        'section-100': "url('/src/assets/images/bg-section-100.png')",
        'section-200': "url('/src/assets/images/bg-section-200.png')",
        'section-300': "url('/src/assets/images/bg-section-300.png')",
        'section-400': "url('/src/assets/images/bg-section-400.png')",
        'vector-100': "url('/src/assets/images/vector-100.png')",
        'vector-200': "url('/src/assets/images/vector-200.png')",
        'vector-star': "url('/src/assets/images/vector-star.png')",
        'vector-star-sharp': "url('/src/assets/images/vector-star-sharp.png')",
        'vector-reactangle': "url('/src/assets/images/vector-reactangle.svg')",
        'vector-polygon': "url('/src/assets/images/vector-polygon.png')",
        'home-hero': "url('/src/assets/images/bg-home-hero.png')",
        'products-hero': "url('/src/assets/images/bg-products-hero.png')",
        'capabilities-hero': "url('/src/assets/images/bg-capabilities-hero.png')",
        'blogs-hero': "url('/src/assets/images/bg-blogs-hero.png')",

      },
      fontFamily: {
        bebas: ['Bebas', 'cursive'],
        sakana: ['Sakana', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#005594',
          secondary: '#D9212C',
          accent: '#04233A',
          neutral: '#3d4451',
          'base-100': '#ffffff',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
