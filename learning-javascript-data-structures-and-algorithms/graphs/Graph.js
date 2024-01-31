import Dictionary from "../dictionaries-and-hashes/Dictionary";

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected; // {1}
    this.vertices = []; // {2}
    this.adjList = new Dictionary(); // {3}
  }
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      // {5}
      this.vertices.push(v); // {6}
      this.adjList.set(v, []); // {7}
    }
  }
}
