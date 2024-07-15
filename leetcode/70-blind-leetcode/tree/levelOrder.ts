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

import TreeNode from "./TreeNode";

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let res: number[][] = [];
  function bfs(root: TreeNode | null): void {
    if (root === null) return;

    const queue: (TreeNode | null)[] = [root];
    while (queue.length > 0) {
      let levelSize = queue.length;
      let subArr = [];

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        subArr.push(node!.val);
        if (node?.left) queue.push(node.left);
        if (node?.right) queue.push(node.right);
      }
      res.push(subArr);
    }
  }

  bfs(root);

  return res;
}

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
levelOrder(root);
