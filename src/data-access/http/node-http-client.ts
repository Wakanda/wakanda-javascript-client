import * as request from "request";

import { HttpClient, IGetRequestOption, IPostRequestOption } from "./http-client";
import HttpResponse from "./http-response";

class NodeHttpClient extends HttpClient {
  private request: any;
  private cookieJar: any;

  constructor({ apiPrefix }: { apiPrefix: string }) {
    super({ apiPrefix });

    this.request = request;
    this.cookieJar = this.request.jar();
  }

  public _clearCookie(): void {
    this.cookieJar = this.request.jar();
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

    const options: any = {
      url: this.prefix + uri,
      method: "POST",
      jar: this.cookieJar,
    };

    options[binary ? "body" : "form"] = data;

    try {
      if (binary) {
        options.headers = {
          "Content-Type": "application/octet-stream",
        };
      } else {
        options.headers = {
          "Content-Type": "application/json",
        };
        options.form = JSON.stringify(data);
      }
    } catch (e) {
      return Promise.reject(e) as any;
    }

    const result = this._httpResponseAdaptor({ requestOptions: options });
    return super.responsePost(uri, result);
  }

  private _getWithoutInterceptor({ uri, params }: IGetRequestOption): Promise<HttpResponse> {
    const options = {
      url: this.prefix + uri,
      method: "GET",
      qs: params,
      jar: this.cookieJar,
    };

    return this._httpResponseAdaptor({ requestOptions: options });
  }

  private _httpResponseAdaptor({ requestOptions }: any): Promise<HttpResponse> {
    return new Promise((resolve, reject) => {
      this.request(requestOptions, (error: any, response: any, body: string) => {
        if (error || response.statusCode >= 400) {
          reject(error || { statusMessage: response.statusMessage, body });
        } else {
          resolve(
            new HttpResponse({
              statusCode: response.statusCode,
              headers: response.headers || {},
              body,
            }),
          );
        }
      });
    });
  }
}

export default NodeHttpClient;
