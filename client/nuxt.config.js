const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Pluto For Planet | Best Band in Charlotte',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Great+Vibes' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Paytone+One' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Rajdhani:400,500,600,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Yellowtail' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Ultra' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Righteous' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' },
      // font awesome
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.1.0/css/all.css'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-sass-resources-loader', '@/assets/styles/main.scss'],
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
