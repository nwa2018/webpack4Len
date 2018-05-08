const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const R = require('ramda')

const isDev = process.env.NODE_ENV === 'development'
console.log(`当前环境变量是${process.env.NODE_ENV}`)


module.exports = {
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: path.resolve(__dirname, './src/index.art')
    }),
    new VueLoaderPlugin()
  ],
  output: {
    filename: isDev ? '[name].js' : '[name].[chunkhash:4].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.vue', '.styl', '.jsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          'pug-plain-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './build/postcss.config.js')
              }
            }
          }
        ]
      },
      {
        test: /\.styl(us)?$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './build/postcss.config.js')
              }
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, './build/postcss.config.js')
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.vue$/,
        use: [
          'vue-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        // In order to ensure JS transpilation is applied to Vue SFCs in node_modules, you need to whitelist them by using an exclude function instead:
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.art$/,
        use: [
          'art-template-loader'
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
        ].concat(isDev ? [] : [
          {
            loader: 'image-webpack-loader',
            options: {
              pngquant: {
                speed: 4,
                quality: '75-90'
              },
              optipng: {
                optimizationLevel: 7
              },
              mozjpeg: {
                quality: 70,
                progressive: true
              },
              gifsicle: {
                interlaced: false
              }
            }
          }
        ])
      }
    ]
  }
};
