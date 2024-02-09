const palindromePermutation = (str: string): boolean => {
  str = str.replace(/\s/g, "");

  const charCount = new Map<string, number>();

  for (let char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  let oddCharCount = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charCount.get(char)! % 2 !== 0) {
      oddCharCount++;
    }
    if (oddCharCount > 1) {
      return false;
    }
  }

  return true;
}; // O(n)

const checkMaxOneOdd = (str: string): boolean => {
  str = str.replace(/\s/g, "");

  const charCount = new Map<string, number>();

  for (let char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  let foundOdd = false;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (charCount.get(char)! % 2 !== 0) {
      if (foundOdd) return false;
      foundOdd = true;
    }
  }

  return true;
}; // O(n)

function isPermutationOfPalindrome(phrase: string): boolean {
  let bitVector = createBitVector(phrase);
  return bitVector === 0 || checkExactlyOneBitSet(bitVector);
} // O(n)

function createBitVector(phrase: string): number {
  let bitVector = 0;
  for (let c of phrase) {
    let x = getCharNumber(c);
    bitVector = toggle(bitVector, x);
  }
  return bitVector;
}

function toggle(bitVector: number, index: number): number {
  if (index < 0) return bitVector;
  let mask = 1 << index;
  if ((bitVector & mask) === 0) {
    bitVector |= mask;
  } else {
    bitVector &= ~mask;
  }
  return bitVector;
}

function checkExactlyOneBitSet(bitVector: number): boolean {
  return (bitVector & (bitVector - 1)) === 0;
}

function getCharNumber(c: string): number {
  const aCharCode = "a".charCodeAt(0);
  const zCharCode = "z".charCodeAt(0);
  const cCharCode = c.toLowerCase().charCodeAt(0);

  if (cCharCode < aCharCode || cCharCode > zCharCode) {
    return -1; // character is not a letter
  }

  return cCharCode - aCharCode;
}

export { palindromePermutation, checkMaxOneOdd, isPermutationOfPalindrome };
