const path = require('path');

module.exports = {
  entry: ['./Webresources/src/FieldsChecker.js',  
        './Webresources/src/regionAuto.js',
        './Webresources/src/SaveAndClose.js',
        './Webresources/src/FilterLookup.js'],
  output: {
    filename: 'MainWebresources.js',
      path: path.resolve(__dirname, 'Webresources/dist'),
      libraryTarget: 'var',
      library: 'WebResources',
  },
  mode: 'development',
  watch: true,
  watchOptions: {
      aggregateTimeout: 500,
      poll: 3000,
      ignored: /node_modules/
  }
};