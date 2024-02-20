function productExceptSelf(nums: number[]) {
  let n = nums.length;
  let output = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    output[i] *= leftProduct;
    leftProduct *= nums[i];
  }
  console.log(output);
  

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return output;
}

console.log(productExceptSelf([1, 2, 3, 4]));  // Output: [24, 12, 8, 6]