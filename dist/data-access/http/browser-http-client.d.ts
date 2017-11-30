import { HttpClient, IGetRequestOption, IPostRequestOption } from './http-client';
import HttpResponse from './http-response';
declare class BrowserHttpClient extends HttpClient {
    private client;
    constructor({apiPrefix}: {
        apiPrefix: string;
    });
    get({uri, params}: IGetRequestOption): Promise<HttpResponse>;
    private _getWithoutInterceptor({uri});
    post({uri, data, binary}: IPostRequestOption): Promise<HttpResponse>;
    private _httpResponseAdaptor({request});
}
export default BrowserHttpClient;
