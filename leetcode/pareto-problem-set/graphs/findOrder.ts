function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const prereq = new Map<number, number[]>();
  for (let i = 0; i < prerequisites.length; i++) {
    const [crs, pre] = prerequisites[i];
    prereq.set(crs, (prereq.get(crs) || []).concat(pre));
  }
  console.log(prereq);

  let output: number[] = [];

  const [visit, cycle] = [new Set(), new Set()];

  const dfs = (crs: number): boolean => {
    if (cycle.has(crs)) return false;
    if (visit.has(crs)) return true;

    cycle.add(crs);

    const prereqs = prereq.get(crs);
    if (prereqs) {
      for (const pre of prereqs) {
        if (!dfs(pre)) return false;
      }
    }
    cycle.delete(crs);
    visit.add(crs);
    output.push(crs);
    return true;
  };

  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) return [];
  }

  return output;
}

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
);
