import AbstractBusiness from './abstract-business';
import Media from '../presentation/media';
import Entity from '../presentation/entity';
import DataClassBusiness from './dataclass-business';
import WakandaClient from '../wakanda-client';
declare class MediaBusiness extends AbstractBusiness {
    entity: Entity;
    isImage: boolean;
    private media;
    private dataClassBusiness;
    private service;
    constructor({wakJSC, media, dataClassBusiness, isImage, attributeName, entity}: {
        wakJSC: WakandaClient;
        media: Media;
        dataClassBusiness: DataClassBusiness;
        isImage: boolean;
        attributeName: string;
        entity: Entity;
    });
    _decorateMedia(): void;
    upload(file: any): Promise<Entity>;
    delete(): Promise<Entity>;
}
export default MediaBusiness;
