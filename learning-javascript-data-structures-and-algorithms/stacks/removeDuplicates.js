import { Stack } from "./stack";

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const stack = new Stack();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!stack.isEmpty() && stack.peek() == char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.toStringWithoutCommas()
};

export { removeDuplicates };
