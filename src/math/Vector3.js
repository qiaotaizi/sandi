"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quaternion_1 = require("./Quaternion");
var MathUtils_1 = require("./MathUtils");
var Math_1 = require("three/src/math/Math");
var Vector3 = /** @class */ (function () {
    function Vector3(x, y, z) {
        var _this = this;
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
        this.applyEuler = (function () {
            //这里闭包有意义吗?为了节约内存?
            var quaternion = new Quaternion_1.Quaternion();
            return function (euler) {
                return _this.applyQuaternion(quaternion.setFromEuler(euler));
            };
        })();
        this.projectOnPlane = (function () {
            var v1 = new Vector3();
            return function (planeNormal) {
                v1.copy(_this).projectOnVector(planeNormal);
                return _this.sub(v1);
            };
        })();
        this.reflect = (function () {
            // reflect incident vector off plane orthogonal to normal
            // normal is assumed to have unit length
            var v1 = new Vector3();
            return function (normal) {
                return _this.sub(v1.copy(normal).multiplyScalar(2 * _this.dot(normal)));
            };
        })();
    }
    /**
     * Sets value of this vector.
     */
    Vector3.prototype.set = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    };
    /**
     * Sets all values of this vector.
     */
    Vector3.prototype.setScalar = function (scalar) {
        this.x = scalar;
        this.y = scalar;
        this.z = scalar;
        return this;
    };
    /**
     * Sets x value of this vector.
     */
    Vector3.prototype.setX = function (x) {
        this.x = x;
        return this;
    };
    /**
     * Sets y value of this vector.
     */
    Vector3.prototype.setY = function (y) {
        this.y = y;
        return this;
    };
    /**
     * Sets z value of this vector.
     */
    Vector3.prototype.setZ = function (z) {
        this.z = z;
        return this;
    };
    Vector3.prototype.setComponent = function (index, value) {
        switch (index) {
            case 0:
                this.x = value;
                break;
            case 1:
                this.y = value;
                break;
            case 2:
                this.z = value;
                break;
            default:
                throw new Error('index is out of range: ' + index);
        }
        return this;
    };
    Vector3.prototype.getComponent = function (index) {
        switch (index) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error('index is out of range: ' + index);
        }
    };
    /**
     * Clones this vector.
     */
    Vector3.prototype.clone = function () {
        return new Vector3(this.x, this.y, this.z);
    };
    /**
     * Copies value of v to this vector.
     */
    Vector3.prototype.copy = function (v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
    };
    /**
     * Adds v to this vector.
     */
    Vector3.prototype.add = function (v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    };
    Vector3.prototype.addScalar = function (s) {
        this.x += s;
        this.y += s;
        this.z += s;
        return this;
    };
    Vector3.prototype.addScaledVector = function (v, s) {
        this.x += v.x * s;
        this.y += v.y * s;
        this.z += v.z * s;
        return this;
    };
    /**
     * Sets this vector to a + b.
     */
    Vector3.prototype.addVectors = function (a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        return this;
    };
    /**
     * Subtracts v from this vector.
     */
    Vector3.prototype.sub = function (v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    };
    Vector3.prototype.subScalar = function (s) {
        this.x -= s;
        this.y -= s;
        this.z -= s;
        return this;
    };
    /**
     * Sets this vector to a - b.
     */
    Vector3.prototype.subVectors = function (a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        return this;
    };
    Vector3.prototype.multiply = function (v) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        return this;
    };
    /**
     * Multiplies this vector by scalar s.
     */
    Vector3.prototype.multiplyScalar = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    };
    Vector3.prototype.multiplyVectors = function (a, b) {
        this.x = a.x * b.x;
        this.y = a.y * b.y;
        this.z = a.z * b.z;
        return this;
    };
    Vector3.prototype.applyAxisAngle = function (axis, angle) {
        throw new Error("not implemented");
    };
    Vector3.prototype.applyMatrix3 = function (m) {
        throw new Error("not implemented");
    };
    Vector3.prototype.applyMatrix4 = function (m) {
        throw new Error("not implemented");
    };
    Vector3.prototype.applyQuaternion = function (q) {
        var x = this.x, y = this.y, z = this.z;
        var qx = q.x, qy = q.y, qz = q.z, qw = q.w;
        // calculate quat * vector
        var ix = qw * x + qy * z - qz * y;
        var iy = qw * y + qz * x - qx * z;
        var iz = qw * z + qx * y - qy * x;
        var iw = -qx * x - qy * y - qz * z;
        // calculate result * inverse quat
        this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return this;
    };
    Vector3.prototype.project = function (camera) {
        throw new Error("not implemented");
    };
    Vector3.prototype.unproject = function (camera) {
        throw new Error("not implemented");
    };
    Vector3.prototype.transformDirection = function (m) {
        throw new Error("not implemented");
    };
    Vector3.prototype.divide = function (v) {
        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;
        return this;
    };
    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0, 0 ) if s == 0.
     */
    Vector3.prototype.divideScalar = function (scalar) {
        return this.multiplyScalar(1 / scalar);
    };
    Vector3.prototype.min = function (v) {
        this.x = Math.min(this.x, v.x);
        this.y = Math.min(this.y, v.y);
        this.z = Math.min(this.z, v.z);
        return this;
    };
    Vector3.prototype.max = function (v) {
        this.x = Math.max(this.x, v.x);
        this.y = Math.max(this.y, v.y);
        this.z = Math.max(this.z, v.z);
        return this;
    };
    Vector3.prototype.clamp = function (min, max) {
        // assumes min < max, componentwise
        this.x = MathUtils_1.MathUtils.clamp(this.x, min.x, max.x);
        this.y = MathUtils_1.MathUtils.clamp(this.y, min.y, max.y);
        this.z = MathUtils_1.MathUtils.clamp(this.z, min.z, max.z);
        return this;
    };
    Vector3.prototype.clampScalar = function (minVal, maxVal) {
        this.x = MathUtils_1.MathUtils.clamp(this.x, minVal, maxVal);
        this.y = MathUtils_1.MathUtils.clamp(this.y, minVal, maxVal);
        this.z = MathUtils_1.MathUtils.clamp(this.z, minVal, maxVal);
        return this;
    };
    Vector3.prototype.clampLength = function (min, max) {
        var length = this.length();
        return this.divideScalar(length || 1).multiplyScalar(MathUtils_1.MathUtils.clamp(length, min, max));
    };
    Vector3.prototype.floor = function () {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
    };
    Vector3.prototype.ceil = function () {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
    };
    Vector3.prototype.round = function () {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
    };
    Vector3.prototype.roundToZero = function () {
        this.x = (this.x < 0) ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = (this.y < 0) ? Math.ceil(this.y) : Math.floor(this.y);
        this.z = (this.z < 0) ? Math.ceil(this.z) : Math.floor(this.z);
        return this;
    };
    /**
     * Inverts this vector.
     */
    Vector3.prototype.negate = function () {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    };
    /**
     * Computes dot product of this vector and v.
     */
    Vector3.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    };
    /**
     * Computes squared length of this vector.
     */
    Vector3.prototype.lengthSq = function () {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    };
    /**
     * Computes length of this vector.
     */
    Vector3.prototype.length = function () {
        return Math.sqrt(this.lengthSq());
    };
    /**
     * Computes Manhattan length of this vector.
     * http://en.wikipedia.org/wiki/Taxicab_geometry
     *
     * @deprecated Use {@link Vector3#manhattanLength .manhattanLength()} instead.
     */
    // lengthManhattan(): number
    /**
     * 三维向量的曼哈顿距离
     *
     * @return {number}
     *
     * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    Vector3.prototype.manhattanLength = function () {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    };
    /**
     * Computes the Manhattan length (distance) from this vector to the given vector v
     *
     * @param {Vector3} v
     *
     * @return {number}
     *
     * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    Vector3.prototype.manhattanDistanceTo = function (v) {
        return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
    };
    /**
     * Normalizes this vector.
     */
    Vector3.prototype.normalize = function () {
        return this.divideScalar(this.length() || 1);
    };
    /**
     * Normalizes this vector and multiplies it by l.
     */
    Vector3.prototype.setLength = function (l) {
        return this.normalize().multiplyScalar(length);
    };
    Vector3.prototype.lerp = function (v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        this.z += (v.z - this.z) * alpha;
        return this;
    };
    Vector3.prototype.lerpVectors = function (v1, v2, alpha) {
        return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
    };
    /**
     * Sets this vector to cross product of itself and v.
     */
    Vector3.prototype.cross = function (v) {
        return this.crossVectors(this, v);
    };
    /**
     * Sets this vector to cross product of a and b.
     */
    Vector3.prototype.crossVectors = function (a, b) {
        var ax = a.x, ay = a.y, az = a.z;
        var bx = b.x, by = b.y, bz = b.z;
        this.x = ay * bz - az * by;
        this.y = az * bx - ax * bz;
        this.z = ax * by - ay * bx;
        return this;
    };
    Vector3.prototype.projectOnVector = function (vector) {
        var scalar = vector.dot(this) / vector.lengthSq();
        return this.copy(vector).multiplyScalar(scalar);
    };
    Vector3.prototype.angleTo = function (v) {
        var theta = this.dot(v) / (Math.sqrt(this.lengthSq() * v.lengthSq()));
        // clamp, to handle numerical problems
        return Math.acos(Math_1._Math.clamp(theta, -1, 1));
    };
    /**
     * Computes distance of this vector to v.
     */
    Vector3.prototype.distanceTo = function (v) {
        return Math.sqrt(this.distanceToSquared(v));
    };
    /**
     * Computes squared distance of this vector to v.
     */
    Vector3.prototype.distanceToSquared = function (v) {
        var dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
        return dx * dx + dy * dy + dz * dz;
    };
    /**
     * @deprecated Use {@link Vector3#manhattanDistanceTo .manhattanDistanceTo()} instead.
     */
    // distanceToManhattan(v: Vector3): number;
    Vector3.prototype.setFromSpherical = function (s) {
        throw new Error("not implemented");
    };
    Vector3.prototype.setFromCylindrical = function (s) {
        throw new Error("not implemented");
    };
    Vector3.prototype.setFromMatrixPosition = function (m) {
        throw new Error("not implemented");
    };
    Vector3.prototype.setFromMatrixScale = function (m) {
        throw new Error("not implemented");
    };
    Vector3.prototype.setFromMatrixColumn = function (matrix, index) {
        throw new Error("not implemented");
    };
    /**
     * Checks for strict equality of this vector and v.
     */
    Vector3.prototype.equals = function (v) {
        return (v.x === this.x)
            && (v.y === this.y)
            && (v.z === this.z);
    };
    Vector3.prototype.fromArray = function (array, offset) {
        if (offset === void 0) { offset = 0; }
        this.x = array[offset];
        this.y = array[offset + 1];
        this.z = array[offset + 2];
        return this;
    };
    /**
     * Returns an array [x, y, z], or copies x, y and z into the provided array.
     * @param array (optional) array to store the vector to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    Vector3.prototype.toArray = function (array, offset) {
        if (array === void 0) { array = new Array(); }
        if (offset === void 0) { offset = 0; }
        array[offset] = this.x;
        array[offset + 1] = this.y;
        array[offset + 2] = this.z;
        return array;
    };
    Vector3.prototype.fromBufferAttribute = function (attribute, index, offset) {
        throw new Error("not implemented");
    };
    return Vector3;
}());
exports.Vector3 = Vector3;
//# sourceMappingURL=Vector3.js.map