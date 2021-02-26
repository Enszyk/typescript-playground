"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var Vehicle = (function () {
    function Vehicle() {
    }
    Vehicle.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log("Vehicle moved " + distance);
    };
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.refuel = function (amount) {
        if (amount === void 0) { amount = 0; }
        console.log("Car refuel with " + amount);
    };
    return Car;
}(Vehicle));
var myCar = new Car();
myCar.move();
myCar.refuel();
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
var Private = (function () {
    function Private(theName) {
        this.name = theName;
    }
    return Private;
}());
var Sugar = (function () {
    function Sugar(howMuch, succes) {
        var _this = this;
        this.howMuch = howMuch;
        this.succes = succes;
        this.out = function () { return console.log(_this.howMuch + " " + _this.succes); };
    }
    return Sugar;
}());
var maxLength = 10;
var Acces = (function () {
    function Acces() {
        this._code = "";
    }
    Object.defineProperty(Acces.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (codeValue) {
            if (codeValue && codeValue.length <= 10)
                this._code = codeValue;
            else
                throw new Error("To long");
        },
        enumerable: false,
        configurable: true
    });
    return Acces;
}());
var acces = new Acces();
acces.code = "secret";
console.log(acces.code);
var MathConst = (function () {
    function MathConst() {
    }
    MathConst.pi = 3.1415;
    MathConst.fi = 1.618;
    return MathConst;
}());
console.log(MathConst.pi);
console.log(MathConst.pi);
var AbstractConcept = (function () {
    function AbstractConcept(name) {
        this.name = name;
    }
    AbstractConcept.prototype.printName = function () {
        console.log(this.name);
    };
    return AbstractConcept;
}());
var Concept = (function (_super) {
    __extends(Concept, _super);
    function Concept() {
        return _super.call(this, "concept") || this;
    }
    Concept.prototype.printInfo = function () {
        console.log("info");
    };
    Concept.prototype.printSecondInfo = function () {
        console.log('second info');
    };
    return Concept;
}(AbstractConcept));
var concept = new Concept();
concept.printInfo();
concept.printSecondInfo();
