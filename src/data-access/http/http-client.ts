import { EventEmitter } from "events";
import HttpResponse from "./http-response";

export interface IRequestOption {
  uri: string;
}

export interface IGetRequestOption extends IRequestOption {
  params?: any;
}

export interface IPostRequestOption extends IRequestOption {
  data?: any;
  binary?: boolean;
}

export type RequestInterceptor<T extends IRequestOption> = (options: T) => any;
export type ResponseInterceptor = (
  requestUri: string,
  promise: Promise<HttpResponse>,
) => Promise<HttpResponse>;

export abstract class HttpClient extends EventEmitter {
  public prefix: string;

  private getRequestInterceptors: RequestInterceptor<IGetRequestOption>[];
  private postRequestInterceptors: RequestInterceptor<IPostRequestOption>[];
  private getResponseInterceptors: ResponseInterceptor[];
  private postResponseInterceptors: ResponseInterceptor[];

  constructor({ apiPrefix }: { apiPrefix: string }) {
    super();
    this.prefix = apiPrefix;

    this.getRequestInterceptors = [];
    this.postRequestInterceptors = [];
    this.getResponseInterceptors = [];
    this.postResponseInterceptors = [];
  }

  public get(options: IGetRequestOption): Promise<HttpResponse> {
    for (const interceptor of this.getRequestInterceptors) {
      const res = interceptor(options);

      if (res !== null && typeof res !== "undefined") {
        return res;
      }
    }

    return null;
  }

  public post(options: IPostRequestOption): Promise<HttpResponse> {
    for (const interceptor of this.postRequestInterceptors) {
      const res = interceptor(options);

      if (res !== null && typeof res !== "undefined") {
        return res;
      }
    }

    return null;
  }

  /**
   * @param {array|string} type - HTTP verb of the request to intercept
   * @param {function} callback - The interceptor function to execute before HTTP request.
   * If it returns something different than null, the underlying HTTP request won't be executed
   * @returns {null|object} Returns null or an object, if an object is returned,
   * the underlying HTTP request won't be executed
   */
  public registerRequestInterceptor(
    type: string | string[],
    callback: RequestInterceptor<IRequestOption>,
  ) {
    const interceptorType = this._interceptorTypeToArray(type);

    interceptorType.forEach((t) => {
      if (t === "get") {
        this.getRequestInterceptors.push(callback);
      } else if (t === "post") {
        this.postRequestInterceptors.push(callback);
      }
    });
  }

  public registerResponseInterceptor(type: string | string[], callback: ResponseInterceptor) {
    const interceptorType = this._interceptorTypeToArray(type);

    interceptorType.forEach((t) => {
      if (t === "get") {
        this.getResponseInterceptors.push(callback);
      } else if (t === "post") {
        this.postResponseInterceptors.push(callback);
      }
    });
  }

  /**
   * @return {Promise} Returns either the underlying HTTP request result,
   * or the promise returned by the interceptor if any
   */
  protected responseGet(requestUri: string, promise: Promise<HttpResponse>): Promise<HttpResponse> {
    // Execute response interceptors

    for (const interceptor of this.getResponseInterceptors) {
      const res = interceptor(requestUri, promise);

      if (res) {
        return res;
      }
    }

    return promise;
  }

  /**
   * @return {Promise} Returns either the underlying HTTP request result, or the
   * promise returned by the interceptor if any
   */
  protected responsePost(
    requestUri: string,
    promise: Promise<HttpResponse>,
  ): Promise<HttpResponse> {
    // Execute response interceptors
    for (const interceptor of this.postResponseInterceptors) {
      const res = interceptor(requestUri, promise);

      if (res) {
        return res;
      }
    }

    return promise;
  }

  private _interceptorTypeToArray(type: string | string[]): string[] {
    const interceptorType: string[] = [];

    if (typeof type === "string") {
      if (!this._isValidInterceptorType(type.toLowerCase())) {
        throw new Error("HttpClient.registerInterceptor: invalid interceptor type");
      } else {
        interceptorType.push(type.toLowerCase());
      }
    } else if (Array.isArray(type)) {
      type.forEach((t) => {
        if (!this._isValidInterceptorType(t.toLowerCase())) {
          throw new Error("HttpClient.registerInterceptor: invalid interceptor type");
        } else {
          interceptorType.push(t.toLowerCase());
        }
      });
    } else {
      throw new Error("HttpClient.registerInterceptor: type must be a string or an array");
    }

    return interceptorType;
  }

  private _isValidInterceptorType(type: string): boolean {
    const validTypes = ["get", "post"];

    return validTypes.indexOf(type) !== -1;
  }
}

export default HttpClient;
