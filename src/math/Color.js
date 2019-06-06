"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MathUtils_1 = require("./MathUtils");
/**
 * 色彩名枚举
 */
class Colors {
}
Colors.aliceblue = 0xF0F8FF;
Colors.antiquewhite = 0xFAEBD7;
Colors.aqua = 0x00FFFF;
Colors.aquamarine = 0x7FFFD4;
Colors.azure = 0xF0FFFF;
Colors.beige = 0xF5F5DC;
Colors.bisque = 0xFFE4C4;
Colors.black = 0x000000;
Colors.blanchedalmond = 0xFFEBCD;
Colors.blue = 0x0000FF;
Colors.blueviolet = 0x8A2BE2;
Colors.brown = 0xA52A2A;
Colors.burlywood = 0xDEB887;
Colors.cadetblue = 0x5F9EA0;
Colors.chartreuse = 0x7FFF00;
Colors.chocolate = 0xD2691E;
Colors.coral = 0xFF7F50;
Colors.cornflowerblue = 0x6495ED;
Colors.cornsilk = 0xFFF8DC;
Colors.crimson = 0xDC143C;
Colors.cyan = 0x00FFFF;
Colors.darkblue = 0x00008B;
Colors.darkcyan = 0x008B8B;
Colors.darkgoldenrod = 0xB8860B;
Colors.darkgray = 0xA9A9A9;
Colors.darkgreen = 0x006400;
Colors.darkgrey = 0xA9A9A9;
Colors.darkkhaki = 0xBDB76B;
Colors.darkmagenta = 0x8B008B;
Colors.darkolivegreen = 0x556B2F;
Colors.darkorange = 0xFF8C00;
Colors.darkorchid = 0x9932CC;
Colors.darkred = 0x8B0000;
Colors.darksalmon = 0xE9967A;
Colors.darkseagreen = 0x8FBC8F;
Colors.darkslateblue = 0x483D8B;
Colors.darkslategray = 0x2F4F4F;
Colors.darkslategrey = 0x2F4F4F;
Colors.darkturquoise = 0x00CED1;
Colors.darkviolet = 0x9400D3;
Colors.deeppink = 0xFF1493;
Colors.deepskyblue = 0x00BFFF;
Colors.dimgray = 0x696969;
Colors.dimgrey = 0x696969;
Colors.dodgerblue = 0x1E90FF;
Colors.firebrick = 0xB22222;
Colors.floralwhite = 0xFFFAF0;
Colors.forestgreen = 0x228B22;
Colors.fuchsia = 0xFF00FF;
Colors.gainsboro = 0xDCDCDC;
Colors.ghostwhite = 0xF8F8FF;
Colors.gold = 0xFFD700;
Colors.goldenrod = 0xDAA520;
Colors.gray = 0x808080;
Colors.green = 0x008000;
Colors.greenyellow = 0xADFF2F;
Colors.grey = 0x808080;
Colors.honeydew = 0xF0FFF0;
Colors.hotpink = 0xFF69B4;
Colors.indianred = 0xCD5C5C;
Colors.indigo = 0x4B0082;
Colors.ivory = 0xFFFFF0;
Colors.khaki = 0xF0E68C;
Colors.lavender = 0xE6E6FA;
Colors.lavenderblush = 0xFFF0F5;
Colors.lawngreen = 0x7CFC00;
Colors.lemonchiffon = 0xFFFACD;
Colors.lightblue = 0xADD8E6;
Colors.lightcoral = 0xF08080;
Colors.lightcyan = 0xE0FFFF;
Colors.lightgoldenrodyellow = 0xFAFAD2;
Colors.lightgray = 0xD3D3D3;
Colors.lightgreen = 0x90EE90;
Colors.lightgrey = 0xD3D3D3;
Colors.lightpink = 0xFFB6C1;
Colors.lightsalmon = 0xFFA07A;
Colors.lightseagreen = 0x20B2AA;
Colors.lightskyblue = 0x87CEFA;
Colors.lightslategray = 0x778899;
Colors.lightslategrey = 0x778899;
Colors.lightsteelblue = 0xB0C4DE;
Colors.lightyellow = 0xFFFFE0;
Colors.lime = 0x00FF00;
Colors.limegreen = 0x32CD32;
Colors.linen = 0xFAF0E6;
Colors.magenta = 0xFF00FF;
Colors.maroon = 0x800000;
Colors.mediumaquamarine = 0x66CDAA;
Colors.mediumblue = 0x0000CD;
Colors.mediumorchid = 0xBA55D3;
Colors.mediumpurple = 0x9370DB;
Colors.mediumseagreen = 0x3CB371;
Colors.mediumslateblue = 0x7B68EE;
Colors.mediumspringgreen = 0x00FA9A;
Colors.mediumturquoise = 0x48D1CC;
Colors.mediumvioletred = 0xC71585;
Colors.midnightblue = 0x191970;
Colors.mintcream = 0xF5FFFA;
Colors.mistyrose = 0xFFE4E1;
Colors.moccasin = 0xFFE4B5;
Colors.navajowhite = 0xFFDEAD;
Colors.navy = 0x000080;
Colors.oldlace = 0xFDF5E6;
Colors.olive = 0x808000;
Colors.olivedrab = 0x6B8E23;
Colors.orange = 0xFFA500;
Colors.orangered = 0xFF4500;
Colors.orchid = 0xDA70D6;
Colors.palegoldenrod = 0xEEE8AA;
Colors.palegreen = 0x98FB98;
Colors.paleturquoise = 0xAFEEEE;
Colors.palevioletred = 0xDB7093;
Colors.papayawhip = 0xFFEFD5;
Colors.peachpuff = 0xFFDAB9;
Colors.peru = 0xCD853F;
Colors.pink = 0xFFC0CB;
Colors.plum = 0xDDA0DD;
Colors.powderblue = 0xB0E0E6;
Colors.purple = 0x800080;
Colors.rebeccapurple = 0x663399;
Colors.red = 0xFF0000;
Colors.rosybrown = 0xBC8F8F;
Colors.royalblue = 0x4169E1;
Colors.saddlebrown = 0x8B4513;
Colors.salmon = 0xFA8072;
Colors.sandybrown = 0xF4A460;
Colors.seagreen = 0x2E8B57;
Colors.seashell = 0xFFF5EE;
Colors.sienna = 0xA0522D;
Colors.silver = 0xC0C0C0;
Colors.skyblue = 0x87CEEB;
Colors.slateblue = 0x6A5ACD;
Colors.slategray = 0x708090;
Colors.slategrey = 0x708090;
Colors.snow = 0xFFFAFA;
Colors.springgreen = 0x00FF7F;
Colors.steelblue = 0x4682B4;
Colors.tan = 0xD2B48C;
Colors.teal = 0x008080;
Colors.thistle = 0xD8BFD8;
Colors.tomato = 0xFF6347;
Colors.turquoise = 0x40E0D0;
Colors.violet = 0xEE82EE;
Colors.wheat = 0xF5DEB3;
Colors.white = 0xFFFFFF;
Colors.whitesmoke = 0xF5F5F5;
Colors.yellow = 0xFFFF00;
Colors.yellowgreen = 0x9ACD32;
exports.Colors = Colors;
class Color {
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
    constructor(r, g, b) {
        this.r = 1;
        this.g = 1;
        this.b = 1;
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
        let rgb = this.rgbFromRgb(r, g, b);
        this.setRGB2(rgb);
    }
    /**
     * 抽取构造函数可能传空参数的初始化问题
     * @param r
     * @param g
     * @param b
     */
    rgbFromRgb(r, g, b) {
        return {
            r: r === undefined ? 1 : r,
            g: g === undefined ? 1 : g,
            b: b === undefined ? 1 : b
        };
    }
    rgbFromColor(color) {
        return this.rgbFromRgb(color.r, color.g, color.b);
    }
    set(color) {
        if (color instanceof Color) {
            this.copy(color);
        }
        else {
            this.setHex(color);
        }
        return this;
    }
    setScalar(scalar) {
        this.r = scalar;
        this.g = scalar;
        this.b = scalar;
        return this;
    }
    setHex(hex) {
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
    setRGB(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        return this;
    }
    /**
     * setRGB方法的重写
     * @param rgb
     */
    setRGB2(rgb) {
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
    setHSL(h, s, l) {
        // h,s,l ranges are in 0.0 - 1.0
        h = MathUtils_1.MathUtils.euclideanModulo(h, 1);
        s = MathUtils_1.MathUtils.clamp(s, 0, 1);
        l = MathUtils_1.MathUtils.clamp(l, 0, 1);
        if (s === 0) {
            this.r = this.g = this.b = l;
        }
        else {
            let p = l <= 0.5 ? l * (1 + s) : l + s - (l * s);
            let q = (2 * l) - p;
            this.r = this.hue2rgb(q, p, h + 1 / 3);
            this.g = this.hue2rgb(q, p, h);
            this.b = this.hue2rgb(q, p, h - 1 / 3);
        }
        return this;
    }
    hue2rgb(p, q, t) {
        if (t < 0)
            t += 1;
        if (t > 1)
            t -= 1;
        if (t < 1 / 6)
            return p + (q - p) * 6 * t;
        if (t < 1 / 2)
            return q;
        if (t < 2 / 3)
            return p + (q - p) * 6 * (2 / 3 - t);
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
    clone() {
        return new Color(this.r, this.g, this.b);
    }
    /**
     * Copies given color.
     * @param color Color to copy.
     */
    copy(color) {
        this.r = color.r;
        this.g = color.g;
        this.b = color.b;
        return this;
    }
    /**
     * Copies given color making conversion from gamma to linear space.
     * @param color Color to copy.
     */
    copyGammaToLinear(color, gammaFactor = 2.0) {
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
    copyLinearToGamma(color, gammaFactor = 2.0) {
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
    convertGammaToLinear(gammaFactor) {
        this.copyGammaToLinear(this, gammaFactor);
        return this;
    }
    /**
     * Converts this color from linear to gamma space.
     */
    convertLinearToGamma(gammaFactor) {
        this.copyLinearToGamma(this, gammaFactor);
        return this;
    }
    /**
     * Copies given color making conversion from sRGB to linear space.
     * @param color Color to copy.
     */
    copySRGBToLinear(color) {
        this.r = this.SRGBToLinear(color.r);
        this.g = this.SRGBToLinear(color.g);
        this.b = this.SRGBToLinear(color.b);
        return this;
    }
    SRGBToLinear(c) {
        return (c < 0.04045) ? c * 0.0773993808 : Math.pow(c * 0.9478672986 + 0.0521327014, 2.4);
    }
    /**
     * Copies given color making conversion from linear to sRGB space.
     * @param color Color to copy.
     */
    copyLinearToSRGB(color) {
        this.r = this.LinearToSRGB(color.r);
        this.g = this.LinearToSRGB(color.g);
        this.b = this.LinearToSRGB(color.b);
        return this;
    }
    LinearToSRGB(c) {
        return (c < 0.0031308) ? c * 12.92 : 1.055 * (Math.pow(c, 0.41666)) - 0.055;
    }
    /**
     * Converts this color from sRGB to linear space.
     */
    convertSRGBToLinear() {
        this.copySRGBToLinear(this);
        return this;
    }
    /**
     * Converts this color from linear to sRGB space.
     */
    convertLinearToSRGB() {
        this.copyLinearToSRGB(this);
        return this;
    }
    /**
     * Returns the hexadecimal value of this color.
     */
    getHex() {
        return (this.r * 255) << 16 ^ (this.g * 255) << 8 ^ (this.b * 255) << 0;
    }
    /**
     * Returns the string formated hexadecimal value of this color.
     */
    getHexString() {
        return ('000000' + this.getHex().toString(16)).slice(-6);
    }
    getHSL() {
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
        }
        else {
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
        let target = { h: hue, s: saturation, l: lightness };
        return target;
    }
    /**
     * Returns the value of this color in CSS context style.
     * Example: rgb(r, g, b)
     */
    getStyle() {
        return 'rgb(' + ((this.r * 255) | 0) + ',' + ((this.g * 255) | 0) + ',' + ((this.b * 255) | 0) + ')';
    }
    offsetHSL(h, s, l) {
        let hsl = this.getHSL();
        hsl.h += h;
        hsl.s += s;
        hsl.l += l;
        this.setHSL(hsl.h, hsl.s, hsl.l);
        return this;
    }
    add(color) {
        this.r += color.r;
        this.g += color.g;
        this.b += color.b;
        return this;
    }
    addColors(color1, color2) {
        this.r = color1.r + color2.r;
        this.g = color1.g + color2.g;
        this.b = color1.b + color2.b;
        return this;
    }
    addScalar(s) {
        this.r += s;
        this.g += s;
        this.b += s;
        return this;
    }
    sub(color) {
        this.r = Math.max(0, this.r - color.r);
        this.g = Math.max(0, this.g - color.g);
        this.b = Math.max(0, this.b - color.b);
        return this;
    }
    multiply(color) {
        this.r *= color.r;
        this.g *= color.g;
        this.b *= color.b;
        return this;
    }
    multiplyScalar(s) {
        this.r *= s;
        this.g *= s;
        this.b *= s;
        return this;
    }
    lerp(color, alpha) {
        this.r += (color.r - this.r) * alpha;
        this.g += (color.g - this.g) * alpha;
        this.b += (color.b - this.b) * alpha;
        return this;
    }
    lerpHSL(color, alpha) {
        let hslA = this.getHSL();
        let hslB = color.getHSL();
        let h = MathUtils_1.MathUtils.lerp(hslA.h, hslB.h, alpha);
        let s = MathUtils_1.MathUtils.lerp(hslA.s, hslB.s, alpha);
        let l = MathUtils_1.MathUtils.lerp(hslA.l, hslB.l, alpha);
        this.setHSL(h, s, l);
        return this;
    }
    equals(c) {
        return (c.r === this.r) && (c.g === this.g) && (c.b === this.b);
    }
    fromArray(array, offset = 0) {
        this.r = array[offset];
        this.g = array[offset + 1];
        this.b = array[offset + 2];
        return this;
    }
    toArray(array, offset = 0) {
        array[offset] = this.r;
        array[offset + 1] = this.g;
        array[offset + 2] = this.b;
        return array;
    }
}
exports.Color = Color;
//# sourceMappingURL=Color.js.map