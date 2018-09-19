import WakandaClient from '../wakanda-client';
declare abstract class AbstractBusiness {
    wakJSC: WakandaClient;
    constructor({ wakJSC }: {
        wakJSC: WakandaClient;
    });
}
export default AbstractBusiness;
