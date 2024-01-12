import { defaultToString } from "../util";
class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}
export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn; // {1}
    this.table = {}; // {2}
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  set(key, value) {
    if (key == null || value == null) return false;
    const tableKey = this.toStrFn(key);
    this.table[tableKey] = new ValuePair(key, value);
    return true;
  }

  remove(key) {
    if (!this.hasKey(key)) return false;
    delete this.table[this.toStrFn(key)];
    return true;
  }

  // get(key) {
  //   const valuePair = this.table[this.toStrFn(key)]; // {1}
  //   return valuePair == null ? undefined : valuePair.value; // {2}
  // }
  get(key) {
    if (!this.hasKey(key)) {
      return undefined;
    }
    return this.table[this.toStrFn(key)];
  }

  keyValues() {
    return Object.values(this.table);
    }
}
