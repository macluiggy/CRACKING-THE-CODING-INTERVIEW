import quickSort from "../sorting-and-searching-algorithms/quickSort.js";
import { Compare, DOES_NOT_EXIST, defaultCompare } from "../util.js";

function binarySearchRecursive(
  array,
  value,
  low,
  high,
  compareFn = defaultCompare
) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];
    if (compareFn(element, value) === Compare.LESS_THAN) {
      // {1}
      return binarySearchRecursive(array, value, mid + 1, high, compareFn);
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      // {2}
      return binarySearchRecursive(array, value, low, mid - 1, compareFn);
    } else {
      return mid; // {3}
    }
  }
  return DOES_NOT_EXIST; // {4}
}
export function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(array);
  const low = 0;
  const high = sortedArray.length - 1;
  return binarySearchRecursive(array, value, low, high, compareFn);
}

const cache = []
cache[10] = 'hola'
cache[1] = 'holaa'
console.log(cache);