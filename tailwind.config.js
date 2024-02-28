/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.{js,ts,jsx,tsx}',
  ],
  
  theme: {
    colors: {
      primaryBlue:'var(--primaryBlue)',
      navbarBlue:'var(--blue-main)',
      lightBlue: 'var(--lightBlue)',
      primaryGray: 'var(--primaryGray)',
      secondaryGray: 'var(--secondaryGray)',
      borderGray:'#E1E5EC',
      white:"#FFF"
    },
    extend: {
      screens: {
        xs: { max: '17.5em' },
        // => @media (max-width: 280px) { ... }
        xsm: '25.625em',
        // => @media (min-width: 410px) { ... }
        xmd: '29.688em',
        // => @media (min-width: 475px) { ... }
        tablet: '40em',
        // => @media (min-width: 640px) { ... }
        xtablet: '48em',
        // => @media (min-width: 768px) { ... }
        laptop: '64em',
        // => @media (min-width: 1024px) { ... }
        desktop: '80em',
        // => @media (min-width: 1400px) { ... }
        largeDesktop: '100em',
        // => @media (min-width: 1600px) { ... }
        mobile: { max: '1023px' },
      }
    },
  },
  plugins: [],
}
