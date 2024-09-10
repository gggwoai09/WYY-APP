const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('@vant/auto-import-resolver');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      AutoImport.default({
        resolvers: [VantResolver()],
      }),
      Components.default({ resolvers: [VantResolver()] }),
    ],
  },
  transpileDependencies: true
})
