const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  // console.log(env);
  return ({
    mode: 'none', // production
    entry: {
      app: './src/views/index.js',
      sub: './src/views/sub.js'
    },
    output: {
      filename: '[name].[hash].bundle.js',
      // filename: '[name].[hash].bundle.js',
      path: path.resolve('dist'),
      publicPath: './',
      chunkFilename: '[name].[chunkhash].bundle.js'
    },
    optimization: {
      sideEffects: true,
      usedExports: true,
      providedExports: true,
      splitChunks: {
        chunks: 'all', // async 异步代码分割，initial同步代码分割，all同步异步代码都分割
        minSize: 3000, // 需要分割的引入文件最小大小
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        },
      }
    },
    // devtool: 'source-map',
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
      new webpack.HashedModuleIdsPlugin(),
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'common'
      // }), // 已废弃
    ]
  })
};