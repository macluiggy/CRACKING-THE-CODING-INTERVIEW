function findWordsContaining(words: string[], x: string): number[] {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    word.includes(x) ? result.push(i) : null;
  }
  return result
}

console.log(findWordsContaining(["leet","code"], 'e'));
