module.exports = {
  outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        router: '@/router',
        store: '@/store',
        style: '@/style',
        views
      }
    }
  }
}
