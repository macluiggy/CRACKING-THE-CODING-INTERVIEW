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

  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  forEach(callbackFn) {
    const valuePairs = this.keyValues(); // {1}
    for (let i = 0; i < valuePairs.length; i++) {
      // {2}
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value); // {3}
      if (result === false) {
        break; // {4}
      }
    }
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.table = {};
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`; // {1}
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`; // {2}
    }
    return objString; // {3}
  }
}

const dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
