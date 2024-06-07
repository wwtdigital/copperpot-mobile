/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#B5542B',
        copper: {
          100: '#F7EBE4',
          200: '#E8C9B5',
          500: '#B5542B',
          700: '#7E3516',
        },
        white: {
          DEFAULT: '#ffffff',
          100: '#fafafa',
        },
        gray: {
          100: '#878787',
          200: '#5F5F5F',
        },
        dark: {
          100: '#1F1B18',
        },
        error: '#C8321E',
        success: '#2F7A4F',
      },
      fontFamily: {
        quicksand: ['Quicksand-Regular', 'sans-serif'],
        'quicksand-bold': ['Quicksand-Bold', 'sans-serif'],
        'quicksand-semibold': ['Quicksand-SemiBold', 'sans-serif'],
        'quicksand-light': ['Quicksand-Light', 'sans-serif'],
        'quicksand-medium': ['Quicksand-Medium', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
