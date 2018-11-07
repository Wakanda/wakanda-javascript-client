import { QueryOption } from "../presentation/query-option";
declare class Util {
    static handleOptions(options: QueryOption): string;
    static isInteger(n: any): boolean;
    static removeRestInfoFromEntity(entity: any): void;
}
export default Util;
