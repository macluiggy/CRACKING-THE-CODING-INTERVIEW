function intersection(a: number[], b: number[]): number {
  b.sort((a, b) => a - b);
  let intersect = 0;
  for (let x of a) {
    if (binarySearch(b, x) >= 0) {
      intersect++;
    }
  }
  return intersect;
}

function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// the time complexity of this function is O(b log b + a log b)