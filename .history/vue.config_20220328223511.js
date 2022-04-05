const path = require('path')

module.exports = {
  outputDir: './build',
  configureWebpack: (config) => {
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
