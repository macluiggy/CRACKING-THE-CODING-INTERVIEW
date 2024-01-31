import { Compare, defaultCompare } from "../util.js";
import { Node } from "./models/node.js";

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn; // used to compare node values
    this.root = null; // {1} root node of type Node
  }
  insert(key) {
    if (this.root == null) {
      // {1}
      this.root = new Node(key); // {2}
    } else {
      this.insertNode(this.root, key); // {3}
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(11);