const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'none',
  entry: { app: './src/app.js', sub: './src/app.js'},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          //'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg|woff2?|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
              outputPath: 'images',
              publicPath: 'http://127.0.0.1:15000/images'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
  ]
}
