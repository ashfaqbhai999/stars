interface Vehicle{
    specification():string;
}

class Car implements Vehicle{

    private _modelName:string;
    private _yearOfMfg:number;
    private _hasAirBags:boolean;

    constructor(modelName: string, yearOfMfg: number, hasAirBags: boolean) {
        this._modelName = modelName;
        this._yearOfMfg = yearOfMfg;
        this._hasAirBags = hasAirBags;
    }


    get modelName(): string {
        return this._modelName;
    }

    set modelName(value: string) {
        this._modelName = value;
    }

    get yearOfMfg(): number {
        return this._yearOfMfg;
    }

    set yearOfMfg(value: number) {
        this._yearOfMfg = value;
    }

    get hasAirBags(): boolean {
        return this._hasAirBags;
    }

    set hasAirBags(value: boolean) {
        this._hasAirBags = value;
    }

    public specification():string{

        let spec = `Model Name : ${this.modelName} 
                    Year Of Mfg : ${this.yearOfMfg}
                    Has Air Bags : ${this.hasAirBags}`;

        return spec;
    }
}

let car = new Car('Benz',2018,true);
let carSpec = car.specification();
console.log(carSpec);