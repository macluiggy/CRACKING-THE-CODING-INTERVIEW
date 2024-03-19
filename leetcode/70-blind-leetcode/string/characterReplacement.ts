// function characterReplacement(s: string, k: number): number {
//   let continueWhile = true;
//   let tempK = k;
//   let curr = 0;
//   let map = new Map();
//   let max = 0;
//   while (continueWhile) {
//     let currLetter = s[curr];
//     let tempS = s;
//     for (let i = curr; i < curr + tempK; i++) {
//       console.log(i);

//       if (currLetter == s[i]) {
//         continue;
//       } else {
//         tempS = tempS.substring(0, i) + currLetter + tempS.substring(i + 1);
//       }
//     }
//     let map = new Map();
//     for (let i = 0; i < tempS.length; i++) {
//       const char = tempS[i];
//       map.set(char, map.get(char) || 0 + 1);
//     }
//     for (let char of map) {
//       max = Math.max(map.get(char), max);
//     }
//     curr++;
//     continueWhile = !(curr == s.length);
//   }
//   return max
// }
class Solution {
  characterReplacement(s: string, k: number): number {
    let count: { [key: string]: number } = {};
    let res = 0;
    let maxf = 0;

    let l = 0;
    for (let r = 0; r < s.length; r++) {
      count[s[r]] = (count[s[r]] || 0) + 1;
      maxf = Math.max(...Object.values(count));
      while (r - l + 1 - maxf > k) {
        count[s[l]]--;
        l++;
      }

      res = Math.max(res, r - l + 1);
    }
    return res;
  }
}

function characterReplacement(s: string, k: number): number {
  return new Solution().characterReplacement(s, k);
}

console.log(characterReplacement("ABAB", 2));
