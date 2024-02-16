// function maxProfit(prices: number[]): number {
//   let minValue = Infinity;
//   let minIndex = 0;

//   for (let i = 0; i < prices.length; i++) {
//     const price = prices[i];
//     if (price < minValue) {
//       minValue = price;
//       minIndex = i;
//     }
//   }

//   let maxValue = -Infinity;
//   let maxIndex = 0;
//   for (let i = 0; i < prices.length; i++) {
//     const price = prices[i];
//     if (price > maxValue && i > minIndex) {
//       maxValue = price;
//       maxIndex = i;
//     }
//   }
//   return maxValue - minValue > 0 ? maxValue - minValue : 0;
// }
function maxProfit(prices: number[]): number {
  let minValue = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    if (price < minValue) {
      minValue = price;
    } else if (price - minValue > maxProfit) {
      maxProfit = price - minValue;
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([3, 2, 6, 5, 0, 3])); // 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
