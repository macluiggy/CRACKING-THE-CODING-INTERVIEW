// function findTheWinner(n: number, k: number): number {
//   const arrN = Array.from({ length: n }, (_, i) => i + 1);
//   const recursive: any = (arr: number[]) => {
//     if (arr.length === 1) {
//       return arr[0];
//     }
//     for (let i = 1; i <= k; i++) {
//       if (i === k) {
//         arr.shift();
//       } else {
//         arr.push(arr.shift()!);
//       }
//     }
//     return recursive(arr);
//   };
//   return recursive(arrN);
// }

// function findTheWinner(n: number, k: number) {
//   const arrN = Array.from({ length: n }, (_, i) => i + 1);

//   const recursive: any = (arr: number[], index: number) => {
//     if (arr.length === 1) {
//       return arr[0];
//     }
//     // Calculate the new index after removing the kth element
//     console.log(`(${index}+${k}-${1})%${arr.length} = ${(index + k - 1) % arr.length}`);

//     let newIndex = (index + k - 1) % arr.length;
//     // console.log(newIndex);

//     arr.splice(newIndex, 1); // Removes the kth element

//     // newIndex is the next starting point for the next call
//     return recursive(arr, newIndex);
//   };

//   return recursive(arrN, 0);
// }
function findTheWinner(n: number, k: number) {
  const arrN = Array.from({ length: n }, (_, i) => i + 1);

  const recursive: any = (arr: number[]) => {
    if (arr.length === 1) {
      return arr[0];
    }
    for (let i = 0; i < k - 1; i++) {
      arr.push(arr.shift()!);
    }
    arr.shift(); // Remove the kth element
 

    return recursive(arr);
  };

  return recursive(arrN);
}


export default findTheWinner;
