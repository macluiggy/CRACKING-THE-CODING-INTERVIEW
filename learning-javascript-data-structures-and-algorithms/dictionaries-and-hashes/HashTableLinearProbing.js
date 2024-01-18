import LinkedList from "../linked-lists/linked-list.js";
import { defaultToString } from "../util.js";
import ValuePair from "./ValuePair.js";

class HashTableLinearProbing {
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
  djb2HashCode(key) {
    const tableKey = this.toStrFn(key); // {1}
    let hash = 5381; // {2}
    for (let i = 0; i < tableKey.length; i++) {
      // {3}
      hash = hash * 33 + tableKey.charCodeAt(i); // {4}
    }
    return hash % 1013; // {5}
  }
  hashCode(key) {
    // return this.loseloseHashCode(key);
    return this.djb2HashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        // {1}
        this.table[position] = new ValuePair(key, value); // {2}
      } else {
        let index = position + 1; // {3}
        while (this.table[index] != null) {
          // {4}
          index++; // {5}
        }
        this.table[index] = new ValuePair(key, value); // {6}
      }
      return true;
    }
    return false;
  }
  get(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      // {1}
      if (this.table[position].key === key) {
        // {2}
        return this.table[position].value; // {3}
      }
      let index = position + 1; // {4}
      while (this.table[index] != null && this.table[index].key !== key) {
        // {5}
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        // {6}
        return this.table[position].value; // {7}
      }
    }
    return undefined; // {8}
  }
  remove(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position]; // {1}
        this.verifyRemoveSideEffect(key, position); // {2}
        return true;
      }
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index]; // {3}
        this.verifyRemoveSideEffect(key, index); // {4}
        return true;
      }
    }
    return false;
  }
  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key); // {1}
    let index = removedPosition + 1; // {2}
    while (this.table[index] != null) {
      // {3}
      const posHash = this.hashCode(this.table[index].key); // {4}
      if (posHash <= hash || posHash <= removedPosition) {
        // {5}
        this.table[removedPosition] = this.table[index]; // {6}
        delete this.table[index];
        removedPosition = index;
      }
      index++;
    }
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
