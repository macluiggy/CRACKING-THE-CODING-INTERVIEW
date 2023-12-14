import { Stack } from "./stack";

const removeOuterParentheses = (S) => {
  let stack = new Stack();
  let result = []
  for (let i = 0; i < S.length; i++) {
    const char = S[i];
    if (char === "(") {
      stack.push(char);
      if (stack.size() > 1) {
        result.push(char);
      }
    } else {
      stack.pop();
      if (stack.size() > 0) {
        result.push(char);
      } else {
        stack = new Stack();
      }
    }
  }
  return result.join("");
}