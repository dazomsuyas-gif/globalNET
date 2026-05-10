/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primaryGold: '#C9A84C',
        goldBright: '#FFD700',
        navy: '#0A1628',
        red: '#E63946',
        parchment: '#F8F5F0',
        steel: '#1E2A3A',
        whiteSoft: '#F0EDE8',
        english: '#003087',
        chinese: '#DE2910',
        spanish: '#AA151B',
        french: '#002395',
        german: '#000000',
        swahili: '#1B5E20'
      },
      boxShadow: {
        goldGlow: '0 0 40px rgba(201,168,76,0.22)',
        glass: '0 20px 60px rgba(10,22,40,0.18)'
      },
      backdropBlur: {
        xs: '2px'
      },
      fontFamily: {
        display: ['var(--font-display)'],
        hero: ['var(--font-hero)'],
        body: ['var(--font-body)'],
        ui: ['var(--font-ui)'],
        chinese: ['var(--font-chinese)']
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class'
};

export default config;
