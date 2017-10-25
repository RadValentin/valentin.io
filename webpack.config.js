const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');
const path = require('path');

const cssLoader = {
  loader: 'css-loader',
  query: {sourceMap: true}
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: function() {
      return [
        autoprefixer({
          browsers: ['last 2 version', 'Explorer >= 10']
        })
      ];
    }
  }
};

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            cssLoader,
            postcssLoader,
            {
              loader: 'less-loader',
              query: {sourceMap: true}
            }
          ]
        })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [cssLoader, postcssLoader]
        })
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'url-loader?limit=1000&name=[path][name].[ext]'
      },
      {
        test: /\.(eot|svg|gif|ttf|woff|woff2|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      favicon: 'src/favicon.ico'
    })
  ]
};
