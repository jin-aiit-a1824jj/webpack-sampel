const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ProvidePlugin } = require('webpack');

module.exports = ({outputFile, assetFile}) => ({
  mode: 'development', //分割
  devtool: 'none', //分割
  entry: { app: './src/js/app.js', sub: './src/js/app.js'},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: `${outputFile}.js`,
    chunkFilename: `${outputFile}.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
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
              name: `${assetFile}.[ext]`,
              outputPath: 'images',
              publicPath: 'http://127.0.0.1:15000/images'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${outputFile}.css`
    }),
    new ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      utils: [path.resolve(__dirname, 'src/js/utils'), 'default']
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendors: {
          name: "vendors",
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        utils: {
          name: "utils",
          test: /src[\\/]js[\\/]utils[\\/]/,
          chunks: 'async'//initial
        },
        default: false
      }
    }
  },
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/scss'),
      '@imgs': path.resolve(__dirname, 'src/images')
    },
    extensions: ['.js', '.scss'],
    modules:[path.resolve(__dirname, 'src'), 'node_modules']
  }
});
