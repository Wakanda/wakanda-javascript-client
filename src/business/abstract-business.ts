import WakandaClient from '../wakanda-client';

abstract class AbstractBusiness {
  public wakJSC: WakandaClient;

  constructor({ wakJSC }: { wakJSC: WakandaClient }) {
    this.wakJSC = wakJSC;
  }
}

export default AbstractBusiness;
