function shuffle(nums: number[], n: number): number[] {
  const firstHalf = nums.slice(0, n);
  const secondHalf = nums.slice(n);
  console.log(firstHalf, secondHalf);
  
  // Rest of the code...
  let result = []
  for (let i = 0; i < firstHalf.length; i++) {
    const f = firstHalf[i];
    const s =  secondHalf[i]
    result.push(f, s)
  }
  console.log(result);
  return result
}
console.log(shuffle([2,5,1,3,4,7],3));

console.log(0^3);
