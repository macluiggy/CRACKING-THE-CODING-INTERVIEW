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
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback); // {1}
  }
  inOrderTraverseNode(node, callback) {
    if (node == null) return;
    this.inOrderTraverseNode(node.left, callback);
    callback(node.key);
    this.inOrderTraverseNode(node.right, callback);
  }
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback);
  }
  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key); // {1}
      this.preOrderTraverseNode(node.left, callback); // {2}
      this.preOrderTraverseNode(node.right, callback); // {3}
    }
  }
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }
  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback); // {1}
      this.postOrderTraverseNode(node.right, callback); // {2}
      callback(node.key); // {3}
    }
  }
  min() {
    return this.minNode(this.root); // {1}
  }
  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      // {2}
      current = current.left; // {3}
    }
    return current; // {4}
  }
  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      // {5}
      current = current.right;
    }
    return current;
  }
  search(key) {
    return this.searchNode(this.root, key); // {1}
  }
  searchNode(node, key) {
    if (node == null) {
      // {2}
      return false;
    }
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // {3}
      return this.searchNode(node.left, key); // {4}
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      // {5}
      return this.searchNode(node.right, key); // {6}
    } else {
      return true; // {7}
    }
  }
  remove(key) {
    this.root = this.removeNode(this.root, key); // {1}
  }
}

const tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);
tree.insert(6);
const printNode = (value) => console.log(value); // {6}
// tree.inOrderTraverse(printNode); // {7}
// tree.preOrderTraverse(printNode);
tree.postOrderTraverse(printNode);
console.log(tree.search(1) ? "Key 1 found." : "Key 1 not found.");
console.log(tree.search(8) ? "Key 8 found." : "Key 8 not found.");
