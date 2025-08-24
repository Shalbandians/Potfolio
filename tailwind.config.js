/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'slide-up': 'slide-up 0.8s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
        'spin-slow': 'spin 20s linear infinite',
        'skill-bar': 'skill-bar 1.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        secondary: {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        accent: {
          500: '#10b981',
          600: '#059669',
        }
      }
    },
  },
  plugins: [],
};