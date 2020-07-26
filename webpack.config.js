const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'none',
  entry: { app: './src/app.js'},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  }
}
