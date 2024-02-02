function countingSort(array) {
  if (array.length < 2) {
    // {1}
    return array;
  }
  const maxValue = findMaxValue(array); // {2}
  // const maxValue = Math.max(array);
  const counts = new Array(maxValue + 1); // {3}
  array.forEach((element) => {
    if (!counts[element]) {
      // {4}
      counts[element] = 0;
    }
    counts[element]++; // {5}
  });
  let sortedIndex = 0;
  counts.forEach((count, i) => {
    while (count > 0) {
      // {6}
      array[sortedIndex++] = i; // {7}
      count--; // {8}
    }
  });
  return array;
}
function findMaxValue(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
export default countingSort;
