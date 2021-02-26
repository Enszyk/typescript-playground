enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum DirectionsStringfy {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Reverse mappings

enum Enum {
  A
}

let enumV = Enum.A;
let nameOfEnumV = Enum[enumV];

// Const enums
const enum DirectionConst {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  DirectionConst.Up,
  DirectionConst.Down,
  DirectionConst.Left,
  DirectionConst.Right,
];