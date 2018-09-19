const webpack = require('webpack');
const { resolve, join } = require('path');
const fs = require('fs');
const _ = require('lodash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const moment = require('moment');

const packageInfo = require('./package.json');

process.traceDeprecation = true;

/**
 * Banner
 */
const dateStr = moment().format('YYYY-MM-DD');
const bannerPlugin = new webpack.BannerPlugin(`version: ${packageInfo.version} - date: ${dateStr}`);

/**
 * List of external modules
 */
const nodeModules = {};
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
const baseConfig = {
  name: 'base',
  context: resolve(__dirname, 'src'),
  entry: [
    "./browser.ts"
  ],
  output: {
    filename: "browser.js",
    path: resolve(__dirname, 'dist'),
    library: 'WakandaClient',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.js'],
    alias: {
      'aurelia-http-client': join(__dirname, './lib/aurelia-http-client')
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
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  target: 'web',
  mode: 'development',
  optimization: {
    minimize: true,
    namedChunks: true,
    nodeEnv: 'production'
  }
};
baseConfig.plugins = [
  new CleanWebpackPlugin(baseConfig.output.path),
  bannerPlugin
];

/**
 * NodeJS Target
 */
const nodeConfig = _.cloneDeep(baseConfig);

nodeConfig.name = 'node';
nodeConfig.output.filename = 'node.js';
nodeConfig.entry = [
  "./node.ts"
];
nodeConfig.target = 'node';
nodeConfig.externals = nodeModules;
nodeConfig.plugins = [bannerPlugin];


/**
 * NoPromise is a browser bundle that do not bundle Promise polyfill
 */
const noPromiseConfig = _.cloneDeep(baseConfig);
noPromiseConfig.name = 'node';
noPromiseConfig.output.filename = 'browser-nopromise.js';
noPromiseConfig.externals = nodeModules;
noPromiseConfig.entry = [
  "./browser-nopromise.ts"
];
noPromiseConfig.target = 'web';
noPromiseConfig.plugins = [bannerPlugin];

/**
 * Add istanbul loader for karma
 */
const karmaConfig = _.cloneDeep(baseConfig);

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