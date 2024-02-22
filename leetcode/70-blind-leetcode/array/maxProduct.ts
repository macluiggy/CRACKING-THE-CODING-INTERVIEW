function maxProduct(nums: number[]): number {
  let r = productOfNegatives(nums);
  if (r) {
    return r;
  }
  let prod = nums[0];
  let maxProd = prod;

  for (let i = 0; i < nums.length; i++) {
    prod = Math.max(prod * nums[i], nums[i]);
    maxProd = Math.max(prod, maxProd);
    console.log(maxProd);
  }

  return maxProd;
}
function productOfNegatives(nums: number[]): number | null {
  let negatives = nums.filter((num) => num < 0);
  if (negatives.length % 2 === 0) {
    return nums.reduce((prod, num) => prod * num, 1);
  }
  return null;
}
// console.log(maxProduct([2,3,-2,4]));
// console.log(maxProduct([-2]));
// console.log(maxProduct([-2, 0, -1]));
console.log(maxProduct([2, -5, -2, -4, 3]));
