import { HttpClient, IGetRequestOption, IPostRequestOption } from './http-client';
import HttpResponse from './http-response';

class FetchHttpClient extends HttpClient {

  private client: any;

  constructor({ apiPrefix }: { apiPrefix: string }) {
    super({ apiPrefix });
  }

  public get({ uri, params }: IGetRequestOption): Promise<HttpResponse> {
    let request = fetch(this.prefix + uri, {
      method: 'GET',
      credentials: 'include'
    });

    let result = this._httpResponseAdaptor({ request });

    return super.responseGet(uri, result);
  }

  public post({ uri, data, binary }: IPostRequestOption): Promise<HttpResponse> {
    let isJSON = data && (data.constructor === {}.constructor || data instanceof Array);
    let headers = isJSON ? new Headers({
      'Content-Type': 'application/json'
    }) : undefined;
    let request = fetch(this.prefix + uri, {
      method: 'POST',
      credentials: 'include',
      body: isJSON ? JSON.stringify(data) : data,
      headers
    });

    let result = this._httpResponseAdaptor({ request });

    return super.responsePost(uri, result);
  }

  private _httpResponseAdaptor({ request }: { request: any }): Promise<HttpResponse> {
    return request.then((res: any) => {
      let contentType = res.headers.get('content-type');
      let isJSON = contentType.includes('application/json');

      let p = isJSON ? res.text() : res.blob();

      return p.then((body: any) => {
        return new HttpResponse({
          statusCode: res.status,
          headers: [],
          body: body
        });
      })

    });
  }
}

export default FetchHttpClient;
