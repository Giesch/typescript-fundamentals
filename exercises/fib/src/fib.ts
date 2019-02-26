
/**
 * Implement a generator function that can be used
 * to generate numbers in the Fibonacci Sequence
 */
export function* getFibSequence(): IterableIterator<number> {
  let current = 1;
  let previous = 0;
  while (true) {
    yield current;
    let next = current + previous;
    [previous, current] = [current, next];
  }
}

