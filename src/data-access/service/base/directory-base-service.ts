import HttpClient from '../../http/http-client';
import {ICurrentUserDBO} from '../../../business/directory-business';

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

  public static login({httpClient, username, password, duration}:
  {httpClient: HttpClient, username: string, password: string, duration?: number}): Promise<boolean> {

    return httpClient.post({
      uri: '/$directory/login',
      data: [username, password, duration]
    }).then(() => {
        return true;
      });
  }

  public static logout({httpClient}: {httpClient: HttpClient}): Promise<boolean> {
    return httpClient.get({
      uri: '/$directory/logout'
    }).then(res => {
      let obj = JSON.parse(res.body);
      if (obj.result && obj.result === true) {
        return true;
      }
      else {
        return <any>Promise.reject(new Error());
      }
    });
  }

  public static currentUser({httpClient}: {httpClient: HttpClient}): Promise<ICurrentUserDBO> {
    return httpClient.post({
      uri: '/$directory/currentUser'
    })
    .then(res => {
      let obj = JSON.parse(res.body);

      if (obj.result && obj.result.ID) {
        return obj.result;
      }
      else {
        return Promise.reject(new Error());
      }
    });
  }

  public static currentUserBelongsTo({httpClient, group}: ICurrentUserBelongsToParams): Promise<boolean> {
    return httpClient.post({
      uri: '/$directory/currentUserBelongsTo',
      data: [group]
    }).then(res => {
      let obj = JSON.parse(res.body);

      if (obj && obj.result && obj.result === true) {
        return true;
      }
      else {
        return <any>Promise.reject(new Error());
      }
    });
  }
}
