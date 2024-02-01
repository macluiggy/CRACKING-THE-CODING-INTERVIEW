import { DFS, depthFirstSearch } from "../util.js";
import { printVertex } from "../util.js";
import { graph } from "./test1.js";

depthFirstSearch(graph, printVertex);
console.log(DFS(graph));