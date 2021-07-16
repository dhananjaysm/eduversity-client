module.exports = {
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  purge: ['./src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['IBM Plex Sans'],
      },
      colors: {
        blue: {
          100: '#cce4f6',
          200: '#99c9ed',
          300: '#66afe5',
          400: '#3394dc',
          500: '#0079d3',
          600: '#0061a9',
          700: '#00497f',
          800: '#003054',
          900: '#00182a',
          
        },
        space:{
          500:'#242535',
          700:'#17141d'
        },
        olight:{
          500:'#ff8a00'
        }
      },
      spacing: {
        70: '17.5rem',
        160:'40rem'
      },
      container: false,

    },
  },
  variants: {
    extend:{
      backgroundColor: ['disabled'],
      borderColor: ['disabled'],
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': { maxWidth: '640px' },
          '@screen md': { maxWidth: '768px' },
          '@screen lg': { maxWidth: '975px' },
        },
      })
    },
  ],
}
