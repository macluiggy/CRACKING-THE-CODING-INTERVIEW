type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  const promise3 = await promise1 + await promise2
  return promise3
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
