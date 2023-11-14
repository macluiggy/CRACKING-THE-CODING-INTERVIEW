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
};

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
};

export { palindromePermutation, checkMaxOneOdd };
