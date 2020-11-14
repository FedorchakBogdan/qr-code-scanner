const path = require('path')

module.exports = {
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@views': path.resolve(__dirname, 'src/views'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@plugins': path.resolve(__dirname, 'src/plugins'),
        '@components': path.resolve(__dirname, 'src/components')
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
