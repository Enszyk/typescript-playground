"use strict";
var listOfNumbers = [1, 2, 3];
var listOfNumbers2 = [1, 2, 3];
var tupleExample;
tupleExample = ['hello', 1];
tupleExample[0].toUpperCase();
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["West"] = 1] = "West";
    CardinalDirections[CardinalDirections["Eest"] = 2] = "Eest";
    CardinalDirections[CardinalDirections["South"] = 3] = "South";
    CardinalDirections[CardinalDirections["North"] = 4] = "North";
})(CardinalDirections || (CardinalDirections = {}));
var direction = CardinalDirections.West;
var inWhichDirection = CardinalDirections[2];
var notSure = 4;
if (typeof notSure === "string") {
    var randomString = notSure;
}
var alertUser = function () { return console.log("alert"); };
function error(message) {
    throw new Error(message);
}
var someValue = "this is a string";
var strLength = someValue.length;
