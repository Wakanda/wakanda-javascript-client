/* eslint-disable */

var http = require('http');
var connect = require('connect');
var chalk = require('chalk');
var path = require('path');
var prism = require('connect-prism');
var crypto = require('crypto');
var PrismUtils = require('connect-prism/lib/services/prism-utils');
var isModule = require.main !== module;
var server;
var mode;

if (isModule) {
  mode = 'mock';
} else {
  mode = process.argv[2] || 'mock';
}

if (mode === 'record') {
  mode = 'mockrecord';
  console.log(
    chalk.red('You are on record mode. Do not forget to reset DB before executing test suite.')
  );
}

console.log(chalk.green('Starting test server with mode ' + mode + ' on port 3000'));

var prismUtils = new PrismUtils();

var mockFileName = function (config, req) {
  var reqData = prismUtils.filterUrl(config, req.url);
  var url = req.url.replace(/\/|\$|\_|\?|\<|\>|\\|\:|\*|\||\"/g, '_');
  var body = Buffer.isBuffer(req.body) ? req.body.toString('base64') : req.body;

  // include request body and cookie in hash
  var cookie = req.headers.cookie || '';
  reqData = body + reqData + cookie;

  cookie = cookie.split(';').filter((c) => /^WASID\=/.test(c));

  if (cookie.length > 0) {
    cookie = cookie[0];
  }

  var shasum = crypto.createHash('sha1');
  shasum.update(reqData);

  const result = url + '_' + 'WASID_' + cookie + '_' + shasum.digest('hex') + '.json';

  return result;
};

prism.create({
  name: 'rest',
  context: '/rest',
  host: 'localhost',
  port: 8081,
  mode: mode,
  clearOnStart: true,
  mocksPath: path.resolve(__dirname, 'mocks'),
  hashFullRequest: true,
  recordHeaders: ['Set-Cookie', 'WASID'],
  mockFilenameGenerator: mockFileName,
  proxyConfig: {
    options: {
      xfwd: true,
    },
    onProxyCreated: function (proxyServer, prismConfig) {},
  },
});

function startServer(callback) {
  var app = connect().use(prism.middleware);

  server = http.createServer(app);
  callback && server.on('listening', callback);

  server.listen(3000);
}

function stopServer(callback) {
  callback && server.on('close', callback);
  server.close();
}

if (!isModule) {
  startServer();
} else {
  module.exports = {
    start: startServer,
    stop: stopServer,
  };
}
