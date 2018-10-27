/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/

/*
Create en Employee Object and prepares a Template String using
String Concatenation and Template String.
 */

let employee = {
    name : 'John',
    age : 40,
    designation : 'Manager'
};

let strConcat:string = "<div style='background-color: orange'>" +
                            "<h3> Name : " + employee.name + "</h3>" +
                            "<h3> Age : " + employee.age + "</h3>" +
                            "<h3> Desg : " + employee.designation + "</h3>" +
                       "</div>";
document.querySelector('#container').innerHTML = strConcat;

let templateStr:string = `<div style="background-color: lightcoral">
                              <h3>Name : ${employee.name} </h3>
                              <h3>Age : ${employee.age}</h3>
                              <h3>Desg : ${employee.designation}</h3>
                          </div>`;
document.querySelector('#container').innerHTML = templateStr;