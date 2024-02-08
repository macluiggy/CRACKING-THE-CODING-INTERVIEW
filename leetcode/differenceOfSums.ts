function differenceOfSums(n: number, m: number): number {
  let num1 = 0;
  let arr1 = []
  let num2 = 0;
  let arr2 = []
  for (let i = 1; i <= n; i++) {
    if (m % i !== 0) {
      num1 += i;
      arr1.push(i)
    } else {
      num2 += i;
      arr2.push(i)
    }
  }
  console.log(arr1, arr2);
  
  let result = num1 - num2;
  return result;
}

console.log(differenceOfSums(10, 3));
