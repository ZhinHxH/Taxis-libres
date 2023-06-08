/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xm': '370px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'lg-v': '1150px',
      'xl': '1280px',
      '2xl': '1500px',
    },
    extend: {},
  },
  plugins: [],
}

