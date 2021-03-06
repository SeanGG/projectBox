// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    productionSourceMap: false,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
    remUnit: 24,
  },
  dev: {
    env: require('./dev.env'),
    port: 8081,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // 模拟地址
      '/mock': {
        target: 'https://www.easy-mock.com/mock/5b2b7cf09bd86a040ba4cba3',
        changeOrigin: true,
        pathRewrite: {
          '^/mock': ''
        }
      },
      // 测试地址
      '/dev': {
        target: 'http://122.11.58.232:8003',
        changeOrigin: true,
        pathRewrite: {
          '^/dev': ''
        }
      },
      // 生产地址
      '/pro': {
        target: 'https://ngc.ztgame.com',
        changeOrigin: true,
        pathRewrite: {
          '^/pro': ''
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    remUnit: 24,
  }
}
