var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bin')
  },
  module: {
    rules: [
      {
        test: /\.glsl$/i,
        use: 'raw-loader'
      }
    ]
  }
};
