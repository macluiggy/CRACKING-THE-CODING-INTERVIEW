import { Stack } from "./stack"

const maxDepth = (s) => {
  const stack = new Stack();
  // replace all with "" except for ( and )
  s = s.replace(/[^()]/g, "");
  let maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char == '('){
      stack.push(char);
      maxCount = Math.max(maxCount, stack.size());
    } else {
      stack.pop();
    }
  }
  return maxCount;
}

const maxDepth2 = (s) => {
  const stack = new Stack();
  let max = 0;
  s = s.replace(/[^()]/g, "");
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") {
      stack.push(char);
      max = Math.max(max, stack.size());
    } else if (char === ")") {
      stack.pop();
    }
  }
  return max;
}

export {
  maxDepth,
  maxDepth2
}