const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production'

console.log(`devMode is ${process.env.NODE_ENV}`)
module.exports = {
  mode: 'production',
  // devtool: 'inline-source-map',
  entry: {
    app: './src/index.js'
  },
  // devServer: {
  //   contentBase: './dist',
  //   hot: true
  // },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      // filename: '[name].css',
      // chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
    // new webpack.NamedModulesPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],
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
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
