var path = require('path');
module.exports = {
 
  entry: path.resolve(__dirname, 'src') + '/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
