import { Headers } from './headers';
import { RequestMessageProcessor } from './request-message-processor';
import { timeoutTransformer, callbackParameterNameTransformer } from './transformers';

export class JSONPRequestMessage {
  constructor(uri, callbackParameterName) {
    this.method = 'JSONP';
    this.uri = uri;
    this.content = null;
    this.headers = new Headers();
    this.responseType = 'jsonp';
    this.callbackParameterName = callbackParameterName;
  }
}

class JSONPXHR {
  open(method, uri) {
    this.method = method;
    this.uri = uri;
    this.callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
  }

  send() {
    var uri =
      this.uri +
      (this.uri.indexOf('?') >= 0 ? '&' : '?') +
      this.callbackParameterName +
      '=' +
      this.callbackName;

    var script = document.createElement('script');
    script.src = uri;
    document.body.appendChild(script);

    window[this.callbackName] = data => {
      delete window[this.callbackName];
      document.body.removeChild(script);

      if (typeof this.status === 'undefined') {
        this.status = 200;
        this.statusText = 'OK';
        this.response = data;
        this.onload(this);
      }
    };

    if (typeof this.timeout !== 'undefined') {
      setTimeout(() => {
        if (typeof this.status === 'undefined') {
          this.status = 0;
          this.ontimeout(new Error('timeout'));
        }
      }, this.timeout);
    }
  }

  abort() {
    if (typeof this.status === 'undefined') {
      this.status = 0;
      this.onabort(new Error('abort'));
    }
  }

  setRequestHeader() {}
}

export function createJSONPRequestMessageProcessor() {
  return new RequestMessageProcessor(JSONPXHR, [
    timeoutTransformer,
    callbackParameterNameTransformer,
  ]);
}
