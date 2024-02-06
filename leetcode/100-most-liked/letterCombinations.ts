function letterCombinations(digits: string): string[] {
  const hash: {
    [key: number | string]: string[];
  } = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const result: string[] = [];

  // Logic to generate letter combinations based on digits
  for (let i = 0; i < digits.length; i++) {
    const digitA = digits[i];
    const digitNumbersA = hash[digitA];
    // console.log(digitNumbers);
    for (let j = 0; j < digits.length; j++) {
      const digitB = digits[j];
      
    }
  }

  return result
}

export default letterCombinations;
