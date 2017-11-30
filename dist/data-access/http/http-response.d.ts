declare class HttpResponse {
    statusCode: number;
    headers: any[];
    body: string;
    constructor({statusCode, headers, body}: {
        statusCode: number;
        headers: any[];
        body: string;
    });
}
export default HttpResponse;
