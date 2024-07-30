// class LinkedNode {
//   val: number;
//   next: LinkedNode | null;
//   constructor(min?: number, nextMin?: LinkedNode | null) {
//     this.val = min === undefined ? 0 : min;
//     this.next = nextMin === undefined ? null : nextMin;
//   }
// }

// class MinStack {
//   min = Infinity;
//   map: {
//     [key: number | string]: number;
//   } = {};
//   count = 0;
//   root: LinkedNode | null = new LinkedNode(Infinity);
//   constructor() {}

//   push(min: number): void {
//     this.map[this.count] = min;
//     this.count++;

//     this.insertSorted(min);
//   }

//   insertSorted(value: number): void {
//     const newNode = new LinkedNode(value);
//     if (this.root === null || this.root.val >= value) {
//       newNode.next = this.root;
//       this.root = newNode;
//     } else {
//       let current = this.root;
//       while (current.next !== null && current.next.val < value) {
//         current = current.next;
//       }
//       newNode.next = current.next;
//       current.next = newNode;
//     }
//   }

//   private remove(value: number): void {
//     let prev: LinkedNode | null = null;
//     let cur: LinkedNode | null = this.root;

//     while (cur !== null) {
//       if (cur.val === value) {
//         if (prev === null) {
//           this.root = cur.next;
//         } else {
//           prev.next = cur.next;
//         }
//         return;
//       }
//       prev = cur;
//       cur = cur.next;
//     }
//   }

//   pop(): void {
//     this.count--;
//     const result = this.map[this.count];
//     this.remove(result);
//     delete this.map[this.count];
//   }

//   top(): number {
//     return this.map[this.count - 1];
//   }

//   getMin(): number {
//     const result = this.root?.val as number;
//     return result;
//   }
// }

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(min)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// shorter solution

class MinStack {
  private stack: number[] = [];
  private minStack: number[] = [];

  push(val: number): void {
    this.stack.push(val);
    if (this.minStack.length === 0) {
      this.minStack.push(val);
    } else {
      const minVal = Math.min(val, this.minStack[this.minStack.length - 1]);
      this.minStack.push(minVal);
    }
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.minStack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // 3
minStack.pop();
console.log(minStack.getMin()); //2
