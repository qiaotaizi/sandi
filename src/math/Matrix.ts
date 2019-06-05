export interface Matrix {
    /**
     * Array with matrix values.
     */
    elements: Array<number>;

    /**
     * identity():T;
     */
    identity(): Matrix;

    /**
     * copy(m:T):T;
     */
    copy( m: Matrix ): Matrix;

    /**
     * multiplyScalar(s:number):T;
     */
    multiplyScalar( s: number ): Matrix;

    determinant(): number;

    /**
     * getInverse(matrix:T, throwOnInvertible?:boolean):T;
     */
    getInverse( matrix: Matrix, throwOnInvertible?: boolean ): Matrix;

    /**
     * transpose():T;
     */
    transpose(): Matrix;

    /**
     * clone():T;
     */
    clone(): Matrix;
}