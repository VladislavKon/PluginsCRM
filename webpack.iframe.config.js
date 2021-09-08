const path = require('path');

module.exports = {
  entry: [
        './Webresources/src/iframeAnnotation.js',
        './Webresources/src/Index.html'
    ],
  output: {
    filename: 'iframeAnnotation.js',
      path: path.resolve(__dirname, 'Webresources/dist'),
      libraryTarget: 'var',
      library: 'IframeAnnotation',
  },
  mode: 'development',
  watch: true,
  watchOptions: {
      aggregateTimeout: 500,
      poll: 3000,
      ignored: /node_modules/
  }
};