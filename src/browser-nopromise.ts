import "core-js/stable/array/from";
import "core-js/stable/array/is-array";
import "core-js/stable/function/bind";
import "core-js/stable/map";

if (!(window as any).Zone) {
  // tslint:disable-next-line
  require("core-js/features/promise");
}

import "./polyfills/customevent-polyfill";

import BrowserHttpClient from "./data-access/http/browser-http-client";
import WakandaClient from "./wakanda-client";

import { HttpClient, IGetRequestOption, IPostRequestOption } from "./data-access/http/http-client";
import HttpResponse from "./data-access/http/http-response";
import { CatalogBaseService } from "./data-access/service/base/catalog-base-service";
import { CollectionBaseService } from "./data-access/service/base/collection-base-service";
import { DataClassBaseService } from "./data-access/service/base/dataclass-base-service";
import { DirectoryBaseService } from "./data-access/service/base/directory-base-service";
import { EntityBaseService } from "./data-access/service/base/entity-base-service";
import { MediaBaseService } from "./data-access/service/base/media-base-service";
import {
  Attribute,
  Catalog,
  Collection,
  DataClass,
  Entity,
  IQueryOption,
  Media,
} from "./presentation";

WakandaClient.HttpClient = BrowserHttpClient;

export {
  Media,
  Entity,
  Catalog,
  DataClass,
  Attribute,
  Collection,
  HttpClient,
  HttpResponse,
  IQueryOption,
  WakandaClient,
  MediaBaseService,
  EntityBaseService,
  IGetRequestOption,
  CatalogBaseService,
  IPostRequestOption,
  DataClassBaseService,
  DirectoryBaseService,
  CollectionBaseService,
};
