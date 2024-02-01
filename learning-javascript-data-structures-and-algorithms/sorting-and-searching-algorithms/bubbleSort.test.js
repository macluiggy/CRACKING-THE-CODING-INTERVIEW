import bubbleSort from "./bubbleSort.js";
import selectionSort from "./selectionSort.js";

const sortFunctions = [bubbleSort, selectionSort];
describe("bubbleSort", () => {
  it("should sort the array in ascending order", () => {
    const array = [5, 3, 8, 4, 2];
    for (let i = 0; i < sortFunctions.length; i++) {
      const sortFunction = sortFunctions[i];
      const sortedArray = sortFunction(array);
      expect(sortedArray).toEqual([2, 3, 4, 5, 8]);
    }
  });

  it("should handle empty array", () => {
    const array = [];
    const sortedArray = bubbleSort(array);
    expect(sortedArray).toEqual([]);
  });

  it("should handle array with one element", () => {
    const array = [5];
    const sortedArray = bubbleSort(array);
    expect(sortedArray).toEqual([5]);
  });

  it("should handle array with duplicate elements", () => {
    const array = [5, 3, 8, 4, 2, 8, 2];
    const sortedArray = bubbleSort(array);
    expect(sortedArray).toEqual([2, 2, 3, 4, 5, 8, 8]);
  });
});

console.log(bubbleSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]
