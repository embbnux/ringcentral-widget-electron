const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const buildPath = path.resolve(__dirname, 'build');
const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';
const devtool = isDev ? 'inline-source-map' : 'source-map';

const config = {
  devtool,
  externals: ['fsevents', 'crypto-browserify'],
  target: 'electron-renderer',
  entry: {
    renderer: './src/renderer.js',
    proxy: './src/proxy.js',
    redirect: './src/redirect.js',
  },
  output: {
    path: buildPath,
    filename: '[name].js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'assets' },
      { from: 'src/index.html', to: 'index.html' },
      { from: 'src/proxy.html', to: 'proxy.html' },
      { from: 'src/redirect.html', to: 'redirect.html' },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.md$/,
        use: 'raw-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.svg/,
        exclude: /font/,
        use: [
          'babel-loader',
          'react-svg-loader',
        ],
      },
      {
        test: /\.woff|\.woff2|.eot|\.ttf/,
        use: 'url-loader?limit=15000&publicPath=./&name=fonts/[name]_[hash].[ext]',
      },
      {
        test: /\.png|\.jpg|\.gif|\.svg/,
        exclude: /assets\/images\/.+\.svg/,
        use: 'url-loader?limit=20000&publicPath=./&name=images/[name]_[hash].[ext]',
      },
      {
        test: /\.ogg$/,
        use: 'file-loader?publicPath=./&name=audio/[name]_[hash].[ext]',
      },
      {
        test: /\.sass|\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[path]_[name]_[local]_[hash:base64:5]',
              modules: true,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  autoprefixer
                ];
              }
            },
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              includePaths: ['src', 'node_modules'],
            },
          }
        ],
      },
    ],
  }
};

module.exports = config;
