import { DataClass } from "./dataclass";

class Catalog {
  [key: string]: DataClass;

  constructor({ dataClasses }: { dataClasses: DataClass[] }) {
    for (const dc of dataClasses) {
      this[dc.name] = dc;
    }
  }
}

export default Catalog;
