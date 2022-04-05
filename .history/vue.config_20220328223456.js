const path=require('path')

module.exports = {
  outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        router: '@/router',
        store: '@/store',
        style: '@/style',
        views: '@/views'
      }
    }
  }
}
