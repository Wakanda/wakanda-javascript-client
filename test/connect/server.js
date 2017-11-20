/* eslint-disable */

var http = require('http');
var connect = require('connect');
var serveStatic = require('serve-static');
var chalk = require('chalk');
var stream = require('stream');

var prism = require('connect-prism');
var crypto = require('crypto');
var PrismUtils = require('connect-prism/lib/services/prism-utils');


var mode = process.argv[2] || 'mock';
if (mode === 'record') {
  mode = 'mockrecord';
  console.log(chalk.red('You are on record mode. Do not forget to reset DB before executing test suite.'));
}

console.log(chalk.green('Starting record/mocking test server with mode ' + mode + ' on port 3000'));

var prismUtils = new PrismUtils();

var mockFileName = function (config, req) {
  var reqData = prismUtils.filterUrl(config, req.url);
  var url = req.url.replace(/\/|\$|\_|\?|\<|\>|\\|\:|\*|\||\"/g, '_');

  // include request body and cookie in hash
  var cookie = req.headers.cookie || "";
  reqData = req.body + reqData + cookie;

  var shasum = crypto.createHash('sha1');
  shasum.update(reqData);
  return url + '_' + 'WASID_' + cookie + '_' + shasum.digest('hex') + '.json';
}

prism.create({
  name: 'rest',
  context: '/rest',
  host: 'localhost',
  port: 8081,
  mode: mode,
  clearOnStart: true,
  mocksPath: __dirname + '/mocks',
  hashFullRequest: true,
  recordHeaders: ['Set-Cookie', 'WASID'],
  mockFilenameGenerator: mockFileName,
  proxyConfig: {
    options: {
      xfwd: true
    },
    onProxyCreated: function(proxyServer, prismConfig) { } 
  }
});

var app = connect()
  /*.use(function (req, res, next) {
    var buffer = '';
    req.on('data', function(data) {
      buffer += data;

      // Too much POST data, kill the connection!
      if (buffer.length > 1e6) {
        req.connection.destroy();
      }
    });

    req.on('end', function() {
      req.body = buffer;

      var bufferStream = new stream.PassThrough();
      bufferStream.end(new Buffer(buffer));
      req.bodyStream = bufferStream;

      next();
    });
  })*/
  .use(prism.middleware);

http.createServer(app).listen(3000);
