import Queue from "./queues-and-deques/queue.js";

const defaultToString = (item) => {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString(); // {1}};
};
const defaultEquals = (a, b) => a === b;

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
};

function defaultCompare(a, b) {
  if (a === b) {
    // {1}
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN; // {2}
}
const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};
const swap = (array, a, b) => ([array[a], array[b]] = [array[b], array[a]]);
function reverseCompare(compareFn) {
  return (a, b) => compareFn(b, a);
}
const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2,
};
const initializeColor = (vertices) => {
  const color = {};
  for (let i = 0; i < vertices.length; i++) {
    color[vertices[i]] = Colors.WHITE;
  }
  return color;
};
export const breadthFirstSearch = (graph, startVertex, callback) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices); // {1}
  const queue = new Queue(); // {2}
  queue.enqueue(startVertex); // {3}
  while (!queue.isEmpty()) {
    // {4}
    const u = queue.dequeue(); // {5}
    const neighbors = adjList.get(u); // {6}
    color[u] = Colors.GREY; // {7}
    for (let i = 0; i < neighbors.length; i++) {
      // {8}
      const w = neighbors[i]; // {9}
      if (color[w] === Colors.WHITE) {
        // {10}
        color[w] = Colors.GREY; // {11}
        queue.enqueue(w); // {12}
      }
    }
    color[u] = Colors.BLACK; // {13}
    if (callback) {
      // {14}
      callback(u);
    }
  }
};

const BFS = (graph, startVertex) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const queue = new Queue();
  const distances = {}; // {1}
  const predecessors = {}; // {2}
  queue.enqueue(startVertex);
  for (let i = 0; i < vertices.length; i++) {
    // {3}
    distances[vertices[i]] = 0; // {4}
    predecessors[vertices[i]] = null; // {5}
  }
  while (!queue.isEmpty()) {
    const u = queue.dequeue();
    const neighbors = adjList.get(u);
    color[u] = Colors.GREY;
    for (let i = 0; i < neighbors.length; i++) {
      const w = neighbors[i];
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY;
        distances[w] = distances[u] + 1; // {6}
        predecessors[w] = u; // {7}
        queue.enqueue(w);
      }
    }
    color[u] = Colors.BLACK;
  }
  return {
    // {8}
    distances,
    predecessors,
  };
};
const depthFirstSearch = (graph, callback) => {
  // {1}
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  for (let i = 0; i < vertices.length; i++) {
    // {2}
    if (color[vertices[i]] === Colors.WHITE) {
      // {3}
      depthFirstSearchVisit(vertices[i], color, adjList, callback); // {4}
    }
  }
};
const depthFirstSearchVisit = (u, color, adjList, callback) => {
  color[u] = Colors.GREY; // {5}
  if (callback) {
    // {6}
    callback(u);
  }
  const neighbors = adjList.get(u); // {7}
  for (let i = 0; i < neighbors.length; i++) {
    // {8}
    const w = neighbors[i]; // {9}
    if (color[w] === Colors.WHITE) {
      // {10}
      depthFirstSearchVisit(w, color, adjList, callback); // {11}
    }
  }
  color[u] = Colors.BLACK; // {12}
};
const DFS = (graph) => {
  const vertices = graph.getVertices();
  const adjList = graph.getAdjList();
  const color = initializeColor(vertices);
  const d = {};
  const f = {};
  const p = {};
  const time = { count: 0 }; // {1}
  for (let i = 0; i < vertices.length; i++) {
    // {2}
    f[vertices[i]] = 0;
    d[vertices[i]] = 0;
    p[vertices[i]] = null;
  }
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList);
    }
  }
  return {
    // {3}
    discovery: d,
    finished: f,
    predecessors: p,
  };
};
const DFSVisit = (u, color, d, f, p, time, adjList) => {
  color[u] = Colors.GREY;
  d[u] = ++time.count; // {4}
  const neighbors = adjList.get(u);
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i];
    if (color[w] === Colors.WHITE) {
      p[w] = u; // {5}
      DFSVisit(w, color, d, f, p, time, adjList);
    }
  }
  color[u] = Colors.BLACK;
  f[u] = ++time.count; // {6}
};
export {
  defaultToString,
  defaultEquals,
  Compare,
  defaultCompare,
  BalanceFactor,
  swap,
  reverseCompare,
  Colors,
  initializeColor,
  BFS,
  depthFirstSearch,
  DFS
};
