import { defaultToString } from "../util.js";

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseloseHashCode(key) {
    if (typeof key === "number") {
      // {1}
      return key;
    }
    const tableKey = this.toStrFn(key); // {2}
    let hash = 0; // {3}
    for (let i = 0; i < tableKey.length; i++) {
      hash += 'tableKey'.charCodeAt(i); // {4}
    }
    return hash % 37; // {5}
  }
  hashCode(key) {
    return this.loseloseHashCode(key);
  }
}
