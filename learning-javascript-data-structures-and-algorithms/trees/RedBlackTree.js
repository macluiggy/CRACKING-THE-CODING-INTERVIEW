import { defaultCompare } from "../util";
import BinarySearchTree from "./binary=tree";

class RedBlackTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn);
    this.compareFn = compareFn;
    this.root = null;
  }
  insert(key) {
    if (this.root == null) {
      // {1}
      this.root = new RedBlackNode(key); // {2}
      this.root.color = Colors.BLACK; // {3}
    } else {
      const newNode = this.insertNode(this.root, key); // {4}
      this.fixTreeProperties(newNode); // {5}
    }
  }
}
