function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
  const subArrays = [];
  for (let i = 0; i < l.length; i++) {
    const subArray = nums.slice(l[i], r[i] + 1);
    subArrays.push(subArray);
  }
  
};

export default checkArithmeticSubarrays