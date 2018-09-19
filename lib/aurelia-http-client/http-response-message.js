import {Headers} from './headers';

export class HttpResponseMessage {
  constructor(requestMessage, xhr, responseType, reviver){
    this.requestMessage = requestMessage;
    this.statusCode = xhr.status;
    this.response = xhr.response;
    this.isSuccess = xhr.status >= 200 && xhr.status < 400;
    this.statusText = xhr.statusText;
    this.responseType = responseType;
    this.reviver = reviver;

    if(xhr.getAllResponseHeaders){
      this.headers = Headers.parse(xhr.getAllResponseHeaders());
    }else {
      this.headers = new Headers();
    }
  }

  get content(){
    try{
      if(typeof this._content !== 'undefined'){
        return this._content;
      }

      if(typeof this.response === 'undefined' || this.response === null){
        this._content = this.response;
        return this._content;
      }

      if(this.responseType === 'json'){
        this._content = JSON.parse(this.response, this.reviver);
        return this._content;
      }

      if(this.reviver){
        this._content = this.reviver(this.response);
        return this._content;
      }

      this._content = this.response;
      return this._content;
    }catch(e){
      if(this.isSuccess){
        throw e;
      }

      this._content = null;
      return this._content;
    }
  }
}
