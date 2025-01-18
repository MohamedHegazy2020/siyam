/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
        'gradient-linear': 'linear-gradient(to right, #005594, #D9212C)',
        'gradient-linear-100': 'linear-gradient(to right, #005594, #00B2FF)',
        'footer-texture': "url('/src/assets/background-texture.png')",
        'property-1': "url('/src/assets/property-1.png')",
        'section-100': "url('/src/assets/bg-section-100.png')",
        'section-200':"url('/src/assets/bg-section-200.png')",
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
