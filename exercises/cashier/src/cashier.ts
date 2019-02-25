interface CartItem {
  name: string;
  price: number;
  qty: number;
}

interface CartAPI {
  length: number;
  total: number;
  add: (name: string, price: number, qty?: number) => CartAPI;
  addItem: (item: CartItem) => CartAPI;
}

class Cart implements CartAPI {
  items: CartItem[];

  constructor(items?: CartItem[]) {
    this.items = items || [];
  }

  get length() {
    return this.items.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
  }

  get total() {
    return this.items.reduce((sum, item) => {
      return sum + (item.qty * item.price);
    }, 0);
  }

  add(name: string, price: number, qty: number = 1) {
    return this.addItem({ name, price, qty });
  }

  addItem(item: CartItem) {
    // return this.immutableAdd(item);
    return this.notReallyFunctionalAdd(item);
  }

  notReallyFunctionalAdd(item: CartItem) {
    this.items = [...this.items, item];
    return this;
  }

  immutableAdd(item: CartItem) {
    return new Cart([...this.items.slice(), item]);
  }
}

export function cashier(): CartAPI {
  return new Cart();
}
