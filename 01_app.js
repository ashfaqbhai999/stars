// Hello World App
var greeting = "Good Morning";
console.log(greeting);
document.querySelector('#display').textContent = greeting;
// Variables Creation in TypeScript
function greet(name, age) {
    var greeting = "Hello " + name + " You are " + age + " Years Old ";
    return greeting;
}
console.log(greet('John', 40));
