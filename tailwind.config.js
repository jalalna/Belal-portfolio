/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#F7F2EE',
          100: '#E9DCD0',
          200: '#CBB8A4',
          300: '#A88E70',
          400: '#7E5C42',
          500: '#6F4E37',
          600: '#5A3E2C',
          700: '#4A321F',
          800: '#3B2416',
          900: '#2A1A10',
          950: '#1B110A',
        },
        gold: {
          50: '#FBF6EC',
          100: '#F4E7C8',
          200: '#E9D296',
          300: '#D9B662',
          400: '#C89B3C',
          500: '#B8862A',
          600: '#9A6E22',
          700: '#7C581C',
        },
        cream: {
          50: '#FBFAF7',
          100: '#F7F3EE',
          200: '#EFE7DB',
          300: '#E2D5C3',
          400: '#D4C2A9',
        },
        ink: '#1F1F1F',
        muted: '#666666',
      },
      fontFamily: {
        sans: ['Cairo', 'IBM Plex Sans Arabic', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Cairo', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(59,36,22,0.18)',
        card: '0 22px 60px -22px rgba(59,36,22,0.32)',
        glow: '0 18px 50px -16px rgba(200,155,60,0.45)',
      },
    },
  },
  plugins: [],
};
