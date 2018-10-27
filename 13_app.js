var Car = (function () {
    function Car(modelName, yearOfMfg, hasAirBags) {
        this._modelName = modelName;
        this._yearOfMfg = yearOfMfg;
        this._hasAirBags = hasAirBags;
    }
    Object.defineProperty(Car.prototype, "modelName", {
        get: function () {
            return this._modelName;
        },
        set: function (value) {
            this._modelName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "yearOfMfg", {
        get: function () {
            return this._yearOfMfg;
        },
        set: function (value) {
            this._yearOfMfg = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "hasAirBags", {
        get: function () {
            return this._hasAirBags;
        },
        set: function (value) {
            this._hasAirBags = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.specification = function () {
        var spec = "Model Name : " + this.modelName + " \n                    Year Of Mfg : " + this.yearOfMfg + "\n                    Has Air Bags : " + this.hasAirBags;
        return spec;
    };
    return Car;
}());
var car = new Car('Benz', 2018, true);
var carSpec = car.specification();
console.log(carSpec);
