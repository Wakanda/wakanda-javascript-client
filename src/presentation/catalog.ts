import { DataClass } from './dataclass';

class Catalog {
  [key: string]: DataClass;

  constructor({ dataClasses }: { dataClasses: DataClass[] }) {
    for (let dc of dataClasses) {
      this[dc.name] = dc;
    }
  }
}

export default Catalog;
