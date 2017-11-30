import WakandaClient from '../../wakanda-client';
import HttpClient from '../http/http-client';
declare abstract class AbstractService {
    protected httpClient: HttpClient;
    protected wakJSC: WakandaClient;
    constructor({wakJSC}: {
        wakJSC: WakandaClient;
    });
}
export default AbstractService;
