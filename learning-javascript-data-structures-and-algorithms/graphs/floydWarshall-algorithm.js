const floydWarshall = (graph) => {
  const dist = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    // {1}
    dist[i] = [];
    for (let j = 0; j < length; j++) {
      if (i === j) {
        dist[i][j] = 0; // {2}
      } else if (!isFinite(graph[i][j])) {
        dist[i][j] = Infinity; // {3}
      } else {
        dist[i][j] = graph[i][j]; // {4}
      }
    }
  }
  for (let k = 0; k < length; k++) {
    // {5}
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          // {6}
          dist[i][j] = dist[i][k] + dist[k][j]; // {7}
        }
      }
    }
  }
  return dist;
};

const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 1, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0],
];
console.log(floydWarshall(graph));