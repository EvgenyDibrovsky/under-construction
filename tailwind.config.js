/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js', './*.html'],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1240px',

    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.625rem',
      },
    },
    extend: {
      colors: {
        primary: '#eff6ff',
        secondary: '#64748b',
      },
      backgroundImage: {
        'hero-section': "url('./img/bg-hero.jpg')",
      },
      fontFamily: {
        futura: ['"futura-pt"', 'sans-serif'],
        seasons: ['"the-seasons"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
