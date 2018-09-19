import { HttpClient, IGetRequestOption, IPostRequestOption } from './http-client';
import HttpResponse from './http-response';
declare class NodeHttpClient extends HttpClient {
    private request;
    private cookieJar;
    constructor({ apiPrefix }: {
        apiPrefix: string;
    });
    _clearCookie(): void;
    get({ uri, params }: IGetRequestOption): Promise<HttpResponse>;
    private _getWithoutInterceptor;
    post({ uri, data, binary }: IPostRequestOption): Promise<HttpResponse>;
    private _httpResponseAdaptor;
}
export default NodeHttpClient;
