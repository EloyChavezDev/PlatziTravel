module.exports = {
  content: ["./public/index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage : {
        'sanFrancisco': "url('https://www.viajarsanfrancisco.com/img/que-visitar-en-san-francisco.jpg')",
        'noruega':"url('https://www.bbva.com/wp-content/uploads/2021/03/noruega.jpg')",
        'chicago':"url('https://i2.wp.com/mejoreszonas.com/wp-content/uploads/2018/12/Las-mejores-zonas-donde-alojarse-en-Chicago-Illinois.jpg')",
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

