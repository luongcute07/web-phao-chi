/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#E6CA85',
          400: '#D4AF37',
          500: '#C5A059',
          600: '#A98338',
          700: '#876725',
        },
        pearl: '#FBFBFA',
        cream: '#F7F5EE',
        navyDark: '#121F2D',
        charcoal: '#1E242B',
        darkSlate: '#0E1721',

        // Material / Design System tokens from DESIGN.md
        primary: '#121F2D',
        'primary-container': '#1E242B',
        'primary-fixed': '#DFBE74',
        'on-primary': '#FFFFFF',
        'on-primary-container': '#E6CA85',

        secondary: '#C5A059',
        'secondary-fixed': '#DFBE74',
        'on-secondary': '#FFFFFF',
        'on-secondary-fixed': '#121F2D',

        surface: '#F9F8F4',
        'surface-container-low': '#F7F5EE',
        'surface-container': '#F2EFE6',
        'surface-container-high': '#EAE5D8',
        'surface-container-highest': '#E0DAC9',
        'surface-container-lowest': '#FFFFFF',
        'on-surface': '#121F2D',
        'on-surface-variant': '#4A5568',
        outline: '#718096',
        'outline-variant': '#A0AEC0',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'var(--font-serif)', 'serif'],
        sans: ['Montserrat', 'var(--font-sans)', 'sans-serif'],
      },
      spacing: {
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        'space-2xl': '4rem',
        'space-3xl': '6rem',
        'gutter': '1.5rem',
        'gutter-mobile': '1rem',
        'margin': '3rem',
        'margin-mobile': '1.25rem',
      },
      borderRadius: {
        'DEFAULT': '0.125rem',
        'sm': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      boxShadow: {
        'relief': '0 18px 45px -10px rgba(18, 31, 45, 0.08), 0 4px 12px -2px rgba(18, 31, 45, 0.04)',
        'gold-glow': '0 8px 24px -4px rgba(197, 160, 89, 0.35)',
      }
    },
  },
  plugins: [],
};