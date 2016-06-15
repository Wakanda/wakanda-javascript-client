/* eslint-disable */

isBrowser = new Function("try { return this === window; } catch(e) { return false; }");
if (!isBrowser()) {
  var chai = require('chai');
  expect = chai.expect;

  var testEnv = process.env.TEST_ENV || 'integration';
  var serverInfo = require('./server.' + testEnv + '.json');

  var WakandaClient = require('../dist/wakanda-client.node.js');
  wakClient = new WakandaClient.WakandaClient(serverInfo.host + ':' + serverInfo.port);
}
else {
  wakClient = new WakandaClient.WakandaClient();
}

beforeEach(function () {
  if (isBrowser()) {
    window.top.callPhantom({
      type: 'clearCookies'
    });
  }
  else {
    wakClient._httpClient._clearCookie();
  }
});
