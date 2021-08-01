export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Job-Web',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  subdirectory: '/',
  srcDir: 'src/',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~sass/app'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      Object.assign(config.resolve.alias, require('./aliases.config'))

      config.module.rules.push({
        test: /\.scss/,
        oneOf: [{ use: ['import-glob-loader2'] }],
        enforce: 'pre'
      })
    }
  }
}
