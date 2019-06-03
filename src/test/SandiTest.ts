export class SandiTest {
    constructor(public name:string){

    }

    report():void{
        console.log(`I'm ${this.name}`);
    }
}