import { ICurrentUserDBO } from '../../business/directory-business';
import AbstractService from './abstract-service';
import { DirectoryBaseService } from './base/directory-base-service';

class DirectoryService extends AbstractService {
  public login(username: string, password: string, duration: number): Promise<boolean> {
    return DirectoryBaseService.login({
      httpClient: this.httpClient,
      username,
      password,
      duration,
    });
  }

  public logout(): Promise<boolean> {
    return DirectoryBaseService.logout({
      httpClient: this.httpClient,
    });
  }

  public getCurrentUser(): Promise<ICurrentUserDBO> {
    return DirectoryBaseService.getCurrentUser({
      httpClient: this.httpClient,
    });
  }

  public getCurrentUserBelongsTo(group: string): Promise<boolean> {
    return DirectoryBaseService.getCurrentUserBelongsTo({
      httpClient: this.httpClient,
      group,
    });
  }
}

export default DirectoryService;
