import Entity from './entity';
import Collection from './collection';
import { QueryOption } from './query-option';

export class DataClass {
  public name: string;
  public collectionName: string;
  public attributes: Attribute[];
  public methods: {
    entity: string[];
    collection: string[];
    dataClass: string[];
  };

  public find: (id: string | number, options?: QueryOption) => Promise<Entity>;
  public query: (options?: QueryOption) => Promise<Collection>;
  public create: (pojo?: any) => Entity;

  [key: string]: any;

  constructor({
    name,
    collectionName,
    attributes,
    methods,
  }: {
    name: string;
    collectionName: string;
    attributes: Attribute[];
    methods: { entity: string[]; collection: string[]; dataClass: string[] };
  }) {
    this.name = name;
    this.collectionName = collectionName;
    this.attributes = attributes;
    this.methods = methods;
  }
}

export class Attribute {
  public name: string;
  public type: string;
  public readOnly: boolean;
  public kind: string;
  public simpleDate: boolean;

  constructor({
    name,
    type,
    readOnly,
    kind,
    simpleDate,
  }: {
    name: string;
    type: string;
    readOnly?: boolean;
    kind: string;
    simpleDate?: boolean;
  }) {
    this.name = name;
    this.type = type;
    this.readOnly = readOnly === true;
    this.kind = kind;
    this.simpleDate = simpleDate;
  }
}

export class AttributeRelated extends Attribute {}

export class AttributeCollection extends Attribute {
  public entityType: string;

  constructor({
    name,
    type,
    readOnly,
    kind,
    entityType,
  }: {
    name: string;
    type: string;
    readOnly?: boolean;
    kind: string;
    entityType: string;
  }) {
    super({ name, type, readOnly, kind });
    this.entityType = entityType;
  }
}
