function sumDigits(n: number): number {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
// this is O(d) where d is the number of digits in the number

console.log(sumDigits(123));
