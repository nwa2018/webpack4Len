const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === 'development'
console.log(`当前环境变量是${process.env.NODE_ENV}`)
module.exports = {
  entry: {
    app: './src/index.js',
    test: './src/test.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: isDev ? '[name].js' : '[name].[chunkhash:4].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '~@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(png|svga?|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader'
            }
          }
        ]
      }
    ]
  }
};
