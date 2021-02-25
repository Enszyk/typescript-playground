// Function Type

let myAdd: (x: number, y: number) => number;
myAdd = (x: number, y: number): number => x + y;

// Optional Parameters

function buildName(firstName: string, lastName?: string) {
  return lastName ? firstName + " " + lastName : firstName
}

function buildName2(firstName: string, lastName = "koks") {
  return lastName ? firstName + " " + lastName : firstName
}

let result1 = buildName("Bob");
let result2 = buildName("Bob", "Adams");
let result3 = buildName2("Bob");
let result4 = buildName2("Bob", "Adams");

// Rest operator

function buildName3(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

let employeeName = buildName3("Joseph", "Samuel", "Lucas", "MacKinzie");

// Overloading 
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number }[]): number;
function pickCard(x: number): { suit: string; card: number };
function pickCard(x: any): any {
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 },
];

let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);