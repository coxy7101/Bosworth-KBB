/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        warmgray: '#F0EFED',
        cream: {
          50: '#fdfcf9',
          100: '#FAF8F5',
          200: '#f5f2ed',
          300: '#ebe6de',
          400: '#ddd6ca',
        },
        charcoal: {
          DEFAULT: '#2D2D2D',
          light: '#4d4d4d',
          muted: '#6d6d6d',
        },
        accent: {
          DEFAULT: '#2C4A3E',
          light: '#3d6454',
          dark: '#1e3529',
        },
        stone: {
          DEFAULT: '#7a7772',
          light: '#98958f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      letterSpacing: {
        wide: '0.05em',
        wider: '0.08em',
      },
    },
  },
  plugins: [],
};
