"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 欧拉角
 */
const Quaternion_1 = require("./Quaternion");
class Euler {
    constructor(x = 0, y = 0, z = 0, order = Euler.DefaultOrder) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.order = order;
    }
    onChangeCallback() {
        //调用者使用onChange函数的参数覆盖该函数的实现
    }
    set(x, y, z, order) {
        this.x = x;
        this.y = y;
        this.y = z;
        this.order = order;
        this.onChangeCallback();
        return this;
    }
    clone() {
        return new Euler(this.x, this.y, this.z, this.order);
    }
    copy(euler) {
        this.x = euler.x;
        this.y = euler.y;
        this.z = euler.z;
        this.order = euler.order;
        this.onChangeCallback();
        return this;
    }
    setFromRotationMatrix(m, order, update) {
        throw new Error("not implemented");
    }
    setFromQuaternion(q, order, update) {
        throw new Error("not implemented");
    }
    setFromVector3(v, order) {
        throw new Error("not implemented");
    }
    reorder(newOrder) {
        let q = new Quaternion_1.Quaternion();
        q.setFromEuler(this);
        return this.setFromQuaternion(q, newOrder);
    }
    // reorder: (newOrder: string) => Euler = (() => {
    //     let q = new Quaternion();
    //     return (newOrder:string)=>{
    //         q.setFromEuler(this);
    //         return this.setFromQuaternion(q, newOrder);
    //     }
    // })();
    equals(euler) {
        return (euler.x === this.x) && (euler.y === this.y) && (euler.z === this.z) && (euler.order === this.order);
    }
    fromArray(array) {
        this.x = array[0];
        this.y = array[1];
        this.z = array[2];
        if (array[3]) {
            this.order = array[3];
        }
        this.onChangeCallback();
        return this;
    }
    toArray(array = new Array(), offset = 0) {
        array[offset] = this.x;
        array[offset + 1] = this.y;
        array[offset + 2] = this.z;
        array[offset + 3] = this.order;
        return array;
    }
    toVector3(optionalResult) {
        throw new Error("not implemented");
    }
    onChange(callback) {
        this.onChangeCallback = callback;
        return this;
    }
}
Euler.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
Euler.DefaultOrder = 'XYZ';
exports.Euler = Euler;
//# sourceMappingURL=Euler.js.map