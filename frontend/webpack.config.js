const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: [/.css$|.scss$/],
        use:[
         'style-loader',
         'css-loader',
         'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      gitHash: process.env['CODEBUILD_RESOLVED_SOURCE_VERSION'] || 'unknown'
    })
  ],
  output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
      }
};