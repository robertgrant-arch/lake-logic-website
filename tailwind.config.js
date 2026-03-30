/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          50: '#EEF1F7',
          100: '#D4DCEC',
          200: '#A9B9D9',
          300: '#7E96C6',
          400: '#5373B3',
          500: '#3B5999',
          600: '#2D4578',
          700: '#1B2A4A',
          800: '#111B30',
          900: '#080D18',
        },
        water: {
          DEFAULT: '#3B82F6',
          50: '#EBF3FF',
          100: '#D1E7FD',
          200: '#A3CFFB',
          300: '#75B7F9',
          400: '#479FF7',
          500: '#3B82F6',
          600: '#0B63EE',
          700: '#084CB7',
          800: '#053580',
          900: '#031E49',
        },
        slate: {
          light: '#F8FAFD',
          mid: '#EEF2F7',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};