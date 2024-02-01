import { Compare, defaultCompare, swap } from "../util.js";

function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array; // {1}
  for (let i = 0; i < length; i++) {
    // {2}
    for (let j = 0; j < length - 1; j++) {
      // {3}
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        // {4}
        swap(array, j, j + 1); // {5}
      }
    }
  }
  return array;
}

export default bubbleSort;

function createNonSortedArray(size) {
  // 6
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}
let array = createNonSortedArray(5); // {7}
console.log(array.join()); // {8}
array = bubbleSort(array); // {9}
console.log(array.join()); //{10}
