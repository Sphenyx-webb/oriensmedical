/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
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
      boxShadow: {
        'custom': '0 0 10px 0 rgba(26, 26, 26, 0.12)',
      },
      backgroundImage: {
        'hero-img': "url('../images/gallery/Hero-Photo-min.webp')",
      }
    },
  },
  plugins: [],
}
