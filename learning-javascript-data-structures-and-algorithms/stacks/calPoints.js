import { Stack } from "./stack"

const calPoints = (ops) => {
  const stack = new Stack();
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i];
    if (op === "+") {
      const top = stack.pop();
      const newTop = top + stack.peek();
      stack.push(top || 0);
      stack.push(newTop || 0);
    } else if (op === "D") {
      const top = stack.peek();
      const d = top * 2 || 0;
      stack.push(d);
    } else if (op === "C") {
      stack.pop();
    } else {
      stack.push(parseInt(op) || 0);
    }
  }
  let sum = 0;
  while (!stack.isEmpty()) {
    sum += stack.pop();
  }
  return sum;
}

export {
  calPoints
}