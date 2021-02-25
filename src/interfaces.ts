interface person {
  name: string,
  age: number,
}

const printPerson = (person: person): void => {
  console.log(`${person.name} ${person.age}`);
}

let firstPerson = {
  name: "Norbert",
  age: 20,
}

printPerson(firstPerson);

// Optional properties

interface SquareConfig {
  color?: string;
  width?: number;
  // object can have more extra properties
  [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "white",
    area: config.width ? config.width * config.width : 20
  };
}

let mySquare = createSquare({ color: "black", test: true });

// Readonly

interface Point {
  readonly x: number;
  readonly y: number;
}

let point: Point = { x: 5, y: 5 }

// Cannot assign to 'x' because it is a read-only property
// point.x = 5;

let ro: ReadonlyArray<number> = [1, 5, 3, 5, 6];

// Index signature in type 'readonly number[]' only permits reading
// ro[4] = 3;

// Function types

interface CreateFunc {
  (x: number, y: number): Point
}

let myCreate: CreateFunc = (xCord, yCord): Point => {
  return {
    x: xCord,
    y: yCord
  }
}

// Indexable Types
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

// Class Types

interface PersonInterface {
  name: string,
  age: number,
  printPerson(): void
}

class Person implements PersonInterface {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  printPerson(): void {
    console.log(`${this.name} ${this.age}`);
  }
}

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;


