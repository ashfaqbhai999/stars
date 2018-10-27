// Create a simple function to add two numbers
function add(a:number,b:number):number{
    let sum:number = a + b;
    return sum;
}
console.log(`Sum of a , b is : ${add(10,20)}`);

// Create the same add function with first number as 'any' type
function addAny(a:any,b:number):number{
    let sum = 0;
    if(typeof a === 'number'){
        sum = a + b;
    }
    else if(typeof a === 'string'){
        if(isNaN(parseFloat(a))){
            sum = b;
        }
        else{
            sum = parseFloat(a) + b;
        }
    }
    else{
        sum = b;
    }
    return sum;
}
console.log(`sum of 10 , 20 is : ${addAny(10,20)}`);
console.log(`sum of '10' , 20 is : ${addAny('10',20)}`);
console.log(`sum of 'abc' , 20 is : ${addAny('abc',20)}`);
console.log(`sum of true , 20 is : ${addAny(true,20)}`);
console.log(`sum of {} , 20 is : ${addAny({},20)}`);

// Function Overloading in TypeScript , findMax of 1 , 2 , 3 numbers
function findMax(a:number):number;
function findMax(a:number,b:number):number;
function findMax(a:number,b:number,c:number):number;
function findMax(a:number,b?:number,c?:number):number{
    // one parameter
    if(b === undefined && c === undefined){
        return a;
    }
    // two parameters
    else if(c === undefined){
        return Math.max(a,b);
    }
    // Three Parameters
    else {
        return Math.max(a, b , c);
    }
}
// console.log(`Max of a : ${findMax()}`); // NOT Possible
console.log(`Max of a : ${findMax(10)}`); // 10
console.log(`Max of a , b : ${findMax(10,20)}`); // 20
console.log(`Max of a , b , c : ${findMax(10,20,30)}`); // 30
// console.log(`Max of a , b , c , d : ${findMax(10,20,30,40)}`); // NOT Possible

