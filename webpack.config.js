const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),

  entry: ['./bootstrap-theme.js', './scss/bootstrap-theme.scss'],

  output: {
    path: path.resolve(__dirname + "/dist"),
    publicPath: '../',
    filename: 'js/bootstrap-theme.min.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            // translates CSS into CommonJS modules
            loader: 'css-loader'
          },
          {
            // Run postcss actions
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                // postcss plugins, can be exported to postcss.config.js
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }
          },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]',
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/bootstrap-theme.min.css',
    }),
    new CopyWebpackPlugin(
      {
        patterns: [
          {
            from: 'images',
            to: 'images'
          },
          {
            from: 'scss',
            to: 'scss'
          }
        ]
      }
    ),
    new CleanWebpackPlugin({
      verbose: true,
      dry: false
    }),
  ]
};
