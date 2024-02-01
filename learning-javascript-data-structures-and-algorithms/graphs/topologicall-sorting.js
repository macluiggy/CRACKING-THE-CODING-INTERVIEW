import { DFS } from "../util.js";
import Graph from "./Graph.js";

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
