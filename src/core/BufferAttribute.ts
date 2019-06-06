import {Color} from "../math/Color";
import {Vector2} from "../math/Vector2";
import {Vector3} from "../math/Vector3";
import {Vector4} from "../math/Vector4";
import {ArrayUtils} from "../utils/ArrayUtils";

export class BufferAttribute {

    name: string;
    uuid: string = '';
    array: Array<number>;
    itemSize: number;
    dynamic: boolean;
    updateRange: { offset: number; count: number };
    version: number;
    normalized: boolean;
    count: number;

    protected constructor(array: Array<number>, itemSize: number, normalized: boolean = false) {
        this.name = '';

        this.array = array;
        this.itemSize = itemSize;
        this.count = array.length / itemSize;
        this.normalized = false;

        this.dynamic = false;
        this.updateRange = {offset: 0, count: -1};

        this.version = 0;
    }

    private _needsUpdate: boolean = false;

    get needsUpdate(): boolean {
        return this._needsUpdate;
    }

    set needsUpdate(value: boolean) {
        if (value) this.version++;
        this._needsUpdate = value;
    }

    onUpload(callback: () => void): BufferAttribute {
        this.onUploadCallback = callback;

        return this;
    }

    onUploadCallback(): void {
    }

    setArray(array: Array<number>): BufferAttribute {
        this.count = array.length / this.itemSize;
        this.array = array;

        return this;
    }

    setDynamic(value: boolean): BufferAttribute {
        this.dynamic = value;
        return this;
    }

    clone(): BufferAttribute {
        return new BufferAttribute(this.array, this.itemSize).copy(this);
    }

    copy(source: BufferAttribute): BufferAttribute {
        this.name = source.name;

        this.array = ArrayUtils.copy(source.array);
        this.itemSize = source.itemSize;
        this.count = source.count;
        this.normalized = source.normalized;

        this.dynamic = source.dynamic;

        return this;
    }

    copyAt(
        index1: number,
        attribute: BufferAttribute,
        index2: number
    ): BufferAttribute {

        index1 *= this.itemSize;
        index2 *= attribute.itemSize;

        for (var i = 0, l = this.itemSize; i < l; i++) {

            this.array[index1 + i] = attribute.array[index2 + i];

        }

        return this;
    }

    copyArray(array: Array<number>): BufferAttribute {
        this.array = ArrayUtils.copy(array);
        return this;
    }

    copyColorsArray(
        colors: { r: number; g: number; b: number }[]
    ): BufferAttribute {
        let array = this.array, offset = 0;

        for (let i = 0, l = colors.length; i < l; i++) {

            let color = colors[i];

            if (color === undefined) {

                console.warn('THREE.BufferAttribute.copyColorsArray(): color is undefined', i);
                color = new Color();

            }

            array[offset++] = color.r;
            array[offset++] = color.g;
            array[offset++] = color.b;

        }

        return this;
    }

    copyVector2sArray(vectors: { x: number; y: number }[]): BufferAttribute {
        let array = this.array, offset = 0;

        for (let i = 0, l = vectors.length; i < l; i++) {

            let vector = vectors[i];

            if (vector === undefined) {

                console.warn('THREE.BufferAttribute.copyVector2sArray(): vector is undefined', i);
                vector = new Vector2();
            }

            array[offset++] = vector.x;
            array[offset++] = vector.y;

        }

        return this;
    }

    copyVector3sArray(
        vectors: { x: number; y: number; z: number }[]
    ): BufferAttribute {
        let array = this.array, offset = 0;

        for (let i = 0, l = vectors.length; i < l; i++) {

            let vector = vectors[i];

            if (vector === undefined) {

                console.warn('THREE.BufferAttribute.copyVector3sArray(): vector is undefined', i);
                vector = new Vector3();

            }

            array[offset++] = vector.x;
            array[offset++] = vector.y;
            array[offset++] = vector.z;

        }

        return this;
    }

    copyVector4sArray(
        vectors: { x: number; y: number; z: number; w: number }[]
    ): BufferAttribute {
        let array = this.array, offset = 0;

        for (let i = 0, l = vectors.length; i < l; i++) {

            let vector = vectors[i];

            if (vector === undefined) {

                console.warn('THREE.BufferAttribute.copyVector4sArray(): vector is undefined', i);
                vector = new Vector4();

            }

            array[offset++] = vector.x;
            array[offset++] = vector.y;
            array[offset++] = vector.z;
            array[offset++] = vector.w;

        }

        return this;
    }

    set(
        value: Array<number>,
        offset: number = 0
    ): BufferAttribute {

        this.array = ArrayUtils.copy(value, offset);

        return this;
    }

    getX(index: number): number {
        return this.array[index * this.itemSize];
    }

    setX(index: number, x: number): BufferAttribute {
        this.array[index * this.itemSize] = x;
        return this;
    }

    getY(index: number): number {
        return this.array[index * this.itemSize + 1];
    }

    setY(index: number, y: number): BufferAttribute {
        this.array[index * this.itemSize + 1] = y;
        return this;
    }

    getZ(index: number): number {
        return this.array[index * this.itemSize + 2];
    }

    setZ(index: number, z: number): BufferAttribute {
        this.array[index * this.itemSize + 2] = z;

        return this;
    }

    getW(index: number): number {
        return this.array[index * this.itemSize + 3];
    }

    setW(index: number, w: number): BufferAttribute {
        this.array[index * this.itemSize + 3] = w;

        return this;
    }

    setXY(index: number, x: number, y: number): BufferAttribute {
        index *= this.itemSize;

        this.array[index + 0] = x;
        this.array[index + 1] = y;

        return this;
    }

    setXYZ(index: number, x: number, y: number, z: number): BufferAttribute {
        index *= this.itemSize;

        this.array[index + 0] = x;
        this.array[index + 1] = y;
        this.array[index + 2] = z;

        return this;
    }

    setXYZW(
        index: number,
        x: number,
        y: number,
        z: number,
        w: number
    ): BufferAttribute {
        index *= this.itemSize;

        this.array[index + 0] = x;
        this.array[index + 1] = y;
        this.array[index + 2] = z;
        this.array[index + 3] = w;

        return this;
    }

    /**
     * @deprecated Use {@link BufferAttribute#count .count} instead.
     */
    //length: number;
}
