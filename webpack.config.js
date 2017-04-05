/*global __dirname, require, module*/

const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env  = require('yargs').argv.env; // use --env with webpack 2

let libraryName = 'network_transport';

let plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + '.min.js';
} else {
  outputFile = libraryName + '.js';
}

const config = {
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
//      {
//        test: /(\.jsx|\.js)$/,
//        loader: "eslint-loader",
//        exclude: /node_modules/
//      }
    ]
  },
  resolve: {
    modules: [path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins,
  externals: {
    'UUID': {
        commonjs: 'pure-uuid',
        commonjs2: 'pure-uuid',
        amd: 'pure-uuid',
        root: 'UUID'
    },
    'msgpack': {
        commonjs: 'msgpack-lite',
        commonjs2: 'msgpack-lite',
        amd: 'msgpack-lite',
        root: 'msgpack'
    }
  }
};

module.exports = config;
