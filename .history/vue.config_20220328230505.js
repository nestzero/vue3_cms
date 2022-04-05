module.exports = {

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
