/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

import Node from "./Node";

function cloneGraph(node: Node | null): Node | null {
  if (node === null) {
    return null;
  }
  
  const visited = new Map<Node, Node>();
  return clone(node, visited);
}

function clone(node: Node, visited: Map<Node, Node>) {
  if (node == null) {
    return node;
  }

  if (visited.has(node)) {
    return node;
  }

  const copy = new Node(node.val);
  visited.set(node, copy);
  for (let i = 0; i < node.neighbors.length; i++) {
    const neighbor = node.neighbors[i];
    copy.neighbors.push(clone(neighbor, visited));
  }

  return copy;
}

export { cloneGraph };
