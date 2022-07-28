/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '5rem'
    },

    fontFamily: {
      sans: ['Jost', 'sans-serif'],
    },

    extend: {
      colors: {
        'blue-dark': '#0D2549',
        'blue-light': '#0477BF',
      },
      zIndex: {
        'infinite': '99999',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
