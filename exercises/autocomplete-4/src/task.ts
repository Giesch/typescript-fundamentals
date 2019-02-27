/**
 * Given a generator function that yields one or more
 * promises, chain them together in sequence
 *
 * @param {any} genFn generator function that yields one or more promises
 * @return {undefined}
 */
export function task<T>(genFn: () => IterableIterator<any>): Promise<T> {
  let iterator = genFn(); // Get the iterator

  // Taken from here: https://www.mcieslar.com/implementing-async-and-await-with-generators
  // this version has no error handling!
  // and it's just assuming values are promises; ie it trusts the 'done' value when it shouldn't
  const runToTheEnd: (item: { done: boolean, value: any }) => Promise<any> =
    ({ done, value }) => done
      ? Promise.resolve(value)
      : Promise.resolve(value).then(previous => runToTheEnd(iterator.next(previous)));

  const firstItem = iterator.next();
  return runToTheEnd(firstItem);
};
