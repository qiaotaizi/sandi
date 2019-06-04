/**
 * 欧拉角
 */
import {Quaternion} from "./Quaternion";
import {Vector3} from "./Vector3";
import {Matrix4} from "./Matrix4";

export class Euler {

    static RotationOrders:Array<string>=['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
    static DefaultOrder:string='XYZ';

    x:number;
    y:number;
    z:number;
    order:string;

    constructor( x?: number,y?: number, z?: number,order?: string ){
        this.x=x?x:0;
        this.y=y?y:0;
        this.z=z?z:0;
        this.order=order?order:Euler.DefaultOrder;
    }

    onChangeCallback(){
        //啥也不做
    }

    set( x: number, y: number, z: number, order: string ): Euler{
        this.x=x;
        this.y=y;
        this.y=z;
        this.order=order;
        this.onChangeCallback();
        return this;
    }

    clone(): Euler{
        return new Euler(this.x,this.y,this.z,this.order);
    }

    copy( euler: Euler ): Euler{
        this.x=euler.x;
        this.y=euler.y;
        this.z=euler.z;
        this.order=euler.order;
        this.onChangeCallback();
        return this;
    }

    // setFromRotationMatrix( m: Matrix4, order?: string, update?: boolean ): Euler;
    // setFromQuaternion( q: Quaternion, order?: string, update?: boolean ): Euler;
    // setFromVector3( v: Vector3, order?: string ): Euler;
    // reorder( newOrder: string ): Euler;
    // equals( euler: Euler ): boolean;
    // fromArray( xyzo: any[] ): Euler;
    // toArray( array?: number[], offset?: number ): number[];
    // toVector3( optionalResult?: Vector3 ): Vector3;
    // onChange( callback: Function ): this;

}