import Queue from "./queue";

class RecentCounter extends Queue {
  constructor() {
    super();
  }

  ping(t: number): number {
    this.enqueue(t);
    const range = [t - 3000, t];
    const [x0, xf] = range;
    const first = this.peek();

    const isFirstInRange = first >= x0 && first <= xf;
    if (!isFirstInRange) {
      this.dequeue()
    }
    return this.size()
  }
}

export default RecentCounter;
