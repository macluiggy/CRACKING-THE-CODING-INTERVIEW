import LinkedList from "../linked-lists/linked-list.js";
import { defaultToString } from "../util.js";
import ValuePair from "./ValuePair.js";
class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
}
class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  loseloseHashCode(key) {
    if (typeof key === "number") {
      // {1}
      return key;
    }
    const tableKey = this.toStrFn(key); // {2}
    let hash = 0; // {3}
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i); // {4}
    }
    return hash % 37; // {5}
  }
  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  // put(key, value) {
  //   if (key != null && value != null) {
  //     // {1}
  //     const position = this.hashCode(key); // {2}
  //     this.table[position] = new ValuePair(key, value); // {3}
  //     return true;
  //   }
  //   return false;
  // }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        // {1}
        this.table[position] = new LinkedList(); // {2}
      }
      this.table[position].push(new ValuePair(key, value)); // {3}
      return true;
    }
    return false;
  }
  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }
  remove(key) {
    const hash = this.hashCode(key); // {1}
    const valuePair = this.table[hash]; // {2}
    if (valuePair != null) {
      delete this.table[hash]; // {3}
      return true;
    }
    return false;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},{${keys[i]} => ${this.table[
        keys[i]
      ].toString()}}`;
    }
    return objString;
  }
}

// const hash = new HashTable();
// hash.put("Gandalf", "gandalf@email.com");
// hash.put("John", "johnsnow@email.com");
// hash.put("Tyrion", "tyrion@email.com");
// console.log(hash.hashCode("Gandalf") + " - Gandalf");
// console.log(hash.hashCode("John") + " - John");
// console.log(hash.hashCode("Tyrion") + " - Tyrion");
// console.log(hash.get("Gandalf")); // gandalf@email.com
// console.log(hash.get("Loiane")); // undefined
// hash.remove('Gandalf');
// console.log(hash.get('Gandalf'));

const hash = new HashTable();
hash.put("Ygritte", "ygritte@email.com");
hash.put("Jonathan", "jonathan@email.com");
hash.put("Jamie", "jamie@email.com");
hash.put("Jack", "jack@email.com");
hash.put("Jasmine", "jasmine@email.com");
hash.put("Jake", "jake@email.com");
hash.put("Nathan", "nathan@email.com");
hash.put("Athelstan", "athelstan@email.com");
hash.put("Sue", "sue@email.com");
hash.put("Aethelwulf", "aethelwulf@email.com");
hash.put("Sargeras", "sargeras@email.com");
console.log(hash.toString());
