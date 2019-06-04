"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cylindrical {
    constructor(radius = 1.0, theta = 0, y = 0) {
        this.radius = radius;
        this.theta = theta;
        this.y = y;
    }
    clone() {
        return new Cylindrical().copy(this);
    }
    copy(other) {
        this.radius = other.radius;
        this.theta = other.theta;
        this.y = other.y;
        return this;
    }
    set(radius, theta, y) {
        this.radius = radius;
        this.theta = theta;
        this.y = y;
        return this;
    }
    setFromVector3(v) {
        return this.setFromCartesianCoords(v.x, v.y, v.z);
    }
    setFromCartesianCoords(x, y, z) {
        this.radius = Math.sqrt(x * x + z * z);
        this.theta = Math.atan2(x, z);
        this.y = y;
        return this;
    }
}
exports.Cylindrical = Cylindrical;
//# sourceMappingURL=Cylindrical.js.map