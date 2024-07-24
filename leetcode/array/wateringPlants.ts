function wateringPlants(plants: number[], capacity: number): number {
  let steps = 0;
  const originaCapacity = capacity;
  for (let i = 0; i < plants.length; i++) {
    if (plants[i] > capacity) {
      steps += (i) * 2;

      capacity = originaCapacity;
    }
    steps++
    capacity = capacity - plants[i];
  }
  // console.log(steps);

  return steps;
}
console.log(wateringPlants([2, 2, 3, 3], 5));
