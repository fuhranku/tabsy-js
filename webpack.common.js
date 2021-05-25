const path = require('path');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack'); // to access built-in plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
      tabsy: path.resolve(__dirname, 'src/tabsy.ts'),
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new Dotenv(),
        new webpack.ProgressPlugin(),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        }),
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          cache: false
        })
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module:{
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
          options:{
              minimize: true
          }
        },
      ],
    }
}