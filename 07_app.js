/*
---------------------------------------------------------------------------------
 5. Lambdas (Arrow Functions)
---------------------------------------------------------------------------------
A lambda expression is an anonymous function that you can use to create
delegates or expression tree types. By using lambda expressions,
you can write local functions that can be passed as arguments or
returned as the value of function calls

*/
// Normal No-args function , same Arrow Function
var greet = function () {
    return "Good Morning";
};
console.log("Normal : " + greet());
var greetArrow = function () { return "Good Morning"; };
console.log("Arrow : " + greetArrow());
// Normal function with Args and Arrow Function
var wish = function (name) {
    return "Hello " + name + " Good Morning";
};
console.log("Normal : " + wish('John'));
var wishArrow = function (name) { return "Hello " + name + " Good Morning"; };
console.log("Arrow : " + wishArrow('Williams'));
// Normal function to find the sum of two numbers with Arrow Function
var sum = function (a, b) {
    return a + b;
};
console.log("Normal : " + sum(10, 20));
var sumArrow = function (a, b) { return a + b; };
console.log("Arrow : " + sumArrow(10, 20));
// Create an array with the length of each element of an array
var movies = ['Baahubali', 'Dangal', 'Drushyam'];
var movieLength = movies.map(function (movie) {
    return movie.length;
});
console.log(movieLength);
// Arrow Function for the above example
var movieLengthArrow = movies.map(function (movie) { return movie.length; });
console.log(movieLengthArrow);
