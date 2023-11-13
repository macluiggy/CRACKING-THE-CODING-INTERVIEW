function copyArray(array: number[]): number[] {
  let copy: number[] = [];
  for (let value of array) {
      copy = appendToNew(copy, value);
  }
  return copy;
}

function appendToNew(array: number[], value: number): number[] {
  // copy all elements over to new array
  let bigger: number[] = new Array(array.length + 1);
  
  for (let i = 0; i < array.length; i++) {
      bigger[i] = array[i];
  }

  // add new element
  bigger[bigger.length - 1] = value;
  return bigger;
}
copyArray([1,2,3,4,5,6,7,8,9,10]);

// the time complexity of this function is O(n^2), where n is the length of the array.
