import { Stack } from "../stacks/stack.js";
import { BFS, breadthFirstSearch } from "../util.js";
import { graph, myVertices } from "./test1.js";

const printVertex = (value) => console.log("Visited vertex: " + value); // {15}
breadthFirstSearch(graph, myVertices[0], printVertex);
const shortestPathA = BFS(graph, myVertices[0]);
// console.log(shortestPathA);

const fromVertex = myVertices[0]; // {9}
for (let i = 1; i < myVertices.length; i++) {
  // {10}
  const toVertex = myVertices[i]; // {11}
  const path = new Stack(); // {12}
  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    // {13}
    path.push(v); // {14}
  }
  path.push(fromVertex); // {15}
  let s = path.pop(); // {16}
  while (!path.isEmpty()) {
    // {17}
    s += " - " + path.pop(); // {18}
  }
  console.log(s); // {19}
}
