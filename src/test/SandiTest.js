"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathUtils_1 = require("../math/MathUtils");
for (var i = 0; i < 10; i++) {
    var uuidGen = MathUtils_1.MathUtils.generateUUID();
    console.log(uuidGen);
}
