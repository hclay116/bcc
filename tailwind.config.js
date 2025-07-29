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
        stanford: {
          red: '#8C1515',
          'dark-red': '#651010',
          'light-gray': '#F4F4F4',
          'dark-gray': '#2E2D29',
        },
        psychedelic: {
          'deep-eggplant': '#3E2A49',
          'teal-green': '#438F82',
          'electric-lavender': '#C4B4E2',
          'neon-mint': '#91E4BD',
          'soft-white': '#EAEAEA',
          'faint-violet': '#8669A3',
          'dusty-plum': '#6D3D66',
        },
        creative: {
          gold: '#DAA520',
          purple: '#6B46C1',
          teal: '#0F766E',
          orange: '#EA580C',
        },
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        'curved-serif': ['Playfair Display', 'Georgia', 'serif'],
      },
              animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 4s ease-in-out infinite',
          'grain': 'grain 8s steps(10) infinite',
          'glow': 'glow 3s ease-in-out infinite alternate',
        },
              keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-20px) rotate(5deg)' },
          },
          grain: {
            '0%, 100%': { transform: 'translate(0, 0)' },
            '10%': { transform: 'translate(-5%, -5%)' },
            '20%': { transform: 'translate(-10%, 5%)' },
            '30%': { transform: 'translate(5%, -10%)' },
            '40%': { transform: 'translate(-5%, 15%)' },
            '50%': { transform: 'translate(-10%, 5%)' },
            '60%': { transform: 'translate(15%, 0%)' },
            '70%': { transform: 'translate(0%, 15%)' },
            '80%': { transform: 'translate(-15%, 10%)' },
            '90%': { transform: 'translate(10%, 5%)' },
          },
          glow: {
            '0%': { filter: 'brightness(1) saturate(1)' },
            '100%': { filter: 'brightness(1.2) saturate(1.3)' },
          },
        },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
}