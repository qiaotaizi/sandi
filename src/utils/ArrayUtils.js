"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArrayUtils {
    /**
     * 返回参数数组的拷贝
     * @param source
     * @param offset
     */
    static copy(source, offset = 0) {
        let result = new Array();
        for (let i = offset; i < source.length; i++) {
            result.push(source[i]);
        }
        return result;
    }
}
exports.ArrayUtils = ArrayUtils;
//# sourceMappingURL=ArrayUtils.js.map