/**
 * 四元数
 */
export class Quaternion {
    x: number;
    y: number;
    z: number;
    w: number;

    constructor(x?: number, y?: number, z?: number, w?: number) {
        this.x = x ? x : 0;
        this.y = y ? y : 0;
        this.z = z ? z : 0;
        this.w = w ? w : 1;
    }

    set(x: number, y: number, z: number, w: number):Quaternion{
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        return this;
    }



}
