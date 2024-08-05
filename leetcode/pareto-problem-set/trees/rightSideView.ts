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

function rightSideView(root: TreeNode | null): number[] {
  function bfs(root: TreeNode | null) {
    if (!root) return [];

    const queue: TreeNode[] = [root];
    const result: number[] = [];

    while (queue.length > 0) {
      let len = queue.length;
      let right = null

      for (let i = 0; i < len; i++) {
        const node = queue.shift();
        right = node
        if (node?.left) queue.push(node.left);
        if (node?.right) queue.push(node.right);
      }
      result.push(right!.val)
    }

    return result;
  }

  return bfs(root);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);

const result = rightSideView(root);
console.log(result);
