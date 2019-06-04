/**
 * 欧拉角
 */
import {Quaternion} from "./Quaternion";
import {Vector3} from "./Vector3";
import {Matrix4} from "./Matrix4";

export class Euler {

    static RotationOrders: Array<string> = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'];
    static DefaultOrder: string = 'XYZ';

    constructor(public x: number=0,public y: number=0,public z: number=0,public order: string=Euler.DefaultOrder) {
    }

    private onChangeCallback() {
        //调用者使用onChange函数的参数覆盖该函数的实现
    }

    set(x: number, y: number, z: number, order: string): Euler {
        this.x = x;
        this.y = y;
        this.y = z;
        this.order = order;
        this.onChangeCallback();
        return this;
    }

    clone(): Euler {
        return new Euler(this.x, this.y, this.z, this.order);
    }

    copy(euler: Euler): Euler {
        this.x = euler.x;
        this.y = euler.y;
        this.z = euler.z;
        this.order = euler.order;
        this.onChangeCallback();
        return this;
    }

    setFromRotationMatrix(m: Matrix4, order?: string, update?: boolean): Euler {
        throw new Error("not implemented");
    }

    setFromQuaternion(q: Quaternion, order?: string, update?: boolean): Euler {
        throw new Error("not implemented");
    }

    setFromVector3(v: Vector3, order?: string): Euler {
        throw new Error("not implemented");
    }

    reorder(newOrder:string):Euler{
        let q=new Quaternion();
        q.setFromEuler(this);
        return this.setFromQuaternion(q,newOrder);
    }

    // reorder: (newOrder: string) => Euler = (() => {
    //     let q = new Quaternion();
    //     return (newOrder:string)=>{
    //         q.setFromEuler(this);
    //         return this.setFromQuaternion(q, newOrder);
    //     }
    // })();

    equals(euler: Euler): boolean{
        return ( euler.x === this.x ) && ( euler.y === this.y ) && ( euler.z === this.z ) && ( euler.order === this.order );
    }

    fromArray(array: Array<any>): Euler{
        this.x = array[ 0 ];
        this.y = array[ 1 ];
        this.z = array[ 2 ];
        if ( array[ 3 ] ){
            this.order = array[ 3 ];
        }
        this.onChangeCallback();
        return this;
    }

    toArray(array: Array<any>=new Array<any>(), offset: number=0): Array<any>{

        array[ offset ] = this.x;
        array[ offset + 1 ] = this.y;
        array[ offset + 2 ] = this.z;
        array[ offset + 3 ] = this.order;

        return array;
    }

    toVector3(optionalResult?: Vector3): Vector3{
        throw new Error("not implemented");
    }

    onChange(callback: ()=>void): this{
        this.onChangeCallback = callback;
        return this;
    }

}