module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      backgroundImage : {
        'sanFrancisco': "url('https://www.viajarsanfrancisco.com/img/que-visitar-en-san-francisco.jpg')",
        'noruega':"url('https://www.bbva.com/wp-content/uploads/2021/03/noruega.jpg')"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      }),
      textColor:{
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'terciary': '#61AEC9',
      },
      fontFamily:{
        Monserrat:['Monserrat','sans-serif']
      },
    },
  },
  plugins: [],
}

