import AbstractService from './abstract-service';
import { ICurrentUserDBO } from '../../business/directory-business';
declare class DirectoryService extends AbstractService {
    login(username: string, password: string, duration: number): Promise<boolean>;
    logout(): Promise<boolean>;
    getCurrentUser(): Promise<ICurrentUserDBO>;
    getCurrentUserBelongsTo(group: string): Promise<boolean>;
}
export default DirectoryService;
