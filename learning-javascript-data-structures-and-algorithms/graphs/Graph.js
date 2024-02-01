// import Dictionary from "../dictionaries-and-hashes/Dictionary.js";

import { Stack } from "../stacks/stack";
import { BFS, breadthFirstSearch, depthFirstSearch } from "../util";

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected; // {1}
    this.vertices = []; // {2}
    this.adjList = new Map(); // {3}
  }
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      // {5}
      this.vertices.push(v); // {6}
      this.adjList.set(v, []); // {7}
    }
  }
  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      this.addVertex(v); // {8}
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w); // {9}
    }
    // console.log(this.adjList.get(v));
    this.adjList.get(v).push(w); // {10}
    if (!this.isDirected) {
      this.adjList.get(w).push(v); // {11}
    }
  }
  getVertices() {
    return this.vertices;
  }
  getAdjList() {
    return this.adjList;
  }
  toString() {
    let s = "";
    for (let i = 0; i < this.vertices.length; i++) {
      // {15}
      s += `${this.vertices[i]} -> `;
      const neighbors = this.adjList.get(this.vertices[i]); // {16}
      for (let j = 0; j < neighbors.length; j++) {
        // {17}
        s += `${neighbors[j]} `;
      }
      s += "\n"; // {18}
    }
    return s;
  }
}
const graph = new Graph();
const myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]; // {12}
for (let i = 0; i < myVertices.length; i++) {
  // {13}
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B"); // {14}
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
// console.log(graph.toString());
const printVertex = (value) => console.log('Visited vertex: ' + value); // {15}
// breadthFirstSearch(graph, myVertices[0], printVertex);
const shortestPathA = BFS(graph, myVertices[0]);
// console.log(shortestPathA);

const fromVertex = myVertices[0]; // {9}
// for (let i = 1; i < myVertices.length; i++) {
//   // {10}
//   const toVertex = myVertices[i]; // {11}
//   const path = new Stack(); // {12}
//   for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
//     // {13}
//     path.push(v); // {14}
//   }
//   path.push(fromVertex); // {15}
//   let s = path.pop(); // {16}
//   while (!path.isEmpty()) {
//     // {17}
//     s += " - " + path.pop(); // {18}
//   }
//   console.log(s); // {19}
// }

depthFirstSearch(graph, printVertex);