import { HttpClient, IGetRequestOption, IPostRequestOption } from './http-client';
import HttpResponse from './http-response';

const AureliaHttpClient: any = require('aurelia-http-client').HttpClient;

class BrowserHttpClient extends HttpClient {
  private client: any;

  constructor({ apiPrefix }: { apiPrefix: string }) {
    super({ apiPrefix });
    this.client = new AureliaHttpClient();
  }

  public get({ uri, params }: IGetRequestOption): Promise<HttpResponse> {
    try {
      let res = super.get({ uri, params });
      if (res !== null) {
        return Promise.resolve(res);
      }
    } catch (e) {
      return <any>Promise.reject(e);
    }

    let result = this._getWithoutInterceptor({ uri, params });
    return super.responseGet(uri, result);
  }

  private _getWithoutInterceptor({ uri }: IGetRequestOption): Promise<HttpResponse> {
    let request = this.client
      .createRequest(this.prefix + uri)
      .asGet()
      .withCredentials(true)
      .send();

    return this._httpResponseAdaptor({ request });
  }

  public post({ uri, data, binary }: IPostRequestOption): Promise<HttpResponse> {
    try {
      let res = super.post({ uri, data, binary });
      if (res !== null) {
        return Promise.resolve(res);
      }
    } catch (e) {
      return <any>Promise.reject(e);
    }

    let request = this.client
      .createRequest(this.prefix + uri)
      .asPost()
      .withContent(data)
      .withCredentials(true)
      .send();

    let result = this._httpResponseAdaptor({ request });
    return super.responsePost(uri, result);
  }

  private _httpResponseAdaptor({ request }: { request: any }): Promise<HttpResponse> {
    return request.then((res: any) => {
      return new HttpResponse({
        statusCode: res.statusCode,
        headers: [],
        body: res.response,
      });
    });
  }
}

export default BrowserHttpClient;
