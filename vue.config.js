const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api/": {
        target: "https://service.testenv.ro/api/",
        pathRewrite: { '^/api': '' }
      }
    }
  }
  })
