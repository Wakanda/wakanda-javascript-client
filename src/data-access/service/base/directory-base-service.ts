import { ICurrentUserDBO } from '../../../business/directory-business';
import HttpClient from '../../http/http-client';

export interface ILoginParams {
  httpClient: HttpClient;
  username: string;
  password: string;
  duration: number;
}

export interface ICurrentUserBelongsToParams {
  httpClient: HttpClient;
  group: string;
}

export class DirectoryBaseService {
  public static login({
    httpClient,
    username,
    password,
    duration,
  }: {
    httpClient: HttpClient;
    username: string;
    password: string;
    duration?: number;
  }): Promise<boolean> {
    return httpClient
      .post({
        uri: '/rest/$directory/login',
        data: [username, password, duration],
      })
      .then(() => {
        return true;
      });
  }

  public static logout({ httpClient }: { httpClient: HttpClient }): Promise<boolean> {
    return httpClient
      .get({
        uri: '/rest/$directory/logout',
      })
      .then((res) => {
        const obj = JSON.parse(res.body);
        if (obj.result && obj.result === true) {
          return true;
        } else {
          return Promise.reject(new Error()) as any;
        }
      });
  }

  public static getCurrentUser({
    httpClient,
  }: {
    httpClient: HttpClient;
  }): Promise<ICurrentUserDBO> {
    return httpClient
      .get({
        uri: '/rest/$directory/currentUser',
      })
      .then((res) => {
        const obj = JSON.parse(res.body);

        if (obj.result && obj.result.ID) {
          return obj.result;
        } else {
          return Promise.reject(new Error());
        }
      });
  }

  public static getCurrentUserBelongsTo({
    httpClient,
    group,
  }: ICurrentUserBelongsToParams): Promise<boolean> {
    return httpClient
      .post({
        uri: '/rest/$directory/currentUserBelongsTo',
        data: [group],
      })
      .then((res) => {
        const obj = JSON.parse(res.body);

        if (obj && obj.result && obj.result === true) {
          return true;
        } else {
          return Promise.reject(new Error()) as any;
        }
      });
  }
}
