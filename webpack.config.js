const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'main.js'),
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
	test: /\.jsx?$/,
	exclude: /node_modules/,
	loader: 'babel-loader'
      },
      {
	test: /\.less$/,
	use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
	loader: 'url-loader',
	options: {
	  prefix: 'assets/[name].[hash].[ext]',
	  limit: 10000,
	  mimetype: 'image/svg+xml'
	}
      }]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    })
  ]
}
