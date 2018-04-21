const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const VENDOR_LIBS = [
  'lodash'
];

const config = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    hot: true,
    port: 9000,
    open: true
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: '/node_modules/'
      },
      {
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000
            }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}

module.exports = config
