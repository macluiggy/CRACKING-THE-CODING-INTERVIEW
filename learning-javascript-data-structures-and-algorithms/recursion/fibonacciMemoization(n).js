function fibonacciMemoization(n) {
  const memo = [0, 1]; // {1}
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n]; // {2}
    return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)); // {3}
  };
  return fibonacci;
}

let n = 45;
console.log(fibonacciMemoization()(n));
let i = 0
function fibonacci(n) {
  i++
  if (n < 1) return 0; // {1}
  if (n <= 2) return 1; // {2}
  return fibonacci(n - 1) + fibonacci(n - 2); // {3}
}
console.log(fibonacci(n));
