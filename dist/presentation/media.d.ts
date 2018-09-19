import Entity from './entity';
declare class Media {
    uri: string;
    upload: (file: any, mimeType?: string) => Promise<Entity>;
    delete: () => Promise<Entity>;
    constructor({ uri }: {
        uri: string;
    });
}
export default Media;
