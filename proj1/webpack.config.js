var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel", exclude: /(node_modules|bower_components)/ },
      { test: /\.coffee$/, loader: "babel!coffee" },
      { test: /\.scss$/, loader: "style!css!resolve-url!sass" },
      { test: /\.(svg|png|jpe?g|ttf|woff2?|eot)$/, loader: 'url?limit=8182' }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(".."),
      path.resolve("node_modules")
    ]
  },
  resolve: {
    root: [
      path.resolve('..'),
    ],
    modulesDirectories: [
      'node_modules'
    ]
  }
};