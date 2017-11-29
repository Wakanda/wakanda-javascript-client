var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var _ = require('lodash');

process.traceDeprecation = true;

var baseConfig = {
  name: 'base',
  entry: [
    "./src/entry.browser.ts"
  ],
  output: {
    filename: "wakanda-client.js",
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

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var nodeConfig = {
  name: 'node',
  entry: [
    "./src/entry.node.ts"
  ],
  target: 'node',
  output: {
    filename: 'wakanda-client.node.js',
    path: baseConfig.output.path,
    library: baseConfig.output.library,
    libraryTarget: baseConfig.output.libraryTarget
  },
  devtool: baseConfig.devtool,
  resolve: baseConfig.resolve,
  externals: nodeModules,
  module: {
    rules: baseConfig.module.rules
  },
  target: 'node'
};


//NoPromise is a browser bundle that do not bundle Promise polyfill
var noPromiseConfig = {
  name: 'nopromise',
  entry: [
    "./src/entry.browser-nopromise.ts"
  ],
  output: {
    filename: 'wakanda-client.no-promise.js',
    path: baseConfig.output.path,
    library: baseConfig.output.library,
    libraryTarget: baseConfig.output.libraryTarget
  },
  devtool: baseConfig.devtool,
  resolve: baseConfig.resolve,
  externals: nodeModules,
  module: {
    rules: baseConfig.module.rules
  },
  target: 'node'
};

//Add istanbul loader for karma
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

module.exports = [
  baseConfig,
  nodeConfig,
  noPromiseConfig,
  karmaConfig
];
