import DataClassBusiness from "../../business/dataclass-business";
import MediaBusiness from "../../business/media-business";
import Entity from "../../presentation/entity";
import Media from "../../presentation/media";
import WakandaClient from "../../wakanda-client";
import HttpResponse from "../http/http-response";
import AbstractService from "./abstract-service";
import { MediaBaseService } from "./base/media-base-service";

class MediaService extends AbstractService {
  private dataClassName: string;
  private entity: Entity;
  private isImage: boolean;
  private media: Media;
  private attributeName: string;
  private dataURI: string;

  constructor({
    wakJSC,
    mediaBusiness,
    media,
    attributeName,
    dataClassBusiness,
  }: {
    wakJSC: WakandaClient;
    mediaBusiness: MediaBusiness;
    media: Media;
    attributeName: string;
    dataClassBusiness: DataClassBusiness;
  }) {
    super({ wakJSC });

    this.dataClassName = dataClassBusiness.dataClass.name;
    this.dataURI = dataClassBusiness.dataURI;
    this.entity = mediaBusiness.entity;
    this.isImage = mediaBusiness.isImage;
    this.media = media;
    this.attributeName = attributeName;
  }

  public upload(file: any, mimeType: string): Promise<HttpResponse> {
    return MediaBaseService.upload({
      httpClient: this.httpClient,
      dataURI: this.dataURI,
      entityKey: this.entity._key,
      attributeName: this.attributeName,
      isImage: this.isImage,
      file,
    });
  }

  public delete(): Promise<HttpResponse> {
    return MediaBaseService.delete({
      httpClient: this.httpClient,
      dataURI: this.dataURI,
      entityKey: this.entity._key,
      entityStamp: this.entity._stamp,
      attributeName: this.attributeName,
    });
  }
}

export default MediaService;
