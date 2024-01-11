const set = new Set();
// set.add(1);
// console.log(set.values()); // outputs @Iterator
// console.log(set.has(1)); // outputs true
// console.log(set.size); // outputs 1
// console.log(set.delete(1));;
// console.log(set.has(1)); // outputs true
// console.log(set.size); // outputs 1
// console.log(set.clear()); // outputs 1

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);
const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

const union = (set1, set2) => {
  const unionAb = new Set();
  set1.forEach((value) => unionAb.add(value));
  set2.forEach((value) => unionAb.add(value));
  return unionAb;
};
console.log(union(setA, setB)); // {1, 2, 3, 4}

const intersection = (set1, set2) => {
  const intersectionSet = new Set();
  set1.forEach((value) => {
    if (set2.has(value)) {
      intersectionSet.add(value);
    }
  });
  return intersectionSet;
};
console.log(intersection(setA, setB)); // {2, 3}

const difference = (set1, set2) => {
  const differenceSet = new Set();
  set1.forEach((value) => {
    if (!set2.has(value)) {
      // {1}
      differenceSet.add(value);
    }
  });
  return differenceSet;
};
console.log(difference(setA, setB));

console.log(new Set([...setA, ...setB]));

console.log(new Set([...setA].filter(x => setB.has(x))));
console.log(new Set([...setA].filter(x => !setB.has(x))));