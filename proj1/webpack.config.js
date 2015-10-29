var path = require('path');
var webpack = require('webpack');
var OmitTildeWebpackPlugin = require('omit-tilde-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new OmitTildeWebpackPlugin({
      include: ['package.json', 'proj1', 'proj2'],
      deprecate: true
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel", exclude: /(node_modules|bower_components)/ },
      { test: /\.coffee$/, loader: "babel!coffee" },
      { test: /\.scss$/, loader: "style!css!sass?sourceMap" },
      { test: /\.(svg|png|jpe?g|ttf|woff2?|eot)$/, loader: 'url?limit=8182' }
    ]
  },
  resolve: {
    modulesDirectories: [
      'node_modules', path.resolve('..')
    ]
  },
  resolveLoader: {
    modulesDirectories: [
      path.resolve('node_modules')
    ]
  }
};