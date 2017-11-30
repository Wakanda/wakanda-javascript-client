const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const packageInfo = require('./package.json');

process.traceDeprecation = true;

/**
 * Banner
 */
var date = new Date();
var month = date.getMonth() + 1;
var dateStr = date.getFullYear() + '-' + (month < 10 ? '0' : '') + month + '-' + date.getDate();
var bannerPlugin = new webpack.BannerPlugin('version: ' + packageInfo.version + ' - date: ' + dateStr);

/**
 * List of external modules
 */
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

/**
 * Browser target
 */
var baseConfig = {
  name: 'base',
  entry: [
    "./src/browser.ts"
  ],
  output: {
    filename: "browser.js",
    path: __dirname + "/dist/",
    library: 'WakandaClient',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
    alias: {
      'aurelia-http-client': path.join(__dirname, './lib/aurelia-http-client')
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: [
          /node_modules/
        ],
        options: {
          emitErrors: false,
          failOnHint: false
        }
      },
      {
        test: /\.ts$/,
        exclude: [
          /node_modules/
        ],
        loader: 'ts-loader'
      },
      {
        test: /\.js$/,
        exclude: [
          /node_modules/
        ],
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  target: 'web'
};
baseConfig.plugins = [
  new CleanWebpackPlugin(baseConfig.output.path),
  // new webpack.optimize.UglifyJsPlugin({minimize: true}),
  bannerPlugin
];

/**
 * NodeJS Target
 */
var nodeConfig = _.cloneDeep(baseConfig);
nodeConfig.name = 'node';
nodeConfig.output.filename = 'node.js';
nodeConfig.entry = [
  "./src/node.ts"
];
nodeConfig.target = 'node';
nodeConfig.externals = nodeModules;
nodeConfig.plugins = [bannerPlugin];


/**
 * NoPromise is a browser bundle that do not bundle Promise polyfill
 */
var noPromiseConfig = _.cloneDeep(baseConfig);
noPromiseConfig.name = 'node';
noPromiseConfig.output.filename = 'browser-nopromise.js';
noPromiseConfig.externals = nodeModules;
noPromiseConfig.entry = [
  "./src/browser-nopromise.ts"
];
noPromiseConfig.target = 'web';
noPromiseConfig.plugins = [bannerPlugin];

/**
 * Add istanbul loader for karma
 */
var karmaConfig = _.cloneDeep(baseConfig);
karmaConfig.output.filename = 'karma.wakanda-client.js';
karmaConfig.module.rules.push({
  test: /\.(ts|js)$/,
  use: {
    loader: 'istanbul-instrumenter-loader'
  },
  enforce: 'post',
  exclude: /node_modules|lib/
});
karmaConfig.plugins = [bannerPlugin];

/**
 * Exports
 */
module.exports = [
  baseConfig,
  nodeConfig,
  noPromiseConfig,
  karmaConfig
];