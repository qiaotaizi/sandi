export class ArrayUtils{

    /**
     * 返回参数数组的拷贝
     * @param source
     * @param offset
     */
    static copy<T>(source:Array<T>,offset:number=0){
        let result=new Array<T>();
        for(let i=offset;i<source.length;i++){
            result.push(source[i]);
        }
        return result;
    }
}