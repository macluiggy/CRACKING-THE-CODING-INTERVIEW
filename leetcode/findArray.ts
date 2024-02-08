function findArray(pref: number[]): number[] {
  let arr: any = [];
  for (let i = 0; i < pref.length; i++) {
    const el = pref[i];
    // arr[i] ^ pref[i-1] = pref[i]
    // pref[i] = arr[i] ^ pref[i - 1];
    arr[i] = pref[i] ^ pref[i - 1];
  }
  return arr;
}

console.log(findArray([5, 2, 0, 3, 1]));
