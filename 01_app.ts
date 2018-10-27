// Hello World App
let greeting:string = "Good Morning";
console.log(greeting);
document.querySelector('#display').textContent = greeting;

// Variables Creation in TypeScript
function greet(name:string,age:number):string{
    let greeting = "Hello " + name + " You are " + age + " Years Old ";
    return greeting;
}
console.log(greet('John',40 ));


