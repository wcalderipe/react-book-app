const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
