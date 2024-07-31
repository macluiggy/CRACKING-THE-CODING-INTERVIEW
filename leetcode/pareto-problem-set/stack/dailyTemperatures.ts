// function dailyTemperatures(temperatures: number[]): number[] {
//   let answer = [];
//   for (let i = 0; i < temperatures.length; i++) {
//     const temp = temperatures[i];
//     let daysTilWarmer = 1;
//     let iTemp = i + 1;
//     // let und = undefined

//     // console.log(temperatures[iTemp], 8 <= und);
//     if (iTemp >= temperatures.length) {
//       daysTilWarmer = 0;
//       answer.push(daysTilWarmer);
//       continue;
//     }

//     while (iTemp < temperatures.length && temp >= temperatures[iTemp]) {
//       daysTilWarmer++;
//       iTemp++;
//       if (iTemp === temperatures.length) {
//         daysTilWarmer = 0;
//         break;
//       }
//     }
//     answer.push(daysTilWarmer);
//   }

//   return answer;
// }

// more eficient solution
function dailyTemperatures(temperatures: number[]): number[] {
  let n = temperatures.length;
  let stack: number[] = [];
  let andswer: number[] = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    const prevTemp = temperatures[stack[stack.length - 1]];
    while (stack.length > 0 && temperatures[i] > prevTemp) {
      let prevIndex = stack.pop()!;

      andswer[prevIndex] = i - prevIndex;
    }

    stack.push(i);
  }

  return andswer;
}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
