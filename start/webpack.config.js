const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: isProduction ? 'production' : 'development',
    devtool: isProduction ? false : 'source-map',

    entry: './src/js/index.js', // ← твой главный JS

    output: {
      filename: isProduction ? 'js/bundle.[contenthash].js' : 'js/bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '',
      clean: true,
    },

    module: {
      rules: [
        // CSS
        {
          test: /\.css$/i,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },

        // Картинки
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext]',
          },
        },

        // Шрифты
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },

        // JS
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        favicon: './src/favicon.ico',
      }),

      new MiniCssExtractPlugin({
        filename: isProduction ? 'css/styles.[contenthash].css' : 'css/styles.css',
      }),

      new CopyWebpackPlugin({
        patterns: [{ from: 'src/img', to: 'img' }],
      }),
    ],

    devServer: {
      static: path.resolve(__dirname, 'dist'),
      compress: true,
      port: 3000,
      open: true,
      hot: true,
      liveReload: true,
      watchFiles: ['src/**/*'],
    },
  };
};
