// function maxProduct(nums: number[]): number {
//   let r = productOfNegatives(nums);
//   if (r) {
//     return r;
//   }
//   let prod = nums[0];
//   let maxProd = prod;

//   for (let i = 1; i < nums.length; i++) {
//     prod = Math.max(prod * nums[i], nums[i]);
//     maxProd = Math.max(prod, maxProd);
//   }

//   return maxProd;
// }

// function productOfNegatives(nums: number[]): number | null {
//   let negatives = nums.filter((num) => num < 0);
//   if (negatives.length % 2 === 0) {
//     return negatives.reduce((prod, num) => prod * num, 1);
//   }
//   return null;
// }
function maxProduct(nums: number[]): number {
  let maxProd = nums[0];
  let minProd = nums[0];
  let result = maxProd;

  for (let i = 1; i < nums.length; i++) {
    let tempMax = maxProd;
    maxProd = Math.max(nums[i], maxProd * nums[i], minProd * nums[i]);
    minProd = Math.min(nums[i], tempMax * nums[i], minProd * nums[i]);
    result = Math.max(result, maxProd);
  }

  return result;
}


console.log(maxProduct([2, -5, -2, -4, 3]));  // Output: 24
// console.log(maxProduct([2,3,-2,4]));
// console.log(maxProduct([-2]));
// console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([2, -5, -2, -4, 3]));
