"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Quaternion_1 = require("./Quaternion");
const MathUtils_1 = require("./MathUtils");
class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /**
     * Sets value of this vector.
     */
    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    /**
     * Sets all values of this vector.
     */
    setScalar(scalar) {
        this.x = scalar;
        this.y = scalar;
        this.z = scalar;
        return this;
    }
    /**
     * Sets x value of this vector.
     */
    setX(x) {
        this.x = x;
        return this;
    }
    /**
     * Sets y value of this vector.
     */
    setY(y) {
        this.y = y;
        return this;
    }
    /**
     * Sets z value of this vector.
     */
    setZ(z) {
        this.z = z;
        return this;
    }
    setComponent(index, value) {
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
    }
    getComponent(index) {
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
    }
    /**
     * Clones this vector.
     */
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    /**
     * Copies value of v to this vector.
     */
    copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
    }
    /**
     * Adds v to this vector.
     */
    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }
    addScalar(s) {
        this.x += s;
        this.y += s;
        this.z += s;
        return this;
    }
    addScaledVector(v, s) {
        this.x += v.x * s;
        this.y += v.y * s;
        this.z += v.z * s;
        return this;
    }
    /**
     * Sets this vector to a + b.
     */
    addVectors(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        this.z = a.z + b.z;
        return this;
    }
    /**
     * Subtracts v from this vector.
     */
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }
    subScalar(s) {
        this.x -= s;
        this.y -= s;
        this.z -= s;
        return this;
    }
    /**
     * Sets this vector to a - b.
     */
    subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        this.z = a.z - b.z;
        return this;
    }
    multiply(v) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        return this;
    }
    /**
     * Multiplies this vector by scalar s.
     */
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    multiplyVectors(a, b) {
        this.x = a.x * b.x;
        this.y = a.y * b.y;
        this.z = a.z * b.z;
        return this;
    }
    applyEuler(euler) {
        return this.applyQuaternion(new Quaternion_1.Quaternion().setFromEuler(euler));
    }
    // applyEuler: (euler: Euler) => Vector3 = (() => {
    //     //这里闭包有意义吗?为了节约内存?
    //     //不能闭包,会造成无限递归
    //     let quaternion = new Quaternion();
    //     return (euler: Euler) => {
    //
    //         return this.applyQuaternion(quaternion.setFromEuler(euler));
    //
    //     };
    // })();
    applyAxisAngle(axis, angle) {
        throw new Error("not implemented");
    }
    applyMatrix3(m) {
        throw new Error("not implemented");
    }
    applyMatrix4(m) {
        throw new Error("not implemented");
    }
    applyQuaternion(q) {
        let x = this.x, y = this.y, z = this.z;
        let qx = q.x, qy = q.y, qz = q.z, qw = q.w;
        // calculate quat * vector
        let ix = qw * x + qy * z - qz * y;
        let iy = qw * y + qz * x - qx * z;
        let iz = qw * z + qx * y - qy * x;
        let iw = -qx * x - qy * y - qz * z;
        // calculate result * inverse quat
        this.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        this.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        this.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        return this;
    }
    project(camera) {
        throw new Error("not implemented");
    }
    unproject(camera) {
        throw new Error("not implemented");
    }
    transformDirection(m) {
        throw new Error("not implemented");
    }
    divide(v) {
        this.x /= v.x;
        this.y /= v.y;
        this.z /= v.z;
        return this;
    }
    /**
     * Divides this vector by scalar s.
     * Set vector to ( 0, 0, 0 ) if s == 0.
     */
    divideScalar(scalar) {
        return this.multiplyScalar(1 / scalar);
    }
    min(v) {
        this.x = Math.min(this.x, v.x);
        this.y = Math.min(this.y, v.y);
        this.z = Math.min(this.z, v.z);
        return this;
    }
    max(v) {
        this.x = Math.max(this.x, v.x);
        this.y = Math.max(this.y, v.y);
        this.z = Math.max(this.z, v.z);
        return this;
    }
    clamp(min, max) {
        // assumes min < max, componentwise
        this.x = MathUtils_1.MathUtils.clamp(this.x, min.x, max.x);
        this.y = MathUtils_1.MathUtils.clamp(this.y, min.y, max.y);
        this.z = MathUtils_1.MathUtils.clamp(this.z, min.z, max.z);
        return this;
    }
    clampScalar(minVal, maxVal) {
        this.x = MathUtils_1.MathUtils.clamp(this.x, minVal, maxVal);
        this.y = MathUtils_1.MathUtils.clamp(this.y, minVal, maxVal);
        this.z = MathUtils_1.MathUtils.clamp(this.z, minVal, maxVal);
        return this;
    }
    clampLength(min, max) {
        let length = this.length();
        return this.divideScalar(length || 1).multiplyScalar(MathUtils_1.MathUtils.clamp(length, min, max));
    }
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        this.z = Math.floor(this.z);
        return this;
    }
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        this.z = Math.ceil(this.z);
        return this;
    }
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
    }
    roundToZero() {
        this.x = (this.x < 0) ? Math.ceil(this.x) : Math.floor(this.x);
        this.y = (this.y < 0) ? Math.ceil(this.y) : Math.floor(this.y);
        this.z = (this.z < 0) ? Math.ceil(this.z) : Math.floor(this.z);
        return this;
    }
    /**
     * Inverts this vector.
     */
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    }
    /**
     * Computes dot product of this vector and v.
     */
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    /**
     * Computes squared length of this vector.
     */
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    /**
     * Computes length of this vector.
     */
    length() {
        return Math.sqrt(this.lengthSq());
    }
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
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    }
    /**
     * Computes the Manhattan length (distance) from this vector to the given vector v
     *
     * @param {Vector3} v
     *
     * @return {number}
     *
     * @see {@link http://en.wikipedia.org/wiki/Taxicab_geometry|Wikipedia: Taxicab Geometry}
     */
    manhattanDistanceTo(v) {
        return Math.abs(this.x - v.x) + Math.abs(this.y - v.y) + Math.abs(this.z - v.z);
    }
    /**
     * Normalizes this vector.
     */
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    /**
     * Normalizes this vector and multiplies it by l.
     */
    setLength(l) {
        return this.normalize().multiplyScalar(length);
    }
    lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        this.z += (v.z - this.z) * alpha;
        return this;
    }
    lerpVectors(v1, v2, alpha) {
        return this.subVectors(v2, v1).multiplyScalar(alpha).add(v1);
    }
    /**
     * Sets this vector to cross product of itself and v.
     */
    cross(v) {
        return this.crossVectors(this, v);
    }
    /**
     * Sets this vector to cross product of a and b.
     */
    crossVectors(a, b) {
        let ax = a.x, ay = a.y, az = a.z;
        let bx = b.x, by = b.y, bz = b.z;
        this.x = ay * bz - az * by;
        this.y = az * bx - ax * bz;
        this.z = ax * by - ay * bx;
        return this;
    }
    projectOnVector(vector) {
        let scalar = vector.dot(this) / vector.lengthSq();
        return this.copy(vector).multiplyScalar(scalar);
    }
    projectOnPlane(planeNormal) {
        let v1 = new Vector3();
        v1.copy(this).projectOnVector(planeNormal);
        return this.sub(v1);
    }
    // projectOnPlane:(planeNormal: Vector3)=> Vector3=(()=>{
    //     let v1 = new Vector3();
    //
    //     return ( planeNormal:Vector3 ):Vector3=> {
    //
    //         v1.copy( this ).projectOnVector( planeNormal );
    //
    //         return this.sub( v1 );
    //
    //     };
    // })();
    reflect(normal) {
        return this.sub(normal).multiplyScalar(2 * this.dot(normal));
    }
    // reflect:(normal: Vector3)=> Vector3=(()=>{
    //     // reflect incident vector off plane orthogonal to normal
    //     // normal is assumed to have unit length
    //
    //     let v1 = new Vector3();
    //
    //     return ( normal:Vector3 ):Vector3=> {
    //         return this.sub( v1.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );
    //     };
    // })();
    angleTo(v) {
        let theta = this.dot(v) / (Math.sqrt(this.lengthSq() * v.lengthSq()));
        // clamp, to handle numerical problems
        return Math.acos(MathUtils_1.MathUtils.clamp(theta, -1, 1));
    }
    /**
     * Computes distance of this vector to v.
     */
    distanceTo(v) {
        return Math.sqrt(this.distanceToSquared(v));
    }
    /**
     * Computes squared distance of this vector to v.
     */
    distanceToSquared(v) {
        let dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;
        return dx * dx + dy * dy + dz * dz;
    }
    /**
     * @deprecated Use {@link Vector3#manhattanDistanceTo .manhattanDistanceTo()} instead.
     */
    // distanceToManhattan(v: Vector3): number;
    setFromSpherical(s) {
        throw new Error("not implemented");
    }
    setFromCylindrical(s) {
        throw new Error("not implemented");
    }
    setFromMatrixPosition(m) {
        throw new Error("not implemented");
    }
    setFromMatrixScale(m) {
        throw new Error("not implemented");
    }
    setFromMatrixColumn(matrix, index) {
        throw new Error("not implemented");
    }
    /**
     * Checks for strict equality of this vector and v.
     */
    equals(v) {
        return (v.x === this.x)
            && (v.y === this.y)
            && (v.z === this.z);
    }
    fromArray(array, offset = 0) {
        this.x = array[offset];
        this.y = array[offset + 1];
        this.z = array[offset + 2];
        return this;
    }
    /**
     * Returns an array [x, y, z], or copies x, y and z into the provided array.
     * @param array (optional) array to store the vector to. If this is not provided, a new array will be created.
     * @param offset (optional) optional offset into the array.
     * @return The created or provided array.
     */
    toArray(array = new Array(), offset = 0) {
        array[offset] = this.x;
        array[offset + 1] = this.y;
        array[offset + 2] = this.z;
        return array;
    }
    fromBufferAttribute(attribute, index, offset) {
        throw new Error("not implemented");
    }
}
exports.Vector3 = Vector3;
//# sourceMappingURL=Vector3.js.map