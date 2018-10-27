/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/

// Create a function and provide few default parameters using ES6
function specification(name:string,year:number=2018):string{
    let spec = "Name : " + name + " Year of Mfg : " + year;
    return spec;
}

let carSpec = specification('Benz');
console.log(carSpec);





