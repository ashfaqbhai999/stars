/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/
// Usage of Destructing to assign each variable of an array to other vars
var emp_Array = ['John', 40, 'Manager'];
/*
let eName = emp_Array[0];
let eAge = emp_Array[1];
let eDesg = emp_Array[2];
*/
var eName = emp_Array[0], eAge = emp_Array[1], eDesg = emp_Array[2];
console.log("Name : " + eName + " Age : " + eAge + " Desg : " + eDesg);
// Usage of Destructing to exchange the values of two vars
var a = 10;
var b = 20;
_a = [b, a], a = _a[0], b = _a[1];
console.log("a : " + a + " b: " + b);
// Usage of Destructing to assign each variable of an Object to other vars
var student = {
    name: 'Rajan',
    age: 25,
    course: 'Engg'
};
/*
    let sName = student.name;
    let sAge = student.age;
    let sCourse = student.course;
*/
var sName = student.name, sAge = student.age, sCourse = student.course;
console.log("Name : " + sName + " Age : " + sAge + " Course : " + sCourse);
var _a;
