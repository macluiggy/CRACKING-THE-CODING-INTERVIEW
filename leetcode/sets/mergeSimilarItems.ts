// function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
//   // create a set1 and set 2
//   const set1: { [key: number]: number[] } = {};
//   const set2: { [key: number]: number[] } = {};
//   for (let i = 0; i < items1.length; i++) {
//     const item = items1[i];
//     set1[item[0]] = item;
//   }
//   // console.log(set1);
//   for (let i = 0; i < items2.length; i++) {
//     const item = items2[i];
//     set2[item[0]] = item;
//   }

//   // create the result array
//   let resultArray = [];

//   // iterate throug items1 array
//   //  inside the loop search for the item[i][0] in the set1 and set2 then sum the weights and add the [item[i][0], sum] to the result array
//   let set = [...new Set([...items1, ...items2])];
//   console.log(set);

//   for (let i = 0; i < items1.length; i++) {
//     const [value, weight] = items1[i];
//     const arrSet1 = set1[value];
//     const arrSet2 = set2[value];
//     // console.log(arrSet1, arrSet2);
//     let sum = 0;
//     if (arrSet1) {
//       sum += arrSet1[1];
//     }
//     if (arrSet2) {
//       sum += arrSet2[1];
//     }
//     resultArray.push([value, sum])
//   }
//   console.log(resultArray);

//   // return the result array
//   // return resultArray
// }

function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  const map = new Map<number, number>();

  // Add the weights from items1 to the map
  for (const item of items1) {
    const id = item[0];
    const weight = item[1];
    map.set(id, (map.get(id) || 0) + weight);
  }

  // Add the weights from items2 to the map
  for (const item of items2) {
    const id = item[0];
    const weight = item[1];
    map.set(id, (map.get(id) || 0) + weight);
  }

  // Convert the map to an array of [id, weight] pairs
  const resultArray = Array.from(map, ([id, weight]) => [id, weight]);

  return resultArray.sort((a, b) => a[0] - b[0]);
}

export default mergeSimilarItems;
