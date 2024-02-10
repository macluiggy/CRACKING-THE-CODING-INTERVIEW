function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const preMap = new Map();
  for (let i = 0; i < numCourses; i++) {
    preMap.set(i, []);
  }
  for (let i = 0; i < prerequisites.length; i++) {
    const [crs, pre] = prerequisites[i];
      preMap.get(crs).push(pre);
  }

  const visitedSet = new Set();

  const dfs = (crs: any) => {
    if (visitedSet.has(crs)) return false;
    if (preMap.get(crs).length === 0) return true;

    visitedSet.add(crs);

    for (let pre of preMap.get(crs)) {
      if (!dfs(pre)) return false;
    }
    visitedSet.delete(crs);
    preMap.set(crs, []);
    return true;
  };

  for (let crs = 0; crs < numCourses; crs++) {
    if (!dfs(crs)) return false;
  }
  return true
}
