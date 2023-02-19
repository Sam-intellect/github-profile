/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lightBlue: '#1F2A49',
        blue: '#0079FE',
        deepBlue: '#141c2f',
      },
    },
  },
  plugins: [],
};
