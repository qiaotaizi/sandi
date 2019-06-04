/**
 * 四元数
 */
import {Euler} from "./Euler";
import {Vector3} from "./Vector3";
import {Matrix4} from "./Matrix4";
import {MathUtils} from "./MathUtils";

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

    /**
     * 设置四元属性的值
     * @param x
     * @param y
     * @param z
     * @param w
     */
    set(x: number, y: number, z: number, w: number):Quaternion{
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
        this.onChangeCallback();
        return this;
    }

    /**
     * 根据当前四元数复制一个新的四元数
     */
    clone():Quaternion{
        return new Quaternion(this.x,this.y,this.z,this.x);
    }

    /**
     * 将四元数q的属性复制到当前四元数对象
     * @param q
     */
    copy(q:Quaternion):Quaternion{
        this.x=q.x;
        this.y=q.y;
        this.z=q.z;
        this.w=q.w;
        this.onChangeCallback();
        return this;
    }

    /**
     * 根据欧拉角对象设置自身属性
     * @param euler
     * @param update
     */
    setFromEuler(euler: Euler, update?: boolean ): Quaternion{
        let x = euler.x, y = euler.y, z = euler.z, order = euler.order;

        // http://www.mathworks.com/matlabcentral/fileexchange/
        // 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
        //	content/SpinCalc.m

        let cos = Math.cos;
        let sin = Math.sin;

        let c1 = cos( x / 2 );
        let c2 = cos( y / 2 );
        let c3 = cos( z / 2 );

        let s1 = sin( x / 2 );
        let s2 = sin( y / 2 );
        let s3 = sin( z / 2 );

        if ( order === 'XYZ' ) {

            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;

        } else if ( order === 'YXZ' ) {

            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 - s1 * s2 * c3;
            this.w = c1 * c2 * c3 + s1 * s2 * s3;

        } else if ( order === 'ZXY' ) {

            this.x = s1 * c2 * c3 - c1 * s2 * s3;
            this.y = c1 * s2 * c3 + s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;

        } else if ( order === 'ZYX' ) {

            this.x = s1 * c2 * c3 - c1 * s2 * s3;
            this.y = c1 * s2 * c3 + s1 * c2 * s3;
            this.z = c1 * c2 * s3 - s1 * s2 * c3;
            this.w = c1 * c2 * c3 + s1 * s2 * s3;

        } else if ( order === 'YZX' ) {

            this.x = s1 * c2 * c3 + c1 * s2 * s3;
            this.y = c1 * s2 * c3 + s1 * c2 * s3;
            this.z = c1 * c2 * s3 - s1 * s2 * c3;
            this.w = c1 * c2 * c3 - s1 * s2 * s3;

        } else if ( order === 'XZY' ) {

            this.x = s1 * c2 * c3 - c1 * s2 * s3;
            this.y = c1 * s2 * c3 - s1 * c2 * s3;
            this.z = c1 * c2 * s3 + s1 * s2 * c3;
            this.w = c1 * c2 * c3 + s1 * s2 * s3;

        }

        if ( update ) this.onChangeCallback();

        return this;
    }

    setFromAxisAngle( axis: Vector3, angle: number ): Quaternion{
        throw new Error("not implemented");
    }

    /**
     * Sets this quaternion from rotation component of m. Adapted from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm.
     */
    setFromRotationMatrix( m: Matrix4 ): Quaternion{
        throw new Error("not implemented");
    }

    setFromUnitVectors( vFrom: Vector3, vTo: Vector3 ): Quaternion{
        throw new Error("not implemented");
    }

    angleTo( q: Quaternion ): number{
        return 2 * Math.acos( Math.abs( MathUtils.clamp( this.dot( q ), - 1, 1 ) ) );
    }

    rotateTowards( q: Quaternion, step: number ): Quaternion{
        let angle = this.angleTo( q );

        if ( angle === 0 ){
            return this;
        }

        let t = Math.min( 1, step / angle );

        this.slerp( q, t );

        return this;
    }

    /**
     * Inverts this quaternion.
     */
    inverse(): Quaternion{
        // quaternion is assumed to have unit length
        return this.conjugate();
    }

    /**
     * 反转
     */
    conjugate(): Quaternion{
        this.x *= - 1;
        this.y *= - 1;
        this.z *= - 1;

        this.onChangeCallback();

        return this;
    }

    /**
     * 四元数点乘
     * @param v
     */
    dot( v: Quaternion ): number{
        return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
    }

    lengthSq(): number{
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
    }

    /**
     * Computes length of this quaternion.
     */
    length(): number{
        //return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );
        return Math.sqrt( this.lengthSq() );
    }

    /**
     * Normalizes this quaternion.
     * 归一化
     */
    normalize(): Quaternion{
        let l = this.length();

        if ( l === 0 ) {

            this.x = 0;
            this.y = 0;
            this.z = 0;
            this.w = 1;

        } else {

            l = 1 / l;

            this.x = this.x * l;
            this.y = this.y * l;
            this.z = this.z * l;
            this.w = this.w * l;

        }

        this.onChangeCallback();

        return this;
    }

    /**
     * Multiplies this quaternion by b.
     * 四元数叉乘
     */
    multiply( q: Quaternion ): Quaternion{
        return this.multiplyQuaternions( this, q );
    }

    /**
     * 四元数左乘
     * @param q
     */
    premultiply( q: Quaternion ): Quaternion{
        return this.multiplyQuaternions( q, this );
    }

    /**
     * Sets this quaternion to a x b
     * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm.
     * 将当前四元数的属性设置为a,b两个四元数叉乘的结果
     */
    multiplyQuaternions( a: Quaternion, b: Quaternion ): Quaternion{
        // from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

        let qax = a.x, qay = a.y, qaz = a.z, qaw = a.w;
        let qbx = b.x, qby = b.y, qbz = b.z, qbw = b.w;

        this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
        this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
        this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
        this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

        this.onChangeCallback();

        return this;
    }

    /**
     * 四元数平滑插值
     * @param qb
     * @param t
     */
    slerp( qb: Quaternion, t: number ): Quaternion{
        if ( t === 0 ) return this;
        if ( t === 1 ) return this.copy( qb );

        let x = this.x, y = this.y, z = this.z, w = this.w;

        // http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

        let cosHalfTheta = w * qb.w + x * qb.x + y * qb.y + z * qb.z;

        if ( cosHalfTheta < 0 ) {

            this.w = - qb.w;
            this.x = - qb.x;
            this.y = - qb.y;
            this.z = - qb.z;

            cosHalfTheta = - cosHalfTheta;

        } else {

            this.copy( qb );

        }

        if ( cosHalfTheta >= 1.0 ) {

            this.w = w;
            this.x = x;
            this.y = y;
            this.z = z;

            return this;

        }

        let sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

        /**
         * Number.EPSILON:极小值
         */
        if ( sqrSinHalfTheta <= Number.EPSILON ) {

            let s = 1 - t;
            this.w = s * w + t * this.w;
            this.x = s * x + t * this.x;
            this.y = s * y + t * this.y;
            this.z = s * z + t * this.z;

            return this.normalize();

        }

        let sinHalfTheta = Math.sqrt( sqrSinHalfTheta );
        let halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
        let ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
            ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

        this.w = ( w * ratioA + this.w * ratioB );
        this.x = ( x * ratioA + this.x * ratioB );
        this.y = ( y * ratioA + this.y * ratioB );
        this.z = ( z * ratioA + this.z * ratioB );

        this.onChangeCallback();

        return this;
    }

    equals( quaternion: Quaternion ): boolean{
        return ( quaternion.x === this.x ) && 
            ( quaternion.y === this.y ) && 
            ( quaternion.z === this.z ) && 
            ( quaternion.w === this.w );
    }

    fromArray( array: Array<number>, offset: number=0 ): Quaternion{
        this.x = array[ offset ];
        this.y = array[ offset + 1 ];
        this.z = array[ offset + 2 ];
        this.w = array[ offset + 3 ];
        this.onChangeCallback();
        return this;
    }

    toArray( array: Array<number>=new Array<number>(), offset: number=0 ): Array<number>{
        array[ offset ] = this.x;
        array[ offset + 1 ] = this.y;
        array[ offset + 2 ] = this.z;
        array[ offset + 3 ] = this.w;
        return array;
    }

    /**
     * 设置四元数变化回调函数的值
     * @param callback
     */
    onChange( callback: ()=>void ): Quaternion{
        this.onChangeCallback = callback;
        return this;
    }

    /**
     * 四元数属性发生变化时调用该回调方法
     */
    onChangeCallback(){}

    /**
     * Adapted from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/.
     */
    static slerp(
        qa: Quaternion,
        qb: Quaternion,
        qm: Quaternion,
        t: number
    ): Quaternion{
        return qm.copy( qa ).slerp( qb, t );
    }

    static slerpFlat(
        dst: number[],
        dstOffset: number,
        src0: number[],
        srcOffset0: number,
        src1: number[],
        srcOffset1: number,
        t: number
    ): Quaternion{
        // fuzz-free, array-based Quaternion SLERP operation

        let x0 = src0[ srcOffset0 + 0 ],
            y0 = src0[ srcOffset0 + 1 ],
            z0 = src0[ srcOffset0 + 2 ],
            w0 = src0[ srcOffset0 + 3 ],

            x1 = src1[ srcOffset1 + 0 ],
            y1 = src1[ srcOffset1 + 1 ],
            z1 = src1[ srcOffset1 + 2 ],
            w1 = src1[ srcOffset1 + 3 ];

        if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

            let s = 1 - t,

                cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,

                dir = ( cos >= 0 ? 1 : - 1 ),
                sqrSin = 1 - cos * cos;

            // Skip the Slerp for tiny steps to avoid numeric problems:
            if ( sqrSin > Number.EPSILON ) {

                let sin = Math.sqrt( sqrSin ),
                    len = Math.atan2( sin, cos * dir );

                s = Math.sin( s * len ) / sin;
                t = Math.sin( t * len ) / sin;

            }

            let tDir = t * dir;

            x0 = x0 * s + x1 * tDir;
            y0 = y0 * s + y1 * tDir;
            z0 = z0 * s + z1 * tDir;
            w0 = w0 * s + w1 * tDir;

            // Normalize in case we just did a lerp:
            if ( s === 1 - t ) {

                let f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

                x0 *= f;
                y0 *= f;
                z0 *= f;
                w0 *= f;

            }

        }

        dst[ dstOffset ] = x0;
        dst[ dstOffset + 1 ] = y0;
        dst[ dstOffset + 2 ] = z0;
        dst[ dstOffset + 3 ] = w0;

        return new Quaternion().fromArray(dst);
    }

    /**
     * @deprecated Use {@link Vector#applyQuaternion vector.applyQuaternion( quaternion )} instead.
     * multiplyVector3方法已被vector.applyQuaternion( quaternion )取代
     */
    //multiplyVector3( v: any ): any;
}
