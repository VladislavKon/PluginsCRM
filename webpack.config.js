const path = require('path');

module.exports = {
  entry: ['./Webresources/src/FieldsChecker.js',
  './Webresources/src/FilterLookup.js',
  './Webresources/src/regionAuto.js',
  './Webresources/src/SaveAndClose.js'],
  output: {
    filename: 'MainWebresources.js',
    path: path.resolve(__dirname, 'Webresources/dist'),    
  },
  mode: 'development',
  watch: true,
  watchOptions: {
      aggregateTimeout: 500,
      poll: 3000 
  }
};