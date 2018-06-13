const webpack = require('webpack');
const path = require('path');

module.exports  = [{
  cashe: true,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
  context: path.resolve(__dirname, 'src'),
  entry: './Routes.tsx',
  output: {
    filename: './dist/js/build.js'
  },
  module: {
    rules: [
      {
        text: /\.tx(x?)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extentions: ['.ts', '.tsx', '.js']
  }
}];