// import Dictionary from "../dictionaries-and-hashes/Dictionary.js";

import { BFS, breadthFirstSearch } from "../util";

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
// const printVertex = (value) => console.log('Visited vertex: ' + value); // {15}
// breadthFirstSearch(graph, myVertices[0], printVertex);
const shortestPathA = BFS(graph, myVertices[0]);
console.log(shortestPathA)