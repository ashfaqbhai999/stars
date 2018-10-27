/*
---------------------------------------------------------------------------------
 6. Destructing
---------------------------------------------------------------------------------
This is one of the powerful feature in ES6, where in instead of adding a single value
to a variable from an array, we can do it all by once.

*/

// Usage of Destructing to assign each variable of an array to other vars
let emp_Array = ['John',40,'Manager'];

/*
let eName = emp_Array[0];
let eAge = emp_Array[1];
let eDesg = emp_Array[2];
*/

let [eName,eAge,eDesg] = emp_Array;
console.log(`Name : ${eName} Age : ${eAge} Desg : ${eDesg}`);

// Usage of Destructing to exchange the values of two vars
let a:number = 10;
let b:number = 20;
[a , b] = [b , a];
console.log(`a : ${a} b: ${b}`);

// Usage of Destructing to assign each variable of an Object to other vars
let student = {
    name : 'Rajan',
    age : 25,
    course : 'Engg'
};
/*
    let sName = student.name;
    let sAge = student.age;
    let sCourse = student.course;
*/
let {name:sName , age:sAge , course:sCourse} = student;
console.log(`Name : ${sName} Age : ${sAge} Course : ${sCourse}`);




