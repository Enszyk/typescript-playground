"use strict";
var printPerson = function (person) {
    console.log(person.name + " " + person.age);
};
var firstPerson = {
    name: "Norbert",
    age: 20,
};
printPerson(firstPerson);
function createSquare(config) {
    return {
        color: config.color || "white",
        area: config.width ? config.width * config.width : 20
    };
}
var mySquare = createSquare({ color: "black", test: true });
var point = { x: 5, y: 5 };
var ro = [1, 5, 3, 5, 6];
var myCreate = function (xCord, yCord) {
    return {
        x: xCord,
        y: yCord
    };
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var Person = (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.printPerson = function () {
        console.log(this.name + " " + this.age);
    };
    return Person;
}());
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
