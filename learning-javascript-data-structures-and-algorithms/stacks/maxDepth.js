import { Stack } from "./stack"

const maxDepth = (s) => {
  const stack = new Stack();
  // replace all with "" except for ( and )
  s = s.replace(/[^()]/g, "");
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char == '('){
      stack.push(char);
      count++;
      if (count > maxCount) {
        maxCount = count;
      }
    } else {
      stack.pop();
      count--;
    }
  }
  return maxCount;
}

export {
  maxDepth
}