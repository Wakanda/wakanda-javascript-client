var configs = require('./webpack.config.js');

//Only modifying config for browser bundle, node's one is not tested with Karma
var conf = configs[0];

conf.output.filename = 'karma.' + conf.output.filename;

conf.isparta = {
  embedSource: true,
  noAutoWrap: true,
  babel: {
    presets: ['env']
  }
};

var rules = [];

rules.push({
  enforce: 'pre',
  test: /\.js$/,
  exclude: [
    /node_modules/
  ],
  loader: 'isparta'
});

conf.module.rules = rules;


module.exports = configs;
