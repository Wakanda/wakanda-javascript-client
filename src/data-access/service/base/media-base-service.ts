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

export class MediaBaseService {
  public static upload({
    httpClient,
    dataURI,
    entityKey,
    attributeName,
    file,
    isImage,
  }: IUploadParams): Promise<HttpResponse> {
    let uri = this._buildUri(dataURI, entityKey, attributeName);

    if (isImage) {
      uri += '?$rawPict=' + file.type;
    }

    // FIXME - real crappy not to return some piece of information to refresh entity
    return httpClient.post({
      uri,
      data: file,
      binary: true,
    });
  }

  public static delete({
    httpClient,
    dataURI,
    entityKey,
    entityStamp,
    attributeName,
  }: IDeleteParams): Promise<HttpResponse> {
    const uri = dataURI + '(' + entityKey + ')';
    const data: any = {
      __KEY: entityKey,
      __STAMP: entityStamp,
    };

    data[attributeName] = null;

    // FIXME - crappy
    return httpClient.post({
      uri,
      data,
    });
  }

  private static _buildUri(dataURI: string, entityKey: string, attributeName: string): string {
    return dataURI + '(' + entityKey + ')' + '/' + attributeName;
  }
}
