"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SandiTest = /** @class */ (function () {
    function SandiTest(name) {
        this.name = name;
    }
    SandiTest.prototype.report = function () {
        console.log("I'm " + this.name);
    };
    return SandiTest;
}());
exports.SandiTest = SandiTest;
