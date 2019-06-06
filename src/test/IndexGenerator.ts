import {Dirent, openSync, readdirSync, writeFileSync} from "fs";
import * as fs from "fs";

let root: string = "./src/";

let excludeDirs: string[] = ["test"];

let fileExtFilter=".ts";

let targetFilePath="./index.ts";

export class IndexGenerator {

    generate(){
        //遍历目录,找到所有ts文件
        let result=new Array<string>();
        this.searchTsFilesInDir(root,result);

        fs.writeFileSync(targetFilePath,result.join(""));
        console.log("index.ts更新完毕,记得编译一下~");
    }

    private searchTsFilesInDir(dir: string,result:Array<string>):void {
        let dirs:Dirent[] = readdirSync(dir,{withFileTypes:true});
        for(let i=0;i<dirs.length;i++){
            let target=dirs[i];
            if(target.isDirectory()){
                if(this.exclude(target.name)){
                    //不检查排除的目录
                    return;
                }
                //目录 递归
                this.searchTsFilesInDir(dir+target.name+"/",result);
            }else if(target.isFile() && target.name.endsWith(fileExtFilter)){
                //文件 收录
                result.push("export * from \""+dir+target.name.substr(0,target.name.length-fileExtFilter.length)+"\";"+"\r\n");
            }
        }
    }

    /**
     * 排除标记
     * @param name
     */
    private exclude(name: string) {
        for(let i=0;i<excludeDirs.length;i++){
            let ele=excludeDirs[i];
            if(ele===name){
                return true;
            }
        }
        return false;
    }
}



new IndexGenerator().generate();
