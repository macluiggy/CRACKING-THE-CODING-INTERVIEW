import { expect, test } from "bun:test";
import { cloneGraph } from "./cloneGraph";
import Node from "./Node";

test("cloneGraph returns null for null input", () => {
  const result = cloneGraph(null);
  expect(result).toBeNull();
});

test("cloneGraph clones a graph with a single node", () => {
  const node = new Node(1);
  const result = cloneGraph(node);
  if (!result) return
  expect(result).not.toBe(node);
  expect(result.val).toBe(node.val);
  expect(result.neighbors).toHaveLength(0);
});

test("cloneGraph clones a graph with multiple nodes", () => {
  const node1 = new Node(1);
  const node2 = new Node(2);
  const node3 = new Node(3);
  node1.neighbors.push(node2, node3);
  node2.neighbors.push(node1);
  node3.neighbors.push(node1);

  const result = cloneGraph(node1);
  if (!result) return

  expect(result).not.toBe(node1);
  expect(result.val).toBe(node1.val);
  expect(result.neighbors).toHaveLength(2);
  expect(result.neighbors[0]).not.toBe(node2);
  expect(result.neighbors[0].val).toBe(node2.val);
  expect(result.neighbors[1]).not.toBe(node3);
  expect(result.neighbors[1].val).toBe(node3.val);
});