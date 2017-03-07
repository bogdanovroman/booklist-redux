const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'booklist.js',
    publicPath: '/public/js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
      loaders: [
          {
              test: /\.js$/,
              loaders: [
                  'react-hot-loader', 'babel-loader'
              ],
              include: path.join(__dirname, 'src')
          }, {
              test: /\.scss$/,
              loaders: ['style-loader', 'css-loader', 'sass-loader']
          }
      ]
  },
};
