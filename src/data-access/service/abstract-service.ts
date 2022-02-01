import WakandaClient from '../../wakanda-client';
import HttpClient from '../http/http-client';

abstract class AbstractService {
  protected httpClient: HttpClient;
  protected wakJSC: WakandaClient;

  constructor({ wakJSC }: { wakJSC: WakandaClient }) {
    this.wakJSC = wakJSC;
    this.httpClient = wakJSC._httpClient;
  }
}

export default AbstractService;
