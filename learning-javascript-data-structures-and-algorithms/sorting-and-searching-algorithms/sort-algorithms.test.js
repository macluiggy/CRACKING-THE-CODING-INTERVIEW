import bubbleSort from "./bubbleSort.js";
import countingSort from "./countingSort.js";
import insertionSort from "./insertionSort.js";
import mergeSort from "./mergeSort.js";
import quickSort from "./quickSort.js";
import selectionSort from "./selectionSort.js";

const sortFunctions = [
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  quickSort,
  countingSort,
];
describe("bubbleSort", () => {
  for (let i = 0; i < sortFunctions.length; i++) {
    const sortFunction = sortFunctions[i];
    it("should sort the array in ascending order", () => {
      const array = [5, 3, 8, 4, 2];
      const sortedArray = sortFunction(array);
      expect(sortedArray).toEqual([2, 3, 4, 5, 8]);
    });

    it("should handle empty array", () => {
      const array = [];
      const sortedArray = sortFunction(array);
      expect(sortedArray).toEqual([]);
    });

    it("should handle array with one element", () => {
      const array = [5];
      const sortedArray = sortFunction(array);
      expect(sortedArray).toEqual([5]);
    });

    it("should handle array with duplicate elements", () => {
      const array = [5, 3, 8, 4, 2, 8, 2];
      const sortedArray = sortFunction(array);
      expect(sortedArray).toEqual([2, 2, 3, 4, 5, 8, 8]);
    });
  }
});

console.log(bubbleSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
