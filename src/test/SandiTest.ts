import {MathUtils} from "../math/MathUtils";

for (let i = 0; i < 10; i++) {
    let uuidGen: string = MathUtils.generateUUID();
    console.log(uuidGen);
}

