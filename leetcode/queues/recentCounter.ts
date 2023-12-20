import Queue from "./queue";

class RecentCounter {
  queue: Queue<number>
  constructor() {
    this.queue = new Queue()
  }
  ping(t: number): number {
    this.queue.enqueue(t);
    const range = [t - 3000, t];
    const [x0, xf] = range;

    while (!this.queue.isEmpty()) {
      const first = this.queue.peek()!;

      const isFirstInRange = first >= x0 && first <= xf;
      if (!isFirstInRange) {
        this.queue.dequeue();
      } else {
        break;
      }
    }
    return this.queue.size();
  }
}

export default RecentCounter;
