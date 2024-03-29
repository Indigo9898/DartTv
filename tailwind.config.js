/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    minHeight: {
      'full': '100vh',
      'auto': 'auto',
      '90/screen': '90vh',
      '80/screen': '80vh',
      '70/screen': '70vh',
      '60/screen': '60vh',
      '50/screen': '50vh',
      '30/screen': '30vh',
      '20/screen': '20vh',
      '15/screen': '15vh',
      '10/screen': '10vh',
      '5' : '5%',
      '1/10': '10%',
      '2/10': '20%',
      '3/10': '30%',
      '4/10': '40%',
      '1/2': '50%',
      '6/10': '60%',
      '7/10': '70%',
      '8/10': '80%',
      '9/10': '90%',
      '100': '100%',
      'fit': 'fit-content'
    },
    minWidth: {
      'full': '100vw',
      '1/10': '10%',
      '2/10': '20%',
      '3/10': '30%',
      '4/10': '40%',
      '1/2': '50%',
      '6/10': '60%',
      '7/10': '70%',
      '8/10': '80%',
      '9/10': '90%',
      '100': '100%',
      'fit': 'fit-content'
    },
    maxWidth:{
      'full': '100vw',
      'auto': 'auto',
      '90/screen': '90vh',
      '70/screen': '70vh',
      '60/screen': '60vh',
      '50/screen': '50vh',
      '30/screen': '30vh',
      '20/screen': '20vh',
      '15/screen': '15vh',
      '1/10': '10%',
      '2/10': '20%',
      '3/10': '30%',
      '4/10': '40%',
      '1/2': '50%',
      '6/10': '60%',
      '7/10': '70%',
      '8/10': '80%',
      '9/10': '90%',
      '100': '100%',
      'fit': 'fit-content'
    },
    height:{
      'full': '100vh',
      'auto': 'auto',
      '90/screen': '90vh',
      '70/screen': '70vh',
      '60/screen': '60vh',
      '50/screen': '50vh',
      '30/screen': '30vh',
      '20/screen': '20vh',
      '15/screen': '15vh',
      '1/10': '10%',
      '2/10': '20%',
      '3/10': '30%',
      '4/10': '40%',
      '1/2': '50%',
      '6/10': '60%',
      '7/10': '70%',
      '8/10': '80%',
      '9/10': '90%',
      '100': '100%',
      'fit': 'fit-content',
      '15' : '15%',
      '5' : '5%',
    },
    maxHeight:{
      '90/screen': '90vh',
      '70/screen': '70vh',
      '60/screen': '60vh',
      '50/screen': '50vh',
      '30/screen': '30vh',
      '20/screen': '20vh',
      '15/screen': '15vh',
      'full': '100vh',
      '1/10': '10%',
      '2/10': '20%',
      '3/10': '30%',
      '4/10': '40%',
      '1/2': '50%',
      '6/10': '60%',
      '7/10': '70%',
      '8/10': '80%',
      '9/10': '90%',
      '100': '100%',
    },
    width:{
      'full': '100vw',
      'auto': 'auto',
      '1/10': '10%',
      '2/10': '20%',
      '3/10': '30%',
      '4/10': '40%',
      '1/2': '50%',
      '6/10': '60%',
      '7/10': '70%',
      '8/10': '80%',
      '9/10': '90%',
      '100': '100%',
      'fit': 'fit-content'
    },
    margin:{
      'none': '0px',
      'full': '100vh',
      '1/10': '10%',
      '2/10': '20%',
      '3/10': '30%',
      '4/10': '40%',
      '1/2': '50%',
      '6/10': '60%',
      '7/10': '70%',
      '8/10': '80%',
      '9/10': '90%',
      '100': '100%',
      'fit': 'fit-content',
      '5': '5%',
      '2': '2%',
      'auto': 'auto',
      '0.5rem': '0.5rem',
      '1rem': '1rem',
      '3rem': '3rem'
    },
    padding: {
      'none': '0px',
      'full': '100vh',
      '1/10': '10%',
      '2/10': '20%',
      '3/10': '30%',
      '4/10': '40%',
      '1/2': '50%',
      '6/10': '60%',
      '7/10': '70%',
      '8/10': '80%',
      '9/10': '90%',
      '100': '100%',
      'fit': 'fit-content',
      '5': '5%',
      '2': '2%',
      '1rem' : '1rem',
      '2rem' : '2rem',
      '3rem' : '3rem'
    },
    colors:{
      'darkGrey': '#011627',
      'mainOrange': '#FF7315',
      'mainWhite': '#F4F4F4',
      'white' : '#fff',
      'mainCyan' : '#2ec4b6',
      'offWhite' : '#F1FAEE',
      'lightCyan' : '#a8dadc',
      'darkBlue' : '#1d3557',
      'mainRed' : '#e63946',
      'neonPurple': '#7209B7',
      'mainBlack' : '#11001C'
    },
    backgroundImage: {
      'header': "url('/header.svg')",
      'phoneheader': "url('/phoneheader.svg')",
      'wave': "url('/wave.svg')",
      'pixeltees': "url('/pixeltees.PNG')"
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    aspectRatio:{
      '960/300': '960/300',
      '1/1': '1/1',
      '3/2': '3/2'
    },
    objectPosition:{
      'center': 'center',
      'top': 'top',
      'bottom': 'bottom',
      'left': 'left',
      'fit': 'fit',
    },
    backgroundImage:{
      'mainGradient' : 'linear-gradient(-30deg, rgba(1,22,39,1) 30%, rgba(46,196,182,1) 100%)',
      'mainGradientMobile' : 'linear-gradient(-30deg, rgba(1,22,39,1) 15%, rgba(46,196,182,1) 100%)'
    },
    fontFamily:{
      "moon" : "Moon"
    }, 
  },
  plugins: [],
}
