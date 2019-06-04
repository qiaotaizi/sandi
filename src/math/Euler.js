"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 欧拉角
 */
var Quaternion_1 = require("./Quaternion");
var Euler = /** @class */ (function () {
    function Euler(x, y, z, order) {
        var _this = this;
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (order === void 0) { order = Euler.DefaultOrder; }
        this.x = x;
        this.y = y;
        this.z = z;
        this.order = order;
        this.reorder = (function () {
            var q = new Quaternion_1.Quaternion();
            return function (newOrder) {
                q.setFromEuler(_this);
                return _this.setFromQuaternion(q, newOrder);
            };
        })();
    }
    Euler.prototype.onChangeCallback = function () {
        //调用者使用onChange函数的参数覆盖该函数的实现
    };
    Euler.prototype.set = function (x, y, z, order) {
        this.x = x;
        this.y = y;
        this.y = z;
        this.order = order;
        this.onChangeCallback();
        return this;
    };
    Euler.prototype.clone = function () {
        return new Euler(this.x, this.y, this.z, this.order);
    };
    Euler.prototype.copy = function (euler) {
        this.x = euler.x;
        this.y = euler.y;
        this.z = euler.z;
        this.order = euler.order;
        this.onChangeCallback();
        return this;
    };
    Euler.prototype.setFromRotationMatrix = function (m, order, update) {
        throw new Error("not implemented");
    };
    Euler.prototype.setFromQuaternion = function (q, order, update) {
        throw new Error("not implemented");
    };
    Euler.prototype.setFromVector3 = function (v, order) {
        throw new Error("not implemented");
    };
    Euler.prototype.equals = function (euler) {
        return (euler.x === this.x) && (euler.y === this.y) && (euler.z === this.z) && (euler.order === this.order);
    };
    Euler.prototype.fromArray = function (array) {
        this.x = array[0];
        this.y = array[1];
        this.z = array[2];
        if (array[3]) {
            this.order = array[3];
        }
        this.onChangeCallback();
        return this;
    };
    Euler.prototype.toArray = function (array, offset) {
        if (array === void 0) { array = new Array(); }
        if (offset === void 0) { offset = 0; }
        array[offset] = this.x;
        array[offset + 1] = this.y;
        array[offset + 2] = this.z;
        array[offset + 3] = this.order;
        return array;
    };
    Euler.prototype.toVector3 = function (optionalResult) {
        throw new Error("not implemented");
    };
    Euler.prototype.onChange = function (callback) {
        this.onChangeCallback = callback;
        return this;
    };
    Euler.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
    Euler.DefaultOrder = 'XYZ';
    return Euler;
}());
exports.Euler = Euler;
//# sourceMappingURL=Euler.js.map