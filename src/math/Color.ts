import {MathUtils} from "./MathUtils";

export interface HSL {
    h: number;
    s: number;
    l: number;
}

export interface RGB {
    r: number;
    g: number;
    b: number;
}

/**
 * 色彩名枚举
 */
export class Colors {
    static aliceblue = 0xF0F8FF;
    static antiquewhite = 0xFAEBD7;
    static aqua = 0x00FFFF;
    static aquamarine = 0x7FFFD4;
    static azure = 0xF0FFFF;
    static beige = 0xF5F5DC;
    static bisque = 0xFFE4C4;
    static black = 0x000000;
    static blanchedalmond = 0xFFEBCD;
    static blue = 0x0000FF;
    static blueviolet = 0x8A2BE2;
    static brown = 0xA52A2A;
    static burlywood = 0xDEB887;
    static cadetblue = 0x5F9EA0;
    static chartreuse = 0x7FFF00;
    static chocolate = 0xD2691E;
    static coral = 0xFF7F50;
    static cornflowerblue = 0x6495ED;
    static cornsilk = 0xFFF8DC;
    static crimson = 0xDC143C;
    static cyan = 0x00FFFF;
    static darkblue = 0x00008B;
    static darkcyan = 0x008B8B;
    static darkgoldenrod = 0xB8860B;
    static darkgray = 0xA9A9A9;
    static darkgreen = 0x006400;
    static darkgrey = 0xA9A9A9;
    static darkkhaki = 0xBDB76B;
    static darkmagenta = 0x8B008B;
    static darkolivegreen = 0x556B2F;
    static darkorange = 0xFF8C00;
    static darkorchid = 0x9932CC;
    static darkred = 0x8B0000;
    static darksalmon = 0xE9967A;
    static darkseagreen = 0x8FBC8F;
    static darkslateblue = 0x483D8B;
    static darkslategray = 0x2F4F4F;
    static darkslategrey = 0x2F4F4F;
    static darkturquoise = 0x00CED1;
    static darkviolet = 0x9400D3;
    static deeppink = 0xFF1493;
    static deepskyblue = 0x00BFFF;
    static dimgray = 0x696969;
    static dimgrey = 0x696969;
    static dodgerblue = 0x1E90FF;
    static firebrick = 0xB22222;
    static floralwhite = 0xFFFAF0;
    static forestgreen = 0x228B22;
    static fuchsia = 0xFF00FF;
    static gainsboro = 0xDCDCDC;
    static ghostwhite = 0xF8F8FF;
    static gold = 0xFFD700;
    static goldenrod = 0xDAA520;
    static gray = 0x808080;
    static green = 0x008000;
    static greenyellow = 0xADFF2F;
    static grey = 0x808080;
    static honeydew = 0xF0FFF0;
    static hotpink = 0xFF69B4;
    static indianred = 0xCD5C5C;
    static indigo = 0x4B0082;
    static ivory = 0xFFFFF0;
    static khaki = 0xF0E68C;
    static lavender = 0xE6E6FA;
    static lavenderblush = 0xFFF0F5;
    static lawngreen = 0x7CFC00;
    static lemonchiffon = 0xFFFACD;
    static lightblue = 0xADD8E6;
    static lightcoral = 0xF08080;
    static lightcyan = 0xE0FFFF;
    static lightgoldenrodyellow = 0xFAFAD2;
    static lightgray = 0xD3D3D3;
    static lightgreen = 0x90EE90;
    static lightgrey = 0xD3D3D3;
    static lightpink = 0xFFB6C1;
    static lightsalmon = 0xFFA07A;
    static lightseagreen = 0x20B2AA;
    static lightskyblue = 0x87CEFA;
    static lightslategray = 0x778899;
    static lightslategrey = 0x778899;
    static lightsteelblue = 0xB0C4DE;
    static lightyellow = 0xFFFFE0;
    static lime = 0x00FF00;
    static limegreen = 0x32CD32;
    static linen = 0xFAF0E6;
    static magenta = 0xFF00FF;
    static maroon = 0x800000;
    static mediumaquamarine = 0x66CDAA;
    static mediumblue = 0x0000CD;
    static mediumorchid = 0xBA55D3;
    static mediumpurple = 0x9370DB;
    static mediumseagreen = 0x3CB371;
    static mediumslateblue = 0x7B68EE;
    static mediumspringgreen = 0x00FA9A;
    static mediumturquoise = 0x48D1CC;
    static mediumvioletred = 0xC71585;
    static midnightblue = 0x191970;
    static mintcream = 0xF5FFFA;
    static mistyrose = 0xFFE4E1;
    static moccasin = 0xFFE4B5;
    static navajowhite = 0xFFDEAD;
    static navy = 0x000080;
    static oldlace = 0xFDF5E6;
    static olive = 0x808000;
    static olivedrab = 0x6B8E23;
    static orange = 0xFFA500;
    static orangered = 0xFF4500;
    static orchid = 0xDA70D6;
    static palegoldenrod = 0xEEE8AA;
    static palegreen = 0x98FB98;
    static paleturquoise = 0xAFEEEE;
    static palevioletred = 0xDB7093;
    static papayawhip = 0xFFEFD5;
    static peachpuff = 0xFFDAB9;
    static peru = 0xCD853F;
    static pink = 0xFFC0CB;
    static plum = 0xDDA0DD;
    static powderblue = 0xB0E0E6;
    static purple = 0x800080;
    static rebeccapurple = 0x663399;
    static red = 0xFF0000;
    static rosybrown = 0xBC8F8F;
    static royalblue = 0x4169E1;
    static saddlebrown = 0x8B4513;
    static salmon = 0xFA8072;
    static sandybrown = 0xF4A460;
    static seagreen = 0x2E8B57;
    static seashell = 0xFFF5EE;
    static sienna = 0xA0522D;
    static silver = 0xC0C0C0;
    static skyblue = 0x87CEEB;
    static slateblue = 0x6A5ACD;
    static slategray = 0x708090;
    static slategrey = 0x708090;
    static snow = 0xFFFAFA;
    static springgreen = 0x00FF7F;
    static steelblue = 0x4682B4;
    static tan = 0xD2B48C;
    static teal = 0x008080;
    static thistle = 0xD8BFD8;
    static tomato = 0xFF6347;
    static turquoise = 0x40E0D0;
    static violet = 0xEE82EE;
    static wheat = 0xF5DEB3;
    static white = 0xFFFFFF;
    static whitesmoke = 0xF5F5F5;
    static yellow = 0xFFFF00;
    static yellowgreen = 0x9ACD32;
}


export class Color implements RGB {

    r: number = 1;
    g: number = 1;
    b: number = 1;

    /**
     * 构造一个Color时
     * 若参数为空,返回白色(r,g,b默认为1)
     * 三个参数均有,按r,g,b理解,r,g,b均为介于[0,1]的数值
     * 若仅传递一个参数,按照参数类型区分初始化方法:
     * 1.为数值,理解为6位16进制整数,介于[0x000000,0xffffff]
     * 2.为Color对象,拷贝之
     * @param r
     * @param g
     * @param b
     */
    constructor(r?: number | Color, g?: number, b?: number) {

        if (r === undefined && g === undefined && b === undefined) {
            //空参数构造
            this.setRGB(1, 1, 1);
            return;
        }

        if (r !== undefined && g === undefined && b === undefined) {
            //单参数构造
            this.set(r);
            return;
        }

        //全参数构造
        //rgb的默认值均为1
        //默认的颜色为白色
        let rgb = this.rgbFromRgb(<number>r, g, b);
        this.setRGB2(rgb);

    }

    /**
     * 抽取构造函数可能传空参数的初始化问题
     * @param r
     * @param g
     * @param b
     */
    private rgbFromRgb(r?: number, g?: number, b?: number): RGB {
        return {
            r: r === undefined ? 1 : r,
            g: g === undefined ? 1 : g,
            b: b === undefined ? 1 : b
        }
    }

    private rgbFromColor(color: Color) {
        return this.rgbFromRgb(<number>color.r, color.g, color.b);
    }


    set(color: number | Color): Color {

        if (color instanceof Color) {
            this.copy(color);
        } else {
            this.setHex(color);
        }

        return this;
    }

    setScalar(scalar: number): Color {
        this.r = scalar;
        this.g = scalar;
        this.b = scalar;

        return this;

    }

    setHex(hex: number): Color {
        hex = Math.floor(hex);

        this.r = (hex >> 16 & 255) / 255;
        this.g = (hex >> 8 & 255) / 255;
        this.b = (hex & 255) / 255;
        return this;
    }

    /**
     * Sets this color from RGB values.
     * @param r Red channel value between 0 and 1.
     * @param g Green channel value between 0 and 1.
     * @param b Blue channel value between 0 and 1.
     */
    setRGB(r: number, g: number, b: number): Color {
        this.r = r;
        this.g = g;
        this.b = b;

        return this;
    }

    /**
     * setRGB方法的重写
     * @param rgb
     */
    setRGB2(rgb: RGB): Color {
        return this.setRGB(rgb.r, rgb.g, rgb.b);
    }

    /**
     * Sets this color from HSL values.
     * Based on MochiKit implementation by Bob Ippolito.
     *
     * @param h Hue channel value between 0 and 1.
     * @param s Saturation value channel between 0 and 1.
     * @param l Value channel value between 0 and 1.
     */
    setHSL(h: number, s: number, l: number): Color {

        // h,s,l ranges are in 0.0 - 1.0
        h = MathUtils.euclideanModulo(h, 1);
        s = MathUtils.clamp(s, 0, 1);
        l = MathUtils.clamp(l, 0, 1);

        if (s === 0) {

            this.r = this.g = this.b = l;

        } else {

            let p = l <= 0.5 ? l * (1 + s) : l + s - (l * s);
            let q = (2 * l) - p;

            this.r = this.hue2rgb(q, p, h + 1 / 3);
            this.g = this.hue2rgb(q, p, h);
            this.b = this.hue2rgb(q, p, h - 1 / 3);

        }

        return this;
    }

    private hue2rgb(p: number, q: number, t: number) {

        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * 6 * (2 / 3 - t);
        return p;

    }

    /**
     * 太麻烦,而且最关键的rgba用不到,舍弃
     * Sets this color from a CSS context style string.
     * @param contextStyle Color in CSS context style format.
     */

    //setStyle(style: string): Color;

    /**
     * Clones this color.
     */
    clone(): Color {
        return new Color(this.r, this.g, this.b);
    }

    /**
     * Copies given color.
     * @param color Color to copy.
     */
    copy(color: Color): this {
        this.r = color.r;
        this.g = color.g;
        this.b = color.b;

        return this;
    }

    /**
     * Copies given color making conversion from gamma to linear space.
     * @param color Color to copy.
     */
    copyGammaToLinear(color: Color, gammaFactor: number = 2.0): Color {
        let rgb = this.rgbFromColor(color);
        this.r = Math.pow(rgb.r, gammaFactor);
        this.g = Math.pow(rgb.g, gammaFactor);
        this.b = Math.pow(rgb.b, gammaFactor);

        return this;
    }

    /**
     * Copies given color making conversion from linear to gamma space.
     * @param color Color to copy.
     */
    copyLinearToGamma(color: Color, gammaFactor: number = 2.0): Color {
        let safeInverse = (gammaFactor > 0) ? (1.0 / gammaFactor) : 1.0;
        let rgb = this.rgbFromColor(color);
        this.r = Math.pow(rgb.r, safeInverse);
        this.g = Math.pow(rgb.g, safeInverse);
        this.b = Math.pow(rgb.b, safeInverse);

        return this;
    }

    /**
     * Converts this color from gamma to linear space.
     */
    convertGammaToLinear(gammaFactor: number): Color {
        this.copyGammaToLinear(this, gammaFactor);

        return this;
    }

    /**
     * Converts this color from linear to gamma space.
     */
    convertLinearToGamma(gammaFactor: number): Color {
        this.copyLinearToGamma(this, gammaFactor);
        return this;
    }

    /**
     * Copies given color making conversion from sRGB to linear space.
     * @param color Color to copy.
     */
    copySRGBToLinear(color: Color): Color {


        this.r = this.SRGBToLinear(color.r);
        this.g = this.SRGBToLinear(color.g);
        this.b = this.SRGBToLinear(color.b);

        return this;
    }

    private SRGBToLinear(c: number) {

        return (c < 0.04045) ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);

    }

    /**
     * Copies given color making conversion from linear to sRGB space.
     * @param color Color to copy.
     */
    copyLinearToSRGB(color: Color): Color {
        this.r = this.LinearToSRGB(color.r);
        this.g = this.LinearToSRGB(color.g);
        this.b = this.LinearToSRGB(color.b);

        return this;
    }

    private LinearToSRGB(c: number) {

        return (c < 0.0031308) ? c * 12.92 : 1.055 * (Math.pow(c, 0.41666)) - 0.055;

    }

    /**
     * Converts this color from sRGB to linear space.
     */
    convertSRGBToLinear(): Color {
        this.copySRGBToLinear(this);

        return this;
    }

    /**
     * Converts this color from linear to sRGB space.
     */
    convertLinearToSRGB(): Color {
        this.copyLinearToSRGB(this);

        return this;
    }

    /**
     * Returns the hexadecimal value of this color.
     */
    getHex(): number {
        return (this.r * 255) << 16 ^ (this.g * 255) << 8 ^ (this.b * 255) << 0;
    }

    /**
     * Returns the string formated hexadecimal value of this color.
     */
    getHexString(): string {
        return ('000000' + this.getHex().toString(16)).slice(-6);
    }

    getHSL(): HSL {
        // h,s,l ranges are in 0.0 - 1.0

        // if ( target === undefined ) {
        //
        //     console.warn( 'THREE.Color: .getHSL() target is now required' );
        //     target = { h: 0, s: 0, l: 0 };
        //
        // }

        let r = this.r, g = this.g, b = this.b;

        let max = Math.max(r, g, b);
        let min = Math.min(r, g, b);

        let hue = 0, saturation;
        let lightness = (min + max) / 2.0;

        if (min === max) {

            hue = 0;
            saturation = 0;

        } else {

            let delta = max - min;

            saturation = lightness <= 0.5 ? delta / (max + min) : delta / (2 - max - min);

            switch (max) {

                case r:
                    hue = (g - b) / delta + (g < b ? 6 : 0);
                    break;
                case g:
                    hue = (b - r) / delta + 2;
                    break;
                case b:
                    hue = (r - g) / delta + 4;
                    break;

            }

            hue /= 6;

        }

        let target = {h: hue, s: saturation, l: lightness};

        return target;
    }

    /**
     * Returns the value of this color in CSS context style.
     * Example: rgb(r, g, b)
     */
    getStyle(): string {
        return 'rgb(' + ((this.r * 255) | 0) + ',' + ((this.g * 255) | 0) + ',' + ((this.b * 255) | 0) + ')';
    }

    offsetHSL(h: number, s: number, l: number): this {

        let hsl = this.getHSL();

        hsl.h += h;
        hsl.s += s;
        hsl.l += l;

        this.setHSL(hsl.h, hsl.s, hsl.l);

        return this;
    }

    add(color: Color): Color {
        this.r += color.r;
        this.g += color.g;
        this.b += color.b;

        return this;
    }

    addColors(color1: Color, color2: Color): Color {
        this.r = color1.r + color2.r;
        this.g = color1.g + color2.g;
        this.b = color1.b + color2.b;

        return this;
    }

    addScalar(s: number): Color {
        this.r += s;
        this.g += s;
        this.b += s;

        return this;
    }

    sub(color: Color): Color {
        this.r = Math.max(0, this.r - color.r);
        this.g = Math.max(0, this.g - color.g);
        this.b = Math.max(0, this.b - color.b);

        return this;
    }

    multiply(color: Color): Color {
        this.r *= color.r;
        this.g *= color.g;
        this.b *= color.b;

        return this;
    }

    multiplyScalar(s: number): Color {
        this.r *= s;
        this.g *= s;
        this.b *= s;

        return this;
    }

    lerp(color: Color, alpha: number): Color {
        this.r += (color.r - this.r) * alpha;
        this.g += (color.g - this.g) * alpha;
        this.b += (color.b - this.b) * alpha;

        return this;
    }

    lerpHSL(color: Color, alpha: number): Color {
        let hslA = this.getHSL();
        let hslB = color.getHSL();

        let h = MathUtils.lerp(hslA.h, hslB.h, alpha);
        let s = MathUtils.lerp(hslA.s, hslB.s, alpha);
        let l = MathUtils.lerp(hslA.l, hslB.l, alpha);

        this.setHSL(h, s, l);

        return this;
    }

    equals(c: Color): boolean {
        return (c.r === this.r) && (c.g === this.g) && (c.b === this.b);
    }

    fromArray(array: Array<number>, offset: number = 0): Color {
        this.r = array[offset];
        this.g = array[offset + 1];
        this.b = array[offset + 2];

        return this;
    }

    toArray(array: Array<number>, offset: number = 0): Array<number> {
        array[offset] = this.r;
        array[offset + 1] = this.g;
        array[offset + 2] = this.b;

        return array;
    }

}
