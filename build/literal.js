"use strict";
var UIElement = (function () {
    function UIElement() {
    }
    UIElement.prototype.animate = function (_dx, _dy, easing) {
        if (easing === "ease-in") {
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
        }
    };
    return UIElement;
}());
var button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "ease-in");
function rollDice() {
    return (Math.floor(Math.random() * 6) + 1);
}
var result = rollDice();
