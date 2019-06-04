"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathUtils_1 = require("./MathUtils");
var Quaternion = /** @class */ (function () {
    function Quaternion(x, y, z, w) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        if (w === void 0) { w = 1; }
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    /**
     * 设置四元属性的值
     * @param x
     * @param y
     * @param z
     * @param w
     */
    Quaternion.prototype.set = function (x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        this.onChangeCallback();
        return this;
    };
    /**
     * 根据当前四元数复制一个新的四元数
     */
    Quaternion.prototype.clone = function () {
        return new Quaternion(this.x, this.y, this.z, this.x);
    };
    /**
     * 将四元数q的属性复制到当前四元数对象
     * @param q
     */
    Quaternion.prototype.copy = function (q) {
        this.x = q.x;
        this.y = q.y;
        this.z = q.z;
        this.w = q.w;
        this.onChangeCallback();
        return this;
    };
    /**
     * 根据欧拉角对象设置自身属性
     * @param euler
     * @param update
     */
    Quaternion.prototype.setFromEuler = function (euler, update) {
        var x = euler.x, y = euler.y, z = euler.z, order = euler.order;
        // http://www.mathworks.com/matlabcentral/fileexchange/
        // 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
        //	content/SpinCalc.m
        var cos = Math.cos;
        var sin = Math.sin;
        var c1 = cos(x / 2);
        var c2 = cos(y / 2);
        var c3 = cos(z / 2);
        var s1 = sin(x / 2);
        var s2 = sin(y / 2);
        var s3 = sin(z / 2);
        if (order === 'XYZ') {
            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;
        }
        else if (order === 'YXZ') {
            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 - s1 * s2 * c3;
            this.w = c1 * c2 * c3 + s1 * s2 * s3;
        }
        else if (order === 'ZXY') {
            this.x = s1 * c2 * c3 - c1 * s2 * s3;
            this.y = c1 * s2 * c3 + s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;
        }
        else if (order === 'ZYX') {
            this.x = s1 * c2 * c3 - c1 * s2 * s3;
            this.y = c1 * s2 * c3 + s1 * c2 * s3;
            this.z = c1 * c2 * s3 - s1 * s2 * c3;
            this.w = c1 * c2 * c3 + s1 * s2 * s3;
        }
        else if (order === 'YZX') {
            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 + s1 * c2 * s3;
            this.z = c1 * c2 * s3 - s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;
        }
        else if (order === 'XZY') {
            this.x = s1 * c2 * c3 - c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 + s1 * s2 * s3;
        }
        if (update)
            this.onChangeCallback();
        return this;
    };
    Quaternion.prototype.setFromAxisAngle = function (axis, angle) {
        throw new Error("not implemented");
    };
    /**
     * Sets this quaternion from rotation component of m. Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm.
     */
    Quaternion.prototype.setFromRotationMatrix = function (m) {
        throw new Error("not implemented");
    };
    Quaternion.prototype.setFromUnitVectors = function (vFrom, vTo) {
        throw new Error("not implemented");
    };
    Quaternion.prototype.angleTo = function (q) {
        return 2 * Math.acos(Math.abs(MathUtils_1.MathUtils.clamp(this.dot(q), -1, 1)));
    };
    Quaternion.prototype.rotateTowards = function (q, step) {
        var angle = this.angleTo(q);
        if (angle === 0) {
            return this;
        }
        var t = Math.min(1, step / angle);
        this.slerp(q, t);
        return this;
    };
    /**
     * Inverts this quaternion.
     */
    Quaternion.prototype.inverse = function () {
        // quaternion is assumed to have unit length
        return this.conjugate();
    };
    /**
     * 反转
     */
    Quaternion.prototype.conjugate = function () {
        this.x *= -1;
        this.y *= -1;
        this.z *= -1;
        this.onChangeCallback();
        return this;
    };
    /**
     * 四元数点乘
     * @param v
     */
    Quaternion.prototype.dot = function (v) {
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
    };
    Quaternion.prototype.lengthSq = function () {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    };
    /**
     * Computes length of this quaternion.
     */
    Quaternion.prototype.length = function () {
        //return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );
        return Math.sqrt(this.lengthSq());
    };
    /**
     * Normalizes this quaternion.
     * 归一化
     */
    Quaternion.prototype.normalize = function () {
        var l = this.length();
        if (l === 0) {
            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 1;
        }
        else {
            l = 1 / l;
            this.x = this.x * l;
            this.y = this.y * l;
            this.z = this.z * l;
            this.w = this.w * l;
        }
        this.onChangeCallback();
        return this;
    };
    /**
     * Multiplies this quaternion by b.
     * 四元数叉乘
     */
    Quaternion.prototype.multiply = function (q) {
        return this.multiplyQuaternions(this, q);
    };
    /**
     * 四元数左乘
     * @param q
     */
    Quaternion.prototype.premultiply = function (q) {
        return this.multiplyQuaternions(q, this);
    };
    /**
     * Sets this quaternion to a x b
     * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm.
     * 将当前四元数的属性设置为a,b两个四元数叉乘的结果
     */
    Quaternion.prototype.multiplyQuaternions = function (a, b) {
        // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm
        var qax = a.x, qay = a.y, qaz = a.z, qaw = a.w;
        var qbx = b.x, qby = b.y, qbz = b.z, qbw = b.w;
        this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
        this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
        this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
        this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;
        this.onChangeCallback();
        return this;
    };
    /**
     * 四元数平滑插值
     * @param qb
     * @param t
     */
    Quaternion.prototype.slerp = function (qb, t) {
        if (t === 0)
            return this;
        if (t === 1)
            return this.copy(qb);
        var x = this.x, y = this.y, z = this.z, w = this.w;
        // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/
        var cosHalfTheta = w * qb.w + x * qb.x + y * qb.y + z * qb.z;
        if (cosHalfTheta < 0) {
            this.w = -qb.w;
            this.x = -qb.x;
            this.y = -qb.y;
            this.z = -qb.z;
            cosHalfTheta = -cosHalfTheta;
        }
        else {
            this.copy(qb);
        }
        if (cosHalfTheta >= 1.0) {
            this.w = w;
            this.x = x;
            this.y = y;
            this.z = z;
            return this;
        }
        var sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;
        /**
         * Number.EPSILON:极小值
         */
        if (sqrSinHalfTheta <= Number.EPSILON) {
            var s = 1 - t;
            this.w = s * w + t * this.w;
            this.x = s * x + t * this.x;
            this.y = s * y + t * this.y;
            this.z = s * z + t * this.z;
            return this.normalize();
        }
        var sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
        var halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
        var ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta, ratioB = Math.sin(t * halfTheta) / sinHalfTheta;
        this.w = (w * ratioA + this.w * ratioB);
        this.x = (x * ratioA + this.x * ratioB);
        this.y = (y * ratioA + this.y * ratioB);
        this.z = (z * ratioA + this.z * ratioB);
        this.onChangeCallback();
        return this;
    };
    Quaternion.prototype.equals = function (quaternion) {
        return (quaternion.x === this.x) &&
            (quaternion.y === this.y) &&
            (quaternion.z === this.z) &&
            (quaternion.w === this.w);
    };
    Quaternion.prototype.fromArray = function (array, offset) {
        if (offset === void 0) { offset = 0; }
        this.x = array[offset];
        this.y = array[offset + 1];
        this.z = array[offset + 2];
        this.w = array[offset + 3];
        this.onChangeCallback();
        return this;
    };
    Quaternion.prototype.toArray = function (array, offset) {
        if (array === void 0) { array = new Array(); }
        if (offset === void 0) { offset = 0; }
        array[offset] = this.x;
        array[offset + 1] = this.y;
        array[offset + 2] = this.z;
        array[offset + 3] = this.w;
        return array;
    };
    /**
     * 设置四元数变化回调函数的值
     * @param callback
     */
    Quaternion.prototype.onChange = function (callback) {
        this.onChangeCallback = callback;
        return this;
    };
    /**
     * 属性发生变化时调用该回调方法
     */
    Quaternion.prototype.onChangeCallback = function () {
        //调用者使用onChange函数的参数覆盖该函数的实现
    };
    /**
     * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/.
     */
    Quaternion.slerp = function (qa, qb, qm, t) {
        return qm.copy(qa).slerp(qb, t);
    };
    Quaternion.slerpFlat = function (dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t) {
        // fuzz-free, array-based Quaternion SLERP operation
        var x0 = src0[srcOffset0 + 0], y0 = src0[srcOffset0 + 1], z0 = src0[srcOffset0 + 2], w0 = src0[srcOffset0 + 3], x1 = src1[srcOffset1 + 0], y1 = src1[srcOffset1 + 1], z1 = src1[srcOffset1 + 2], w1 = src1[srcOffset1 + 3];
        if (w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1) {
            var s = 1 - t, cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1, dir = (cos >= 0 ? 1 : -1), sqrSin = 1 - cos * cos;
            // Skip the Slerp for tiny steps to avoid numeric problems:
            if (sqrSin > Number.EPSILON) {
                var sin = Math.sqrt(sqrSin), len = Math.atan2(sin, cos * dir);
                s = Math.sin(s * len) / sin;
                t = Math.sin(t * len) / sin;
            }
            var tDir = t * dir;
            x0 = x0 * s + x1 * tDir;
            y0 = y0 * s + y1 * tDir;
            z0 = z0 * s + z1 * tDir;
            w0 = w0 * s + w1 * tDir;
            // Normalize in case we just did a lerp:
            if (s === 1 - t) {
                var f = 1 / Math.sqrt(x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0);
                x0 *= f;
                y0 *= f;
                z0 *= f;
                w0 *= f;
            }
        }
        dst[dstOffset] = x0;
        dst[dstOffset + 1] = y0;
        dst[dstOffset + 2] = z0;
        dst[dstOffset + 3] = w0;
        return new Quaternion().fromArray(dst);
    };
    return Quaternion;
}());
exports.Quaternion = Quaternion;
//# sourceMappingURL=Quaternion.js.map