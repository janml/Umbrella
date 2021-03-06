const http = require('http')
const keepAliveAgent = new http.Agent({ keepAlive: true });


module.exports = {
  publicPath: "",
  outputDir: "www",

  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].CSP_CONNECT_SOURCES = process.env.VUE_APP__ALLOWED_TO_CONNECT_TO;
        args[0].DEV_SERVER_INLINE_EXECUTION_PERMISSIONS = process.env.NODE_ENV === "development"? "\'unsafe-inline\'": ""
        return args;
      });
  },

  configureWebpack: {
    devServer: {
      proxy: {
        '/owm_api': {
          target: process.env.VUE_APP__OPEN_WEATHER_MAP_API_PROXY_TARGET,
          pathRewrite: {'^/owm_api' : ''},
          changeOrigin: true,
          agent: keepAliveAgent
        }
      }
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
}
