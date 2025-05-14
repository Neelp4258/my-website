/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          cream: {
            50: '#fefaf6',
            100: '#fdf5ec',
          },
          'gold': {
            50: '#fff9e6',
            100: '#fff3cc',
            200: '#ffe799',
            300: '#ffdb66',
            400: '#ffcf33',
            500: '#ffc300',
            600: '#cc9c00',
            700: '#997500',
            800: '#664e00',
            900: '#332700',
          },
        },
        fontFamily: {
          'playfair': ['"Playfair Display"', 'serif'],
          'poppins': ['Poppins', 'sans-serif'],
          'montserrat': ['Montserrat', 'sans-serif'],
        },
        fontSize: {
          'hero': ['4.5rem', { lineHeight: '1.1' }],
          'display': ['3.5rem', { lineHeight: '1.2' }],
          'subtitle': ['1.5rem', { lineHeight: '1.4' }],
        },
        letterSpacing: {
          'wider': '0.05em',
          'widest': '0.1em',
        },
        animation: {
          'gradient-xy': 'gradient-xy 15s ease infinite',
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'bounce-slow': 'bounce 3s infinite',
        },
        keyframes: {
          'gradient-xy': {
            '0%, 100%': {
              'background-size': '400% 400%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
            }
          },
          'float': {
            '0%, 100%': {
              transform: 'translateY(0)',
            },
            '50%': {
              transform: 'translateY(-20px)',
            },
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'gradient-gold': 'linear-gradient(135deg, #ffd700 0%, #ffa500 50%, #ff8c00 100%)',
          'gradient-gold-dark': 'linear-gradient(135deg, #ffc300 0%, #ff8c00 50%, #ff6b00 100%)',
        },
        boxShadow: {
          'gold': '0 4px 14px 0 rgba(255, 195, 0, 0.39)',
          'gold-dark': '0 4px 14px 0 rgba(255, 140, 0, 0.39)',
        },
      },
    },
    plugins: [],
  }
  