const path = require('path')

module.exports = {
  outputDir: './build',
  configureWebpack: (config) => {
    config.resolve.alias={
      '@'
    }
    }
  }
}
