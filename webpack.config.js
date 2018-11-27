/**
 * author     dark
 * date       18/10/9
 */
'use strict'
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'null',
  mode: 'development',
  entry: './src/',
  output: {
    path: path.resolve(__dirname),
    filename: 'build.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname),
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: 'babel-loader',
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {minimize: true}
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {minimize: true}
            },
            {
              loader: 'sass-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  require('autoprefixer')
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，盗版必究！'),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html'
    }),
    new ExtractTextPlugin(
      {
        filename: './index.min.css'
      }
    )
  ]
}
