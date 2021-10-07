const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  context: path.resolve(__dirname + "/src"),

  entry: ['./bootstrap-theme.js', './styles/bootstrap-theme.scss'],

  output: {
    path: path.resolve(__dirname + "/dist"),
    publicPath: '/dist',
    filename: 'bootstrap-theme.min.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
          // inject CSS to page
          loader: 'style-loader'
        }, {
          // translates CSS into CommonJS modules
          loader: 'css-loader'
        }, {
        //   // Run postcss actions
        //   loader: 'postcss-loader',
        //   options: {
        //     // `postcssOptions` is needed for postcss 8.x;
        //     // if you use postcss 7.x skip the key
        //     postcssOptions: {
        //       // postcss plugins, can be exported to postcss.config.js
        //       plugins: function () {
        //         return [
        //           require('autoprefixer')
        //         ];
        //       }
        //     }
        //   }
        // }, {
          // compiles Sass to CSS
          loader: 'sass-loader'
        }]
      }
    ]
  }
};

