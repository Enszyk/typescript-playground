// LIST

let listOfNumbers: Number[] = [1, 2, 3]
let listOfNumbers2: Array<number> = [1, 2, 3]


// TUPLE

let tupleExample: [string, number]
tupleExample = ['hello', 1]

// Type 'number' is not assignable to type 'string'
// tupleExample = [1, 2];

tupleExample[0].toUpperCase();

// Property 'toUpperCase' does not exist on type 'number'
// tupleExample[1].toUpperCase(); 

// ENUM

enum CardinalDirections {
  West = 1,
  Eest,
  South,
  North
}

let direction: CardinalDirections = CardinalDirections.West;
let inWhichDirection = CardinalDirections[2];

// UNKNOWN

let notSure: unknown = 4;

if (typeof notSure === "string") {
  let randomString: string = notSure;

  // Type 'string' is not assignable to type 'number'
  // let randomInt: number = notSure;
}

// VOID

let alertUser = (): void => console.log("alert");

// NEVER

function error(message: string): never {
  throw new Error(message);
}

// ASSERTION

let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;