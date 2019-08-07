/* eslint-disable */

isBrowser = new Function('try { return this === window; } catch(e) { return false; }');

function b64toBlob(b64Data, contentType, sliceSize) {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;

  var byteCharacters = atob(b64Data);
  var byteArrays = [];

  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);

    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  var blob = new Blob(byteArrays, { type: contentType });
  return blob;
}

if (!isBrowser()) {
  var chai = require('chai');
  expect = chai.expect;

  var testEnv = process.env.TEST_ENV || 'integration';
  var serverInfo = require('./server.' + testEnv + '.json');

  var WakandaClient = require('../dist/node.js');
  wakClient = new WakandaClient.WakandaClient({ host: serverInfo.host + ':' + serverInfo.port });

  wakClientPublication = new WakandaClient.WakandaClient({
    host: serverInfo.host + ':' + serverInfo.port,
    catalog: 'publication',
  });
} else {
  wakClient = new WakandaClient.WakandaClient();
  wakClientPublication = new WakandaClient.WakandaClient({ catalog: 'publication' });
  window.b64toBlob = b64toBlob;
}

beforeEach(function() {
  if (isBrowser()) {
    if(typeof window.top.callPhantom === 'function') {
      window.top.callPhantom({
        type: 'clearCookies'
      });
    }
  }
  else {
    wakClient._httpClient._clearCookie();
    wakClientPublication._httpClient._clearCookie();
  }
});
