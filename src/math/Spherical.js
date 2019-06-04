"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MathUtils_1 = require("./MathUtils");
class Spherical {
    constructor(radius = 1.0, phi = 0, theta = 0) {
        this.radius = radius;
        this.phi = phi;
        this.theta = theta;
    }
    set(radius, phi, theta) {
        this.radius = radius;
        this.phi = phi;
        this.theta = theta;
        return this;
    }
    clone() {
        return new Spherical().copy(this);
    }
    copy(other) {
        this.radius = other.radius;
        this.phi = other.phi;
        this.theta = other.theta;
        return this;
    }
    makeSafe() {
        let EPS = 0.000001;
        this.phi = MathUtils_1.MathUtils.clamp(this.phi, EPS, Math.PI - EPS);
        return this;
    }
    setFromVector3(v) {
        return this.setFromCartesianCoords(v.x, v.y, v.z);
    }
    setFromCartesianCoords(x, y, z) {
        this.radius = Math.sqrt(x * x + y * y + z * z);
        if (this.radius === 0) {
            this.theta = 0;
            this.phi = 0;
        }
        else {
            this.theta = Math.atan2(x, z);
            this.phi = Math.acos(MathUtils_1.MathUtils.clamp(y / this.radius, -1, 1));
        }
        return this;
    }
}
exports.Spherical = Spherical;
//# sourceMappingURL=Spherical.js.map