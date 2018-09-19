import WakandaClient from './wakanda-client';
import NodeHttpClient from './data-access/http/node-http-client';

import { CatalogBaseService } from './data-access/service/base/catalog-base-service';
import { CollectionBaseService } from './data-access/service/base/collection-base-service';
import { DataClassBaseService } from './data-access/service/base/dataclass-base-service';
import { DirectoryBaseService } from './data-access/service/base/directory-base-service';
import { EntityBaseService } from './data-access/service/base/entity-base-service';
import { MediaBaseService } from './data-access/service/base/media-base-service';

WakandaClient.HttpClient = NodeHttpClient;

export {
  WakandaClient,
  CatalogBaseService,
  CollectionBaseService,
  DataClassBaseService,
  DirectoryBaseService,
  EntityBaseService,
  MediaBaseService,
};
