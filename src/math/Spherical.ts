import {MathUtils} from "./MathUtils";
import {Vector3} from "./Vector3";

export class Spherical {
    constructor(public radius: number=1.0,public phi: number=0,public theta: number=0 ){

    }

    set( radius: number, phi: number, theta: number ): Spherical{
        this.radius = radius;
        this.phi = phi;
        this.theta = theta;

        return this;
    }

    clone(): Spherical{
        return new Spherical().copy( this );
    }

    copy( other: Spherical ): Spherical{
        this.radius = other.radius;
        this.phi = other.phi;
        this.theta = other.theta;

        return this;
    }

    makeSafe(): Spherical{
        let EPS = 0.000001;
        this.phi=MathUtils.clamp(this.phi,EPS,Math.PI-EPS);

        return this;
    }

    setFromVector3( v: Vector3 ): Spherical{
        return this.setFromCartesianCoords( v.x, v.y, v.z );
    }

    private setFromCartesianCoords(x: number, y: number, z: number):Spherical {
        this.radius = Math.sqrt( x * x + y * y + z * z );

        if ( this.radius === 0 ) {

            this.theta = 0;
            this.phi = 0;

        } else {

            this.theta = Math.atan2( x, z );
            this.phi = Math.acos( MathUtils.clamp( y / this.radius, - 1, 1 ) );

        }

        return this;
    }
}