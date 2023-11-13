const isUnique = (str: string): boolean => {
  const arr = str.split("");
  const set = new Set(arr);
  return arr.length === set.size;
};

// console.log(isUnique("abcd")); // true
// console.log(isUnique("abccd")); // false

// optimized solution
const isUnique2 = (str: string): boolean => {
  const arr = str.split("");
  const sorted = arr.sort();
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) return false;
  }
  return true;
};

function isUniqueChars(str: string): boolean {
  let checker = 0;
  for (let i = 0; i < str.length; i++) {
    let val = str.charAt(i).charCodeAt(0) - "a".charCodeAt(0);
    // console.log(str.charAt(i).charCodeAt(0), "a".charCodeAt(0));

    // console.log(checker & (1 << val));

    if ((checker & (1 << val)) > 0) {
      return false;
    }
    // console.log(checker, 1 << val, val);

    checker |= 1 << val; // set the bit, is like => checker += 1 << val => checker = 1*2^val
    console.log(checker);
    
  }
  return true;
}
console.log(isUniqueChars("derss")); // true
// console.log(1 << 3); // 1 * 2^3 = 8
