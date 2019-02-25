/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export enum CardNumber {
  Ace, Two, Three, Four, Five,
  Six, Seven, Eight, Nine, Ten,
  Jack, Queen, King,
}

export enum Suit {
  Clubs, Diamonds, Hearts, Spades,
}

type Card = [Suit, CardNumber];

function newDeck() {
  let deck: Card[] = [];
  for (let n = 0; n < 13; n++) {
    for (let s = 0; s < 4; s++) {
      deck.push([s, n]);
    }
  }
  return deck;
}

export class Dealer {
  deck: Card[];

  constructor() {
    let deck = newDeck();
    shuffleArray(deck);
    this.deck = deck;
  }

  readCard([s, n]: [number, number]) {
    return CardNumber[n] + ' of ' + Suit[s];
  }

  getLength(): number {
    return this.deck.length;
  }

  dealHand(n: number) {
    if (n < 0 || n > this.getLength()) {
      throw new Error('oops');
    }
    const result = this.deck.slice(0, n);
    this.deck = this.deck.slice(n);
    return result;
  }

}
