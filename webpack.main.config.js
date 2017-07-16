const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const buildPath = path.resolve(__dirname, 'build');
const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';
const ASSETS_HOST = undefined;
const config = {
  devtool: 'source-map',
  target: 'electron-main',
  entry: './src/main.js',
  output: {
    path: buildPath,
    filename: 'main.js',
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV),
        ASSETS_HOST: JSON.stringify(ASSETS_HOST),
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ogg$/,
        use: 'file-loader?publicPath=./&name=audio/[name]_[hash].[ext]',
      },
    ],
  },
  node: {
    __dirname: false,
    __filename: false
  },
};

module.exports = config;
