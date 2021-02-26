// Base class
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

// Inheritance

class Vehicle {
  move(distance: number = 0) {
    console.log(`Vehicle moved ${distance}`);
  }
}

class Car extends Vehicle {
  refuel(amount: number = 0) {
    console.log(`Car refuel with ${amount}`);
  }
}

const myCar = new Car();
myCar.move()
myCar.refuel()

// Overriding with super

class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// Private

class Private {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
// Property 'name' is private and only accessible within class 'Private'
// new Private("Test").name;

// Syntax sugar

class Sugar {
  constructor(private howMuch: number, public succes: boolean) { }
  out = () => console.log(`${this.howMuch} ${this.succes}`);
}

// Accessors

const maxLength = 10;

class Acces {
  private _code: string = ""

  public get code(): string {
    return this._code
  }
  public set code(codeValue: string) {
    if (codeValue && codeValue.length <= 10)
      this._code = codeValue;
    else
      throw new Error("To long");
  }
}

let acces = new Acces()
acces.code = "secret"
console.log(acces.code);

// Static properties

class MathConst {
  static readonly pi = 3.1415;
  static fi = 1.618;
}

console.log(MathConst.pi);
console.log(MathConst.pi);

// Abstract

abstract class AbstractConcept {
  constructor(public name: string) { }
  printName() {
    console.log(this.name);
  }
  abstract printInfo(): void
}

class Concept extends AbstractConcept {
  printInfo(): void {
    console.log("info");
  }
  printSecondInfo() {
    console.log('second info');
  }
  constructor() {
    super("concept")
  }
}

// Cannot create an instance of an abstract class
// let abstract = new AbstractConcept()
let concept = new Concept()
concept.printInfo();
concept.printSecondInfo();