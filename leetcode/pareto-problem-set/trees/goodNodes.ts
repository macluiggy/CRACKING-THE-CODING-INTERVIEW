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

// function goodNodes(root: TreeNode | null): number {
//   const dfs = (root: TreeNode) => {
//     let q: any[] = [root];
//     let c = 1;

//     while (q.length) {
//       let l = q.length;
//       for (let i = 0; i < l; i++) {
//         const node = q.shift();
//         if (node?.left) {
//           if (node.father) {
//             let curr = node;
//             let b = true; // Inicializar como true
//             while (curr) {
//               if (curr.val < curr.father.val) {
//                 b = false;
//                 break; // Usar break en lugar de brk
//               }
//               curr = curr.father;
//             }
//             if (node.left.val >= node.val && b) c++;
//             node.left.father = node; // Asegurarse de asignar siempre
//           } else if (node.left.val >= node.val) {
//             c++;
//           }
//           q.push(node.left);
//         }

//         if (node?.right) {
//           if (node.father) {
//             let curr = node;
//             let b = true; // Inicializar como true
//             while (curr) {
//               if (curr.val < curr.father.val) {
//                 b = false;
//                 break; // Usar break en lugar de brk
//               }
//               curr = curr.father;
//             }
//             if (node.right.val >= node.val && b) c++;
//             node.right.father = node; // Asegurarse de asignar siempre
//           } else if (node.right.val >= node.val) {
//             c++;
//           }
//           q.push(node.right);
//         }
//       }
//     }
//     return c;
//   };
//   if (!root) return root!.val;

//   return dfs(root);
// }
const goodNodes = (root: TreeNode | null): number => {
  let res;
  const dfs = (root: TreeNode | null, max: number): number => {
    if (!root) return 0;

    res = root.val >= max ? 1 : 0;
    max = Math.max(max, root.val);
    res += dfs(root.left, max);
    res += dfs(root.right, max);

    return res;
    // if (root.val >= max)
    //   return (
    //     1 +
    //     dfs(root.left, Math.max(max, root.val)) +
    //     dfs(root.right, Math.max(max, root.val))
    //   );
    // else
    //   return (
    //     dfs(root.left, Math.max(max, root.val)) +
    //     dfs(root.right, Math.max(max, root.val))
    //   );
  };

  return dfs(root, root!.val);
};

// Existing code...

const root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.left = new TreeNode(3);
root.left.right = null;
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(5);

console.log(goodNodes(root));

// Rest of the code...

const exampleRoot = new TreeNode(3);
exampleRoot.left = new TreeNode(3);
exampleRoot.right = null;
exampleRoot.left.left = new TreeNode(4);
exampleRoot.left.right = new TreeNode(2);

console.log(goodNodes(exampleRoot));

const newRoot = new TreeNode(9);
newRoot.left = null;
newRoot.right = new TreeNode(3);
newRoot.right.left = new TreeNode(6);

console.log(goodNodes(newRoot));
