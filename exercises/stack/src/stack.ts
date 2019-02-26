interface IStack<T> {
  push(item: T): IStack<T>;
  push(items: T[]): IStack<T>;
  pop(): T | undefined;
  length(): number;
  print(): void;
}

export class Stack<T> implements IStack<T> {

  private currentNode?: StackNode<T>;

  push(item: T): Stack<T>;
  push(items: T[]): Stack<T>; // whyyy
  push(stuff: T | T[]): Stack<T> {
    // This is broken if T is an Array; stuff is unpacked when it shouldn't be
    if (stuff instanceof Array) {
      stuff.forEach(item => this.push(item));
    } else {
      const newstack = { item: stuff, next: this.currentNode };
      this.currentNode = newstack;
    }

    return this;
  }

  pop() {
    const node = this.currentNode;
    if (!node) {
      return undefined;
    }
    this.currentNode = node.next;
    return node.item;
  }

  length() {
    let l = 0;
    let node = this.currentNode;
    while (node) {
      l++;
      node = node.next;
    }

    return l;
  }

  print() {}
}

interface StackNode<T> {
  item: T;
  next?: StackNode<T>;
}
