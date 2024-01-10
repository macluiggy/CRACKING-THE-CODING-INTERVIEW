class Set {
  constructor() {
    this.items = {};
  }

  has(element) {
    // return this.items[element]
    // return element in this.items
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element) {
    if (this.has(element)) return false;
    this.items[element] = element;
    return true;
  }

  delete(element) {
    if (this.has(element)) return false;
    delete this.items[element];
    return true;
  }

  clear() {
    this.items = {}; // {2}
  }

  size() {
    return Object.keys(this.items).length;
  }

  sizeLegacy() {
    let count = 0;
    for (let key in this.items) {
      // {2}
      if (this.items.hasOwnProperty(key)) {
        // {3}
        count++; // {4}
      }
    }
    return count;
  }

  values() {
    return Object.values(this.items);
  }

  valuesLegacy() {
    let values = [];
    for (let key in this.items) {
      // {1}
      if (this.items.hasOwnProperty(key)) {
        // {2}
        values.push(key);
      }
    }
    return values;
  }

  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set();

    const values = this.values();
    for (let i = 0; i < values.length; i++) {
      const value = values[i];
      if (otherSet.has(value)) {
        intersectionSet.add(value);
      }
    }
    return intersectionSet;
  }
}

// const set = new Set();
// set.add(1);
// set.add(2);
// console.log(set.items);

// const set = new Set();
// set.add(1);
// console.log(set.values()); // outputs [1]
// console.log(set.has(1));
// // outputs true
// console.log(set.size());
// // outputs 1
// set.add(2);
// console.log(set.values()); // outputs [1, 2]
// console.log(set.has(2));
// // true
// console.log(set.size());
// // 2
// set.delete(1);
// console.log(set.values()); // outputs [2]
// set.delete(2);
// console.log(set.values()); // outputs []

// const setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// const setB = new Set();
// setB.add(3);
// setB.add(4);
// setB.add(5);
// setB.add(6);
// const unionAB = setA.union(setB);
// console.log(unionAB.values());

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
const intersectionAB = setA.intersection(setB);
console.log(intersectionAB.values());
