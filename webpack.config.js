const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'none', // production
  entry: {
    app: './src/views/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    // filename: '[name].[hash].bundle.js',4
    path: path.resolve('dist'),
    publicPath: './',
  },
  optimization: {
    sideEffects: true,
    usedExports: true,
    providedExports: true,
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test-none')
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Demo HTML'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
};