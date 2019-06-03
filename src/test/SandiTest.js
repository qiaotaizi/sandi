"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathUtils_1 = require("../math/MathUtils");
var value = 10, min = 2, max = 3;
var clmp = MathUtils_1.MathUtils.clamp(value, min, max);
console.log(clmp);
