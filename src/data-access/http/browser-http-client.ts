import { HttpClient, IGetRequestOption, IPostRequestOption } from "./http-client";
import HttpResponse from "./http-response";

// tslint:disable-next-line
const { HttpClient: AureliaHttpClient } = require("aurelia-http-client");

class BrowserHttpClient extends HttpClient {
  private client: any;

  constructor({ apiPrefix }: { apiPrefix: string }) {
    super({ apiPrefix });
    this.client = new AureliaHttpClient();
  }

  public get({ uri, params }: IGetRequestOption): Promise<HttpResponse> {
    try {
      const res = super.get({ uri, params });
      if (res !== null) {
        return Promise.resolve(res);
      }
    } catch (e) {
      return Promise.reject(e) as any;
    }

    const result = this._getWithoutInterceptor({ uri, params });
    return super.responseGet(uri, result);
  }

  public post({ uri, data, binary }: IPostRequestOption): Promise<HttpResponse> {
    try {
      const res = super.post({ uri, data, binary });
      if (res !== null) {
        return Promise.resolve(res);
      }
    } catch (e) {
      return Promise.reject(e) as any;
    }

    const request = this.client
      .createRequest(this.prefix + uri)
      .asPost()
      .withContent(data)
      .withCredentials(true)
      .send();

    const result = this._httpResponseAdaptor({ request });
    return super.responsePost(uri, result);
  }

  private _getWithoutInterceptor({ uri }: IGetRequestOption): Promise<HttpResponse> {
    const request = this.client
      .createRequest(this.prefix + uri)
      .asGet()
      .withCredentials(true)
      .send();

    return this._httpResponseAdaptor({ request });
  }

  private _httpResponseAdaptor({ request }: { request: any }): Promise<HttpResponse> {
    return request.then((res: any) => {
      return new HttpResponse({
        statusCode: res.statusCode,
        headers: res.headers || {},
        body: res.response,
      });
    });
  }
}

export default BrowserHttpClient;
