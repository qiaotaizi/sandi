"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Color_1 = require("../math/Color");
const Vector2_1 = require("../math/Vector2");
const Vector3_1 = require("../math/Vector3");
const Vector4_1 = require("../math/Vector4");
const ArrayUtils_1 = require("../utils/ArrayUtils");
class BufferAttribute {
    constructor(array, itemSize, normalized = false) {
        this.uuid = '';
        this._needsUpdate = false;
        this.name = '';
        this.array = array;
        this.itemSize = itemSize;
        this.count = array.length / itemSize;
        this.normalized = false;
        this.dynamic = false;
        this.updateRange = { offset: 0, count: -1 };
        this.version = 0;
    }
    get needsUpdate() {
        return this._needsUpdate;
    }
    set needsUpdate(value) {
        if (value)
            this.version++;
        this._needsUpdate = value;
    }
    onUpload(callback) {
        this.onUploadCallback = callback;
        return this;
    }
    onUploadCallback() {
    }
    setArray(array) {
        this.count = array.length / this.itemSize;
        this.array = array;
        return this;
    }
    setDynamic(value) {
        this.dynamic = value;
        return this;
    }
    clone() {
        return new BufferAttribute(this.array, this.itemSize).copy(this);
    }
    copy(source) {
        this.name = source.name;
        this.array = ArrayUtils_1.ArrayUtils.copy(source.array);
        this.itemSize = source.itemSize;
        this.count = source.count;
        this.normalized = source.normalized;
        this.dynamic = source.dynamic;
        return this;
    }
    copyAt(index1, attribute, index2) {
        index1 *= this.itemSize;
        index2 *= attribute.itemSize;
        for (let i = 0, l = this.itemSize; i < l; i++) {
            this.array[index1 + i] = attribute.array[index2 + i];
        }
        return this;
    }
    copyArray(array) {
        this.array = ArrayUtils_1.ArrayUtils.copy(array);
        return this;
    }
    copyColorsArray(colors) {
        let array = this.array, offset = 0;
        for (let i = 0, l = colors.length; i < l; i++) {
            let color = colors[i];
            if (color === undefined) {
                console.warn('THREE.BufferAttribute.copyColorsArray(): color is undefined', i);
                color = new Color_1.Color();
            }
            array[offset++] = color.r;
            array[offset++] = color.g;
            array[offset++] = color.b;
        }
        return this;
    }
    copyVector2sArray(vectors) {
        let array = this.array, offset = 0;
        for (let i = 0, l = vectors.length; i < l; i++) {
            let vector = vectors[i];
            if (vector === undefined) {
                console.warn('THREE.BufferAttribute.copyVector2sArray(): vector is undefined', i);
                vector = new Vector2_1.Vector2();
            }
            array[offset++] = vector.x;
            array[offset++] = vector.y;
        }
        return this;
    }
    copyVector3sArray(vectors) {
        let array = this.array, offset = 0;
        for (let i = 0, l = vectors.length; i < l; i++) {
            let vector = vectors[i];
            if (vector === undefined) {
                console.warn('THREE.BufferAttribute.copyVector3sArray(): vector is undefined', i);
                vector = new Vector3_1.Vector3();
            }
            array[offset++] = vector.x;
            array[offset++] = vector.y;
            array[offset++] = vector.z;
        }
        return this;
    }
    copyVector4sArray(vectors) {
        let array = this.array, offset = 0;
        for (let i = 0, l = vectors.length; i < l; i++) {
            let vector = vectors[i];
            if (vector === undefined) {
                console.warn('THREE.BufferAttribute.copyVector4sArray(): vector is undefined', i);
                vector = new Vector4_1.Vector4();
            }
            array[offset++] = vector.x;
            array[offset++] = vector.y;
            array[offset++] = vector.z;
            array[offset++] = vector.w;
        }
        return this;
    }
    set(value, offset = 0) {
        this.array = ArrayUtils_1.ArrayUtils.copy(value, offset);
        return this;
    }
    getX(index) {
        return this.array[index * this.itemSize];
    }
    setX(index, x) {
        this.array[index * this.itemSize] = x;
        return this;
    }
    getY(index) {
        return this.array[index * this.itemSize + 1];
    }
    setY(index, y) {
        this.array[index * this.itemSize + 1] = y;
        return this;
    }
    getZ(index) {
        return this.array[index * this.itemSize + 2];
    }
    setZ(index, z) {
        this.array[index * this.itemSize + 2] = z;
        return this;
    }
    getW(index) {
        return this.array[index * this.itemSize + 3];
    }
    setW(index, w) {
        this.array[index * this.itemSize + 3] = w;
        return this;
    }
    setXY(index, x, y) {
        index *= this.itemSize;
        this.array[index + 0] = x;
        this.array[index + 1] = y;
        return this;
    }
    setXYZ(index, x, y, z) {
        index *= this.itemSize;
        this.array[index + 0] = x;
        this.array[index + 1] = y;
        this.array[index + 2] = z;
        return this;
    }
    setXYZW(index, x, y, z, w) {
        index *= this.itemSize;
        this.array[index + 0] = x;
        this.array[index + 1] = y;
        this.array[index + 2] = z;
        this.array[index + 3] = w;
        return this;
    }
}
exports.BufferAttribute = BufferAttribute;
//# sourceMappingURL=BufferAttribute.js.map