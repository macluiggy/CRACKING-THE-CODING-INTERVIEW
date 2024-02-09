class ArrayWrapper {
  nums;
  constructor(nums: number[]) {
    this.nums = nums;
  }

  valueOf(): number {
    return this.nums.reduce((acc, curr) => acc + curr, 0);
  }

  toString(): string {
    return JSON.stringify(this.nums);
  }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */

const obj1 = new ArrayWrapper([1, 2]);
console.log(obj1);

const obj2 = new ArrayWrapper([3, 4]);
obj1 + obj2; // 10
console.log(obj1 + obj2);
