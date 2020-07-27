const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const commonConf = require('./webpack.common.js');
const outputFile = '[name]';
const assetFile = '[name]';

module.exports = () => merge(commonConf({outputFile, assetFile}), {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 5000,
    host: '0.0.0.0',
    open: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './src/other.html',
      filename: 'other.html',
      inject: 'body',
      chunks: ['sub']
    })
  ]
});
