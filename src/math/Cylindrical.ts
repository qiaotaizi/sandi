import {Vector3} from "./Vector3";

export class Cylindrical {

    constructor(public radius: number = 1.0, public theta: number = 0, public y: number = 0) {

    }

    clone(): Cylindrical {
        return new Cylindrical().copy( this );
    }

    copy(other: Cylindrical): Cylindrical{
        this.radius = other.radius;
        this.theta = other.theta;
        this.y = other.y;

        return this;
    }

    set(radius: number, theta: number, y: number): Cylindrical{
        this.radius = radius;
        this.theta = theta;
        this.y = y;

        return this;
    }

    setFromVector3(v: Vector3): Cylindrical{
        return this.setFromCartesianCoords( v.x, v.y, v.z );
    }

    setFromCartesianCoords(x: number, y: number, z: number): Cylindrical{
        this.radius = Math.sqrt( x * x + z * z );
        this.theta = Math.atan2( x, z );
        this.y = y;

        return this;
    }
}