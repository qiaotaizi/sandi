"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MathUtils {
    /**
     * 取3个数值中居于中间的值
     * @param value
     * @param min
     * @param max
     */
    static clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }
    /**
     * 欧几里得取模,是个什么算法?
     * TODO https://en.wikipedia.org/wiki/Modulo_operation
     * @param n
     * @param m
     */
    static euclideanModulo(n, m) {
        return ((n % m) + m) % m;
    }
    /**
     * 线性映射
     * TODO
     * @param x
     * @param a1
     * @param a2
     * @param b1
     * @param b2
     */
    static mapLinear(x, a1, a2, b1, b2) {
        return b1 + (x - a1) * (b2 - b1) / (a2 - a1);
    }
    /**
     * 线性插值
     * TODO
     * @param x
     * @param y
     * @param t
     */
    static lerp(x, y, t) {
        return (1 - t) * x + t * y;
    }
    /**
     * 平滑阶梯函数
     * TODO
     * @param x
     * @param min
     * @param max
     */
    static smoothstep(x, min, max) {
        if (x <= min)
            return 0;
        if (x >= max)
            return 1;
        x = (x - min) / (max - min);
        return x * x * (3 - 2 * x);
    }
    /**
     * 平滑阶梯函数改进
     * @param x
     * @param min
     * @param max
     */
    static smootherstep(x, min, max) {
        if (x <= min)
            return 0;
        if (x >= max)
            return 1;
        x = (x - min) / (max - min);
        return x * x * x * (x * (x * 6 - 15) + 10);
    }
    /**
     * 获取介于low和high的随机整数
     * @param low
     * @param high
     */
    static randInt(low, high) {
        return low + Math.floor(Math.random() * (high - low + 1));
    }
    /**
     * 获取介于low和high的随机浮点数
     * @param low
     * @param high
     */
    static randFloat(low, high) {
        return low + Math.random() * (high - low);
    }
    /**
     * 获取介于-range/2与range/2之间的随机浮点数
     * @param range
     */
    static randFloatSpread(range) {
        return range * (0.5 - Math.random());
    }
    /**
     * 角度数转弧度数
     * @param degrees
     */
    static degToRad(degrees) {
        return degrees * MathUtils.DEG2RAD;
    }
    /**
     * 弧度数转角度数
     * @param radians
     */
    static radToDeg(radians) {
        return radians * MathUtils.RAD2DEG;
    }
    /**
     * value是否是2的指数幂
     * @param value
     */
    static isPowerOfTwo(value) {
        return (value & (value - 1)) === 0 && value !== 0;
    }
    /**
     * TODO ?
     * @param value
     */
    static ceilPowerOfTwo(value) {
        return Math.pow(2, Math.ceil(Math.log(value) / Math.LN2));
    }
    /**
     * TODO ?
     * @param value
     */
    static floorPowerOfTwo(value) {
        return Math.pow(2, Math.floor(Math.log(value) / Math.LN2));
    }
}
/**
 * 弧度/角度转换比
 */
MathUtils.DEG2RAD = Math.PI / 180;
/**
 * 角度/弧度转换比
 */
MathUtils.RAD2DEG = 180 / Math.PI;
/**
 * UUID生成器
 */
MathUtils.generateUUID = (function () {
    let lut = new Array();
    //列举00-ff所有数值
    for (let i = 0; i < 256; i++) {
        lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
    }
    return function generateUUID() {
        let d0 = Math.random() * 0xffffffff | 0;
        let d1 = Math.random() * 0xffffffff | 0;
        let d2 = Math.random() * 0xffffffff | 0;
        let d3 = Math.random() * 0xffffffff | 0;
        let uuid = lut[d0 & 0xff] +
            lut[d0 >> 8 & 0xff] +
            lut[d0 >> 16 & 0xff] +
            lut[d0 >> 24 & 0xff] +
            '-' +
            lut[d1 & 0xff] +
            lut[d1 >> 8 & 0xff] +
            '-' +
            lut[d1 >> 16 & 0x0f | 0x40] +
            lut[d1 >> 24 & 0xff] +
            '-' +
            lut[d2 & 0x3f | 0x80] +
            lut[d2 >> 8 & 0xff] +
            '-' +
            lut[d2 >> 16 & 0xff] +
            lut[d2 >> 24 & 0xff] +
            lut[d3 & 0xff] +
            lut[d3 >> 8 & 0xff] +
            lut[d3 >> 16 & 0xff] +
            lut[d3 >> 24 & 0xff];
        return uuid.toUpperCase();
    };
})();
exports.MathUtils = MathUtils;
//# sourceMappingURL=MathUtils.js.map