import WakandaClient from '../../wakanda-client';
import AbstractService from './abstract-service';
import Media from '../../presentation/media';
import HttpResponse from '../http/http-response';
import MediaBusiness from '../../business/media-business';
import DataClassBusiness from '../../business/dataclass-business';
declare class MediaService extends AbstractService {
    private dataClassName;
    private entity;
    private isImage;
    private media;
    private attributeName;
    private dataURI;
    constructor({ wakJSC, mediaBusiness, media, attributeName, dataClassBusiness }: {
        wakJSC: WakandaClient;
        mediaBusiness: MediaBusiness;
        media: Media;
        attributeName: string;
        dataClassBusiness: DataClassBusiness;
    });
    upload(file: any, mimeType: string): Promise<HttpResponse>;
    delete(): Promise<HttpResponse>;
}
export default MediaService;
