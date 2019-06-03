"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 四元数
 */
var Quaternion = /** @class */ (function () {
    function Quaternion(x, y, z, w) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
        this.z = z ? z : 0;
        this.w = w ? w : 1;
    }
    Quaternion.prototype.set = function (x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    };
    return Quaternion;
}());
exports.Quaternion = Quaternion;
//# sourceMappingURL=Quaternion.js.map