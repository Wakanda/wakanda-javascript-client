import Entity from './entity';
import Collection from './collection';
import { QueryOption } from './query-option';
export declare class DataClass {
    name: string;
    collectionName: string;
    attributes: Attribute[];
    methods: {
        entity: string[];
        collection: string[];
        dataClass: string[];
    };
    find: (id: string | number, options?: QueryOption) => Promise<Entity>;
    query: (options?: QueryOption) => Promise<Collection>;
    create: (pojo?: any) => Entity;
    [key: string]: any;
    constructor({ name, collectionName, attributes, methods }: {
        name: string;
        collectionName: string;
        attributes: Attribute[];
        methods: {
            entity: string[];
            collection: string[];
            dataClass: string[];
        };
    });
}
export declare class Attribute {
    name: string;
    type: string;
    readOnly: boolean;
    kind: string;
    simpleDate: boolean;
    constructor({ name, type, readOnly, kind, simpleDate }: {
        name: string;
        type: string;
        readOnly?: boolean;
        kind: string;
        simpleDate?: boolean;
    });
}
export declare class AttributeRelated extends Attribute {
}
export declare class AttributeCollection extends Attribute {
    entityType: string;
    constructor({ name, type, readOnly, kind, entityType }: {
        name: string;
        type: string;
        readOnly?: boolean;
        kind: string;
        entityType: string;
    });
}
