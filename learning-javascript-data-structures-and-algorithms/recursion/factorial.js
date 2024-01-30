function factorial(n) {
  console.trace();
  if (n === 1 || n === 0) {
    // base case
    return 1;
  }
  return n * factorial(n - 1); // recursive call
}
console.log(factorial(5)); // 120
