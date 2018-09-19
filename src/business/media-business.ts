import AbstractBusiness from './abstract-business';
import MediaService from '../data-access/service/media-service';
import Media from '../presentation/media';
import Entity from '../presentation/entity';
import DataClassBusiness from './dataclass-business';
import WakandaClient from '../wakanda-client';

class MediaBusiness extends AbstractBusiness {
  public entity: Entity;
  public isImage: boolean;

  private media: Media;
  private dataClassBusiness: DataClassBusiness;
  private service: MediaService;

  constructor({
    wakJSC,
    media,
    dataClassBusiness,
    isImage,
    attributeName,
    entity,
  }: {
    wakJSC: WakandaClient;
    media: Media;
    dataClassBusiness: DataClassBusiness;
    isImage: boolean;
    attributeName: string;
    entity: Entity;
  }) {
    super({ wakJSC });

    this.media = media;
    this.entity = entity;
    this.dataClassBusiness = dataClassBusiness;
    this.isImage = isImage === true;
    this.service = new MediaService({
      wakJSC,
      mediaBusiness: this,
      media,
      attributeName,
      dataClassBusiness,
    });
  }

  public _decorateMedia() {
    this.media.upload = this.upload.bind(this);
    this.media.delete = this.delete.bind(this);
  }

  public upload(file: any): Promise<Entity> {
    if (!this.entity._key) {
      throw new Error('Media.upload: entity must be saved before uploading a media');
    }

    return this.service
      .upload(file, file.type)
      .then(dbo => {
        return dbo; //FIXME
      })
      .then(() => {
        //FIXME - crappy, force a refresh of the entity to get proper stamp and media uri
        return this.entity.fetch();
      });
  }

  public delete(): Promise<Entity> {
    if (!this.entity._key) {
      throw new Error('Media.upload: entity must be saved before deleting a media');
    }

    return this.service.delete().then(() => {
      //FIXME - crappy, force a refresh of the entity to get proper stamp and media uri
      return this.entity.fetch();
    });
  }
}

export default MediaBusiness;
