/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import TreeNode from "../../70-blind-leetcode/tree/TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
  function bfs(root: TreeNode | null) {
    if (!root) return [];

    const queue: TreeNode[] = [root];
    const result: number[][] = [];

    while (queue.length > 0) {
      let subArr: number[] = [];
      let len = queue.length;

      for (let i = 0; i < len; i++) {
        const node = queue.shift();
        if (node) subArr.push(node?.val);
        if (node?.left) queue.push(node.left);
        if (node?.right) queue.push(node.right);
      }
      result.push(subArr);
    }

    return result;
  }

  return bfs(root);
}

// Create a binary tree
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// Call the levelOrder function
const result = levelOrder(root);

// Print the result
console.log(result);
