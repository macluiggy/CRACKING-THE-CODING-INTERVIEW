// import Dictionary from "../dictionaries-and-hashes/Dictionary.js";

import { Stack } from "../stacks/stack.js";
import { BFS, DFS, breadthFirstSearch, depthFirstSearch } from "../util.js";

export default class Graph {
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



const graph = new Graph(true); // directed graph
const myVertices = ["A", "B", "C", "D", "E", "F"];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("B", "D");
graph.addEdge("B", "E");
graph.addEdge("C", "F");
graph.addEdge("F", "E");
const result = DFS(graph);
