"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const fs = __importStar(require("fs"));
let root = "./src/";
let excludeDirs = ["test"];
let fileExtFilter = ".ts";
let targetFilePath = "./index.ts";
class IndexGenerator {
    generate() {
        //遍历目录,找到所有ts文件
        let result = new Array();
        this.searchTsFilesInDir(root, result);
        fs.writeFileSync(targetFilePath, result.join(""));
        console.log("index.ts更新完毕,记得编译一下~");
    }
    searchTsFilesInDir(dir, result) {
        let dirs = fs_1.readdirSync(dir, { withFileTypes: true });
        for (let i = 0; i < dirs.length; i++) {
            let target = dirs[i];
            if (target.isDirectory()) {
                if (this.exclude(target.name)) {
                    //不检查排除的目录
                    return;
                }
                //目录 递归
                this.searchTsFilesInDir(dir + target.name + "/", result);
            }
            else if (target.isFile() && target.name.endsWith(fileExtFilter)) {
                //文件 收录
                result.push("export * from \"" + dir + target.name.substr(0, target.name.length - fileExtFilter.length) + "\";" + "\r\n");
            }
        }
    }
    /**
     * 排除标记
     * @param name
     */
    exclude(name) {
        for (let i = 0; i < excludeDirs.length; i++) {
            let ele = excludeDirs[i];
            if (ele === name) {
                return true;
            }
        }
        return false;
    }
}
exports.IndexGenerator = IndexGenerator;
new IndexGenerator().generate();
//# sourceMappingURL=IndexGenerator.js.map