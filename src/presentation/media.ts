import Entity from "./entity";

class Media {
  public uri: string;

  public upload: (file: any, mimeType?: string) => Promise<Entity>;
  public delete: () => Promise<Entity>;

  constructor({ uri }: { uri: string }) {
    this.uri = uri;
  }
}

export default Media;
