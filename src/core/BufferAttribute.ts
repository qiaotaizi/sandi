export interface BufferAttribute {
    name:string;
    uuid: string;
    array: ArrayLike<number>;
    itemSize: number;
    dynamic: boolean;
    updateRange: { offset: number; count: number };
    version: number;
    normalized: boolean;
    needsUpdate: boolean;
    count: number;

    onUpload(callback: () => void):void;

    onUploadCallback():void;

    setArray(array: ArrayLike<number>): BufferAttribute;

    setDynamic(dynamic: boolean): BufferAttribute;

    clone(): BufferAttribute;

    copy(source: BufferAttribute): BufferAttribute;

    copyAt(
        index1: number,
        attribute: BufferAttribute,
        index2: number
    ): BufferAttribute;

    copyArray(array: ArrayLike<number>): BufferAttribute;

    copyColorsArray(
        colors: { r: number; g: number; b: number }[]
    ): BufferAttribute;

    copyVector2sArray(vectors: { x: number; y: number }[]): BufferAttribute;

    copyVector3sArray(
        vectors: { x: number; y: number; z: number }[]
    ): BufferAttribute;

    copyVector4sArray(
        vectors: { x: number; y: number; z: number; w: number }[]
    ): BufferAttribute;

    set(
        value: ArrayLike<number> | ArrayBufferView,
        offset?: number
    ): BufferAttribute;

    getX(index: number): number;

    setX(index: number, x: number): BufferAttribute;

    getY(index: number): number;

    setY(index: number, y: number): BufferAttribute;

    getZ(index: number): number;

    setZ(index: number, z: number): BufferAttribute;

    getW(index: number): number;

    setW(index: number, z: number): BufferAttribute;

    setXY(index: number, x: number, y: number): BufferAttribute;

    setXYZ(index: number, x: number, y: number, z: number): BufferAttribute;

    setXYZW(
        index: number,
        x: number,
        y: number,
        z: number,
        w: number
    ): BufferAttribute;

    /**
     * @deprecated Use {@link BufferAttribute#count .count} instead.
     */
    //length: number;
}

new Int32Array([1,2,3,4]);
