"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var DirectionsStringfy;
(function (DirectionsStringfy) {
    DirectionsStringfy["Up"] = "UP";
    DirectionsStringfy["Down"] = "DOWN";
    DirectionsStringfy["Left"] = "LEFT";
    DirectionsStringfy["Right"] = "RIGHT";
})(DirectionsStringfy || (DirectionsStringfy = {}));
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
})(Enum || (Enum = {}));
var enumV = Enum.A;
var nameOfEnumV = Enum[enumV];
var directions = [
    0,
    1,
    2,
    3,
];
