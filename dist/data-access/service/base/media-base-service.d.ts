import HttpClient from '../../http/http-client';
import HttpResponse from '../../http/http-response';
export interface IUploadParams {
    httpClient: HttpClient;
    dataURI: string;
    entityKey: string;
    attributeName: string;
    file: File;
    isImage: boolean;
}
export interface IDeleteParams {
    httpClient: HttpClient;
    dataURI: string;
    entityKey: string;
    entityStamp: number;
    attributeName: string;
}
export declare class MediaBaseService {
    static upload({ httpClient, dataURI, entityKey, attributeName, file, isImage }: IUploadParams): Promise<HttpResponse>;
    static delete({ httpClient, dataURI, entityKey, entityStamp, attributeName }: IDeleteParams): Promise<HttpResponse>;
    private static _buildUri;
}
