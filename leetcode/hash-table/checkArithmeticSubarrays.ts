function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[]
): boolean[] {
  const subArrays = [];
  for (let i = 0; i < l.length; i++) {
    const subArray = nums.slice(l[i], r[i] + 1);
    subArrays.push(subArray.sort((a, b) => a - b));
  }
  // console.log(subArrays);

  let result = [];
  for (let i = 0; i < subArrays.length; i++) {
    const subArray = subArrays[i];
    let isArithmeticDefault = true;
    for (let j = 0; j < subArray.length - 1; j++) { // change here
      let isArithmetic =
        subArray[j + 1] - subArray[j] === subArray[1] - subArray[0]; // change here
        
      if (!isArithmetic) {
        isArithmeticDefault = isArithmetic;
        break;
      }
    }
    result.push(isArithmeticDefault);
  }
  return result
}

export default checkArithmeticSubarrays;
